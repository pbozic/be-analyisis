const { getDistanceForRoute } = require('./lib/gApis.js');

async function getDistanceForRoute1() {
	try {
		const points = [
			{ latitude: 46.07318416877476, longitude: 14.47181516089705 },
			{ latitude: 46.0527405, longitude: 14.4720881 },
			{ latitude: 46.0719731, longitude: 14.4728517 },
		];
		const result = await getDistanceForRoute(points);
		console.log('Distance and duration:', result);
		return result;
	} catch (error) {
		console.error('Error getting distance for route:', error);
		throw error;
	}
}

getDistanceForRoute1()
	.then((result) => {
		console.log('Route details:', result);
	})
	.catch((error) => {
		console.error('Failed to get route details:', error);
	});
