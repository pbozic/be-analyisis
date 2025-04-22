// redisClient.js
const dotenv = require('dotenv');
dotenv.config();
const { createClient } = require('redis');

const redisClient = createClient({
  url: `redis://:${process.env.REDIS_PASSWORD}@redis:6379`
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    await redisClient.connect();
})();

module.exports = redisClient;