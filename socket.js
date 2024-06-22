const { Server } = require("socket.io");
const { server } = require("./server");
const UserSockets = new Map(); // Store user ID to socket mapping
const jwt = require("jsonwebtoken");
const DriverDao = require("./dao/Driver");
const TaxiOrderDao = require("./dao/TaxiOrder");

const io = new Server(server);

io.use((socket, next) => {
	let token = socket.handshake.auth.token || (socket.handshake.headers["authorization"] && socket.handshake.headers["authorization"].split(" ")[1]);
	
	if (!token) return next(new Error("Authentication error"));
	jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, data) => {
		if (err) return next(new Error("Authentication error"));
		socket.user = data.user;
		UserSockets.set(data.user.user_id, socket);
		console.log("socket connected: ", data.user.user_id);
		next();
	});
});

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("test_rec", (msg) => {
		console.log("message: " + msg);
		io.emit("chat message", msg);
	});
	socket.on("disconnect", () => {
		UserSockets.delete(socket.user.user_id);
		console.log("user disconnected");
	});
	socket.on('joinRoom', (roomName) => {
		socket.join(roomName);
		console.log(`Socket ${socket.id} for user ${socket.user.user_id} joined room ${roomName}`);
	});
	socket.on("update_location", async (location) => {
		try {
			const userId = socket.user.user_id;
			const driver = await DriverDao.getDriverByUserId(userId);
			await DriverDao.updateDriverLocation(userId, location);

			// Emit the driver's updated location to each order's specific channel
			const orders = await TaxiOrderDao.getOrdersByDriverId(driver.driver_id);
			for (let order of orders) {
				try {
					io.to(`order_${order.order_id}`).emit("driver_location", {
						driver_id: driver.driver_id,
						location: location
					});
				} catch (error) {
					console.error("Error emiting driver's location to connected users:", error);
				}
			}
			if (orders.length === 0) {
				io.emit("driver_location", {
					driver_id: driver.driver_id,
					location: location
				});
			}
		} catch (error) {
			console.error("Error updating driver's location:", error);
		}
	});
});


module.exports = {
	io,
	UserSockets
};