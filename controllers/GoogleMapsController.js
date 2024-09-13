require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');
const apiKey = process.env.GOOGLE_API_KEY;
const client = new Client({});


/**
 * GET /google_maps/geocode_address
 * @tag GoogleMaps
 * @summary Fetches the geocode information for a given address
 * @description Retrieves the latitude and longitude coordinates for the provided address using the Google Maps Geocoding API.
 * @operationId getGeocode
 * @queryParam {string} address - The address to geocode
 * @response 200 - Geocode fetched successfully
 * @responseContent {object} 200.application/json - The geocode details including latitude and longitude
 * @response 400 - Address is required
 * @response 404 - Location not found
 * @response 500 - Failed to fetch geocode
 */
async function geocodeAddress(req, res) {
	const { address } = req.body;

	if (!address) {
		return res.status(400).json({ error: 'Address is required' });
	}

	try {
		const response = await client.geocode({
			params: {
				address: address,
				key: apiKey,
			},
		});
		const location = response.data.results[0]?.geometry.location;
		const formattedAddress = response.data.results[0]?.formatted_address;
		if (location) {
			const addressData = {
				address: formattedAddress,
				coordinates: {
					latitude: location.lat,
					longitude: location.lng,
				},
			};

			return res.status(200).json({ addressData });
		} else {
			return res.status(400).json({ error: 'Location not found' });
		}
	} catch (error) {
		console.error('Error fetching geocode:', error.response?.data || error.message || error);
		return res.status(500).json({ error: 'Failed to fetch geocode' });
	}
}

/**
 * GET /google_maps/autocomplete
 * @tag GoogleMaps
 * @summary Fetches address predictions based on user input
 * @description Retrieves place predictions for a given input text using the Google Maps Places Autocomplete API, filtering results based on a specified location, radius, and country.
 * @operationId getPlacePredictions
 * @queryParam {string} inputText - The partial address input from the user
 * @response 200 - Address predictions fetched successfully
 * @responseContent {object} 200.application/json - The list of address predictions with modified descriptions
 * @response 400 - Invalid input or input too short
 * @response 500 - Failed to fetch predictions
 */
async function getPlacePredictions(req, res) {
	const { inputText } = req.query;

	try {
		const location = '46.056946,14.505751'; // Ljubljana, Slovenia
		const radius = 150000; // 150km in meters
		const country = 'SI'; // Country code for Slovenia

		const response = await fetch(
			`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(inputText)}&location=${location}&radius=${radius}&components=country:${country}&key=${process.env.GOOGLE_API_KEY}&language=sl`
		);
		const data = await response.json();

		if (!response.ok) {
			console.error('Failed to fetch data:', response.status, response.statusText);
			return res.status(500).json({ error: 'Failed to fetch predictions' });
		}

		if (data.status === "OK") {
			const predictions = data.predictions.map(prediction => {
				const addressComponents = prediction.description.split(', ');
				addressComponents.pop(); // remove the last element (country)

				let cityWithPostalCode = addressComponents.pop(); // remove the city with postal code
				let city = cityWithPostalCode.replace(/\d+/g, '').trim(); // remove the postal code
				addressComponents.push(city); // add back the city without postal code
				const addressWithoutCountryAndPostalCode = addressComponents.join(', ');

				return {
					...prediction,
					description: addressWithoutCountryAndPostalCode
				};
			});
			return res.status(200).json({ predictions });
		} else {
			return res.status(500).json({ error: 'No predictions found' });
		}
	} catch (error) {
		console.error('Error fetching autocomplete predictions:', error.message || error);
		return res.status(500).json({ error: 'Failed to fetch predictions' });
	}
}



module.exports = {
	geocodeAddress,
	getPlacePredictions
};
