import { config } from 'dotenv';
import * as googleMapsServicesJs from '@googlemaps/google-maps-services-js';
import { v2 } from '@googlemaps/routing';

config();

const { Client } = googleMapsServicesJs;
const { RoutesClient } = { v2 }.v2;

export type LatLng = { latitude: number; longitude: number };

const apiKey = process.env.GOOGLE_API_KEY as string | undefined;

const routingClient = new RoutesClient({
	apiKey,
});

const client = new Client({});

/**
 * Computes distance and duration between two coordinates using Distance Matrix API.
 * @param {{latitude:number, longitude:number}} origin - Starting point.
 * @param {{latitude:number, longitude:number}} destination - Ending point.
 * @param {string} [mode] - Travel mode (driving, walking, bicycling, transit).
 * @param {Date} [departureTime] - Optional departure time for traffic-aware calculations.
 * @param {string} [traffic_model] - Traffic model (best_guess, pessimistic, optimistic).
 * @returns {Promise<{result: object, distance: string, distanceM: number, durationS: number, duration: string}>}
 */
async function distanceBetweenTwoPoints(
	origin: LatLng,
	destination: LatLng,
	mode: 'driving' | 'walking' | 'bicycling' | 'transit' = 'driving',
	departureTime?: Date,
	traffic_model?: 'best_guess' | 'pessimistic' | 'optimistic'
): Promise<{
	result: object;
	distance: string;
	distanceM: number;
	durationS: number;
	duration: string;
}> {
	const params: any = {
		origins: [{ lat: origin.latitude, lng: origin.longitude }],
		destinations: [{ lat: destination.latitude, lng: destination.longitude }],
		key: apiKey,
		mode,
	};
	if (departureTime) params.departure_time = departureTime.getTime();
	if (traffic_model) params.traffic_model = traffic_model;

	const response = await client.distancematrix({ params });
	const row = response.data?.rows?.[0];
	const elem = row?.elements?.[0];
	if (!elem || !elem.distance || !elem.duration) throw new Error('Invalid distance matrix response');
	return {
		result: response.data as object,
		distance: elem.distance.text,
		distanceM: elem.distance.value,
		durationS: elem.duration.value,
		duration: elem.duration.text,
	};
}
/**
 * Uses Routes API v2 to compute route distance, duration, polyline and steps.
 * @param {{latitude:number, longitude:number}[]} points - Ordered list of coordinates (>=2).
 * @param {string} [mode='driving'] - Travel mode (driving, walking, bicycling, transit).
 * @returns {Promise<{result: object, polyline: string, totalDistanceM: number, totalDistanceKM: string, totalDurationS: number, totalDurationM: string, steps: object[]}>}
 */
async function getDistanceForRouteV2(
	points: LatLng[],
	mode: 'driving' | 'walking' | 'bicycling' | 'transit' = 'driving'
): Promise<{
	result: object;
	polyline: string;
	totalDistanceM: number;
	totalDistanceKM: string;
	totalDurationS: number;
	totalDurationM: string;
	steps: object[];
}> {
	if (points.length < 2) throw new Error('You need at least 2 points: origin and destination.');
	const buildLatLng = ({ latitude, longitude }: LatLng) => ({ location: { latLng: { latitude, longitude } } });

	let apiMode: 'DRIVE' | 'WALK' | 'BICYCLE' | 'TRANSIT' = 'DRIVE';
	if (mode === 'walking') apiMode = 'WALK';
	else if (mode === 'bicycling') apiMode = 'BICYCLE';
	else if (mode === 'transit') apiMode = 'TRANSIT';

	const origin = buildLatLng(points[0]!);
	const destination = buildLatLng(points[points.length - 1]!);
	const waypoints = points.length > 2 ? points.slice(1, -1).map((p) => buildLatLng(p!)) : [];

	const request: any = {
		origin,
		destination,
		travelMode: apiMode,
		routingPreference: 'TRAFFIC_UNAWARE',
		computeAlternativeRoutes: false,
		units: 'METRIC',
		routeModifiers: { avoidTolls: false, avoidHighways: false, avoidFerries: false },
		languageCode: 'en-US',
		regionCode: 'SI',
		waypoints,
	};

	const [response] = await routingClient.computeRoutes(request, {
		otherArgs: {
			headers: {
				'X-Goog-FieldMask':
					'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline,routes.legs,routes.legs.steps',
			},
		},
	});
	const route = response.routes?.[0];
	if (!route || !route.legs || !route.legs.length) throw new Error('No route found');
	const legs: any[] = route.legs;
	const totalDistanceM = legs.reduce((sum: number, leg: any) => sum + (leg.distanceMeters || 0), 0);
	const totalDurationS = legs.reduce((sum: number, leg: any) => sum + (leg.duration?.seconds || 0), 0);
	return {
		result: route as object,
		polyline: route.polyline?.encodedPolyline || '',
		totalDistanceM,
		totalDistanceKM: (totalDistanceM / 1000).toFixed(2) + ' km',
		totalDurationS,
		totalDurationM: Math.round(totalDurationS / 60) + ' min',
		steps: legs.flatMap((leg: any) => leg.steps || []) as object[],
	};
}
/**
 * Uses Directions API to compute aggregate distance/duration across route legs.
 * @param {{latitude:number, longitude:number}[]} points - Ordered coordinates (>=2).
 * @param {string} [mode='driving'] - Travel mode.
 * @returns {Promise<{result: object, polyline: (string|null), totalDistanceM: number, totalDistanceKM: number, totalDurationS: number, totalDurationM: number, steps: object[]}>}
 */
