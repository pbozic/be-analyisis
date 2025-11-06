import dotenv from 'dotenv';
import express from 'express';
import { OAuth2Client } from 'google-auth-library';

import AuthController from '../../controllers/AuthController.js';
import { generateAccessToken, generateRefreshToken } from '../../lib/jwt.js';
import UserController from '../../controllers/UserController.js';
import UserDao from '../../dao/User.js';
import stripe from '../../lib/stripe.js';
import authMiddleware from '../../middleware/auth.js';
import { validate } from '../../middleware/zod.js';
import {
	AppleLoginSchema,
	AuthenticateRegistrationSessionSchema,
	CreateScheduledUserSchema,
	GoogleLoginSchema,
	LoginSchema,
	RefreshTokenSchema,
	RegisterUserSchema,
	RequestPasswordResetSchema,
	UpdateScheduledUserSchema,
} from '../../schemas/dto/Auth/AuthRequest.dto.js';
import { UpdateUserLanguageSchema } from '../../schemas/dto/User/UserRequest.dto.js';

dotenv.config();
const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
async function getUser(id, res) {
	try {
		let user = await UserDao.getUserById(id, {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
				driver: {
					select: {
						driver_id: true,
						business_id: true,
						ride_requirements: true,
						user_id: true,
						transfer_requirements: true,
						handles_taxi_orders: true,
						handles_transfer_orders: true,
						handles_delivery_orders: true,
					},
				},
				delivery_driver: {
					select: {
						delivery_driver_id: true,
						delivers_daily_meals: true,
						business_id: true,
						user_id: true,
					},
				},
				child_users: { include: { child_user: true } },
				parent_user: { include: { parent_user: true } },
			},
		});
		if (user.disabled) return res.status(400).json({ error: 'Account is disabled.' });
		if (!user.active) return res.status(400).json({ error: 'Account is inactive.' });
		let payment_methods = [];
		if (user.stripe_customer_id) {
			payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
		}
		delete user['password'];
		const access_token = generateAccessToken({
			user_id: user.user_id,
		});
		const refresh_token = generateRefreshToken({
			user_id: user.user_id,
		});
		user = {
			...user,
			access_token,
			refresh_token,
			payment_methods,
		};
		return user;
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error: 'Error obtaining user information' });
	}
}
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.patch('/language', validate(UpdateUserLanguageSchema), UserController.updateUserLanguage);
router.get('/telephone_availability/:telephone', AuthController.checkTelephoneAvailability);
router.get('/email_availability/:email', AuthController.checkEmailAvailability);
router.get('/scheduled_users', AuthController.getScheduledUsers);
router.post('/login', validate(LoginSchema), AuthController.login);
router.post('/register', validate(RegisterUserSchema), AuthController.register);
router.post('/create/scheduled_user', validate(CreateScheduledUserSchema), AuthController.createScheduledUser);
router.post('/update/scheduled_user', validate(UpdateScheduledUserSchema), AuthController.updateScheduledUser);
router.post('/refresh', validate(RefreshTokenSchema), AuthController.refreshToken);
router.get('/municipalities', AuthController.getMunicipalitiesWithLicenseRequirements);
router.post('/reset-password', validate(RequestPasswordResetSchema), AuthController.requestPasswordReset);
router.post('/login/apple', validate(AppleLoginSchema), AuthController.appleLoginPost);
router.get('/login/apple', AuthController.appleLoginWebGet);
router.post('/login/google', validate(GoogleLoginSchema), AuthController.googleLogin);

router.post(
	'/authenticate_registration',
	authMiddleware,
	validate(AuthenticateRegistrationSessionSchema),
	AuthController.authenticateRegistrationSession
);

export default router;
