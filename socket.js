import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import jwt from 'jsonwebtoken';

import redis from './lib/redis.js';

const subClient = redis.duplicate();
const io = {}; // mutable container
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
			const socket = io.server.sockets.sockets.get(socketId);
			if (socket) socket.join(roomName);
		}
		await redis.sAdd(`user_rooms:${userId}`, roomName);
		await redis.sAdd(`room_users:${roomName}`, userId);
	},
	async removeUserFromRoom(userId, roomName) {
		const socketIds = await this.getUserSocketIds(userId);
		for (const socketId of socketIds) {
			const socket = io.server.sockets.sockets.get(socketId);
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
			const socket = io.server.sockets.sockets.get(socketId);
			if (socket) UserSockets.set(userId, socket);
		}
	}
}
function setupSocket(server) {
	io.server = new Server(server, {
		cors: {
			origin: '*',
		},
	});
	io.server.use((socket, next) => {
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
		const userId = socket.user?.user_id; // or socket.data.userId (recommended)
		if (!userId) return socket.disconnect(true);
		socket.join(`user:${userId}`);
		// if you want multi-socket-per-user, store a Set instead of a single socket
		UserSockets.set(userId, socket); // this overwrites previous sockets

		const rooms = await SocketStore.getRoomsForUser(userId);
		for (const room of rooms) socket.join(room);

		socket.on('joinRoom', (roomName) => {
			socket.join(roomName); // join now
			return SocketStore.addUserToRoom(userId, roomName); // persist
		});

		socket.on('leaveRoom', (roomName) => {
			socket.leave(roomName);
			return SocketStore.removeUserFromRoom(userId, roomName);
		});

		socket.on('disconnect', async () => {
			const current = UserSockets.get(userId);
			if (current?.id === socket.id) UserSockets.delete(userId);
			await SocketStore.removeSocket(userId, socket.id);
		});
	});

	initRedisAdapter();
}
async function initRedisAdapter() {
	await subClient.connect();
	await redis.connect();
	io.server.adapter(createAdapter(redis, subClient));
	await restoreUserSockets();
}
const userRoom = (id) => `user:${id}`;
export const UserSockets = {
	// keeps your old call style: UserSockets.get(id).emit(...)
	get(userId) {
		const room = userRoom(userId);
		const op = io.to(room);
		return {
			emit: (event, payload) => op.emit(event, payload),
			// optional: union with another room (socket.io de-dupes)
			to: (roomName) => ({
				emit: (event, payload) => io.to(room).to(roomName).emit(event, payload),
			}),
		};
	},
	emit(userId, event, payload) {
		io.to(userRoom(userId)).emit(event, payload);
	},
	count(userId) {
		const sids = io.sockets.adapter.rooms.get(userRoom(userId));
		return sids ? sids.size : 0;
	},
};
export { setupSocket };
export { UserSockets };
export { SocketStore };
export default {
	setupSocket,
	io: new Proxy(io, {
		get(target, prop) {
			if (!target.server) throw new Error('Socket.IO not initialized');
			return target.server[prop];
		},
	}),
	UserSockets,
	SocketStore,
};
