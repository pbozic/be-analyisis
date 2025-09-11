// sockets/index.js
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import jwt from 'jsonwebtoken';

import redis from './lib/redis.js';

/**
 * Cluster-safe Socket.IO setup with:
 * - Per-user rooms: "user:{userId}"
 * - Redis-backed indexes of socket<->user and persistent user<->rooms
 * - Helpers to broadcast to all sockets of a user: UserSockets.get(id).emit(...)
 * - Works across multiple node processes via @socket.io/redis-adapter
 */

const pubClient = redis; // main node-redis v4 client
const subClient = redis.duplicate(); // subscriber for adapter

// Mutable holder so we can export a proxy later
const io = {}; // { server?: Server }

/* ---------------------------------- Utils ---------------------------------- */
const userRoom = (id) => `user:${id}`;

/* ----------------------------- UserSockets API ----------------------------- */
/**
 * Per-user broadcaster facade keeping your old call sites:
 *   UserSockets.get(id).emit(event, payload)
 * Under the hood it uses Socket.IO rooms, not an in-memory Map of sockets.
 */
export const UserSockets = {
	/**
	 * Ensure the given socket (instance or id string) is joined to the per-user room.
	 * Works cluster-wide if a string id is provided (via socketsJoin).
	 * Fire-and-forget (no await required at call sites).
	 */
	set(userId, sockOrId) {
		const room = userRoom(userId);
		if (!io.server) return false;

		if (typeof sockOrId === 'string') {
			// Target the specific socket by its private room (= socket.id), cluster-wide.
			// No-op if that socket id does not exist on any node.
			io.server.in(sockOrId).socketsJoin(room);
			return true;
		}
		if (sockOrId && typeof sockOrId.join === 'function') {
			// Local Socket instance.
			sockOrId.join(room); // idempotent
			return true;
		}
		return false;
	},

	/** Broadcaster for a user's sockets */
	get(userId) {
		const room = userRoom(userId);
		const op = io.server.to(room);
		return {
			emit: (event, payload) => op.emit(event, payload),
			to: (roomName) => ({
				emit: (event, payload) => io.server.to(room).to(roomName).emit(event, payload),
			}),
			/** Disconnect all sockets of this user across the cluster. */
			disconnect: async (close = false) => {
				const sids = await io.server.in(room).allSockets();
				for (const sid of sids) {
					io.server.sockets.sockets.get(sid)?.disconnect(close);
				}
			},
		};
	},

	/** Convenience: emit without .get(...) */
	emit(userId, event, payload) {
		io.server.to(userRoom(userId)).emit(event, payload);
	},

	/** Count sockets of a user (cluster-aware) */
	async count(userId) {
		const sids = await io.server.in(userRoom(userId)).allSockets();
		return sids.size;
	},
};

/* ------------------------------- SocketStore ------------------------------- */
/**
 * Redis-backed indexes for:
 * - user_sockets:{userId} => Set(socketId)
 * - socket_user:{socketId} => userId
 * - user_rooms:{userId}    => Set(roomName)    (domain rooms to auto-rejoin)
 * - room_users:{roomName}  => Set(userId)
 */
