// redisClient.js
const dotenv = require('dotenv');
dotenv.config();
const { createClient } = require('redis');

const host = process.env.REDIS_HOST || 'localhost';
const port = process.env.REDIS_PORT || '6379';
const password = process.env.REDIS_PASSWORD;

const redisUrl = `redis://:${password}@${host}:${port}`;

const redisClient = createClient({ url: redisUrl });

redisClient.on('error', (err) => console.error('❌ Redis error:', err));

module.exports = redisClient;
