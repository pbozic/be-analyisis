const dotenv = require('dotenv');
dotenv.config();
const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({
	node: process.env.ELASTIC_URL,
	auth: {
		username: process.env.ELASTIC_USERNAME,
		password: process.env.ELASTIC_PASSWORD,
	},
});

module.exports = esClient;
