const { getDistanceForRouteV2 } = require('./lib/gApis.js');

async function getDistanceForRoute() {
	try {
		const points = [
			{ latitude: 46.073184167980266, longitude: 14.471815270613476 }, // origin
			{ latitude: 46.0527405, longitude: 14.4720881 }, // waypoint
			{ latitude: 46.06816374090053, longitude: 14.473042935132982 }, // destination
		];
		const result = await getDistanceForRouteV2(points);
		console.log('Distance and duration:', result);
		return result;
	} catch (error) {
		console.error('Error getting distance for route:', error);
		throw error;
	}
}

getDistanceForRoute()
	.then((result) => {
		console.log('Route details:', result);
	})
	.catch((error) => {
		console.error('Failed to get route details:', error);
	});
