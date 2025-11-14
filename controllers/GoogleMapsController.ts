import { config } from 'dotenv';
import * as googleMapsServicesJs from '@googlemaps/google-maps-services-js';
import axios from 'axios';
import { Response } from 'express';

import { ValidatedRequest } from '../types/validatedRequest';
import { GeocodeRequest, PlacePrediction } from '../schemas/dto/GoogleMaps/googlemaps.dto';
config();
const { Client } = googleMapsServicesJs;
const apiKey = process.env.GOOGLE_API_KEY as string;
const client = new Client({});
/**
 * POST /google_maps/geocode_address
 * @tag GoogleMaps
 * @summary Fetches the geocode information for a given address
 * @description Retrieves the latitude and longitude coordinates for the provided address using the Google Maps Geocoding API.
 * @operationId getGeocode
 * @bodyContent {GeocodeRequest} application/json
 * @response 200 - Geocode fetched successfully
 * @responseContent {OrderLocation} 200.application/json - The geocode details including latitude and longitude
 * @response 400 - Address is required
 * @response 404 - Location not found
 * @response 500 - Failed to fetch geocode
 */
async function geocodeAddress(req: ValidatedRequest<GeocodeRequest>, res: Response): Promise<void> {
	const { address } = req.body;
	if (!address) {
		res.status(400).json({ error: 'Address is required' });
		return;
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
			res.status(200).json({ addressData });
		} else {
			res.status(400).json({ error: 'Location not found' });
		}
	} catch (error: unknown) {
		console.error('Error fetching geocode:', error instanceof Error ? error.message : error);
		res.status(500).json({ error: 'Failed to fetch geocode' });
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
 * @responseContent {AutocompleteResponse} 200.application/json - The list of address predictions with modified descriptions
 * @response 400 - Invalid input or input too short
 * @response 500 - Failed to fetch predictions
 */
async function getPlacePredictions(
	req: ValidatedRequest<never, never, { inputText: string }>,
	res: Response
): Promise<void> {
	const { inputText } = req.query;
	try {
		const location = '46.056946,14.505751'; // Ljubljana, Slovenia
		const radius = 150000; // 150km in meters
		const country = 'SI'; // Country code for Slovenia
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(inputText)}&location=${location}&radius=${radius}&components=country:${country}&key=${process.env.GOOGLE_API_KEY}&language=sl`
		);
		const data = response.data;
		console.log(data);
		if (response.status !== 200) {
			console.error('Failed to fetch data:', response.status, response.statusText);
			res.status(500).json({ error: 'Failed to fetch predictions' });
			return;
		}
		if (data.status === 'OK') {
			const predictions = data.predictions.map((prediction: PlacePrediction) => {
				const addressComponents = prediction.description.split(', ');
				addressComponents.pop(); // remove the last element (country)
				let cityWithPostalCode = addressComponents.pop(); // remove the city with postal code
				let city = cityWithPostalCode?.replace(/\d+/g, '').trim(); // remove the postal code
				addressComponents.push(city as string); // add back the city without postal code
				const addressWithoutCountryAndPostalCode = addressComponents.join(', ');
				return {
					...prediction,
					description: addressWithoutCountryAndPostalCode,
				};
			});
			res.status(200).json({ predictions });
		} else if (data.status === 'ZERO_RESULTS') {
			console.error('No predictions found:', data.status);
			res.status(200).json({ predictions: [] });
		} else {
			res.status(500).json({ error: 'No predictions found' });
		}
	} catch (error: unknown) {
		console.error('Error fetching autocomplete predictions:', error instanceof Error ? error.message : error);
		res.status(500).json({ error: 'Failed to fetch predictions' });
	}
}
export { geocodeAddress };
export { getPlacePredictions };
export default {
	geocodeAddress,
	getPlacePredictions,
};
