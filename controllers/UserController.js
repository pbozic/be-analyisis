require("dotenv").config();
const bcrypt = require("bcrypt");

const UserDao = require("../dao/User");
const TokenDao = require("../dao/Token");
const ReviewDao = require("../dao/Review");
const AddressDao = require("../dao/Address");
//const SMS = require("../lib/SMS");
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
		let user = await UserDao.getUserById(req.user.user_id, {
			include: {
				addresses: true,
			},
		});

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error obtaining user information" });
	} catch (e) {
		console.error(e);
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

	try {
		let user = await UserDao.updateUser(req.user.user_id, req.body);
		if (user) {
			if (req.socket)
				req.socket.emit("updateUser", user);
			return res.status(200).json(user);
		}
		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e)
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
		let user = await UserDao.updateTelephone(req.user.user_id, req.body);
		await TokenDao.generateSMSVerificationToken(user);
		// TODO: Send SMS verification token
		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e);
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
		let token = await TokenDao.generateSMSVerificationToken(req.user);
		//await SMS.sendSMSVerification(user.telephone, token.token);
		console.log(token);
		if (token) {
			return res.status(200).json({ message: "Token sent" });
		}

		res.status(400).json({ error: "Error obtaining user information" });
	} catch (e) {
		console.log(e)
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
		console.log(token);
		if (token && (token.token === req.body.token)) {
			await TokenDao.updateToken(token.token_id, { active: false });
			user = await UserDao.updateUser(req.user.user_id, { phone_verified: true });
			return res.status(200).json({message: "Phone verified successfully."});
		} else {
			return res.status(400).json({ error: "Invalid token" });
		}
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}
/**
 * POST /me/address
 * @tag Users
 * @summary Adds an address to the current user
 * @description This endpoint is used to add an address to the current user.
 * @operationId addAddress
 * @bodyDescription The address to add
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Address added successfully. Returns the updated user's details.
 * @responseContent {UserAddress} 200.application/json
 * @response 400 - Error adding address.
 */
async function addAddress(req, res) {
	try {
		let address = await AddressDao.addAddress(req.body);
		let userAddress = await AddressDao.addUserAddress(req.user.user_id, address.address_id);
		if (userAddress) {
			return res.status(200).json(userAddress);
		}
		res.status(400).json({ error: "Error adding address1" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error adding address", e });
	}
}
/**
 * DELETE /me/address/{address_id}
 * @tag Users
 * @summary Deletes an address from the current user
 * @description This endpoint is used to delete an address from the current user.
 * @operationId deleteAddress
 * @pathParam {string} address_id - The ID of the address to delete
 * @response 200 - Address deleted successfully.
 * @response 400 - Error deleting address.
 */
async function deleteAddress(req, res) {
	try {
		await AddressDao.deleteUserAddress(req.user.user_id, req.params.address_id);
		return res.status(200).json({ message: "Address deleted successfully." });
	} catch (error) {
		console.error(error);
		return res.status(400).json({ error: "Error deleting address." });
	}
}

/**
 * PATCH /me/address/{address_id}
 * @tag Users
 * @summary Edits an address from the current user
 * @description This endpoint is used to edit an address from the current user.
 * @operationId editAddress
 * @pathParam {string} address_id - The ID of the address to edit
 * @bodyDescription The address to edit
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Address edited successfully. Returns the updated user's details.
 * @responseContent {UserAddress} 200.application/json
 * @response 400 - Error editing address.
 * @responseContent {object} 400.application/json
 */
async function editAddress(req, res) {
	try {
		let userAddress = await AddressDao.editUserAddress(req.user.user_id, req.params.address_id, req.body);
		if (userAddress) {
			return res.status(200).json(userAddress);
		}
		res.status(400).json({ error: "Error editing address" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error adding address", e });
	}
}

/**
 * PATCH /me/address/{address_id}/primary
 * @tag Users
 * @summary Sets an address as the primary address for the current user
 * @description This endpoint is used to set an address as the primary address for the current user.
 * @operationId setPrimaryAddress
 * @pathParam {string} address_id - The ID of the address to set as primary
 * @response 200 - Primary address set successfully.
 * @response 400 - Error setting primary address.
 */

async function setPrimaryAddress(req, res) {
	try {
		let userAddress = await AddressDao.setPrimaryUserAddress(req.user.user_id, req.params.address_id);
		if (userAddress) {
			return res.status(200).json({ error: "Primary address set." });
		}
		res.status(400).json({ error: "Error setting primary address" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error setting primary address", e });
	}
}
/**
 * POST /user/review
 * @tag Users
 * @summary Review a user
 * @description This endpoint is used add a review of user.
 * @operationId reviewUser
 * @bodyDescription Conent of the review
 * @bodyContent {ReviewRequest} application/json
 * @bodyRequired
 * @response 200 - Primary address set successfully.
 * @response 400 - Error setting primary address.
 */
async function reviewUser(req, res) {
	try {
		let user = await UserDao.getUserById(req.body.user_id);
		let review = await ReviewDao.createReview({
	
			comment: req.body.comment,
			rating: req.body.rating,
			author: {
				connect: {
					user_id: req.user.user_id,
				},
			},
			reviewable: {
				connect: {
					reviewable_id: user.reviewable_id,
				},
			}
	
		});
		if (review) {
			return res.status(200).json(review);
		}
		res.status(400).json({ error: "Error adding review" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error adding review", e });
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
	addAddress,
	deleteAddress,
	editAddress,
	setPrimaryAddress,
	reviewUser
};
