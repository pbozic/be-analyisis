const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordRequestSchema } = require("../../joi/authSchemas");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../../lib/jwt");
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
const axios = require("axios");
const jwkToPem = require('jwk-to-pem');
const fs = require('fs');
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
		console.log(error)
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
	const { token, jwt } = req.body;
  
	try {
	  // Decode the Apple ID token
	  const decodedToken = await verifyAppleToken(jwt);
	  console.log("Apple Decoded", decodedToken);
	  const appleId = token;
  
	  // Check if the user already exists in the database
	  let user = await prisma.users.findMany({
		where: { apple_id: appleId },
	  });
  
	  if (user.length > 0) {
		 return await getUser(user[0].user_id, res);
	  }
  
	  // If the user does not exist, return the auth data (no JWT token)
	  return res.json({
		message: 'User not found',
		email: decodedToken.email,
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
	  
	  if (user.length > 0) {
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
  router.get('/login/apple', async (req, res) => {
    const { code, state } = req.query;
	console.log("Apple login web GET", code, state)
    if (!code) {
        return res.status(400).json({ error: "Missing authorization code" });
    }

    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios.post("https://appleid.apple.com/auth/token", new URLSearchParams({
            client_id: process.env.APPLE_SIGN_IN_CLIENT_ID,  // Your Apple Service ID
            client_secret: generateAppleClientSecret(), // Generated Apple Client Secret
            code: code,
            grant_type: "authorization_code",
            redirect_uri: process.env.APPLE_REDIRECT_URI,
        }).toString(), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        const { id_token, access_token } = tokenResponse.data;

        // Verify the Apple ID token (with web=true)
        const decodedToken = await verifyAppleToken(id_token, true);
        console.log("Verified Apple User:", decodedToken);

        // Handle user authentication (check if user exists in DB)
        const appleId = decodedToken.sub;  // Unique Apple user ID
        const email = decodedToken.email; // Email (may be null for private relay emails)

        // Check if user exists in DB
        let user = await prisma.users.findFirst({
            where: { apple_id: appleId },
        });
		let FRONT_END = process.env.FRONTEND_URL;
        if (user) {
            // User exists, generate session/token & redirect to frontend
            const jwtToken = generateJwtToken(user[0].user_id); // Your JWT generator function
            return res.redirect(`${FRONT_END}/login-success?token=${jwtToken}`);
        }

        // If user does not exist, return authentication data
        return res.redirect(`${FRONT_END}/signup?apple_id=${appleId}&email=${email}`);

    } catch (error) {
        console.error("Apple authentication error:", error.response?.data || error);
        return res.status(500).json({ error: "Failed to authenticate with Apple" });
    }
});
  const verifyAppleToken = async (identityToken, web = false) => {
    try {
        // Fetch Apple's public keys
        const response = await axios.get('https://appleid.apple.com/auth/keys');
        const applePublicKeys = response.data.keys;

        // Decode JWT header to get the key ID (kid)
        const decodedHeader = jwt.decode(identityToken, { complete: true });
        if (!decodedHeader) throw new Error('Invalid Apple ID token.');

        const { kid } = decodedHeader.header;

        // Find the corresponding public key based on the `kid`
        const applePublicKey = applePublicKeys.find(key => key.kid === kid);
        if (!applePublicKey) throw new Error('Apple public key not found.');

        // Convert the public key to PEM format
        const pem = jwkToPem(applePublicKey);

        // Define verification options
        let verifyOptions = { algorithms: ['RS256'] };

        if (web) {
            // Additional verification for web authentication
            verifyOptions.issuer = "https://appleid.apple.com";  // Ensure token is from Apple
            verifyOptions.audience = process.env.APPLE_SIGN_IN_CLIENT_ID; // Your Apple Service/App ID
        }

        // Verify the JWT
        const decoded = jwt.verify(identityToken, pem, verifyOptions);

        console.log('Decoded Apple token:', decoded);
        return decoded;
    } catch (error) {
        console.error('Error verifying Apple token:', error);
        throw error;
    }
};
const generateAppleClientSecret = () => {
    const privateKey = fs.readFileSync(process.env.APPLE_P8_PATH, "utf8"); // Load from secure storage
    const teamId = process.env.APPLE_TEAM_ID;
    const clientId = process.env.APPLE_SIGN_IN_CLIENT_ID;
    const keyId = process.env.APPLE_KEY_ID;

    const token = jwt.sign({}, privateKey, {
        algorithm: "ES256",
        expiresIn: "180d", // 180 days expiry
        audience: "https://appleid.apple.com",
        issuer: teamId,
        subject: clientId,
        keyid: keyId,
    });

    console.log("New APPLE_CLIENT_SECRET:", token);
    return token;
};

module.exports = router;
