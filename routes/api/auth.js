const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordRequestSchema } = require("../../joi/authSchemas");
const jwt = require("jsonwebtoken");
const prisma = require("../../prisma");
const joi = require("../../middleware/joi");
const { updateUserLanguageSchema } = require("../../joi/userSchemas");
const UserController = require("../../controllers/UserController");
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
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
		// If the user exists, generate a JWT token and return it
		const userToken = jwt.sign(
		  { user_id: user.user_id, email: user.email },
		  'YOUR_SECRET_KEY', // Your secret key for signing the JWT
		  { expiresIn: '1h' }
		);
  
		return res.json({
		  message: 'Login successful',
		  token: userToken,
		  user: {
			user_id: user.user_id,
			email: user.email,
		  },
		});
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
		audience: 'YOUR_GOOGLE_CLIENT_ID',
	  });
  
	  const payload = ticket.getPayload();
	  const googleId = payload.sub;
	  const email = payload.email;
	  const firstName = payload.given_name;
	  const lastName = payload.family_name;
  
	  // Check if the user already exists in the database
	  let user = await prisma.users.findUnique({
		where: { google_id: googleId },
	  });
  
	  if (user) {
		// If the user exists, generate a JWT token and return it
		const userToken = jwt.sign(
		  { user_id: user.user_id, email: user.email },
		  'YOUR_SECRET_KEY', // Your secret key for signing the JWT
		  { expiresIn: '1h' }
		);
  
		return res.json({
		  message: 'Login successful',
		  token: userToken,
		  user: {
			user_id: user.user_id,
			email: user.email,
			first_name: user.first_name,
			last_name: user.last_name,
		  },
		});
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
