var express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const { validateUserInput } = require("../lib/helpersLib");
const { validateRequest } = require("../middleware/joi");
const { loginSchema, registerSchema } = require("../joi/userSchemas");
const {
	getUserByEmail,
	createNewUser,
} = require("../DatabaseHandler/dbConnections");
const { func } = require("joi");
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});
/**
 * @swagger
 *
 * /login:
 *   post:
 *     summary: Logs in the user and returns access and refresh tokens
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       '200':
 *         description: Login successful. Returns user details with access and refresh tokens.
 *         headers:
 *            Authorization:
 *              schema:
 *                type: string
 *              description: Access token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthenticatedUser'
 *       '400':
 *         description: Error occurred or Wrong email/password combination.
 *       '500':
 *         description: Something went wrong.
 */
router.post(
	"/login",
	validateRequest(loginSchema),
	async function (req, res, next) {
		let postData = req.body;

		let email = postData["email"];
		let password = postData["password"];

		try {
			let user = await getUserByEmail(email, {
				select: {
					password: true,
					email: true,
					user_id: true,
					first_name: true,
					last_name: true,
					telephone: true,
					user_role: true,
					date_create: true,
					date_modify: true,
				},
			});
			if (!user)
				return res
					.status(400)
					.json({ error: "Wrong email / password combination.." });

			let hashedPass = user["password"];
			let correctPw = await bcrypt.compare(password, hashedPass);
			if (!correctPw)
				return res
					.status(400)
					.json({ error: "Wrong email / password combination.." });

			delete user["password"];
			const accessToken = generateAccessToken(user);
			const refreshToken = generateRefreshToken(user);
			user = {
				...user,
				accessToken,
				refreshToken,
			};
			res.status(200).header("Authorization", accessToken).json(user);
		} catch (e) {
			console.log("error", e);
			res.status(500).json({ error: "Error something went wrong..", e });
		}
	},
);

/* POST user register. */
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User registered successfully. Returns user info and tokens.
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: The access token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthenticatedUser'
 *       '400':
 *         description: Error something went wrong.
 */
router.post(
	"/register",
	validateRequest(registerSchema),
	async function (req, res, next) {
		console.log("register");
		let postData = req.body;
		console.log("post data", postData);

		try {
			let hash = await bcrypt.hash(
				postData.password,
				Number(process.env.BCRYPT_SALT_ROUNDS),
			);
			let userObj = {
				...postData,
				password: hash,
				user_role: "PERSONAL",
			};
			delete userObj["confirm_password"];
			let user = await createNewUser(userObj);
			delete user["password"];
			const accessToken = generateAccessToken(user);
			const refreshToken = generateRefreshToken(user);
			user = {
				...user,
				accessToken,
				refreshToken,
			};
			res.status(200).header("Authorization", accessToken).json(user);
		} catch (e) {
			console.log("error", e);
			res.status(400).json({ error: "Error something went wrong..", e });
		}
	},
);
/* POST refresh token. */
/**
 * @swagger
 * /refresh:
 *   post:
 *     summary: Refreshes the user's access token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: The refresh token of the user.
 *     responses:
 *       '200':
 *         description: Access token successfully refreshed. Returns newly generated access and refresh tokens.
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: New access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Newly generated access token.
 *                 refreshToken:
 *                   type: string
 *                   description: Newly generated refresh token.
 *       '400':
 *         description: Access Denied. No refresh token provided.
 *       '401':
 *         description: Access Denied. Token expired.
 */
router.post("/refresh", async (req, res) => {
	const refreshToken = req.body.refreshToken;
	console.log("refresh", refreshToken);
	if (!refreshToken) {
		return res
			.status(400)
			.send("Access Denied. No refresh token provided.");
	}

	jwt.verify(
		refreshToken,
		process.env.JWT_TOKEN_SECRET,
		function (err, decoded) {
			if (err) {
				return res
					.status(401)
					.json({ error: "Access Denied. Token expired.", e: err });
			}
			delete decoded["iat"];
			delete decoded["exp"];
			const accessToken = generateAccessToken(decoded.user);
			const refreshToken = generateRefreshToken(decoded.user);

			let user = {
				...decoded,
				accessToken,
				refreshToken,
			};
			console.log(user);
			res.status(200).header("Authorization", accessToken).json(user);
		},
	);
});

module.exports = router;
