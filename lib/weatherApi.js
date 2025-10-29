import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const WEATHER_API_KEY = process.env.WEATHERAPI_API_KEY; // store in .env!
const BASE_URL = 'http://api.weatherapi.com/v1';
const weatherClient = {
	/**
	 * Get weather forecast data for a coordinate.
	 *
	 * @param {number|string} lat - Latitude.
	 * @param {number|string} lon - Longitude.
	 * @param {number} [days=1] - Number of days to forecast.
	 * @returns {Promise<object>} Forecast payload from WeatherAPI.
	 */
	async getForecast(lat, lon, days = 1) {
		const url = `${BASE_URL}/forecast.json`;
		const params = {
			key: WEATHER_API_KEY,
			q: `${lat},${lon}`,
			days,
			aqi: 'no',
			alerts: 'no',
		};
		const response = await axios.get(url, { params });
		return response.data;
	},
	/**
	 * Get current weather for a coordinate.
	 *
	 * @param {number|string} lat - Latitude.
	 * @param {number|string} lon - Longitude.
	 * @returns {Promise<object>} Current weather payload from WeatherAPI.
	 */
	async getCurrent(lat, lon) {
		const url = `${BASE_URL}/current.json`;
		const params = {
			key: WEATHER_API_KEY,
			q: `${lat},${lon}`,
		};
		const response = await axios.get(url, { params });
		return response.data;
	},
};
export default weatherClient;
