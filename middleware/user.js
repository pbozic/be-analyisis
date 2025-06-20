import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

import { UserSockets } from '../socket.js';

config();

const withUserMiddleware = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
			req.user = decoded.user;
			req.userSocket = UserSockets.get(decoded.user_id);
		} catch (error) {
			// Invalid token — log but do not block
		}
	}

	// Continue no matter what
	next();
};

export default withUserMiddleware;
