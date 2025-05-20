// socket.js
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const jwt = require('jsonwebtoken');

const redis = require('./lib/redis');

const UserSockets = new Map();
const subClient = redis.duplicate();
let io;

function setupSocket(server) {
	io = new Server(server, {
		cors: {
			origin: '*',
		},
	});

	initRedisAdapter();

	io.use((socket, next) => {
		let token = socket.handshake.auth.token || socket.handshake.headers['authorization']?.split(' ')[1];

		if (!token) return next(new Error('Authentication error'));

		jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, data) => {
			if (err) return next(new Error('Authentication error'));
			socket.user = data.user;
			UserSockets.set(data.user.user_id, socket);
			next();
		});
	});

	io.on('connection', (socket) => {
		const userId = socket.user?.user_id;
		if (userId) {
			console.log('Socket connected:', userId);

			socket.on('disconnect', () => {
				UserSockets.delete(userId);
				console.log('Socket disconnected:', userId);
			});
		}
	});
}

async function initRedisAdapter() {
	await subClient.connect();
	await redis.connect();
	io.adapter(createAdapter(redis, subClient));
}

module.exports = {
	setupSocket,
	io: () => io,
	UserSockets,
};
