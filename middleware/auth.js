require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserSockets } = require("../socket");
const { asyncLocalStorage } = require('../lib/logger');
const authMiddleware = (req, res, next) => {
	const authHeader = req.headers["authorization"];

	const token = authHeader && authHeader.split(" ")[1];
	if (!token) {
		console.log("Access Denied. No token provided.")
		return res.status(401).send("Access Denied. No token provided.");
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
		req.user = decoded.user;
		req.socket = UserSockets.get(decoded.user_id);
		const userId = decoded.user.user_id; // Your logic
		const routePath = req.route?.path || req.originalUrl;
		
		asyncLocalStorage.run({ userId, routePath }, () => {
		  next();
		}).catch((error) => {
			console.log(error);
			next();	
		});
	} catch (error) {
		console.log(error)
		return res.status(401).json({ error: "Access Denied. Token expired.", e: error });
	}
};
module.exports = authMiddleware;
