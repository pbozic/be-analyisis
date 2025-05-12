const { Server } = require("socket.io");
const { server } = require("./server");
const redis = require("./lib/redis");
const { createAdapter } = require('@socket.io/redis-adapter');
const UserSockets = new Map(); // Store user ID to socket mapping
const jwt = require("jsonwebtoken");
const subClient = redis.duplicate();

const io = new Server(
	server, 
	{
		cors: {
			origin: '*',
		}
	}
);

async function initRedis() {
	await subClient.connect();
	
	io.adapter(createAdapter(redis, subClient));
	await restoreUserSockets(io);
}
initRedis().catch(console.error);

io.use((socket, next) => {
	let token = socket.handshake.auth.token || (socket.handshake.headers["authorization"] && socket.handshake.headers["authorization"].split(" ")[1]);
	
	if (!token) return next(new Error("Authentication error"));
	jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, data) => {
		if (err) return next(new Error("Authentication error"));
		socket.user = data.user;
		const existingSocket = UserSockets.get(data.user.user_id);
		if (existingSocket) {
			// Disconnect the old socket
			existingSocket.disconnect(true);
		}
		UserSockets.set(data.user.user_id, socket);
		SocketStore.addSocket(data.user.user_id, socket);
		console.socket("socket connected: ", data.user.user_id);
		next();
	});
});

io.on("connection", async (socket) => {
	console.socket("a user connected");
	const rooms = await SocketStore.getRoomsForUser(socket.user.user_id);
	for (const room of rooms) {
		socket.join(room);
		console.socket(`Rejoined ${room} for user ${socket.user.user_id}`);
	}

	socket.on("test_rec", (msg) => {
		console.socket("message: " + msg);
		io.emit("chat message", msg);
	});
	socket.on("disconnect", async (reason) => {
		UserSockets.delete(socket.user.user_id);
		await SocketStore.removeSocket(socket.user.user_id, socket.id);
		console.socket(`user ${socket.user.user_id} disconnected, Reason: ${reason}`);
	});
	socket.on('joinRoom', async (roomName) => {
		await SocketStore.addUserToRoom(socket.user.user_id, roomName);
		console.socket(`Socket ${socket.id} for user ${socket.user.user_id} joined room ${roomName}`);
	});
	socket.on('leaveRoom', async (roomName) => {
		await SocketStore.removeUserFromRoom(socket.user.user_id, roomName);
		console.socket(`Socket ${socket.id} for user ${socket.user.user_id} left room ${roomName}`);
	});

	socket.onAnyOutgoing((eventName) => {
		console.info("\x1b[35mSocket emitted event:", eventName,"\x1b[0m")
	});

	socket.on('error', (err) => {
		console.error(`Socket ${socket.id} for user ${socket.user.user_id} encountered error:`, err);
	});
});


const SocketStore = {
  async addSocket(userId, socket) {
    UserSockets.set(userId, socket);
    await redis.sAdd(`user_sockets:${userId}`, socket.id);
    await redis.set(`socket_user:${socket.id}`, userId);
  },

  async removeSocket(userId, socketId) {
    await redis.sRem(`user_sockets:${userId}`, socketId);
    await redis.del(`socket_user:${socketId}`);
  },

  async addUserToRoom(userId, roomName) {
	const socketIds = await this.getUserSocketIds(userId);
	for (const socketId of socketIds) {
	  const socket = io.sockets.sockets.get(socketId);
	  if (socket) {
		socket.join(roomName);
	  }
	}
  
	await redis.sAdd(`user_rooms:${userId}`, roomName);
	await redis.sAdd(`room_users:${roomName}`, userId);
  },

  async removeUserFromRoom(userId, roomName) {
	// Get all socket IDs for the user
	const socketIds = await this.getUserSocketIds(userId);
  
	// Leave the room with each socket
	for (const socketId of socketIds) {
	  const socket = io.sockets.sockets.get(socketId);
	  if (socket) {
		socket.leave(roomName);
	  }
	}
  
	// Remove from Redis
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
		try {
			const joinedUsers = await this.getUsersInRoom(roomName);
			await Promise.all(joinedUsers.map(userId =>
				this.removeUserFromRoom(userId, roomName).catch(err => {
					console.error(`Failed to remove user ${userId} from room ${roomName}:`, err);
				})
			));
			await redis.del(`room_users:${roomName}`);

		} catch (err) {
			console.error(`Failed to close room ${roomName}:`, err);
		}
	}


};
async function restoreUserSockets(io) {
	const keys = await redis.keys("user_sockets:*");
  
	for (const key of keys) {
	  const userId = key.split(":")[1];
	  const socketIds = await redis.sMembers(key);
  
	  for (const socketId of socketIds) {
		const socket = io.sockets.sockets.get(socketId);
		if (socket) {
		  UserSockets.set(userId, socket);
		  console.log(`Rehydrated socket ${socketId} for user ${userId}`);
		}
	  }
	}
  }
module.exports = {
	io,
	UserSockets,
	SocketStore
};