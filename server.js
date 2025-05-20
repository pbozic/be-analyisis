// server.js
const http = require('http');

const app = require('./app');
const { setupSocket } = require('./socket');

const port = process.env.PORT || 3001;
const server = http.createServer(app);

setupSocket(server);

server.listen(port, '0.0.0.0', () => {
	console.log('server listening on: ' + port);
});
