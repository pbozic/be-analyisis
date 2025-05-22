// weatherClient.js
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const WEATHER_API_KEY = process.env.WEATHERAPI_API_KEY; // store in .env!
const BASE_URL = 'http://api.weatherapi.com/v1';

const weatherClient = {
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

module.exports = weatherClient;
