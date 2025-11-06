import fs from 'fs';

import express from 'express';

import prisma from '../prisma/prisma.js';
import authMiddleware from '../middleware/auth.js';
import adminMiddleware from '../middleware/admin.js';
import { SaveObject } from '../lib/s3.js';
import adminRoutes from './api/admin.routes.js';
import userRoutes from './api/users.routes.js';
import authRoutes from './api/auth.routes.js';
import authTaxiRoutes from './api/taxi/auth.routes.js';
import authDeliveryRoutes from './api/delivery/auth.routes.js';
import authMerchantRoutes from './api/merchant/auth.routes.ts';
import reservationsMerchantRoutes from './api/merchant/tableReservations.routes.ts';
import taxiRoutes from './api/taxi.routes.js';
import deliveryRoutes from './api/delivery/orders.routes.ts';
import dailyMealsRoutes from './api/delivery/dailyMeals.routes.js';
import authBusinessRoutes from './api/business/auth.routes.js';
import businessRoutes from './api/business.routes.js';
import driverRoutes from './api/drivers.routes.js';
// import deliveryDriverRoutes from './api/deliveryDrivers.routes.js';
import vehicleRoutes from './api/vehicles.routes.ts';
import financesRoutes from './api/finances.routes.js';
import documentsRoutes from './api/documents.routes.js';
import menusRoutes from './api/menu.routes.js';
import authMenusRoutes from './api/menu/auth.routes.js';
import businessUserRoutes from './api/businessUsers.routes.js';
import businessTeamRoutes from './api/businessTeams.routes.js';
import businessClientRoutes from './api/businessClients.routes.js';
import stripeRoutes from './api/stripe.routes.js';
import lostItemsRoutes from './api/lostItems.routes.js';
import flagRoutes from './api/flags.routes.js';
import categoriesRoutes from './api/categories.routes.js';
import promoRoutes from './api/promo.routes.ts';
import googleMaps from './api/googleMaps.routes.js';
import orderLobbyRoutes from './api/orderLobby.routes.js';
import searchRoutes from './api/search.routes.ts';
import overwatchRoutes from './api/overwatch.routes.ts';
import blogRoutes from './api/blog.routes.js';
import reservationRoutes from './api/reservations/index.routes.js';
import RolesRoutes from './api/roles.routes.js';
import storesRoutes from './api/stores.routes.js';
import foodDrinksRoutes from './api/foodDrinks.routes.js';
import reviewsRoutes from './api/reviews.routes.js';
import { sendNotificationToUser } from '../lib/oneSignal.js';
import withUserMiddleware from '../middleware/user.js';
import sessionRoutes from './api/session.routes.js';
const router = express.Router();
/**
 *    * @module stripe
 *
 */
router.use('/stripe', stripeRoutes);
/**
 *    * @module admin
 *
 */
router.use('/admin', [authMiddleware, adminMiddleware], adminRoutes);
/**
 *    * @module user
 *
 */
router.use('/users', [authMiddleware], userRoutes);
/**
 *    * @module general,auth
 *
 */
router.use('/auth', authRoutes);
/**
 *    * @module general,auth
 *
 */
router.use('/user/auth', authRoutes);
/**
 *    * @module transport,auth,register
 *
 */
router.use('/taxi/auth', authTaxiRoutes);
/**
 *    * @module delivery,auth,register
 *
 */
router.use('/delivery/auth', authDeliveryRoutes);
/**
 *    * @module merchant,auth,register
 *
 */
router.use('/merchant/auth', authMerchantRoutes);
/**
 *    * @module merchant
 *
 */
router.use('/merchant/reservations', reservationsMerchantRoutes);
/**
 *    * @module delivery,merchant,general
 *
 */
router.use('/delivery/orders', [authMiddleware], deliveryRoutes);
/**
 *    * @module general,merchant
 *
 */
router.use('/delivery/daily_meals', [authMiddleware], dailyMealsRoutes);
/**
 *    * @module transport
 *
 */
router.use('/taxi', [authMiddleware], taxiRoutes);
/**
 *    * @module business,register
 *
 */
router.use('/business/auth', authBusinessRoutes);
/**
 *    * @module business
 *
 */
