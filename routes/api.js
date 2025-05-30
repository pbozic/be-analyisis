import fs from 'fs';

import express from 'express';

import prisma from '../prisma/prisma.js';
import joi from '../middleware/joi.js';
import authMiddleware from '../middleware/auth.js';
import adminMiddleware from '../middleware/admin.js';
import { SaveObject, GetObject, isAllowedToSeeObject } from '../lib/s3.js';
import adminRoutes from './api/admin.js';
import userRoutes from './api/users.js';
import authRoutes from './api/auth.js';
import authTaxiRoutes from './api/taxi/auth.js';
import authDeliveryRoutes from './api/delivery/auth.js';
import authMerchantRoutes from './api/merchant/auth.js';
import reservationsMerchantRoutes from './api/merchant/reservations.js';
import taxiRoutes from './api/taxi.js';
import deliveryRoutes from './api/delivery/orders.js';
import authBusinessRoutes from './api/business/auth.js';
import businessRoutes from './api/business.js';
import driverRoutes from './api/drivers.js';
import deliveryDriverRoutes from './api/deliveryDrivers.js';
import vehicleRoutes from './api/vehicles.js';
import financesRoutes from './api/finances.js';
import documentsRoutes from './api/documents.js';
import menusRoutes from './api/menu.js';
import businessUserRoutes from './api/businessUsers.js';
import businessTeamRoutes from './api/businessTeams.js';
import businessClientRoutes from './api/businessClients.js';
import stripeRoutes from './api/stripe.js';
import lostItemsRoutes from './api/lostItems.js';
import flagRoutes from './api/flags.js';
import categoriesRoutes from './api/categories.js';
import promoRoutes from './api/promo.js';
import googleMaps from './api/googleMaps.js';
import orderLobbyRoutes from './api/orderLobby.js';
import searchRoutes from './api/search.js';
import overwatchRoutes from './api/overwatch.js';
import blogRoutes from './api/blog.ts';
import { sendNotificationToUser } from '../lib/oneSignal.js';
import withUserMiddleware from '../middleware/user.js';
const router = express.Router();
const authUserRoutes = authRoutes;
router.use('/stripe', stripeRoutes);
router.use('/admin', [authMiddleware, adminMiddleware], adminRoutes);
router.use('/users', [authMiddleware], userRoutes);
router.use('/auth', authRoutes);
router.use('/user/auth', authRoutes);
router.use('/taxi/auth', authTaxiRoutes);
router.use('/delivery/auth', authDeliveryRoutes);
router.use('/merchant/auth', authMerchantRoutes);
router.use('/merchant/reservations', reservationsMerchantRoutes);
router.use('/delivery/orders', [authMiddleware], deliveryRoutes);
router.use('/taxi', [authMiddleware], taxiRoutes);
router.use('/business/auth', authBusinessRoutes);
router.use('/business/search', [withUserMiddleware], searchRoutes);
router.use('/business', [authMiddleware], businessRoutes);
router.use('/overwatch', overwatchRoutes);
router.use('/drivers', [authMiddleware], driverRoutes);
router.use('/delivery_drivers', [authMiddleware], deliveryDriverRoutes);
router.use('/vehicles', [authMiddleware], vehicleRoutes);
router.use('/finances', [authMiddleware], financesRoutes);
router.use('/documents', [authMiddleware], documentsRoutes);
router.use('/menus', [authMiddleware], menusRoutes);
router.use('/business-users', [authMiddleware], businessUserRoutes);
router.use('/business-teams', [authMiddleware], businessTeamRoutes);
router.use('/business-clients', [authMiddleware], businessClientRoutes);
router.use('/order_lobby', [authMiddleware], orderLobbyRoutes);
router.use('/lost_items', lostItemsRoutes);
router.use('/flags', [authMiddleware], flagRoutes);
router.use('/google_maps', googleMaps);
router.use('/categories', categoriesRoutes);
router.use('/promo', [authMiddleware], promoRoutes);
router.use('/blog', [authMiddleware], blogRoutes);
router.use('/reviews', [authMiddleware], async (req, res) => {
	let reviews = await prisma.reviews.findMany({
		include: {
			author: {
				select: {
					first_name: true,
					last_name: true,
					user_id: true,
					user_role: true,
					documents: {
						where: {
							document_type: 'PROFILE_PICTURE',
						},
						select: {
							files: true,
							document_type: true,
						},
					},
				},
			},
			reviewable: {
				include: {
					business: {
						select: {
							name: true,
							business_id: true,
							documents: {
								where: {
									document_type: 'PROFILE_PICTURE',
								},
								select: {
									files: true,
									document_type: true,
								},
							},
						},
					},
					user: {
						select: {
							first_name: true,
							last_name: true,
							user_id: true,
							user_role: true,
							documents: {
								where: {
									document_type: 'PROFILE_PICTURE',
								},
								select: {
									files: true,
									document_type: true,
								},
							},
						},
					},
				},
			},
		},
		orderBy: {
			created_at: 'desc', // Order by 'created_at' field in descending order
		},
	});
	for (let review of reviews) {
		if (review.reviewable.user.length > 0) {
			review.target = review.reviewable.user[0];
		}
		if (review.reviewable.business.length > 0) {
			review.target = review.reviewable.business[0];
		}
		review.reviewable = undefined;
	}
	res.json(reviews);
});
router.get('/test/s3', async (req, res) => {
	res.json({ message: 'Notification sent' });
});
router.post('/test/s3', [authMiddleware], async (req, res) => {
	let key = req.user.user_id + '/test.png';
	let data = req.body.data;
	let mimeType = req.body.mimeType;
	let owners = {
		users: ['user2'],
		businesses: ['business2'],
	};
	try {
		let object = await SaveObject(key, data, mimeType, owners);
		return res.json(object);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});
router.post('/test/notification', async (req, res) => {
	const { heading, message, userId } = req.body;
	if (!heading || !message || !userId) {
		return res.status(400).json({ error: 'Heading, message, and userId are required.' });
	}
	try {
		await sendNotificationToUser(heading, message, userId);
		res.status(200).json({ success: 'Notification sent successfully.' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to send notification.', details: error.message });
	}
});
router.get('/purchase-status/:sessionId', async (req, res) => {
	try {
		const sessionId = req.params.session_id;
		const session = await stripe.checkout.sessions.retrieve(sessionId);
		res.json({
			success: session.payment_status === 'paid',
			amount: session.amount_total / 100,
			metadata: session.metadata,
		});
	} catch (error) {
		console.error('Error fetching purchase status:', error);
		res.status(500).json({ error: error.message });
	}
});
router.get('/file/:file_name', (req, res) => {
	fs.readFile('public/' + req.params.file_name, (err, data) => {
		if (err) {
			res.status(404).send('File not found');
		} else {
			res.json(JSON.parse(data));
		}
	});
});
router.post('/file/:file_name', (req, res) => {
	let json = req.body.json;
	fs.writeFile('public/' + req.params.file_name, JSON.stringify(json), (err) => {
		if (err) {
			res.status(500).send('Error writing file');
		} else {
			res.send('File written');
		}
	});
});
router.put('/file/:file_name', (req, res) => {
	let json = req.body.json;
	fs.writeFile('public/' + req.params.file_name, JSON.stringify(json), (err) => {
		if (err) {
			res.status(500).send('Error writing file');
		} else {
			res.send('File written');
		}
	});
});
export default router;
