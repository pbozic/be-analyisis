import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

import { UserSockets } from '../socket.js';
config();
const authMiddleware = async (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) {
		console.log('Access Denied. No token provided.');
		return res.status(401).send('Access Denied. No token provided.');
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
		req.user = decoded.user;
		req.userSocket = UserSockets.get(decoded.user_id);
		// const userId = decoded.user.user_id; // Your logic
		// const routePath = req.route?.path || req.originalUrl;
		next();
		// asyncLocalStorage.run({ userId, routePath }, () => {
		//
		// })
	} catch (error) {
		console.log(error);
		return res.status(401).json({ error: 'Access Denied. Token expired.', e: error });
	}
};
export default authMiddleware;
