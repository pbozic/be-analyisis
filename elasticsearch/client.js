const dotenv = require('dotenv');
dotenv.config();
const { Client } = require('@elastic/elasticsearch');
console.log({
  node: process.env.ELASTICSEARCH_HOSTS,
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD
  },
})
const esClient = new Client({
    node: process.env.ELASTICSEARCH_HOSTS,
    auth: {
      username: process.env.ELASTIC_USERNAME,
      password: process.env.ELASTIC_PASSWORD
    },
  });

  module.exports = esClient;