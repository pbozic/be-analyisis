const UserDao = require("../dao/User");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { post } = require("../routes/api/users");

/**
 * POST /auth/login
 * @tag Authentication
 * @summary User login procedure.
 * @description This verifies the user's credentials and responds with an access token and refresh token if successful.
 * @operationId loginUser.
 * @bodyDescription Request body must include email and password for verification.
 * @bodyContent {LoginRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns user details along with accessToken and refreshToken in the response body, additionally sets Authorization header with the accessToken.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Unsuccessful operation. Returns error message "Wrong email / password combination." if the either the email or password (or both) are incorrect.
 * @response 500 - Server error. Returns error message "Error something went wrong.." if any exception is encountered during execution.
 */
async function login(req, res) {
	let postData = req.body;
	console.log("hi, login", postData.email);
	try {
		let user = await UserDao.getUserByEmail(postData.email, {
			select: {
				password: true,
			},
		});
		if (!user) return res.status(400).json({ error: "Wrong email / password combination.." });
		console.log("db accesssed");
		let correctPw = await bcrypt.compare(postData.password, user.password);
		if (!correctPw) return res.status(400).json({ error: "Wrong email / password combination.." });
		user = await UserDao.getUserByEmail(postData.email, {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});
		delete user["password"];
		const access_token = generateAccessToken(user);
		const refresh_token = generateRefreshToken(user);
		user = {
			...user,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /auth/register
 * @tag Authentication
 * @summary Register a new user
 * @description This endpoint is used to register a new user.
 * @operationId registerNewUser
 * @bodyDescription The required data to register a new user
 * @bodyContent {RegisterRequest} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Error something went wrong.
 */
async function register(req, res) {
	let postData = req.body;
	console.log(postData);
	try {
		let hash = await bcrypt.hash(postData.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let userObj = {
			...postData,
			password: hash,
			user_role: "PERSONAL",
		};
		delete userObj["confirm_password"];
		let user = await UserDao.createNewUser(userObj);
		delete user["password"];
		const access_token = generateAccessToken(user);
		const refresh_token = generateRefreshToken(user);
		// todo: send phone verification
		user = {
			...user,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error something went wrong..", e });
	}
}

/**
 * POST /auth/refresh
 * @tag Authentication
 * @summary Refreshes the user's access token
 * @description This endpoint is used to refresh the user's access and refresh tokens.
 * @operationId refreshToken
 * @bodyDescription The refresh token of the user
 * @bodyContent {RefreshTokenRequest} application/json
 * @bodyRequired
 * @response 200 - Access token successfully refreshed. Returns newly generated access and refresh tokens.
 * @responseContent {RefreshTokenResponse} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Access Denied. No refresh token provided.
 * @response 401 - Access Denied. Token expired.
 */

async function refreshToken(req, res) {
	const refreshToken = req.body.refresh_token;
	if (!refreshToken) {
		return res.status(400).send("Access Denied. No refresh token provided.");
	}

	jwt.verify(refreshToken, process.env.JWT_TOKEN_SECRET, function (err, decoded) {
		if (err) {
			return res.status(401).json({ error: "Access Denied. Token expired.", e: err });
		}
		delete decoded["iat"];
		delete decoded["exp"];
		const access_token = generateAccessToken(decoded.user);
		const refresh_token = generateRefreshToken(decoded.user);

		let user = {
			...decoded,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	});
}
/**
 * POST /auth/password-reset
 * @tag Authentication
 * @summary Request a password reset
 * @description This endpoint is used to request a password reset. It will generate and send a password reset token to the user.
 * @operationId requestPasswordReset
 * @bodyDescription The email of the user who wants to reset their password.
 * @bodyContent {PasswordResetRequest} application/json
 * @bodyRequired
 * @response 200 - Password reset request processed. A token is sent to the user if the account is found.
 * @response 400 - Error obtaining user information.
 */
async function requestPasswordReset(req, res) {
	try {
		let user = await UserDao.getUserByEmail(req.body.email);
		await TokenDao.generateAndSendPaswordResetToken(user);
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}

module.exports = {
	login,
	register,
	refreshToken,
	requestPasswordReset,
};
