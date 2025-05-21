// socket.js
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const jwt = require('jsonwebtoken');

const redis = require('./lib/redis');

const UserSockets = new Map();

let io;

const SocketStore = {
	async addSocket(userId, socket) {
		if (!userId || !socket?.id) return;
		UserSockets.set(userId, socket);
		await Promise.all([
			redis.sAdd(`user_sockets:${userId}`, socket.id),
			redis.set(`socket_user:${socket.id}`, userId),
		]);
	},

	async removeSocket(userId, socketId) {
		await Promise.all([redis.sRem(`user_sockets:${userId}`, socketId), redis.del(`socket_user:${socketId}`)]);
	},

	async addUserToRoom(userId, roomName) {
		const socketIds = await this.getUserSocketIds(userId);
		for (const socketId of socketIds) {
			const socket = io.sockets.sockets.get(socketId);
			if (socket) socket.join(roomName);
		}
		await redis.sAdd(`user_rooms:${userId}`, roomName);
		await redis.sAdd(`room_users:${roomName}`, userId);
	},

	async removeUserFromRoom(userId, roomName) {
		const socketIds = await this.getUserSocketIds(userId);
		for (const socketId of socketIds) {
			const socket = io.sockets.sockets.get(socketId);
			if (socket) socket.leave(roomName);
		}
		await redis.sRem(`user_rooms:${userId}`, roomName);
		await redis.sRem(`room_users:${roomName}`, userId);
	},

	async getUserSocketIds(userId) {
		return await redis.sMembers(`user_sockets:${userId}`);
	},

	async getUserIdBySocketId(socketId) {
		return await redis.get(`socket_user:${socketId}`);
	},

	async getRoomsForUser(userId) {
		return await redis.sMembers(`user_rooms:${userId}`);
	},

	async getUsersInRoom(roomName) {
		return await redis.sMembers(`room_users:${roomName}`);
	},

	async closeRoom(roomName) {
		const joinedUsers = await this.getUsersInRoom(roomName);
		await Promise.all(joinedUsers.map((userId) => this.removeUserFromRoom(userId, roomName).catch(() => {})));
		await redis.del(`room_users:${roomName}`);
	},
};

async function restoreUserSockets() {
	const keys = await redis.keys('user_sockets:*');
	for (const key of keys) {
		const userId = key.split(':')[1];
		const socketIds = await redis.sMembers(key);
		for (const socketId of socketIds) {
			const socket = io.sockets.sockets.get(socketId);
			if (socket) UserSockets.set(userId, socket);
		}
	}
}

function setupSocket(server) {
	io = new Server(server, {
		cors: {
			origin: '*',
		},
	});
	initRedisAdapter(io).catch(console.error);
	io.use((socket, next) => {
		const token = socket.handshake.auth.token || socket.handshake.headers['authorization']?.split(' ')[1];
		if (!token) return next(new Error('Authentication error'));

		jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, data) => {
			if (err) return next(new Error('Authentication error'));
			socket.user = data.user;
			const existingSocket = UserSockets.get(data.user.user_id);
			if (existingSocket) existingSocket.disconnect(true);
			UserSockets.set(data.user.user_id, socket);
			SocketStore.addSocket(data.user.user_id, socket);
			next();
		});
	});

	io.on('connection', async (socket) => {
		const userId = socket.user?.user_id;
		const rooms = await SocketStore.getRoomsForUser(userId);
		for (const room of rooms) {
			socket.join(room);
		}

		socket.on('disconnect', async (reason) => {
			UserSockets.delete(userId);
			await SocketStore.removeSocket(userId, socket.id);
		});

		socket.on('joinRoom', (roomName) => SocketStore.addUserToRoom(userId, roomName));
		socket.on('leaveRoom', (roomName) => SocketStore.removeUserFromRoom(userId, roomName));
	});
}

async function initRedisAdapter(io) {
	redis.connect();
	const subClient = redis.duplicate();
	await subClient.connect();

	io.adapter(createAdapter(redis, subClient));
	await restoreUserSockets();
}

module.exports = {
	setupSocket,
	io,
	UserSockets,
	SocketStore,
};
