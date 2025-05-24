require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');
const { RoutesClient } = require('@googlemaps/routing').v2;

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = process.env.GOOGLE_API_KEY;
const routingClient = new RoutesClient({
	apiKey,
});
const client = new Client({});

async function distanceBetweenTwoPoints(origin, destination, mode = 'driving', departureTime, traffic_model) {
	// console.log("origin", origin);
	const params = {
		origins: [{ lat: origin.latitude, lng: origin.longitude }],
		destinations: [{ lat: destination.latitude, lng: destination.longitude }],
		key: apiKey,
		mode,
	};

	if (departureTime) {
		params.departure_time = departureTime.getTime();
	}
	if (traffic_model) {
		params.traffic_model = traffic_model;
	}

	const response = await client.distancematrix({ params });

	const distance = response.data.rows[0].elements[0].distance.text;
	const duration = response.data.rows[0].elements[0].duration.text;

	return {
		result: response.data,
		distance,
		distanceM: response.data.rows[0].elements[0].distance.value,
		durationS: response.data.rows[0].elements[0].duration.value,
		duration,
	};
}
async function getDistanceForRouteV2(points, mode = 'driving') {
	if (points.length < 2) throw new Error('You need at least 2 points: origin and destination.');

	const buildLatLng = ({ latitude, longitude }) => ({
		location: { latLng: { latitude, longitude } },
	});
	let apiMode = 'DRIVE';
	if (mode === 'walking') {
		apiMode = 'WALK';
	} else if (mode === 'bicycling') {
		apiMode = 'BICYCLE';
	}
	if (mode === 'transit') {
		apiMode = 'TRANSIT';
	}
	if (mode === 'driving') {
		apiMode = 'DRIVE';
	}
	if (mode === 'cycling') {
		apiMode = 'BICYCLE';
	}
	const origin = buildLatLng(points[0]);
	const destination = buildLatLng(points[points.length - 1]);

	const waypoints = points.length > 2 ? points.slice(1, -1).map(buildLatLng) : [];

	const request = {
		origin,
		destination,
		travelMode: apiMode,
		routingPreference: 'TRAFFIC_UNAWARE',
		computeAlternativeRoutes: false,
		units: 'METRIC',
		routeModifiers: {
			avoidTolls: false,
			avoidHighways: false,
			avoidFerries: false,
		},
		languageCode: 'en-US',
		regionCode: 'SI',
		waypoints,
	};

	const [response] = await routingClient.computeRoutes(request, {
		// ✅ This is where the fieldMask goes
		otherArgs: {
			headers: {
				'X-Goog-FieldMask':
					'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline,routes.legs,routes.legs.steps',
			},
		},
	});
	const route = response.routes[0];

	if (!route || !route.legs.length) throw new Error('No route found');

	const totalDistanceM = route.legs.reduce((sum, leg) => sum + leg.distanceMeters, 0);
	const totalDurationS = route.legs.reduce((sum, leg) => sum + leg.duration.seconds, 0);

	return {
		result: route,
		polyline: route.polyline.encodedPolyline,
		totalDistanceM,
		totalDistanceKM: (totalDistanceM / 1000).toFixed(2) + ' km',
		totalDurationS,
		totalDurationM: Math.round(totalDurationS / 60) + ' min',
		steps: route.legs.flatMap((leg) => leg.steps),
	};
}
async function getDistanceForRoute(points, mode = 'driving') {
	if (points.length < 2) throw new Error('You need at least 2 points: origin and destination.');

	const origin = `${points[0].latitude},${points[0].longitude}`;
	const destination = `${points[points.length - 1].latitude},${points[points.length - 1].longitude}`;

	const waypoints =
		points.length > 2
			? points
					.slice(1, -1)
					.map((p) => `${p.latitude},${p.longitude}`)
					.join('|')
			: undefined;

	const params = {
		origin,
		destination,
		key: apiKey,
		mode,
	};

	if (waypoints) {
		params.waypoints = waypoints;
	}
	console.log('params', params);
	const response = await client.directions({ params });
	console.log('response', response);
	const route = response.data.routes[0];
	const legs = route.legs;

	const totalDistanceM = legs.reduce((acc, leg) => acc + leg.distance.value, 0);
	const totalDurationS = legs.reduce((acc, leg) => acc + leg.duration.value, 0);

	return {
		result: response.data,
		polyline: route.overview_polyline.points,
		totalDistanceM,
		totalDistanceKM: (totalDistanceM / 1000).toFixed(2) + ' km',
		totalDurationS,
		totalDurationM: Math.round(totalDurationS / 60) + ' min',
		steps: legs.flatMap((leg) => leg.steps),
	};
}
async function addressFromCoordinates(lat, lng) {
	if (!lat || !lng) {
		throw Error('Latitude and longitude are required');
	}

	const response = await client.reverseGeocode({
		params: {
			latlng: `${lat},${lng}`,
			key: apiKey,
		},
	});
	const address = response.data.results[0]?.formatted_address;
	if (address) {
		return address;
	} else {
		throw Error('No address in gmaps response');
	}
}

module.exports = {
	apiKey,
	client,
	distanceBetweenTwoPoints,
	addressFromCoordinates,
	getDistanceForRoute,
	getDistanceForRouteV2,
};