async function getDistanceForRoute(
	points: LatLng[],
	mode: 'driving' | 'walking' | 'bicycling' | 'transit' = 'driving'
): Promise<{
	result: object;
	polyline: string | null;
	totalDistanceM: number;
	totalDistanceKM: number;
	totalDurationS: number;
	totalDurationM: number;
	steps: object[];
}> {
	if (!Array.isArray(points) || points.length < 2)
		throw new Error('You need at least 2 points: origin and destination.');
	const originPoint = points[0]!;
	const destPoint = points[points.length - 1]!;
	const origin = `${originPoint.latitude},${originPoint.longitude}`;
	const destination = `${destPoint.latitude},${destPoint.longitude}`;
	const waypoints = points.length > 2 ? points.slice(1, -1).map((p) => `${p!.latitude},${p!.longitude}`) : undefined;
	const response = await client.directions({
		params: {
			origin,
			destination,
			mode: mode as any, // cast due to upstream type narrowing
			key: apiKey || '',
			...(waypoints ? { waypoints } : {}),
		},
	});
	const route = (response.data as any).routes?.[0];
	const legs = route?.legs as any[] | undefined;
	if (!route || !legs || !legs.length) throw new Error('No route found');
	const totalDistanceM = legs.reduce((acc, leg) => acc + (leg.distance?.value || 0), 0);
	const totalDurationS = legs.reduce((acc, leg) => acc + (leg.duration?.value || 0), 0);
	return {
		result: response.data as object,
		polyline: route.overview_polyline?.points || null,
		totalDistanceM,
		totalDistanceKM: Math.round((totalDistanceM / 1000) * 100) / 100,
		totalDurationS,
		totalDurationM: Math.round(totalDurationS / 60),
		steps: legs.flatMap((leg) => leg.steps || []) as object[],
	};
}
/**
 * Reverse geocodes coordinates to a formatted address string.
 * @param {number} lat - Latitude.
 * @param {number} lng - Longitude.
 * @returns {Promise<string>} Formatted address.
 */
async function addressFromCoordinates(lat: number, lng: number): Promise<string> {
	if (!lat || !lng) throw Error('Latitude and longitude are required');
	const response = await client.reverseGeocode({ params: { latlng: `${lat},${lng}`, key: apiKey || '' } });
	const address = response.data.results[0]?.formatted_address as string | undefined;
	if (!address) throw Error('No address in gmaps response');
	return address;
}

export { apiKey, client, distanceBetweenTwoPoints, addressFromCoordinates, getDistanceForRoute, getDistanceForRouteV2 };
export default {
	apiKey,
	client,
	distanceBetweenTwoPoints,
	addressFromCoordinates,
	getDistanceForRoute,
	getDistanceForRouteV2,
};