router.use('/business/search', [withUserMiddleware], searchRoutes);
/**
 *    * @module business
 *
 */
router.use('/business', [authMiddleware], businessRoutes);
/**
 *    * @module overwatch
 *
 */
router.use('/overwatch', overwatchRoutes);
/**
 *    * @module transport
 *
 */
router.use('/drivers', [authMiddleware], driverRoutes);
// router.use('/delivery_drivers', [authMiddleware], deliveryDriverRoutes);
/**
 *    * @module transport
 *
 */
router.use('/vehicles', [authMiddleware], vehicleRoutes);
/**
 *    * @module finances
 *
 */
router.use('/finances', [authMiddleware], financesRoutes);
/**
 *    * @module documents
 *
 */
router.use('/documents', [authMiddleware], documentsRoutes);
/**
 *    * @module merchant,delivery
 *
 */
router.use('/menus', [authMiddleware], menusRoutes);
router.use('/menus/auth', authMenusRoutes);
/**
 *    * @module business,general
 *
 */
router.use('/business-users', [authMiddleware], businessUserRoutes);
/**
 *    * @module business,general
 *
 */
router.use('/business-teams', [authMiddleware], businessTeamRoutes);
/**
 *    * @module business
 *
 */
router.use('/business-clients', [authMiddleware], businessClientRoutes);
/**
 *    * @module lobby
 *
 */
router.use('/order_lobby', [authMiddleware], orderLobbyRoutes);
/**
 *    * @module general
 *
 */
router.use('/lost_items', lostItemsRoutes);
/**
 *    * @module flags
 *
 */
router.use('/flags', [authMiddleware], flagRoutes);
/**
 *    * @module google_maps
 *
 */
router.use('/google_maps', googleMaps);
/**
 *    * @module general,merchant
 *
 */
router.use('/categories', categoriesRoutes);
/**
 *    * @module merchant,general
 *
 */
router.use('/promo', promoRoutes);
/**
 *    * @module blog
 *
 */
router.use('/blog', blogRoutes);
/**
 *    * @module merchant,general
 *
 */
router.use('/reservation', reservationRoutes);
/**
 *    * @module roles
 *
 */
router.use('/roles', [authMiddleware], RolesRoutes);
/**
 *    * @module general
 *
 */
router.use('/session', sessionRoutes);
/**
 *    * @module delivery
 *
 */
router.use('/stores', [authMiddleware], storesRoutes);
/**
 *    * @module delivery
 *
 */
router.use('/food-drinks', [authMiddleware], foodDrinksRoutes);
/**
 *    * @module transport,delivery
 *
 */
router.use('/review', [authMiddleware], reviewsRoutes);

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
router.post(
	'/test/s3',
	[authMiddleware],
	validate(
		z.object({
			data: z.string().min(1, 'Data is required'),
			mimeType: z.string().min(1, 'MIME type is required'),
		})
	),
	async (req, res) => {
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
	}
);
router.post(
	'/test/notification',
	validate(
		z.object({
			heading: z.string().min(1, 'Heading is required'),
			message: z.string().min(1, 'Message is required'),
			userId: z.string().min(1, 'User ID is required'),
		})
	),
	async (req, res) => {
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
	}
);
router.get('/purchase-status/:sessionId', async (req, res) => {
	try {
		const sessionId = req.params.session_id;
		// eslint-disable-next-line no-undef
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
router.post(
	'/file/:file_name',
	validate(
		z.object({
			json: z.record(z.any(), 'JSON object is required'),
		})
	),
	(req, res) => {
		let json = req.body.json;
		fs.writeFile('public/' + req.params.file_name, JSON.stringify(json), (err) => {
			if (err) {
				res.status(500).send('Error writing file');
			} else {
				res.send('File written');
			}
		});
	}
);
router.put(
	'/file/:file_name',
	validate(
		z.object({
			json: z.record(z.any(), 'JSON object is required'),
		})
	),
	(req, res) => {
		let json = req.body.json;
		fs.writeFile('public/' + req.params.file_name, JSON.stringify(json), (err) => {
			if (err) {
				res.status(500).send('Error writing file');
			} else {
				res.send('File written');
			}
		});
	}
);
export default router;
