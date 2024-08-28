require("dotenv").config();
const bcrypt = require("bcrypt");
const prisma = require("../prisma/prisma");
const UserDao = require("../dao/User");
const TokenDao = require("../dao/Token");
const ReviewDao = require("../dao/Review");
const AddressDao = require("../dao/Address");
const DocumentDao = require("../dao/Document");
const FileDao = require("../dao/File");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const DriverDao = require("../dao/Driver");

const SMS = require("../lib/SMS");
const stripe = require("../lib/stripe");
const S3Helper = require("../lib/s3");
const { User } = require("@onesignal/node-onesignal");
const { DOCUMENT_TYPE, TAXI_ORDER_STATUS } = require("../lib/constants");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const { getOrders } = require("../dao/TaxiOrder");
const TaxiOrderDao = require("../dao/TaxiOrder");
const { drive } = require("googleapis/build/src/apis/drive");


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
		let users = await UserDao.getUsers({
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});
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
				addresses: {
					include: {
						address: true,
					},
				},
				driver: true
			},
		});
		if (user) {
			let payment_methods = []
			if (user.stripe_customer_id) {
				payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
			}

			delete user["password"];
			// const access_token = generateAccessToken(user);
			// const refresh_token = generateRefreshToken(user);
			user = {
				...user,
				// access_token,
				// refresh_token,
				payment_methods
			};
			return res.status(200).json(user);
		} else {
			res.status(400).json({ error: "Error obtaining user information" });
		}
		// if (user) return res.status(200).json(user);
		// res.status(400).json({ error: "Error obtaining user information" });
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
 * PATCH /me/update_user
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
async function updateUserByUserId(req, res) {
	const { user_id, data } = req.body

	try {
		let user = await UserDao.updateScheduledUser(user_id, data);
		if (user) {
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
		let emaiLExists = await UserDao.getUserByEmailOrTelephone(req.body.email);
		if (emaiLExists) return res.status(400).json({ error: "Email already exists.." });
		let user = await UserDao.updateEmail(req.user.user_id, req.body.email);
		await stripe.updateCustomerEmail(user.stripe_customer_id, req.body.email);
		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/profile_picture
 * @tag Users
 * @summary Updates the current user's profile picture
 * @operationId updateProfilePicture
 * @requestBody {ProfilePictureData} application/json - New profile picture data
 * @response 200 - Profile picture updated successfully
 * @responseContent {User} 200.application/json - Updated user details
 * @response 400 - Error updating profile picture
 */
async function updateProfilePicture(req, res) {
	const userId = req.user.user_id;
	const { image } = req.body;

	try {
		const documents = await DocumentDao.getDocumentsForUserByType(userId, DOCUMENT_TYPE.PROFILE_PICTURE);
		for (const document of documents) {
			await DocumentDao.deleteDocument(document.document_id);
		}

		// Create new document for profile picture
		const document = await DocumentDao.createDocument(image.documentData);

		// Add files to the document and upload to S3
		for (const file of image.files) {
			let base64 = file.base64;
			delete file.base64;
			let fileData = await FileDao.addFileToDocument(document.document_id, file);
			let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
			await S3Helper.SaveObject(key, base64, file.mime_type, { users: [userId] });
		}

		// Link new document to user
		await DocumentDao.linkDocumentToUser(document.document_id, userId);

		res.status(200).json({ message: 'Profile picture created successfully'});
	} catch (error) {
		console.error("Error updating profile picture:", error);
		res.status(400).json({ error: "Error updating profile picture", detail: error.message });
	}
}

/**
 * PATCH /me/taxi-preferences
 * @tag Users
 * @summary Updates the current user's taxi preferences
 * @description This endpoint is used to update the current user's taxi preferences.
 * @operationId updateUserTaxiPreferences
 * @bodyDescription The new taxi preferences
 * @bodyContent {UpdateTaxiPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Taxi preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserTaxiPreferences(req, res) {
	try {
		let user = await UserDao.updateUserTaxiPreferences(req.user.user_id, req.body.taxi_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/notification-preferences
 * @tag Users
 * @summary Updates the current user's notification preferences
 * @description This endpoint is used to update the current user's notification preferences.
 * @operationId updateUserNotificationPreferences
 * @bodyDescription The new notification preferences
 * @bodyContent {UpdateNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserNotificationPreferences(req, res) {
	try {
		let user = await UserDao.updateUserNotificationPreferences(req.user.user_id, req.body.notification_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/push-notification-preferences
 * @tag Users
 * @summary Updates the current user's push notification preferences
 * @description This endpoint is used to update the current user's push notification preferences.
 * @operationId updateUserPushNotifications
 * @bodyDescription The new push notification preferences
 * @bodyContent {UpdatePushNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserPushNotifications(req.user.user_id, req.body.push_notification_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/spicy-preferences
 * @tag Users
 * @summary Updates the current user's spicy preferences
 * @description This endpoint is used to update the current user's spicy preferences.
 * @operationId updateUserSpicyPreferences
 * @bodyDescription The new spicy preferences
 * @bodyContent {UpdateSpicyPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Spicy preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserSpicyPreferences(req, res) {
	try {
		let user = await UserDao.updateUserSpicyPreferences(req.user.user_id, req.body.spicy_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/transfer-preferences
 * @tag Users
 * @summary Updates the current user's transfer preferences
 * @description This endpoint is used to update the current user's transfer preferences.
 * @operationId updateUserTransferPreferences
 * @bodyDescription The new transfer preferences
 * @bodyContent {UpdateTransferPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Transfer preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserTransferPreferences(req, res) {
	try {
		let user = await UserDao.updateUserTransferPreferences(req.user.user_id, req.body.transfer_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/radio-preferences
 * @tag Users
 * @summary Updates the current user's radio preferences
 * @description This endpoint is used to update the current user's radio preferences.
 * @operationId updateUserRadioPreferences
 * @bodyDescription The new radio preferences
 * @bodyContent {UpdateRadioPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Radio preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserRadioPreferences(req, res) {
	try {
		let user = await UserDao.updateUserRadioPreferences(req.user.user_id, req.body.radio_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/allergies-preferences
 * @tag Users
 * @summary Updates the current user's allergies preferences
 * @description This endpoint is used to update the current user's allergies preferences.
 * @operationId updateUserAllergiesPreferences
 * @bodyDescription The new allergies preferences
 * @bodyContent {UpdateAllergiesPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Allergies preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserAllergiesPreferences(req, res) {
	try {
		let user = await UserDao.updateUserAllergiesPreferences(req.user.user_id, req.body.allergies_preferences);

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
		let phoneExists = await UserDao.getUserByEmailOrTelephone(req.body.telephone);
		if (phoneExists) return res.status(400).json({ error: "Telephone already exists.." });
		let user = await UserDao.updateTelephone(req.user.user_id, req.body);
		user = await UserDao.updateUserTelephoneVerified(req.user.user_id, false);
		//await TokenDao.generateSMSVerificationToken(user);
		await stripe.updateCustomerPhone(user.stripe_customer_id, req.body.telephone);
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
		await SMS.sendSMSVerification(req.user.telephone, token.token);
		console.log(token);
		console.info(token)
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
		console.info(token);
		if (token && (token.token === req.body.token) && (token.user_id === req.user.user_id)) {
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
async function oneSignalId(req, res) {
	try {
		let user = await UserDao.updateUser(req.user.user_id, { one_signal_id: req.body.player_id });
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error updating user information", e });
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
 * DELETE /users/{user_id}
 * @tag Users
 * @summary Deletes a user by their ID
 * @description This endpoint is used to delete a user from the system by their user ID.
 * @operationId deleteUserByUserId
 * @pathParam {string} user_id - The ID of the user to delete
 * @response 200 - User deleted successfully.
 * @response 400 - Error deleting user.
 * @response 404 - User not found.
 */
async function deleteUserByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const deletedUser = await UserDao.deleteUserByUserId(user_id);

		return res.status(200).json({
			message: "User deleted successfully.",
			user: deletedUser,
		});
	} catch (error) {
		if (error.code === 'P2025') { // Prisma specific error code for "Record to delete not found"
			return res.status(404).json({ error: "User not found." });
		}
		// Handle other errors
		console.error("Error deleting user:", error);
		return res.status(400).json({ error: "Error deleting user." });
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
 * @bodyDescription Content of the review
 * @bodyContent {ReviewRequest} application/json
 * @bodyRequired
 * @response 200 - Primary address set successfully.
 * @response 400 - Error setting primary address.
 */
async function reviewUser(req, res) {
	try {
		let user = await UserDao.getUserById(req.body.user_id);
		if (!user.reviewable_id) { 
			let reviewable = await ReviewDao.createReviewableUser(user.user_id);
			if (!reviewable) {
				return res.status(400).json({ error: "Error adding review" });
			}
			user.reviewable_id = reviewable.reviewable_id;
		}
		let review = await ReviewDao.createReview({
			comment: req.body.comment,
			rating: req.body.rating,
			feedback: req.body.feedback,
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
/**
 * GET /users/me/payments/credentials
 * @tag Users
 * @summary Get payment sheet credentials for a user
 * @description This endpoint is used to get Stripe payment sheet credentials for a particular user.
 * @operationId getPaymentSheetCredentials
 * @headerDescription Authorization Bearer token is required
 * @response 200 - {StripePaymentSheetCredentials}
 * @response 400 - Error obtaining payment sheet credentials
 */
async function getPaymentSheetCredentials(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		let credentials = await stripe.generatePaymentSheetCredentials(user);
		if (credentials) {
			return res.status(200).json(credentials);
		}
		res.status(400).json({ error: "Error obtaining payment sheet credentials" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error obtaining payment sheet credentials", e });
	}
}
async function requestToAddFundsToWallet(req, res) {
	try {
		const { amount, payment_method_id, return_url } = req.body;
	  // Create a Payment Method to handle the transaction
	  let paymentIntent = await stripe.createPaymentIntentForWallet(amount * 100, payment_method_id, req.user.stripe_customer_id, req.user.user_id, return_url);
  
	  res.status(200).json(paymentIntent);
	} catch (error) {
	  console.error('Error requesting to add funds to wallet:', error);

	}
}
async function ping(req, res) {
	let user = await UserDao.getUserById(req.user.user_id, {
		include: {
			driver: true,
			delivery_driver: true,
		},
	});
	if (!user) {
		return res.status(400).json({ error: "Error obtaining user information" });
	}
	if (user.driver) {
		let driver = await DriverDao.updateDriver(user.driver.driver_id, { last_ping_at: new Date(), is_inactive: false });
		return res.status(200).json({ message: "Driver is online" });
	}
	else if (user.delivery_driver) {
		let delliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(user.delivery_driver.delivery_driver_id, { last_ping_at: new Date(), is_inactive: false });
		return res.status(200).json({ message: "Delivery driver is online" });
	} else {
		return res.status(400).json({ error: "User is not a driver" });
	}
}

async function getSelfScheduledOrders(req, res) {
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				status: TAXI_ORDER_STATUS.PENDING,
				user_id: req.user.user_id,
			}
		});
		res.status(200).json(orders);
	} catch (e) {
		console.info("TaxiOrderController",e);
		res.status(500).json(e);
	}
}
async function getMyReviews(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		if (!user.reviewable_id) {
			return res.status(200).json([]);
		}
		let reviews = await prisma.reviews.findMany({
			where: {
				reviewable_id: user.reviewable_id
			},
			include: {
				author: {
					select: {
						first_name: true,
						last_name: true,
						user_id: true,
						user_role: true,
						documents: {
							where: {
								document_type: "PROFILE_PICTURE"
							},
							select: {
								files: true,
								document_type: true,
							}
						}
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
										document_type: "PROFILE_PICTURE"
									},
									select: {
										files: true,
										document_type: true,
									}
								}
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
										document_type: "PROFILE_PICTURE"
									},
									select: {
										files: true,
										document_type: true,
									}
								}
							},
						}
					}
				}
			},
			orderBy: {
				created_at: 'desc',  // Order by 'created_at' field in descending order
			}
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
		res.status(200).json(reviews);
	}
	catch (e) {
		console.errorTag("UserController", e);
		res.status(500).json(e);
	}
}
async function getReviewsByUserId(req, res) {
	try {
		console.log(req.params)
		let driver = await DriverDao.getDriverByUserId(req.params.user_id);

		console.log("driver", driver.business_id);
		let business = await prisma.business.findUnique({
			where: {
				business_id: driver.business_id
			}
		});
		console.log("business", business.business_id, business.reviewable_id);
		if (!business.reviewable_id) {
			return res.status(200).json([]);
		}
		let reviews = await prisma.reviews.findMany({
			where: {
				reviewable_id: business.reviewable_id
			},
			include: {
				author: {
					select: {
						first_name: true,
						last_name: true,
						user_id: true,
						user_role: true,
						documents: {
							where: {
								document_type: "PROFILE_PICTURE"
							},
							select: {
								files: true,
								document_type: true,
							}
						}
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
										document_type: "PROFILE_PICTURE"
									},
									select: {
										files: true,
										document_type: true,
									}
								}
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
										document_type: "PROFILE_PICTURE"
									},
									select: {
										files: true,
										document_type: true,
									}
								}
							},
						}
					}
				}
			},
			orderBy: {
				created_at: 'desc',  // Order by 'created_at' field in descending order
			}
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
		res.status(200).json(reviews);
	}
	catch (e) {
		console.errorTag("UserController", e);
		res.status(500).json(e);
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
	reviewUser,
	oneSignalId,
	getPaymentSheetCredentials,
	requestToAddFundsToWallet,
	updateUserTaxiPreferences,
	updateUserAllergiesPreferences,
	updateUserSpicyPreferences,
	updateUserTransferPreferences,
	updateUserRadioPreferences,
	updateUserNotificationPreferences,
	updateUserPushNotifications,
	updateProfilePicture,
	ping,
	deleteUserByUserId,
	getSelfScheduledOrders,
	getMyReviews,
	getReviewsByUserId,
	updateUserByUserId
};
