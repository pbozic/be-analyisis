import { config } from 'dotenv';

import UserDao from '../dao/User.js';
config();
const adminMiddleware = async (req, res, next) => {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		if (user.user_role !== 'ADMIN') throw new Error('Access Denied.');
		next();
	} catch (error) {
		console.error('adminMiddleware', error);
		return res.status(403).json({ error: 'Access Denied.' });
	}
};
export default adminMiddleware;
