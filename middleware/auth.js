import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

import { UserSockets } from '../socket.js';
import { asyncLocalStorage } from '../lib/logger.js';
config();
const authMiddleware = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader?.split(' ')[1];

	if (!token) {
		console.warn('Access Denied. No token provided.');
		return res.status(401).json({ error: 'Access Denied. No token provided.' });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

		if (!decoded?.user || !decoded?.user_id) {
			throw new Error('Malformed token payload.');
		}

		req.user = decoded.user;
		req.socket = UserSockets.get(decoded.user_id) ?? null;
		next();
	} catch (error) {
		console.error('JWT verification failed:', error);
		return res.status(401).json({ error: 'Access Denied. Token invalid or expired.', details: error.message });
	}
};

export default authMiddleware;
