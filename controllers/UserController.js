require("dotenv").config();
const bcrypt = require("bcrypt");
const prisma = require("../prisma/prisma");
const UserDao = require("../dao/User");
const BusinessUsersDao = require("../dao/BusinessUsers");
const TokenDao = require("../dao/Token");
const ReviewDao = require("../dao/Review");
const AddressDao = require("../dao/Address");
const DocumentDao = require("../dao/Document");
const FileDao = require("../dao/File");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const DriverDao = require("../dao/Driver");
const WalletFundsDao = require("../dao/WalletFunds");
const ReferralDao = require("../dao/Referrals")
const SMS = require("../lib/SMS");
const stripe = require("../lib/stripe");
const S3Helper = require("../lib/s3");
const { User } = require("@onesignal/node-onesignal");
const { DOCUMENT_TYPE, TAXI_ORDER_STATUS, USER_ROLE, CREDITS, CASHBACK_SOURCE } = require("../lib/constants");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const { getOrders } = require("../dao/TaxiOrder");
const TaxiOrderDao = require("../dao/TaxiOrder");
const DeliveryOrderDao = require("../dao/DeliveryOrder");
const { drive } = require("googleapis/build/src/apis/drive");
const GroupDao = require("../dao/Group");
const CashbackDao = require("../dao/Cashback");

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
				child_users: { include:{child_user: true}},
				parent_user: { include:{parent_user: true}},
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
async function listPersonalUsers(req, res) {
	try {
		let users = await UserDao.getUsers({
			where: {
				user_role: USER_ROLE.PERSONAL,
				parent_user: null,
				disabled: false
			},
			include: {
				addresses: {
					include: {
						address: true,
					},
				}
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
 * GET /users/:user_id
 * @tag Users
 * @summary Get a user by ID
 * @description Retrieves detailed information about a specific user by their ID.
 * @operationId getUserById
 * @pathParam {string} user_id - The ID of the user to retrieve
 * @response 200 - Successful operation, returns detailed user information
 * @responseContent {User} 200.application/json
 * @response 404 - User not found
 * @response 400 - Error retrieving user information
 */
async function getUserById(req, res) {
	try {
		let user = await UserDao.getUserById(req.params.user_id, {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
				child_users: { include:{child_user: true}},
				parent_user: { include:{parent_user: true}},
			},
		});
		if (user) {
			delete user["password"];
			let profile = await DocumentDao.getDocumentsForUserByType(user.user_id, DOCUMENT_TYPE.PROFILE_PICTURE);
			user = {
				...user,
				profile_picture: profile[0]?.files[0]?.url,
			};
			return res.status(200).json(user);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		console.error("Error retrieving user:", error);
		res.status(400).json({ error: "Error retrieving user information", detail: error.message });
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
		//console.log("/me req: ",req)
		let user = await UserDao.getUserById(req.user.user_id, {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
				driver: true,
				delivery_driver: true,
				child_users: { include:{child_user: {select: {user_id: true, first_name: true, last_name: true}}, allowance: true}},
				parent_user: { include:{parent_user: {select: {user_id: true, first_name: true, user_role: true}}, allowance: true}},
				referrals_made: true,
				referral: { include: {referrer: { select: { first_name: true, last_name: true } } } }
			},
		});
		console.log("/me user: ",user?.user_id)
		if (user) {
			let payment_methods = []
			if (user.stripe_customer_id) {
				payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
			}

			delete user["password"];
			// const access_token = generateAccessToken(user);
			// const refresh_token = generateRefreshToken(user);
			let profile = await DocumentDao.getDocumentsForUserByType(user.user_id, DOCUMENT_TYPE.PROFILE_PICTURE);
			user = {
				...user,
				// access_token,
				// refresh_token,
				profile_picture: profile[0]?.files[0]?.url,
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
		console.log("changing password")
		let userCheck = await UserDao.getUserById(req.user.user_id, {
			select: {
				password: true,
				email: true,
				user_id: true,
			},
		});
		console.log("changing password 1")
		let correctPw = await bcrypt.compare(postData.password, userCheck.password);
		if (!correctPw) return res.status(400).json({ error: "Wrong password.." });
		let hash = await bcrypt.hash(postData.new_password, Number(process.env.BCRYPT_SALT_ROUNDS));
		user = await UserDao.updateUserPassword(req.user.user_id, hash);
		
		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e)
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
		let user = await UserDao.getUserByEmailOrTelephone(req.body.email);
		if (user) return res.status(400).json({ error: "Email already exists.." });
		let updated_user = await UserDao.updateEmail(req.user.user_id, req.body.email);

		if(!updated_user.stripe_customer_id){
			const stripe_customer = await stripe.createCustomer(
				updated_user.email,
				updated_user.first_name + " " + updated_user.last_name,
				updated_user.telephone
			)
			await UserDao.updateStripeCustomerId(req.user.user_id,stripe_customer.id)
		}else{
			await stripe.updateCustomerEmail(updated_user.stripe_customer_id, req.body.email);
		}

		if (updated_user) return res.status(200).json(updated_user);

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
		//console.log("files", image.files)
		// Add files to the document and upload to S3
		for (const file of image.files) {
			let base64 = file.base64;
			delete file.base64;
			let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
			let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
			await S3Helper.SaveObject(key, base64, file.mime_type, { users: [userId] }, fileData, document.public);
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
 * PATCH /me/taxi-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's push notification preferences
 * @description This endpoint is used to update the current user's push notification preferences.
 * @operationId updateUserTaxiPushNotifications
 * @bodyDescription The new push notification preferences
 * @bodyContent {UpdatePushNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserTaxiPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserTaxiPushNotifications(req.user.user_id, req.body.taxi_push_notification_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/transfer-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's transfer push notification preferences
 * @description This endpoint is used to update the current user's transfer push notification preferences.
 * @operationId updateUserTransferPushNotifications
 * @bodyDescription The new push notification preferences for transfers
 * @bodyContent {UpdatePushNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Transfer push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserTransferPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserTransferPushNotifications(req.user.user_id, req.body.transfer_push_notification_preferences);

		if (user) return res.status(200).json(user);

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
	}
}

/**
 * PATCH /me/delivery-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's delivery push notification preferences
 * @description This endpoint is used to update the current user's delivery push notification preferences.
 * @operationId updateUserDeliveryPushNotifications
 * @bodyDescription The new push notification preferences for deliveries
 * @bodyContent {UpdatePushNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Delivery push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateUserDeliveryPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserDeliveryPushNotifications(req.user.user_id, req.body.delivery_push_notification_preferences);

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
		await SMS.sendSMSVerification(req.user.telephone, token.token, req.user.country_code);
		console.log(token);
		console.info(token)
		if (token) {
			return res.status(200).json({ message: "Token sent", telephone:req.user.telephone });
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
 * PATCH /users/active/{user_id}
 * @tag Users
 * @summary Updates a user's active field by their ID
 * @description This endpoint is used to update a user's active field by their ID.
 * @operationId updateUserActiveByUserId
 * @pathParam {string} user_id - The ID of the user to disable
 * @bodyDescription The new value
 * @bodyContent {boolean} application/json
 * @response 200 - User active field updated successfully.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating active field.
 */
async function updateUserActiveByUserId(req, res) {
	const { user_id } = req.params;
	const { active } = req.body
	try {
		const updatedUser = await UserDao.updateUserActive(user_id,active);
		return res.status(200).json({
			message: "User active field updated successfully.",
			user: updatedUser,
		});
	} catch (error) {
		console.error("Error updating active field:", error);
		return res.status(400).json({ error: "Error updating active field."});
	}
}


/**
 * PATCH /users/disabled/{user_id}
 * @tag Users
 * @summary Disables a user by their ID
 * @description This endpoint is used to disable a user's account by their user ID.
 * @operationId disableUserByUserId
 * @pathParam {string} user_id - The ID of the user to disable
 * @response 200 - User disabled successfully.
 * @responseContent {User} 200.application/json
 * @response 400 - Error disabling user.
 */
async function updateUserDisabledByUserId(req, res) {
	const { user_id} = req.params;
	const { disabled } = req.body
	try {
		const disabledUser = await UserDao.updateUserDisabled(user_id,disabled);

		return res.status(200).json({
			message: "User disabled field updated successfully.",
			user: disabledUser,
		});
	} catch (error) {
		console.error("Error updating disabled field:", error);
		return res.status(400).json({ error: "Error updating disabled field."});
	}
}

/**
 * PATCH /users/soft_delete/{user_id}
 * @tag Users
 * @summary Performs a "soft delete" for a user by their ID
 * @description This endpoint is used to "soft delete" a user's account by their user ID.
 * @operationId softDeleteUserByUserId
 * @pathParam {string} user_id - The ID of the user to disable
 * @response 200 - User "soft delete" successful.
 * @responseContent {User} 200.application/json
 * @response 400 - Error soft deleting user.
 */
async function softDeleteUserByUserId(req, res) {
	const {user_id} = req.params;
	try {
		const disabledUser = await UserDao.updateUserDisabled(user_id,true);
		const wipedUser = await UserDao.wipeUserPersonalData(user_id);
		return res.status(200).json({
			message: "User \"soft delete\" successful.",
			user: wipedUser,
		});
	} catch (error) {
		console.error("Error soft deleting user:", error);
		return res.status(400).json({ error: "Error soft deleting user."});
	}
}

/**
 * PATCH /me/disabled
 * @tag Users
 * @summary Disables the current user
 * @description This endpoint is used to disable the current user.
 * @operationId disableMe
 * @bodyDescription
 * @bodyContent
 * @bodyRequired
 * @response 200 - User disabled successfully. Returns user.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function disableMe(req, res) {
	try {
		let disabledUser = await UserDao.updateUserDisabled(req.user.user_id, true);
		if (disabledUser) return res.status(200).json({
			message: "User disabled successfully.",
			user: disabledUser
		});

		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ error: "Error updating user information", e });
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
 * GET /users/me/payment-sheet
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
		const { amount, currency, payment_method_id, return_url } = req.body;
		if((!amount && amount<=0) || !currency || !payment_method_id) {
			return res.status(400).json({ error: 'Error requesting to add funds to wallet: Invalid parameters!' });
		}
	  // Create a Payment Method to handle the transaction
	  let paymentIntent = await stripe.createPaymentIntentForWallet(Math.round(amount * 100), currency, payment_method_id, req.user.stripe_customer_id, req.user.user_id, return_url);
	  // const newWalletFunds = await WalletFundsDao.createWalletFunds(req.user.user_id,paymentIntent.latest_charge, amount * 100);
	  res.status(200).json(paymentIntent);
	} catch (error) {
	  console.error('Error requesting to add funds to wallet:', error);
	  res.status(400).json({ error: 'Error requesting to add funds to wallet' });
	}
}
async function requestPaymentIntent(req, res) {
	try {
		const { amount, currency, return_url } = req.body;
		if((!amount && amount<=0) || !currency) {
			return res.status(400).json({ error: 'Error requesting payment intent: Invalid parameters!' });
		}
	  // Create a Payment Method to handle the transaction
	  let paymentIntent = await stripe.createPaymentIntentForPlatform(Math.round(amount * 100), currency, req.user.stripe_customer_id, { user_id: req.user.user_id, type: "wallet_topup" });
	  res.status(200).json(paymentIntent);
	} catch (error) {
	  console.error('Error requesting payment intent:', error);
	  res.status(400).json({ error: 'Error requesting payment intent' });
	}

}

async function confirmPaymentIntent(req, res) {
	try {
		const { payment_intent_id } = req.body;
		if(!payment_intent_id) {
			return res.status(400).json({ error: 'Error confirming payment intent: Invalid parameters!' });
		}
	  // Confirm the Payment Intent
	  let paymentIntent = await stripe.confirmPaymentIntent(payment_intent_id);
	  res.status(200).json(paymentIntent);
	} catch (error) {
	  console.error('Error confirming payment intent:', error);
	  res.status(400).json({ error: 'Error confirming payment intent' });
	}
}
async function ping(req, res) {
	console.log("ping, req.user ", req.user);
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
		console.log(req.params);

		// Check if the user_id corresponds to a driver
		let driver = await DriverDao.getDriverByUserId(req.params.user_id);

		if (driver) {
			// Fetch business associated with the driver
			let business = await prisma.business.findUnique({
				where: {
					business_id: driver.business_id
				}
			});

			if (!business?.reviewable_id) {
				return res.status(200).json([]);
			}

			// Fetch reviews for the business
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
									document_type: true
								}
							}
						}
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
											document_type: true
										}
									}
								}
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
											document_type: true
										}
									}
								}
							}
						}
					}
				},
				orderBy: {
					created_at: 'desc'
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
		} else {
			// If not a driver, assume it's a regular user and fetch their reviews
			let user = await prisma.users.findUnique({
				where: {
					user_id: req.params.user_id
				}
			});

			if (!user) {
				return res.status(404).json({ error: 'User not found' });
			}

			let reviews = await prisma.reviews.findMany({
				where: {
					OR: [
						{ author_id: user.user_id },  // Reviews authored by the user
						{ reviewable: { user: { some: { user_id: user.user_id } } } }  // Reviews for the user
					]
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
									document_type: true
								}
							}
						}
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
											document_type: true
										}
									}
								}
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
											document_type: true
										}
									}
								}
							}
						}
					}
				},
				orderBy: {
					created_at: 'desc'
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
	} catch (e) {
		console.error("UserController", e);
		res.status(500).json({ error: 'Internal server error' });
	}
}


/**
 * POST /users/me/group_user/register-child
 * @tag GroupUser
 * @summary Register a new child user - new user and connected group_user entry
 * @description This endpoint is used to register a new user and create group_user entry .
 * @operationId registerNewUser
 * @bodyDescription The required data to register a new user
 * @bodyContent {RegisterRequest} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Error something went wrong.
 */
async function registerChildUser(req, res) {
	let user_data = req.body;
	const parent_user_id = user_data.parent_user_id;
	delete user_data["parent_user_id"];

	try {

		if (!user_data.email)
		{
			user_data.email = "";
		}
		user_data.email = user_data.email.toLowerCase();
		let UserExistsPhone = await UserDao.getUserByTelephone(user_data.telephone);
		if (UserExistsPhone) {
			return res.status(400).json({ error: "Telephone already in use!" });
		}
		let UserExistsEmail = await UserDao.getUserByEmail(user_data.email);
		if (UserExistsEmail) {
			return res.status(400).json({ error: "Email already in use!" });
		}
		let hash = await bcrypt.hash(user_data.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let stripeCustomer = await stripe.createCustomer(
			user_data.email,
			user_data.first_name + " " + user_data.last_name,
			user_data.telephone,
		);
		const userRole = user_data.user_role || "PERSONAL";
		let userObj = {
			...user_data,
			date_of_birth: new Date(user_data.date_of_birth),
			password: hash,
			user_role: userRole,
			stripe_customer_id: stripeCustomer.id,
			reviewable: {
				create: {

				},
			}
		};
		delete userObj["confirm_password"];
		let user = await UserDao.createNewUser(userObj);
		delete user["password"];

		//create and connect group_user entry
		const group_user_data = {
			parent_user_id: parent_user_id,
			child_user_id: user.user_id,
		}
		const group_user_entry = GroupDao.createGroupUser(group_user_data)

		res.status(200).json({ user,group_user_entry });
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error something went wrong..", e });
	}
}

/**
 * PATCH /users/me/group_user/status
 * @tag Users
 * @summary Updates the enabled field of the given child_user_id
 * @description This endpoint is used to update enabled field of the given child_user_id
 * @operationId updateChildUser
 * @bodyDescription The child's group_user_id and value to set for the child user's enabled field
 * @bodyContent {group_user_id,value}
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated group_user.
 * @responseContent {group_user} 200.application/json
 * @response 400 - Error updating group user enabled status.
 */
async function updateChildUserEnabledByGroupUserId(req, res) {
	const { group_user_id, value } = req.body

	if (!group_user_id || typeof value !== 'boolean') {
		return res.status(400).json({ error: "Invalid input. Please provide a valid group_user_id and a boolean value." });
	}

	try {
		let group_user = await GroupDao.updateGroupUserEnabled(group_user_id, value);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: "Error updating group user enabled status" });
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error updating group user enabled status", e });
	}
}

/**
 * PATCH /users/me/group_user/status
 * @tag Users
 * @summary Updates the enabled field of the given child_user_id
 * @description This endpoint is used to update enabled field of the given child_user_id
 * @operationId updateChildUser
 * @bodyDescription The child's group_user_id and value to set for the child user's enabled field
 * @bodyContent {group_user_id,value}
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated group_user.
 * @responseContent {group_user} 200.application/json
 * @response 400 - Error updating group user enabled status.
 */
async function updateChildUserAllowanceByGroupUserId(req, res) {
	const { group_user_id, value, type } = req.body

	try {
		let group_user = await GroupDao.updateGroupUserAllowance(group_user_id, value, type);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: "Error updating group user enabled status" });
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error updating group user enabled status", e });
	}
}

/**
 * DELETE /users/me/group_user/delete/:group_user_id
 * @tag Users
 * @summary Deletes a group_user by their ID
 * @description This endpoint is used to delete a child user from the system by their group_user ID.
 * @operationId deleteChildUserByGroupUserId
 * @pathParam {string} group_user_id - The ID of the child user to delete
 * @response 200 - User deleted successfully.
 * @response 400 - Error deleting user.
 * @response 404 - User not found.
 */
async function deleteChildUserByGroupUserId(req, res) {
	const group_user_id  = req.params.group_user_id

	try {
		let group_user = await GroupDao.deleteGroupUser(group_user_id);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: "Error deleting group user" });
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error deleting group user", e });
	}
}

// /**
//  * DEPRECATED CODE DUE TO ADDING WALLET_FUNDS
//  * GET /users/:user_id/wallet
//  * @tag Users
//  * @summary Get wallet balance for regular wallet.
//  * @description This endpoint is used to check wallet balance for a particular user.
//  * @operationId getPaymentSheetCredentials
//  * @headerDescription Authorization Bearer token is required
//  * @response 200 - {wallet_balance:float}
//  * @response 400 - Error checking wallet balances
//  */
// async function getWalletBalance(req, res) {
// 	try {
// 		let user = await UserDao.getUserById(req.params.user_id);
// 		if (user) {
// 			return res.status(200).json({ wallet_balance: user.wallet_balance });
// 		}
// 		res.status(400).json({ error: "Error obtaining wallet balance" });
// 	} catch (e) {
// 		console.log(e);
// 		res.status(400).json({ error: "Error obtaining wallet balance", e });
// 	}
// }

/**
 * GET /users/:user_id/wallet
 * @tag Users
 * @summary Get wallet balance from wallet_funds.
 * @description This endpoint is used to check available wallet balance for a particular user.
 * @operationId getPaymentSheetCredentials
 * @headerDescription Authorization Bearer token is required
 * @response 200 - {wallet_balance:float}
 * @response 400 - Error checking wallet balances
 */
async function getAvailableWalletBalance(req, res) {
	try {
		let balance = await WalletFundsDao.getAvailableWalletBalance(req.params.user_id);

		return res.status(200).json({ wallet_balance: balance });

	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error obtaining wallet balance", e });
	}
}

/**
 * GET /users/:user_id/family_wallet
 * @tag Users
 * @summary Get family wallet type and minimum between allowance and actual family wallet balance.
 * @description This endpoint is used to check wallet balance and type for a particular user.
 * @operationId getPaymentSheetCredentials
 * @headerDescription Authorization Bearer token is required
 * @response 200 - {family_wallet_balance:float,family_wallet_type:string}
 * @response 400 - Error checking wallet balances
 */
async function getFamilyWalletBalanceAndType(req, res) {
	try {
		let group_user = await GroupDao.getGroupUserByChildId(req.params.user_id);
		if(group_user===null){
			return res.status(200).json({ parent_wallet_balance: 0, allowance: 0, family_wallet_type: null });
		}else if (group_user) {
			console.log(group_user);
			if(group_user.enabled){
				const parent_wallet_balance = await WalletFundsDao.getAvailableWalletBalance(group_user.parent_user.user_id);
				return res.status(200).json({
					parent_wallet_balance: parent_wallet_balance,
					allowance: group_user.allowance,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? "BUSINESS" : "FAMILY"
				});
			}else{
				return res.status(200).json({
					parent_wallet_balance: 0,
					allowance: 0,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? "BUSINESS" : "FAMILY"
				});
			}
		}
		res.status(400).json({ error: "Error obtaining family wallet balance and type" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error obtaining family wallet balance and type", e });
	}
}

/**
 * PATCH /users/:user_id/wallet
 * @tag Users
 * @summary Update wallet balance for a user.
 * @description This endpoint is used to update the wallet balance for a particular user.
 * @operationId updateWalletBalance
 * @pathParam {string} user_id - The ID of the user whose wallet balance is to be updated.
 * @bodyDescription The new wallet balance
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Wallet balance updated successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating wallet balance.
 */
async function updateWalletBalance(req, res) {
	const { user_id } = req.params;
	const { amount, documents } = req.body;

	try {
		let new_transaction = await UserDao.updateWalletBalance(user_id, amount, documents);
		if (new_transaction) {
			const wallet_balance = await WalletFundsDao.getAvailableWalletBalance(user_id)/100
			return res.status(200).json({ message: "Wallet balance updated successfully.",wallet_balance});
		}
		res.status(400).json({ error: "Error updating wallet balance" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error updating wallet balance", e });
	}
}

async function getTransactions(req, res) {
	const { user_id } = req.params;

	try {
		const transactions = await UserDao.getTransactions(user_id);
		if (transactions) {
			return res.status(200).json(transactions);
		}
		res.status(400).json({ error: "Error updating wallet balance" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error fetching transactions", e });
	}
}

/**
 * PATCH /users/language
 * @tag Users
 * @summary Update the language preference for a user.
 * @description This endpoint is used to update the language preference for a particular user.
 * @operationId updateUserLanguage
 * @bodyDescription The user selected Language
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Language updated successfully. Returns the updated user details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user language.
 */
async function updateUserLanguage(req, res) {
	try {
		//console.log("language body req", req.body)
		const updatedUser = await UserDao.updateUserLanguage(req.body.user_id, req.body.language);
		if (updatedUser) {
			return res.status(200).json(updatedUser);
		}
		res.status(400).json({ error: "Error updating user language." });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error updating user language.", e });
	}
}

async function getUserByReferralCode(req, res) {
	try {
		const user = await UserDao.getUserByReferralCode(req.params.code)
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: "Error fetching user by referral code." });
	} catch (err) {
		res.status(400).json({ error: "Error fetching user by referral code.", err });
	}
}

/**
 * POST /users/me/redeem-referral-code
 * @tag Users
 * @summary Redeem a referral code for an existing user
 * @description This endpoint allows an existing user to redeem a referral code
 * @operationId redeemReferralCode
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Referral code redeemed successfully
 * @response 400 - Error redeeming referral code
 */
async function redeemReferralCode(req, res) {
	try {
		const { referral_code } = req.body;
		const user_id = req.user.user_id;

		// First check if user already has a referral
		const existingReferral = await ReferralDao.getReferralByReferredUserId(user_id);
		if (existingReferral) {
			return res.status(400).json({ error: "User has already redeemed a referral code" });
		}
		// Find the referrer by their referral code
		const referrer = await UserDao.getUserByReferralCode(referral_code);
		if (!referrer) {
			return res.status(400).json({ error: "Invalid referral code" });
		}
		// Prevent self-referral
		if (referrer.user_id === user_id) {
			return res.status(400).json({ error: "Cannot use own referral code" });
		}
		// Referrer can only refer up to 10 people
		if (referrer.referrals_made?.length >= 10) {
			return res.status(400).json({ error: "This user has already referred 10 people" });
		}
		const referral = await ReferralDao.createReferral(referrer.user_id, user_id, referral_code);

		return res.status(200).json({ message: "Referral code redeemed successfully", referral });
	} catch (error) {
		return res.status(400).json({ error: error.message || "Error redeeming referral code" });
	}
}

async function claimReward(req, res) {
	try {
		const { referral_id } = req.body;
		if (!referral_id) {
			return res.status(400).json("Missing referral_id in the request body!");
		}

		const alreadyClaimed = await ReferralDao.getReferralByReferralId(referral_id);
		if (alreadyClaimed?.reward_claimed) {
			return res.status(400).json({ error: "Reward already claimed!" });
		}

		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		await WalletFundsDao.createCredit({
			expires_at: expiryDate,
			user: { connect: { user_id: req.user.user_id } },
			amount: CREDITS.TAXI,
			type: 'TAXI', // we add taxi credits on referral
			referral: { connect: { referral_id: referral_id } }
		});

		const referral = await ReferralDao.updateReferralRewardClaimed(referral_id, true);
		if (!referral) {
			return res.status(400).json({ error: "Error claiming reward" });
		}

		return res.status(200).json(referral);
	} catch (error) {
		return res.status(400).json({ error: error.message || "Error claiming reward" });
	}
}

async function getUserCredits(req, res) {
	try {
		const { type } = req.params;
		const { user_id } = req.user;
		const availableCredits = await WalletFundsDao.getAvailableCredits(user_id, type);
		const expiredCredits = await WalletFundsDao.getExpiredCredits(user_id, type);
		const cashbacks = await CashbackDao.getPendingUserCashbackByType(user_id, type);

		return res.status(200).json({availableCredits: availableCredits, expiredCredits: expiredCredits, cashbacks: cashbacks});
	} catch (error) {
		return res.status(400).json({ error: error.message || "Error fetching user credits" });
	}
}

async function getMyActiveOrderIds(req, res) {
	const user_id = req.user.user_id
	try {
		const delivery_order_ids = await DeliveryOrderDao.getActiveOrderIdsForUser(user_id)
		const taxi_order_ids = await TaxiOrderDao.getActiveOrderIdsForUser(user_id)

		return res.status(200).json({
			taxi_order_ids,
			delivery_order_ids
		});
	} catch (error) {
		return res.status(400).json({ error: error.message || "Error fetching user active order ids" });
	}
}

async function getReferral(req, res) {
	try {
		const referral = ReferralDao.getReferralByReferredUserId(req.user.user_id)
		if (!referral) return res.status(400).json({ error: 'Error fetching referral' });
		return res.status(200).json(referral);
	} catch (error) {
		return res.status(400).json({ error: error.message || 'Error fetching referral' });
	}
}

module.exports = {
	getReferral,
	claimReward,
	redeemReferralCode,
	getUserByReferralCode,
	listUsers,
	listPersonalUsers,
	getUserById,
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
	updateUserTaxiPushNotifications,
	updateProfilePicture,
	ping,
	deleteUserByUserId,
	getSelfScheduledOrders,
	getMyReviews,
	getReviewsByUserId,
	updateUserByUserId,
	updateUserTransferPushNotifications,
	updateUserDeliveryPushNotifications,
	disableMe,
	updateUserDisabledByUserId,
	updateUserActiveByUserId,
	registerChildUser,
	updateChildUserEnabledByGroupUserId,
	updateChildUserAllowanceByGroupUserId,
	deleteChildUserByGroupUserId,
	getFamilyWalletBalanceAndType,
	// getWalletBalance,
	getAvailableWalletBalance,
	getTransactions,
	updateWalletBalance,
	updateUserLanguage,
	softDeleteUserByUserId,
	requestPaymentIntent,
	confirmPaymentIntent,
	getUserCredits,
	getMyActiveOrderIds
};