export const SocketStore = {
	async addSocket(userId, socket) {
		if (!userId || !socket?.id) return;
		// Indexes
		await Promise.all([
			pubClient.sAdd(`user_sockets:${userId}`, socket.id),
			pubClient.set(`socket_user:${socket.id}`, userId),
		]);
		// Ensure per-user room (local, but fine because this is on the same node)
		UserSockets.set(userId, socket);
	},

	async removeSocket(userId, socketId) {
		await Promise.all([
			pubClient.sRem(`user_sockets:${userId}`, socketId),
			pubClient.del(`socket_user:${socketId}`),
		]);
		// No need to manually leave rooms: Socket.IO auto-removes rooms on disconnect.
	},

	/** Cluster-safe join: all of this user's sockets join roomName */
	async addUserToRoom(userId, roomName) {
		await io.server.in(userRoom(userId)).socketsJoin(roomName);
		await pubClient.sAdd(`user_rooms:${userId}`, roomName);
		await pubClient.sAdd(`room_users:${roomName}`, userId);
	},

	/** Cluster-safe leave: all of this user's sockets leave roomName */
	async removeUserFromRoom(userId, roomName) {
		await io.server.in(userRoom(userId)).socketsLeave(roomName);
		await Promise.all([
			pubClient.sRem(`user_rooms:${userId}`, roomName),
			pubClient.sRem(`room_users:${roomName}`, userId),
		]);
	},

	async getUserSocketIds(userId) {
		return pubClient.sMembers(`user_sockets:${userId}`);
	},

	async getUserIdBySocketId(socketId) {
		return pubClient.get(`socket_user:${socketId}`);
	},

	/** Domain rooms you want auto-rejoined on connect (not the per-user room). */
	async getRoomsForUser(userId) {
		return pubClient.sMembers(`user_rooms:${userId}`);
	},

	async getUsersInRoom(roomName) {
		return pubClient.sMembers(`room_users:${roomName}`);
	},

	/** Remove every user from a domain room and clear the index. */
	async closeRoom(roomName) {
		const joinedUsers = await this.getUsersInRoom(roomName);
		// cluster-wide leave
		await Promise.all(joinedUsers.map((userId) => io.server.in(userRoom(userId)).socketsLeave(roomName)));
		await pubClient.del(`room_users:${roomName}`);
	},
};

/* ---------------------------- Restore user rooms --------------------------- */
/**
 * After adapter init, rebuild per-user room memberships for any *existing* sockets
 * (on any node) using socketsJoin by socket id. This is safe and idempotent.
 */
async function restoreUserSockets() {
	const keys = await pubClient.keys('user_sockets:*');
	for (const key of keys) {
		const userId = key.split(':')[1];
		const socketIds = await pubClient.sMembers(key);
		const room = userRoom(userId);
		// socketsJoin targeted by socket id works cluster-wide
		for (const socketId of socketIds) {
			io.server.in(socketId).socketsJoin(room);
		}
	}
}

/* ----------------------------- Redis adapter init -------------------------- */
async function initRedisAdapter() {
	if (!subClient.isOpen) await subClient.connect();
	if (!pubClient.isOpen) await pubClient.connect();
	io.server.adapter(createAdapter(pubClient, subClient));
	await restoreUserSockets();
}

/* --------------------------- Socket.IO server init ------------------------- */
export async function setupSocket(httpServer) {
	io.server = new Server(httpServer, {
		cors: { origin: '*' },
		// (optional) path, transports, etc.
	});

	// Attach Redis adapter
	await initRedisAdapter();

	// Auth middleware (per socket)
	io.server.use(async (socket, next) => {
		try {
			const bearer = socket.handshake.auth?.token || socket.handshake.headers?.authorization;
			const token = bearer?.startsWith('Bearer ') ? bearer.slice(7) : bearer;
			if (!token) return next(new Error('Authentication error'));

			const data = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
			if (!data?.user?.user_id) return next(new Error('Authentication error'));
			socket.user = data.user;

			// Index and ensure per-user room
			UserSockets.set(data.user.user_id, socket);
			await SocketStore.addSocket(data.user.user_id, socket);

			next();
		} catch (err) {
			next(new Error('Authentication error'));
		}
	});

	// Connection handler
	io.server.on('connection', async (socket) => {
		const userId = socket.user?.user_id;
		if (!userId) return socket.disconnect(true);

		// Ensure per-user room (idempotent)
		UserSockets.set(userId, socket);

		// Re-join persisted domain rooms for this user
		const rooms = await SocketStore.getRoomsForUser(userId);
		for (const room of rooms) socket.join(room);

		socket.on('joinRoom', (roomName) => SocketStore.addUserToRoom(userId, roomName));
		socket.on('leaveRoom', (roomName) => SocketStore.removeUserFromRoom(userId, roomName));

		socket.on('disconnect', async () => {
			// Remove indexes; Socket.IO removes socket from all rooms automatically.
			await SocketStore.removeSocket(userId, socket.id);
		});
	});
}

/* ----------------------------- Default export ------------------------------ */
/**
 * Export a safe proxy so consumers can do:
 *   import sockets from './sockets/index.js'
 *   sockets.io.to('room').emit(...)
 */
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
