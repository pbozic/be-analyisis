const { Server } = require("socket.io");
const { server } = require("./server");
const UserSockets = new Map(); // Store user ID to socket mapping
const jwt = require("jsonwebtoken");

const io = new Server(
	server, 
	{
		cors: {
			origin: '*',
		}
	}
);

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
		console.socket("socket connected: ", data.user.user_id);
		next();
	});
});

io.on("connection", (socket) => {
	console.socket("a user connected");
	socket.on("test_rec", (msg) => {
		console.socket("message: " + msg);
		io.emit("chat message", msg);
	});
	socket.on("disconnect", (reason) => {
		UserSockets.delete(socket.user.user_id);
		console.socket(`user ${socket.user.user_id} disconnected, Reason: ${reason}`);
	});
	socket.on('joinRoom', (roomName) => {
		socket.join(roomName);
		console.socket(`Socket ${socket.id} for user ${socket.user.user_id} joined room ${roomName}`);
	});
	socket.on('leaveRoom', (roomName) => {
		socket.leave(roomName);
		console.socket(`Socket ${socket.id} for user ${socket.user.user_id} left room ${roomName}`);
	});

	socket.onAnyOutgoing((eventName) => {
		console.info("\x1b[35mSocket emitted event:", eventName,"\x1b[0m")
	});

	socket.on('error', (err) => {
		console.error(`Socket ${socket.id} for user ${socket.user.user_id} encountered error:`, err);
	});
});


module.exports = {
	io,
	UserSockets
};