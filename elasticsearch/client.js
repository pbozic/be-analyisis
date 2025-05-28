import dotenv from 'dotenv';
import { Client } from '@elastic/elasticsearch';
dotenv.config();
const esClient = new Client({
	node: process.env.ELASTIC_URL,
	auth: {
		username: process.env.ELASTIC_USERNAME,
		password: process.env.ELASTIC_PASSWORD,
	},
});
export default esClient;
