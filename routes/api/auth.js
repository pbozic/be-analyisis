const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordRequestSchema } = require("../../joi/authSchemas");
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../../lib/jwt");
const prisma = require("../../prisma/prisma");
const joi = require("../../middleware/joi");
const { updateUserLanguageSchema } = require("../../joi/userSchemas");
const UserController = require("../../controllers/UserController");
const { OAuth2Client } = require('google-auth-library');
const UserDao = require("../../dao/User");
const DocumentDao = require("../../dao/Document");
const { DOCUMENT_TYPE } = require("../../lib/constants");
const stripe = require("../../lib/stripe");
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
					}
				},
				delivery_driver: {
					select: {
						delivery_driver_id: true,
						delivers_daily_meals: true,
						business_id: true,
						user_id: true
					}
				},
				child_users: { include:{child_user: true}},
				parent_user: { include:{parent_user: true}},
			},
		});
		if (user.disabled) return res.status(400).json({ error: "Account is disabled." });
		if (!user.active) return res.status(400).json({ error: "Account is inactive." });
		let payment_methods = []
		if (user.stripe_customer_id) {
			payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
		}
		delete user["password"];
		const access_token = generateAccessToken({
			...user,
			child_users: null,
			parent_user: null
		});
		const refresh_token = generateRefreshToken({
			...user,
			child_users: null,
			parent_user: null
		});
		user = {
			...user,
			access_token,
			refresh_token,
			payment_methods
		};
		return res.status(200).json(user);
	} catch (error) {
		return res.status(400).json({ error: "Error obtaining user information" });
	}
	
}
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.patch("/language",joi(updateUserLanguageSchema), UserController.updateUserLanguage);
router.get("/scheduled_users", AuthController.getScheduledUsers);
router.post("/login", joi(loginSchema), AuthController.login);
router.post("/register", joi(registerSchema), AuthController.register);
router.post("/create/scheduled_user", AuthController.createScheduledUser);
router.post("/update/scheduled_user", AuthController.updateScheduledUser);
router.post("/refresh", joi(refreshSchema), AuthController.refreshToken);
router.post("/reset-password", joi(resetPasswordRequestSchema), AuthController.requestPasswordReset);
router.post('/login/apple', async (req, res) => {
	const { token } = req.body;
  
	try {
	  // Decode the Apple ID token
	  const decodedToken = jwt.decode(token);
	  const appleId = decodedToken.sub;
	  const email = decodedToken.email;
  
	  // Check if the user already exists in the database
	  let user = await prisma.users.findUnique({
		where: { apple_id: appleId },
	  });
  
	  if (user) {
			return await getUser(user.user_id, res);
	  }
  
	  // If the user does not exist, return the auth data (no JWT token)
	  return res.json({
		message: 'User not found',
		user: {
		  apple_id: appleId,
		  email,
		},
	  });
	} catch (error) {
	  console.error('Apple token verification error:', error);
	  res.status(500).send('Error during authentication');
	}
  });

router.post('/login/google', async (req, res) => {
	const { token } = req.body;
  
	try {
	  // Verify the Google ID token
	  const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.GOOGLE_CLIENT_ID,
	  });
  
	  const payload = ticket.getPayload();
	  const googleId = payload.sub;
	  const email = payload.email;
	  const firstName = payload.given_name;
	  const lastName = payload.family_name;
  
	  // Check if the user already exists in the database
	  let user = await prisma.users.findMany({
		where: { google_id: googleId },
	  });
	  
	  if (user) {
		// If the user exists, generate a JWT token and return it
		return await getUser(user[0].user_id, res);
	  }
  
	  // If the user does not exist, return the auth data (no JWT token)
	  return res.json({
		message: 'User not found',
		user: {
		  google_id: googleId,
		  email,
		  first_name: firstName,
		  last_name: lastName,
		},
	  });
	} catch (error) {
	  console.error('Error verifying Google token:', error);
	  res.status(500).send('Error during authentication');
	}
  });

module.exports = router;
