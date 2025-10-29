import moment from 'moment-timezone';

import prisma from '../prisma/prisma.js';
import { PRICE_SURGE_MULTIPLIERS } from './constants.js';
/**
 * Compute surge multiplier and reasons for a transfer trip based on external factors.
 * Currently considers weather data around the departure time and capps the multiplier.
 * @param {object[]} route - Array of locations with coordinates for the planned route.
 * @param {Date|string|number} departureTime - Planned departure time.
 * @param {object} [trafficData] - Placeholder for traffic-based surge inputs.
 * @param {object} [demandData] - Placeholder for demand-based surge inputs.
 * @returns {Promise<{multiplier:number,reasons:string[]|null}>} Final multiplier and contributing reasons.
 */
// eslint-disable-next-line no-unused-vars
async function getPriceSurgeDataForTransferTrip(route, departureTime, _trafficData, _demandData) {
	let settlementId = await prisma.settlements.checkIfAllPointsAreInSameSettlement(route);
	if (!settlementId) {
		return {
			multiplier: 1,
			reasons: null,
		};
	}
	let reasons = [];
	let weatherSurgeData = await getWeatherPriceSurgeData(settlementId, departureTime);
	if (weatherSurgeData.rainData) {
		reasons.push('RAIN');
	}
	let weatherMultiplier = weatherSurgeData.weatherSurgeMultiplier || 1;
	let trafficMultiplier = 1;
	let demandMultiplier = 1;
	//2025-05-06T11:37:00.000Z
	const finalSurge = weatherMultiplier * trafficMultiplier * demandMultiplier;
	return {
		multiplier: Math.max(Math.min(finalSurge, PRICE_SURGE_MULTIPLIERS.MAX), 1),
		reasons: reasons,
	};
}
/**
 * Retrieve weather-based surge data for a specific settlement and time window.
 * @param {string} settlementId - Settlement identifier.
 * @param {Date|string|number} departureTime - Reference time to look up weather data around.
 * @returns {Promise<{multiplier:number,rainData:null|{willRain:boolean,message:string,intensity:string}}>} Weather surge info.
 */
async function getWeatherPriceSurgeData(settlementId, departureTime) {
	const roundedEpoch = moment(departureTime).add(30, 'minutes').startOf('hour').unix();
	const weatherData = await prisma.weather_data.findFirst({
		where: {
			settlement_id: settlementId,
			time_epoch: {
				gte: roundedEpoch - 3600,
				lte: roundedEpoch + 3600,
			},
		},
		orderBy: {
			time_epoch: 'asc',
		},
	});
	if (!weatherData) {
		return {
			multiplier: 1,
			rainData: null,
		};
	}
	let rainData = getRainPrediction(weatherData);
	if (!rainData.willRain) {
		return {
			multiplier: 1,
			rainData: null,
		};
	}
	let weatherSurgeMultiplier = getSurgeMultiplier(rainData);
	return {
		multiplier: weatherSurgeMultiplier,
		rainData: {
			willRain: rainData.willRain,
			message: rainData.message,
			intensity: rainData.intensity,
		},
	};
}
/**
 * Derive rain prediction details from a weather_data record.
 * @param {object} weatherData - Prisma weather_data entity.
 * @returns {{willRain:boolean,message:string,intensity:'none'|'light'|'moderate'|'heavy'}} Rain prediction.
 */
function getRainPrediction(weatherData) {
	if (!weatherData || !weatherData.will_it_rain) {
		return {
			willRain: false,
			message: 'No rain expected',
			intensity: 'none',
		};
	}
	const mm = weatherData.precip_mm;
	let intensity = 'light';
	if (mm > 10) intensity = 'moderate';
	if (mm > 25) intensity = 'heavy';
	return {
		willRain: true,
		message: `Rain expected (${weatherData.chance_of_rain}% chance, ${mm}mm)`,
		intensity,
	};
}
/**
 * Calculate surge multiplier from rain data, scaling by chance and intensity.
 * @param {object} rainData - Output from getRainPrediction or similar.
 * @returns {number} Surge multiplier >= 1.
 */
function getSurgeMultiplier(rainData) {
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
	const exponent = Math.log(0.5) / Math.log((midpoint - start) / (end - start)); // ≈ 0.356
	const ramp = Math.pow(normalized, exponent); // curved ramp: 0 → 1
	const adjustedMultiplier = 1 + (baseMultiplier - 1) * ramp;
	return adjustedMultiplier;
}
export { getPriceSurgeDataForTransferTrip };
export default {
	getPriceSurgeDataForTransferTrip,
};
