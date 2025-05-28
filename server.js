import http from 'http';

import app from './app.js';
import { setupSocket } from './socket.js';
const port = process.env.PORT || 3001;
const server = http.createServer(app);
setupSocket(server);
server.listen(port, '0.0.0.0', () => {
	console.log('server listening on: ' + port);
});
