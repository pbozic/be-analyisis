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
		// console.log('auth token', token);
		const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
		const user = await req.prisma.users.findUnique({
			where: {
				user_id: decoded.user.user_id,
			},
			include: {
				business_users: {
					include: {
						business: {
							include: {
								reservation_module: true,
							},
						},
					},
				},
			},
		});
		if (!user) {
			throw new Error('Invalid user in token');
		} else if (!user.phone_verified && !req.path.includes('/api/users/me/verify/phone')) {
			// throw new Error('Phone not verified');
		}
		const firstBusinessUser = user.business_users?.length > 0 ? user.business_users[0] : null;
		req.user = {
			...decoded.user,
			business_id: firstBusinessUser?.business?.business_id || null,
			business_user_id: firstBusinessUser?.business_users_id || null,
			company_role: firstBusinessUser?.company_role || null,
			reservation_module_id: firstBusinessUser?.business?.reservation_module?.reservation_module_id || null,
		};
		req.userSocket = UserSockets.get(decoded.user.user_id);
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
