const fs = require('fs');

var express = require('express');
const router = express.Router();
const { auth } = require('googleapis/build/src/apis/drive');

const prisma = require('../prisma/prisma');
const joi = require('../middleware/joi');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const { SaveObject, GetObject, isAllowedToSeeObject } = require('../lib/s3');
const adminRoutes = require('./api/admin');
const userRoutes = require('./api/users');
const authRoutes = require('./api/auth');
const authUserRoutes = require('./api/auth');
const authTaxiRoutes = require('./api/taxi/auth');
const authDeliveryRoutes = require('./api/delivery/auth');
const authMerchantRoutes = require('./api/merchant/auth');
const reservationsMerchantRoutes = require('./api/merchant/reservations');
const taxiRoutes = require('./api/taxi');
const deliveryRoutes = require('./api/delivery/orders');
const authBusinessRoutes = require('./api/business/auth');
const businessRoutes = require('./api/business');
const driverRoutes = require('./api/drivers');
const deliveryDriverRoutes = require('./api/deliveryDrivers');
const vehicleRoutes = require('./api/vehicles');
const financesRoutes = require('./api/finances');
const documentsRoutes = require('./api/documents');
const menusRoutes = require('./api/menu');
const businessUserRoutes = require('./api/businessUsers');
const businessTeamRoutes = require('./api/businessTeams');
const businessClientRoutes = require('./api/businessClients');
const stripeRoutes = require('./api/stripe');
const lostItemsRoutes = require('./api/lostItems');
const flagRoutes = require('./api/flags');
const categoriesRoutes = require('./api/categories');
const promoRoutes = require('./api/promo');
const googleMaps = require('./api/googleMaps');
const orderLobbyRoutes = require('./api/orderLobby');
const searchRoutes = require('./api/search');
const overwatchRoutes = require('./api/overwatch');
const { sendNotificationToUser } = require('../lib/oneSignal');

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
router.use('/business/search', searchRoutes);
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

module.exports = router;
