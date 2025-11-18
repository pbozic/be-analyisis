import moment from 'moment-timezone';

import prisma from '../prisma/prisma.js';
import { PRICE_SURGE_MULTIPLIERS } from './constants.js';
import { TaxiLocation } from '../schemas/dto/Taxi/taxiorder.dto.js';

type RainIntensity = 'none' | 'light' | 'moderate' | 'heavy';
type RainPrediction = {
	willRain: boolean;
	message: string;
	intensity: RainIntensity;
	chance_of_rain?: number;
};

type WeatherDataRow = {
	settlement_id?: string;
	time_epoch?: number;
	will_it_rain?: boolean | number;
	precip_mm?: number;
	chance_of_rain?: number;
};

export type SurgeResult = { multiplier: number; reasons: string[] | null };
/**
 * Compute surge multiplier and reasons for a transfer trip based on external factors.
 * Currently considers weather data around the departure time and capps the multiplier.
 * @param {object[]} route - Array of locations with coordinates for the planned route.
 * @param {Date|string|number} departureTime - Planned departure time.
 * @param {object} [trafficData] - Placeholder for traffic-based surge inputs.
 * @param {object} [demandData] - Placeholder for demand-based surge inputs.
 * @returns {Promise<{multiplier:number,reasons:string[]|null}>} Final multiplier and contributing reasons.
 */
export async function getPriceSurgeDataForTransferTrip(
	route: TaxiLocation[],
	departureTime: Date | string | number,
	// eslint-disable-next-line no-unused-vars
	_trafficData?: object,
	// eslint-disable-next-line no-unused-vars
	_demandData?: object
): Promise<SurgeResult> {
	const settlementId = (await prisma.settlements.checkIfAllPointsAreInSameSettlement(route)) as string | null;
	if (!settlementId) {
		return { multiplier: 1, reasons: null };
	}

	const reasons: string[] = [];
	const weatherSurgeData = await getWeatherPriceSurgeData(settlementId, departureTime);
	if (weatherSurgeData.rainData) {
		reasons.push('RAIN');
	}

	const weatherMultiplier = weatherSurgeData.multiplier || 1;
	const trafficMultiplier = 1;
	const demandMultiplier = 1;
	const finalSurge = weatherMultiplier * trafficMultiplier * demandMultiplier;
	return {
		multiplier: Math.max(Math.min(finalSurge, PRICE_SURGE_MULTIPLIERS.MAX), 1),
		reasons,
	};
}
/**
 * Retrieve weather-based surge data for a specific settlement and time window.
 * @param {string} settlementId - Settlement identifier.
 * @param {Date|string|number} departureTime - Reference time to look up weather data around.
 * @returns {Promise<{multiplier:number,rainData:null|{willRain:boolean,message:string,intensity:string}}>} Weather surge info.
 */
export async function getWeatherPriceSurgeData(
	settlementId: string,
	departureTime: Date | string | number
): Promise<{ multiplier: number; rainData: null | RainPrediction }> {
	const roundedEpoch = moment(departureTime).add(30, 'minutes').startOf('hour').unix();
	const weatherData = (await prisma.weather_data.findFirst({
		where: {
			settlement_id: settlementId,
			time_epoch: {
				gte: roundedEpoch - 3600,
				lte: roundedEpoch + 3600,
			},
		},
		orderBy: { time_epoch: 'asc' },
	})) as WeatherDataRow | null;

	if (!weatherData) {
		return { multiplier: 1, rainData: null };
	}

	const rainData = getRainPrediction(weatherData);
	if (!rainData.willRain) {
		return { multiplier: 1, rainData: null };
	}

	const weatherSurgeMultiplier = getSurgeMultiplier(rainData);
	return { multiplier: weatherSurgeMultiplier, rainData };
}
/**
 * Derive rain prediction details from a weather_data record.
 * @param {object} weatherData - Prisma weather_data entity.
 * @returns {{willRain:boolean,message:string,intensity:'none'|'light'|'moderate'|'heavy'}} Rain prediction.
 */
export function getRainPrediction(weatherData: WeatherDataRow | null): RainPrediction {
	if (!weatherData || !weatherData.will_it_rain) {
		return { willRain: false, message: 'No rain expected', intensity: 'none' };
	}
	const mm = Number(weatherData.precip_mm ?? 0);
	const chance = Number(weatherData.chance_of_rain ?? 0);
	let intensity: RainIntensity = 'light';
	if (mm > 10) intensity = 'moderate';
	if (mm > 25) intensity = 'heavy';
	return {
		willRain: true,
		message: `Rain expected (${chance}% chance, ${mm}mm)`,
		intensity,
		chance_of_rain: chance,
	};
}
/**
 * Calculate surge multiplier from rain data, scaling by chance and intensity.
 * @param {object} rainData - Output from getRainPrediction or similar.
 * @returns {number} Surge multiplier >= 1.
 */
export function getSurgeMultiplier(rainData: RainPrediction): number {
	const chance = rainData.chance_of_rain ?? 0;
	const intensity = rainData.intensity ?? 'none';
	let baseMultiplier = 1;
	switch (intensity) {
		case 'light':
			baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.LIGHT;
			break;
		case 'moderate':
			baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.MODERATE;
			break;
		case 'heavy':
			baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.HEAVY;
			break;
		default:
			baseMultiplier = 1.0;
	}

	if (chance < 40) {
		return 1.0;
	}
	const start = 40;
	const end = 100;
	const midpoint = 65;
	const normalized = (chance - start) / (end - start); // 0 at 40%, 1 at 100%
	const exponent = Math.log(0.5) / Math.log((midpoint - start) / (end - start));
	const ramp = Math.pow(normalized, exponent);
	const adjustedMultiplier = 1 + (baseMultiplier - 1) * ramp;
	return adjustedMultiplier;
}

export default {
	getPriceSurgeDataForTransferTrip,
};
