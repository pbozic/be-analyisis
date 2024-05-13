require("dotenv").config();
const bcrypt = require("bcrypt");

const UserDao = require("../dao/User");
const TokenDao = require("../dao/Token");
/**
 * GET /users
 * @tag Users
 * @summary Get a list of users
 * @description Returns a list of users.
 * @operationId getUsers
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @responseContent {object} 400.application/json The error object
 */
async function listUsers(req, res) {
	try {
		let users = await UserDao.getUsers();
		if (users) {
			res.status(200).json(users);
		} else {
			res.status(400).json({
				error: "Error obtaining list of users..",
				users,
			});
		}
	} catch (e) {
		res.status(400).json({ error: "Error obtaining list of users..", e });
	}
}

/**
 * GET /users/me
 * @tag Users
 * @summary Retrieve authenticated user's information
 * @description Retrieve the details of the authenticated user by their ID.
 * @security bearerAuth: []
 * @operationId retrieveUserInformation
 * @response 200 - Successful operation, returns user info.
 * @responseContent {User} 200.application/json
 * @response 400 - Error obtaining user information.
 * @responseContent {object} 400.application/json
 */

async function me(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error obtaining user information" });
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}
/**
 * PATCH /me
 * @tag Users
 * @summary Updates the current user's details
 * @description This endpoint is used to update the current user's details.
 * @operationId updateMe
 * @bodyDescription The data to update for the current user
 * @bodyContent {UpdateUserRequest} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateMe(req, res) {
	console.log("updateMe", req.body);
	try {
		let user = await UserDao.updateUser(req.user.user_id, req.body);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/password
 * @tag Users
 * @summary Updates the current user's password
 * @description This endpoint is used to update the current user's password.
 * @operationId updatePassword
 * @bodyDescription The current password and the new password
 * @bodyContent {UpdatePasswordRequest} application/json
 * @bodyRequired
 * @response 200 - Password updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updatePassword(req, res) {
	try {
		let postData = req.body;

		let userCheck = await UserDao.getUserById(req.user.user_id, {
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
		let correctPw = await bcrypt.compare(postData.password, userCheck.password);
		if (!correctPw) return res.status(400).json({ error: "Wrong password.." });
		let hash = await bcrypt.hash(postData.new_password, Number(process.env.BCRYPT_SALT_ROUNDS));
		user = await UserDao.updateUserPassword(req.user.user_id, hash);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}
/**
 * PATCH /me/email
 * @tag Users
 * @summary Updates the current user's email
 * @description This endpoint is used to update the current user's email.
 * @operationId updateEmail
 * @bodyDescription The new email
 * @bodyContent {UpdateEmailRequest} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */

async function updateEmail(req, res) {
	try {
		let user = await UserDao.updateEmail(req.user.user_id, req.body.email);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}
/**
 * PATCH /me/telephone
 * @tag Users
 * @summary Updates the current user's telephone
 * @description This endpoint is used to update the current user's telephone.
 * @operationId updateTelephone
 * @bodyDescription The new telephone
 * @bodyContent {UpdateTelephoneRequest} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */

async function updateTelephone(req, res) {
	try {
		let user = await UserDao.updateTelephone(req.user.user_id, req.body.telephone);
		await TokenDao.generateAndSendSMSVerificationToken(user);
		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}
/**
 * GET /me/verify/phone
 * @tag Users
 * @summary Requests SMS verification
 * @description This endpoint is used to request an SMS verification token.
 * @operationId requestSMSVerification
 * @response 200 - SMS verification requested successfully.
 * @response 400 - Error obtaining user information.
 */
async function requestSMSVerification(req, res) {
	try {
		await TokenDao.generateAndSendSMSVerificationToken(user);
		if (user) {
			return res.status(200);
		}

		res.status(400).json({ error: "Error obtaining user information" });
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}
/**
 * POST /me/verify/phone
 * @tag Users
 * @summary Verifies the current user
 * @description This endpoint is used to verify the current user via a token.
 * @operationId verifyMe
 * @bodyDescription The token to verify the user
 * @bodyContent {VerifyUserPhoneRequest} application/json
 * @bodyRequired
 * @response 200 - User verified successfully.
 * @response 400 - Invalid token or error obtaining user information.
 */
async function verifyMe(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		let token = await TokenDao.getActiveSMSToken(user);
		if (token.token === req.body.token) {
			await TokenDao.updateToken(token.token_id, { active: false });
			user = await UserDao.updateUser(req.user.user_id, { phone_verified: true });
			return res.status(200);
		} else {
			return res.status(400).json({ error: "Invalid token" });
		}
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}

module.exports = {
	listUsers,
	me,
	updateMe,
	verifyMe,
	requestSMSVerification,
	updatePassword,
	updateEmail,
	updateTelephone,
};
