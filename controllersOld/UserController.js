import { config } from 'dotenv';
import bcrypt from 'bcrypt';

import prisma from '../prisma/prisma.js';
import UserDao from '../dao/User.js';
import BusinessDao from '../dao/Business.js';
import TokenDao from '../dao/Token.js';
import AddressDao from '../dao/Address.js';
import FileDao from '../dao/File.js';
import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import DriverDao from '../dao/Driver.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import ReferralDao from '../dao/Referrals.js';
import SMS from '../lib/SMS.js';
import stripe from '../lib/stripe.js';
import S3Helper from '../lib/s3.js';
import {
	TAXI_ORDER_STATUS,
	DELIVERY_ORDER_STATUS,
	USER_ROLE,
	CREDITS,
	FUNDS_TYPE,
	SERVICE_TYPE_TO_FUNDS_TYPE,
	CASHBACK_TYPE,
	ACCOUNT_ACTIONS_REASON,
	ORDER_TYPE,
	MAX_WALLET_FUNDS,
} from '../lib/constants.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import ReservationDao from '../dao/TableReservation.js';
import GroupDao from '../dao/Group.js';
import CashbackDao from '../dao/Cashback.js';
config();
/**
 * GET /users
 * @tag Users
 * @summary Get a list of users
 * @description Returns a list of users.
 * @operationId getUsers
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
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
				child_users: { include: { child_user: true } },
				parent_user: { include: { parent_user: true } },
			},
		});
		if (users) {
			res.status(200).json(users);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of users..',
				users,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error obtaining list of users..', e });
	}
}
/**
 * GET /users
 * @tag Users
 * @summary Get a list of users
 * @description Returns a list of users.
 * @operationId getUsers
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function listPersonalUsers(req, res) {
	try {
		let users = await UserDao.getUsers({
			where: {
				user_role: USER_ROLE.PERSONAL,
				parent_user: null,
				disabled: false,
			},
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
				error: 'Error obtaining list of users..',
				users,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error obtaining list of users..', e });
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
 * @responseContent {object} 200.application/json
 * @response 404 - User not found
 * @response 400 - Error retrieving user information
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
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
				child_users: { include: { child_user: true } },
				parent_user: { include: { parent_user: true } },
				profile_picture: true,
			},
		});
		if (user) {
			delete user['password'];
			user = {
				...user,
				profile_picture: user.profile_picture.url,
			};
			return res.status(200).json(user);
		} else {
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Error retrieving user:', error);
		res.status(400).json({ error: 'Error retrieving user information', detail: error.message });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error obtaining user information.
 * @responseContent {object} 400.application/json
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicles (see ./prisma/schemas/transport.prisma)
 * @prisma_model driver_activity_logs (see ./prisma/schemas/transport.prisma)
 * @prisma_model delivery_drivers (see ./prisma/schemas/delivery.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
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
				driver: {
					include: {
						vehicles: {
							include: {
								vehicle: {
									include: {
										current_driver: true,
									},
								},
							},
						},
						current_vehicle: true,
						activity_logs: {
							orderBy: {
								started_at: 'desc',
							},
						},
					},
				},
				delivery_driver: true,
				child_users: {
					include: {
						child_user: { select: { user_id: true, first_name: true, last_name: true } },
						allowance: true,
					},
				},
				parent_user: {
					include: {
						parent_user: { select: { user_id: true, first_name: true, user_role: true } },
						allowance: true,
					},
				},
				referrals_made: true,
				referral: { include: { referrer: { select: { first_name: true, last_name: true } } } },
				user_favorite_businesses: true,
				business_users: {
					include: {
						business: {
							include: {
								address: true,
								delivery_address: true,
								business_local_locations: {
									where: {
										time: {
											gte: new Date(),
										},
									},
									include: {
										local_location: {
											include: {
												address: true,
											},
										},
									},
									orderBy: {
										time: 'asc',
									},
								},
							},
						},
						operating_address: true,
					},
				},
				profile_picture: true,
			},
		});
		if (user.driver) {
			user.driver.business = await BusinessDao.getBusinessById(user.driver.business_id);
		}
		console.log('/me user: ', user?.user_id);
		if (user) {
			let payment_methods = [];
			if (user.stripe_customer_id) {
				payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
			}
			console.log(user.business_users, 'business_users from this user');
			if (user.business_users) {
				for (const businessUser of user.business_users) {
					if (businessUser.business) {
						const paymentMethods = await stripe.getPaymentMethods(businessUser.business.stripe_customer_id);
						console.log(businessUser.business.stripe_customer_id, 'business_id');
						if (paymentMethods && paymentMethods.length > 0) {
							businessUser.business.payment_methods = paymentMethods;
						}
					}
				}
			}

			delete user['password'];
			// const access_token = generateAccessToken(user);
			// const refresh_token = generateRefreshToken(user);
			user = {
				...user,
				// access_token,
				// refresh_token,
				profile_picture: user.profile_picture.url,
				payment_methods,
			};
			return res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error obtaining user information' });
		}
	} catch (e) {
		console.error(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}
/**
 * PATCH /me
 * @tag Users
 * @summary Updates the current user's details
 * @description This endpoint is used to update the current user's details.
 * @operationId updateMe
 * @bodyDescription The data to update for the current user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateMe(req, res) {
	try {
		let user = await UserDao.updateUser(req.user.user_id, req.body);
		if (user) {
			if (req.userSocket) req.userSocket.emit('updateUser', user);
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/update_user
 * @tag Users
 * @summary Updates the current user's details
 * @description This endpoint is used to update the current user's details.
 * @operationId updateMe
 * @bodyDescription The data to update for the current user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserByUserId(req, res) {
	const { user_id, data } = req.body;
	try {
		let user = await UserDao.updateScheduledUser(user_id, data);
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/password
 * @tag Users
 * @summary Updates the current user's password
 * @description This endpoint is used to update the current user's password.
 * @operationId updatePassword
 * @bodyDescription The current password and the new password
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Password updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updatePassword(req, res) {
	try {
		let postData = req.body;
		let userCheck = await UserDao.getUserById(req.user.user_id, {
			include: undefined,
			select: {
				password: true,
			},
		});
		let correctPw = await bcrypt.compare(postData.password, userCheck.password);
		if (!correctPw) return res.status(400).json({ error: 'Wrong password..' });
		let hash = await bcrypt.hash(postData.new_password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let user = await UserDao.updateUserPassword(req.user.user_id, hash);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/email
 * @tag Users
 * @summary Updates the current user's email
 * @description This endpoint is used to update the current user's email.
 * @operationId updateEmail
 * @bodyDescription The new email
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateEmail(req, res) {
	try {
		let user = await UserDao.getUserByEmailOrTelephone(req.body.email);
		if (user) return res.status(400).json({ error: 'Email already exists..' });
		let updated_user = await UserDao.updateEmail(req.user.user_id, req.body.email);
		if (!updated_user.stripe_customer_id) {
			const stripe_customer = await stripe.createCustomer(
				updated_user.email,
				updated_user.first_name + ' ' + updated_user.last_name,
				updated_user.telephone
			);
			await UserDao.updateStripeCustomerId(req.user.user_id, stripe_customer.id);
		} else {
			await stripe.updateCustomerEmail(updated_user.stripe_customer_id, req.body.email);
		}
		if (updated_user) return res.status(200).json(updated_user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/profile_picture
 * @tag Users
 * @summary Updates the current user's profile picture
 * @operationId updateProfilePicture
 * @response 200 - Profile picture updated successfully
 * @responseContent {object} 200.application/json - Updated user details
 * @response 400 - Error updating profile picture
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateProfilePicture(req, res) {
	const userId = req.user.user_id;
	const { image } = req.body;
	try {
		// Create new document for profile picture
		//console.log("files", image.files)
		// Add files to the document and upload to S3
		for (const file of image.files) {
			let base64 = file.base64;
			delete file.base64;
			let fileData = await FileDao.createFile(file.file_type, file.mime_type, true);
			let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
			await S3Helper.SaveObject(key, base64, file.mime_type, { users: [userId] }, fileData, true);
			await UserDao.updateUser(userId, {
				profile_picture: { connect: { profile_picture_id: fileData.file_id } },
			});
		}
		res.status(200).json({ message: 'Profile picture created successfully' });
	} catch (error) {
		console.error('Error updating profile picture:', error);
		res.status(400).json({ error: 'Error updating profile picture', detail: error.message });
	}
}
/**
 * PATCH /me/taxi-preferences
 * @tag Users
 * @summary Updates the current user's taxi preferences
 * @description This endpoint is used to update the current user's taxi preferences.
 * @operationId updateUserTaxiPreferences
 * @bodyDescription The new taxi preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Taxi preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTaxiPreferences(req, res) {
	try {
		let user = await UserDao.updateUserTaxiPreferences(req.user.user_id, req.body.taxi_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/notification-preferences
 * @tag Users
 * @summary Updates the current user's notification preferences
 * @description This endpoint is used to update the current user's notification preferences.
 * @operationId updateUserNotificationPreferences
 * @bodyDescription The new notification preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserNotificationPreferences(req, res) {
	try {
		let user = await UserDao.updateUserNotificationPreferences(req.user.user_id, req.body.notification_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/taxi-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's push notification preferences
 * @description This endpoint is used to update the current user's push notification preferences.
 * @operationId updateUserTaxiPushNotifications
 * @bodyDescription The new push notification preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTaxiPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserTaxiPushNotifications(
			req.user.user_id,
			req.body.taxi_push_notification_preferences
		);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/transfer-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's transfer push notification preferences
 * @description This endpoint is used to update the current user's transfer push notification preferences.
 * @operationId updateUserTransferPushNotifications
 * @bodyDescription The new push notification preferences for transfers
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Transfer push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTransferPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserTransferPushNotifications(
			req.user.user_id,
			req.body.transfer_push_notification_preferences
		);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/delivery-push-notification-preferences
 * @tag Users
 * @summary Updates the current user's delivery push notification preferences
 * @description This endpoint is used to update the current user's delivery push notification preferences.
 * @operationId updateUserDeliveryPushNotifications
 * @bodyDescription The new push notification preferences for deliveries
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserDeliveryPushNotifications(req, res) {
	try {
		let user = await UserDao.updateUserDeliveryPushNotifications(
			req.user.user_id,
			req.body.delivery_push_notification_preferences
		);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/spicy-preferences
 * @tag Users
 * @summary Updates the current user's spicy preferences
 * @description This endpoint is used to update the current user's spicy preferences.
 * @operationId updateUserSpicyPreferences
 * @bodyDescription The new spicy preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Spicy preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserSpicyPreferences(req, res) {
	try {
		let user = await UserDao.updateUserSpicyPreferences(req.user.user_id, req.body.spicy_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/transfer-preferences
 * @tag Users
 * @summary Updates the current user's transfer preferences
 * @description This endpoint is used to update the current user's transfer preferences.
 * @operationId updateUserTransferPreferences
 * @bodyDescription The new transfer preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Transfer preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTransferPreferences(req, res) {
	try {
		let user = await UserDao.updateUserTransferPreferences(req.user.user_id, req.body.transfer_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/radio-preferences
 * @tag Users
 * @summary Updates the current user's radio preferences
 * @description This endpoint is used to update the current user's radio preferences.
 * @operationId updateUserRadioPreferences
 * @bodyDescription The new radio preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Radio preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserRadioPreferences(req, res) {
	try {
		let user = await UserDao.updateUserRadioPreferences(req.user.user_id, req.body.radio_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/allergies-preferences
 * @tag Users
 * @summary Updates the current user's allergies preferences
 * @description This endpoint is used to update the current user's allergies preferences.
 * @operationId updateUserAllergiesPreferences
 * @bodyDescription The new allergies preferences
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Allergies preferences updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserAllergiesPreferences(req, res) {
	try {
		let user = await UserDao.updateUserAllergiesPreferences(req.user.user_id, req.body.allergies_preferences);
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /me/telephone
 * @tag Users
 * @summary Updates the current user's telephone
 * @description This endpoint is used to update the current user's telephone.
 * @operationId updateTelephone
 * @bodyDescription The new telephone
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateTelephone(req, res) {
	try {
		let phoneExists = await UserDao.getUserByEmailOrTelephone(req.body.telephone);
		if (phoneExists) return res.status(400).json({ error: 'Telephone already exists..' });
		let user = await UserDao.updateTelephone(req.user.user_id, req.body);
		user = await UserDao.updateUserTelephoneVerified(req.user.user_id, false);
		//await TokenDao.generateSMSVerificationToken(user);
		await stripe.updateCustomerPhone(user.stripe_customer_id, req.body.telephone);
		// TODO: Send SMS verification token
		if (user) return res.status(200).json(user);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
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
 * @prisma_model tokens
 */
async function requestSMSVerification(req, res) {
	try {
		let token = await TokenDao.generateSMSVerificationToken(req.user);
		let user = await UserDao.getUserById(req.user.user_id);
		await SMS.sendSMSVerification(user.telephone, token.token, user.country_code); // TODO: replace with user.telephone_code
		if (token) {
			return res.status(200).json({ message: 'Token sent', telephone: user.telephone });
		}
		res.status(400).json({ error: 'Error obtaining user information' });
	} catch (e) {
		console.error(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}
/**
 * POST /me/verify/phone
 * @tag Users
 * @summary Verifies the current user
 * @description This endpoint is used to verify the current user via a token.
 * @operationId verifyMe
 * @bodyDescription The token to verify the user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User verified successfully.
 * @response 400 - Invalid token or error obtaining user information.
 * @prisma_model tokens
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function verifyMe(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		let token = await TokenDao.getActiveSMSToken(user);
		console.info(token);
		if (token && token.token === req.body.token && token.user_id === req.user.user_id) {
			await TokenDao.updateToken(token.token_id, { active: false });
			user = await UserDao.updateUser(req.user.user_id, { phone_verified: true });
			return res.status(200).json({ message: 'Phone verified successfully.' });
		} else {
			return res.status(400).json({ error: 'Invalid token' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}
async function oneSignalId(req, res) {
	try {
		let user = await UserDao.updateUser(req.user.user_id, { one_signal_id: req.body.player_id });
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * POST /me/address
 * @tag Users
 * @summary Adds an address to the current user
 * @description This endpoint is used to add an address to the current user.
 * @operationId addAddress
 * @bodyDescription The address to add
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Address added successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error adding address.
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function addAddress(req, res) {
	try {
		let address = await AddressDao.addAddress(req.body);
		let userAddress = await AddressDao.addUserAddress(req.user.user_id, address.address_id);
		if (userAddress) {
			return res.status(200).json(address);
		}
		res.status(400).json({ error: 'Error adding address1' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error adding address', e });
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
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function deleteAddress(req, res) {
	try {
		await AddressDao.deleteUserAddress(req.user.user_id, req.params.address_id);
		return res.status(200).json({ message: 'Address deleted successfully.' });
	} catch (error) {
		console.error(error);
		return res.status(400).json({ error: 'Error deleting address.' });
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
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function deleteUserByUserId(req, res) {
	const { user_id } = req.params;
	try {
		const deletedUser = await UserDao.deleteUserByUserId(user_id);
		return res.status(200).json({
			message: 'User deleted successfully.',
			user: deletedUser,
		});
	} catch (error) {
		if (error.code === 'P2025') {
			// Prisma specific error code for "Record to delete not found"
			return res.status(404).json({ error: 'User not found.' });
		}
		// Handle other errors
		console.error('Error deleting user:', error);
		return res.status(400).json({ error: 'Error deleting user.' });
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
 * @bodyContent {object} application/json
 * @response 200 - User active field updated successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating active field.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserActiveByUserId(req, res) {
	const { user_id } = req.params;
	const { active, reason } = req.body;
	try {
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		const updatedUser = await UserDao.updateUserActive(user_id, active, req.user.user_id, reason);
		return res.status(200).json({
			message: 'User active field updated successfully.',
			user: updatedUser,
		});
	} catch (error) {
		console.error('Error updating active field:', error);
		return res.status(400).json({ error: 'Error updating active field.' });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error disabling user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserDisabledByUserId(req, res) {
	const { user_id } = req.params;
	const { disabled, reason } = req.body;
	try {
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		const disabledUser = await UserDao.updateUserDisabled(user_id, disabled, req.user.user_id, reason);
		return res.status(200).json({
			message: 'User disabled field updated successfully.',
			user: disabledUser,
		});
	} catch (error) {
		console.error('Error updating disabled field:', error);
		return res.status(400).json({ error: 'Error updating disabled field.' });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error soft deleting user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function softDeleteUserByUserId(req, res) {
	const { user_id } = req.params;
	const { reason } = req.body;
	try {
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		const disabledUser = await UserDao.updateUserDisabled(user_id, true, req.user.user_id, reason);
		const wipedUser = await UserDao.wipeUserPersonalData(user_id);
		return res.status(200).json({
			message: 'User "soft delete" successful.',
			user: wipedUser,
		});
	} catch (error) {
		console.error('Error soft deleting user:', error);
		return res.status(400).json({ error: 'Error soft deleting user.' });
	}
}
/**
 * PATCH /me/disabled
 * @tag Users
 * @summary Disables the current user
 * @description This endpoint is used to disable the current user.
 * @operationId disableMe

 * @response 200 - User disabled successfully. Returns user.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function disableMe(req, res) {
	try {
		let disabledUser = await UserDao.updateUserDisabled(
			req.user.user_id,
			true,
			req.user.user_id,
			ACCOUNT_ACTIONS_REASON.SELF_DISABLE
		);
		if (disabledUser)
			return res.status(200).json({
				message: 'User disabled successfully.',
				user: disabledUser,
			});
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ error: 'Error updating user information', e });
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Address edited successfully. Returns the updated user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error editing address.
 * @responseContent {object} 400.application/json
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function editAddress(req, res) {
	try {
		let userAddress = await AddressDao.editUserAddress(req.user.user_id, req.params.address_id, req.body);
		if (userAddress) {
			return res.status(200).json(userAddress);
		}
		res.status(400).json({ error: 'Error editing address' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error adding address', e });
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
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function setPrimaryAddress(req, res) {
	try {
		let userAddress = await AddressDao.setPrimaryUserAddress(req.user.user_id, req.params.address_id);
		if (userAddress) {
			return res.status(200).json({ message: 'Primary address set.' });
		}
		res.status(400).json({ error: 'Error setting primary address' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error setting primary address', e });
	}
}
/**
 * GET /users/me/payment-sheet
 * @tag Users
 * @summary Get payment sheet credentials for a user
 * @description This endpoint is used to get Stripe payment sheet credentials for a particular user.
 * @operationId getPaymentSheetCredentials
 * @response 200 - {StripePaymentSheetCredentials}
 * @response 400 - Error obtaining payment sheet credentials
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function getPaymentSheetCredentials(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		const { type, business_id } = req.params;
		let credentials = null;
		if (type == 'business') {
			console.log(credentials, 'business credentials12');
			credentials = await stripe.generateBusinessPaymentSheetCredentials(business_id);
		} else {
			console.log(credentials, 'credentials12');
			credentials = await stripe.generatePaymentSheetCredentials(user);
		}
		if (credentials) {
			return res.status(200).json(credentials);
		}
		res.status(400).json({ error: 'Error obtaining payment sheet credentials' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining payment sheet credentials', e });
	}
}
/**
 * POST /users/me/requestToAddFunds
 * @tag Users
 * @summary Create a payment intent to add funds to wallet
 * @description Creates a Stripe Payment Intent to top up the user's wallet. Validates amount, currency, and payment method.
 * @operationId requestToAddFundsToWallet
 * @bodyDescription Amount, currency and payment method to use
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Payment intent created
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid parameters or error creating payment intent
 * @prisma_model users
 * @prisma_model wallet_funds
 */
async function requestToAddFundsToWallet(req, res) {
	try {
		const { amount, currency, payment_method_id, return_url } = req.body;
		if ((!amount && amount <= 0) || !currency || !payment_method_id) {
			return res.status(400).json({ error: 'Error requesting to add funds to wallet: Invalid parameters!' });
		}
		const availableWalletFunds = await WalletFundsDao.getAvailableWalletFunds(req.user.user_id, FUNDS_TYPE.FUNDS);
		const user = availableWalletFunds?.user;
		if (!user) {
			return res.status(400).json({ error: 'Error obtaining user information' });
		}
		let sum = 0;
		let included_wallet_funds = [];
		for (let i = 0; i < availableWalletFunds.length; i++) {
			sum += availableWalletFunds[i].amount;
			included_wallet_funds.push(availableWalletFunds[i]);
			if (sum >= MAX_WALLET_FUNDS) {
				break;
			}
		}
		if (sum >= MAX_WALLET_FUNDS) {
			return res.status(400).json({
				error_type: 'MAX_WALLET_FUNDS_ERR',
				error: 'You have reached the maximum wallet funds limit.',
			});
		}
		// Create a Payment Method to handle the transaction
		let paymentIntent = await stripe.createPaymentIntentForWallet(
			Math.round(amount * 100),
			currency,
			payment_method_id,
			user.stripe_customer_id,
			user.user_id
			// return_url
		);
		// const newWalletFunds = await WalletFundsDao.createWalletFunds(req.user.user_id,paymentIntent.latest_charge, amount * 100);
		res.status(200).json(paymentIntent);
	} catch (error) {
		console.error('Error requesting to add funds to wallet:', error);
		res.status(400).json({ error: 'Error requesting to add funds to wallet' });
	}
}
/**
 * POST /users/me/request-payment-intent
 * @tag Users
 * @summary Create a general payment intent
 * @description Creates a Stripe Payment Intent for a platform charge scoped to the current user.
 * @operationId requestPaymentIntent
 * @bodyDescription Amount and currency for the payment intent
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Payment intent created
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid parameters or error creating payment intent
 * @prisma_model users
 */
async function requestPaymentIntent(req, res) {
	try {
		const { amount, currency, return_url } = req.body;
		if ((!amount && amount <= 0) || !currency) {
			return res.status(400).json({ error: 'Error requesting payment intent: Invalid parameters!' });
		}
		// Create a Payment Method to handle the transaction
		let user = await UserDao.getUserById(req.user.user_id);
		let paymentIntent = await stripe.createPaymentIntentForPlatform(
			Math.round(amount * 100),
			currency,
			user.stripe_customer_id,
			{
				user_id: req.user.user_id,
				type: 'wallet_topup',
			}
		);
		res.status(200).json(paymentIntent);
	} catch (error) {
		console.error('Error requesting payment intent:', error);
		res.status(400).json({ error: 'Error requesting payment intent' });
	}
}
/**
 * POST /users/me/confirm-payment-intent
 * @tag Users
 * @summary Confirm a payment intent
 * @description Confirms a Stripe Payment Intent by id.
 * @operationId confirmPaymentIntent
 * @bodyDescription Payment intent id to confirm
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Payment intent confirmed
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid parameters or error confirming payment intent
 */
async function confirmPaymentIntent(req, res) {
	try {
		const { payment_intent_id } = req.body;
		if (!payment_intent_id) {
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
/**
 * GET /users/me/ping
 * @tag Users
 * @summary Update last-ping for driver/delivery driver
 * @description Sets last_ping_at to now and marks driver or delivery driver as active based on current user.
 * @operationId ping
 * @response 200 - Driver/delivery driver online acknowledgement
 * @responseContent {object} 200.application/json
 * @response 400 - User is not a driver
 * @prisma_model users
 * @prisma_model driver
 * @prisma_model delivery_driver
 */
async function ping(req, res) {
	console.log('ping, req.user ', req.user);
	let user = await UserDao.getUserById(req.user.user_id, {
		include: {
			driver: true,
			delivery_driver: true,
		},
	});
	if (!user) {
		return res.status(400).json({ error: 'Error obtaining user information' });
	}
	if (user.driver) {
		let driver = await DriverDao.updateDriver(user.driver.driver_id, {
			last_ping_at: new Date(),
			is_inactive: false,
		});
		return res.status(200).json({ message: 'Driver is online' });
	} else if (user.delivery_driver) {
		let delliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(user.delivery_driver.delivery_driver_id, {
			last_ping_at: new Date(),
			is_inactive: false,
		});
		return res.status(200).json({ message: 'Delivery driver is online' });
	} else {
		return res.status(400).json({ error: 'User is not a driver' });
	}
}
/**
 * GET /users/me/scheduled_orders
 * @tag Users
 * @summary List my scheduled taxi orders
 * @description Returns pending scheduled taxi orders for the current user.
 * @operationId getSelfScheduledOrders
 * @response 200 - List of scheduled orders
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching scheduled orders
 * @prisma_model taxi_orders
 */
async function getSelfScheduledOrders(req, res) {
	try {
		const orders = await TaxiOrderDao.getOrders({
			where: {
				is_scheduled: true,
				status: TAXI_ORDER_STATUS.PENDING,
				user_id: req.user.user_id,
			},
		});
		res.status(200).json(orders);
	} catch (e) {
		console.info('TaxiOrderController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /users/me/reviews
 * @tag Users
 * @summary List my reviews
 * @description Returns reviews written for or by the current user, including author and target details.
 * @operationId getMyReviews
 * @response 200 - List of reviews
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching reviews
 * @prisma_model reviews
 * @prisma_model users
 * @prisma_model business
 * @prisma_model documents
 * @prisma_model files
 */
async function getMyReviews(req, res) {
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		if (!user.reviewable_id) {
			return res.status(200).json([]);
		}
		let reviews = await prisma.reviews.findMany({
			where: {
				reviewable_id: user.reviewable_id,
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
								document_type: 'PROFILE_PICTURE',
							},
							select: {
								files: true,
								document_type: true,
							},
						},
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
										document_type: 'PROFILE_PICTURE',
									},
									select: {
										files: true,
										document_type: true,
									},
								},
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
										document_type: 'PROFILE_PICTURE',
									},
									select: {
										files: true,
										document_type: true,
									},
								},
							},
						},
					},
				},
			},
			orderBy: {
				created_at: 'desc', // Order by 'created_at' field in descending order
			},
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
	} catch (e) {
		console.log('UserController', e);
		res.status(500).json(e);
	}
}
/**
 * GET /users/:user_id/reviews
 * @tag Users
 * @summary List reviews related to a user
 * @description Returns reviews for a given user or their business if they are a driver.
 * @operationId getReviewsByUserId
 * @pathParam {string} user_id - The user id
 * @response 200 - List of reviews
 * @responseContent {object} 200.application/json
 * @response 404 - User not found
 * @response 500 - Error fetching reviews
 * @prisma_model reviews
 * @prisma_model users
 * @prisma_model business
 * @prisma_model documents
 * @prisma_model files
 */
async function getReviewsByUserId(req, res) {
	try {
		console.log(req.params);
		// Check if the user_id corresponds to a driver
		let driver = await DriverDao.getDriverByUserId(req.params.user_id);
		if (driver) {
			// Fetch business associated with the driver
			let business = await prisma.business.findUnique({
				where: {
					business_id: driver.business_id,
				},
			});
			if (!business?.reviewable_id) {
				return res.status(200).json([]);
			}
			// Fetch reviews for the business
			let reviews = await prisma.reviews.findMany({
				where: {
					reviewable_id: business.reviewable_id,
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
									document_type: 'PROFILE_PICTURE',
								},
								select: {
									files: true,
									document_type: true,
								},
							},
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
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
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
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
								},
							},
						},
					},
				},
				orderBy: {
					created_at: 'desc',
				},
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
					user_id: req.params.user_id,
				},
			});
			if (!user) {
				return res.status(404).json({ error: 'User not found' });
			}
			let reviews = await prisma.reviews.findMany({
				where: {
					OR: [
						{ author_id: user.user_id }, // Reviews authored by the user
						{ reviewable: { user: { some: { user_id: user.user_id } } } }, // Reviews for the user
					],
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
									document_type: 'PROFILE_PICTURE',
								},
								select: {
									files: true,
									document_type: true,
								},
							},
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
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
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
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
								},
							},
						},
					},
				},
				orderBy: {
					created_at: 'desc',
				},
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
		console.error('UserController', e);
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {object} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Error something went wrong.
 */
async function registerChildUser(req, res) {
	let user_data = req.body;
	const parent_user_id = user_data.parent_user_id;
	delete user_data['parent_user_id'];
	try {
		if (!user_data.email) {
			user_data.email = '';
		}
		user_data.email = user_data.email.toLowerCase();
		let UserExistsPhone = await UserDao.getUserByTelephone(user_data.telephone);
		if (UserExistsPhone) {
			return res.status(400).json({ error: 'Telephone already in use!' });
		}
		let UserExistsEmail = await UserDao.getUserByEmail(user_data.email);
		if (UserExistsEmail) {
			return res.status(400).json({ error: 'Email already in use!' });
		}
		let hash = await bcrypt.hash(user_data.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let stripeCustomer = await stripe.createCustomer(
			user_data.email,
			user_data.first_name + ' ' + user_data.last_name,
			user_data.telephone
		);
		const userRole = user_data.user_role || 'PERSONAL';
		let userObj = {
			...user_data,
			date_of_birth: new Date(user_data.date_of_birth),
			password: hash,
			user_role: userRole,
			stripe_customer_id: stripeCustomer.id,
			reviewable: {
				create: {},
			},
		};
		delete userObj['confirm_password'];
		delete userObj.user_roles;
		let user = await UserDao.createNewUser(userObj);
		delete user['password'];
		const userRoles = user_data.user_roles || [{ role: userRole, primary: true }];
		await UserDao.linkRolesToUser(user?.user_id, userRoles);
		//create and connect group_user entry
		const group_user_data = {
			parent_user_id: parent_user_id,
			child_user_id: user.user_id,
		};
		const group_user_entry = GroupDao.createGroupUser(group_user_data);
		res.status(200).json({ user, group_user_entry });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error something went wrong..', e });
	}
}
/**
 * PATCH /users/me/group_user/status
 * @tag Users
 * @summary Updates the enabled field of the given child_user_id
 * @description This endpoint is used to update enabled field of the given child_user_id
 * @operationId updateChildUser
 * @bodyDescription The child's group_user_id and value to set for the child user's enabled field
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated group_user.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating group user enabled status.
 */
async function updateChildUserEnabledByGroupUserId(req, res) {
	const { group_user_id, value } = req.body;
	if (!group_user_id || typeof value !== 'boolean') {
		return res
			.status(400)
			.json({ error: 'Invalid input. Please provide a valid group_user_id and a boolean value.' });
	}
	try {
		let group_user = await GroupDao.updateGroupUserEnabled(group_user_id, value);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: 'Error updating group user enabled status' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating group user enabled status', e });
	}
}
/**
 * PATCH /users/me/group_user/allowance
 * @tag Users
 * @summary Updates the allowance of the given child_user_id for the given service_type
 * @description This endpoint is used to update the allowance of the given child_user_id for the given service_type
 * @operationId updateChildUserAllowance
 * @bodyDescription The child's group_user_id and value to set for the child user's allowance for the given service type
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User allowance updated successfully. Returns the updated group_user.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating group user enabled status.
 */
async function updateChildUserAllowanceByGroupUserId(req, res) {
	const { group_user_id, value, type } = req.body;
	try {
		let group_user = await GroupDao.updateGroupUserAllowance(group_user_id, value, type);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: 'Error updating group user allowance' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating group user allowance', e });
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
	const group_user_id = req.params.group_user_id;
	try {
		let group_user = await GroupDao.deleteGroupUser(group_user_id);
		if (group_user) {
			return res.status(200).json(group_user);
		}
		res.status(400).json({ error: 'Error deleting group user' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error deleting group user', e });
	}
}
/**
 * GET /users/:user_id/wallet
 * @tag Users
 * @summary Get wallet balance from wallet_funds.
 * @description This endpoint is used to check available wallet balance for a particular user.
 * @operationId getPaymentSheetCredentials
 * @response 200 - {wallet_balance:float}
 * @response 400 - Error checking wallet balances
 * @prisma_model wallet_funds (see ./prisma/schemas/base.prisma)
 */
async function getAvailableWalletBalance(req, res) {
	try {
		let balance = await WalletFundsDao.getAvailableWalletBalance(req.params.user_id);
		return res.status(200).json({ wallet_balance: balance });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining wallet balance', e });
	}
}
/**
 * GET /users/:user_id/family_wallet
 * @tag Users
 * @summary Get family wallet type and minimum between allowance and actual family wallet balance.
 * @description This endpoint is used to check wallet balance and type for a particular user.
 * @operationId getPaymentSheetCredentials
 * @response 200 - {family_wallet_balance:float,family_wallet_type:string}
 * @response 400 - Error checking wallet balances
 * @prisma_model wallet_funds (see ./prisma/schemas/base.prisma)
 * @prisma_model group_users (see ./prisma/schemas/user.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function getFamilyWalletBalanceAndType(req, res) {
	try {
		let group_user = await GroupDao.getGroupUserByChildId(req.params.user_id);
		if (group_user === null) {
			return res.status(200).json({ parent_wallet_balance: 0, allowance: 0, family_wallet_type: null });
		} else if (group_user) {
			console.log(group_user);
			if (group_user.enabled) {
				const parent_wallet_balance = await WalletFundsDao.getAvailableWalletBalance(
					group_user.parent_user.user_id
				);
				return res.status(200).json({
					parent_wallet_balance: parent_wallet_balance,
					allowance: group_user.allowance,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? 'BUSINESS' : 'FAMILY',
				});
			} else {
				return res.status(200).json({
					parent_wallet_balance: 0,
					allowance: 0,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? 'BUSINESS' : 'FAMILY',
				});
			}
		}
		res.status(400).json({ error: 'Error obtaining family wallet balance and type' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining family wallet balance and type', e });
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
 * @prisma_model wallet_funds (see ./prisma/schemas/base.prisma)
 * @prisma_model transactions (see ./prisma/schemas/base.prisma)
 */
async function updateWalletBalance(req, res) {
	const { user_id } = req.params;
	const { amount, documents } = req.body;
	try {
		let new_transaction = await UserDao.updateWalletBalance(user_id, amount, documents);
		if (new_transaction) {
			const wallet_balance = (await WalletFundsDao.getAvailableWalletBalance(user_id)) / 100;
			return res.status(200).json({ message: 'Wallet balance updated successfully.', wallet_balance });
		}
		res.status(400).json({ error: 'Error updating wallet balance' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating wallet balance', e });
	}
}
/**
 * GET /users/:user_id/transactions
 * @tag Users
 * @summary List transactions for a user
 * @description Returns wallet and order related transactions for a user.
 * @operationId getTransactions
 * @pathParam {string} user_id - The user id
 * @response 200 - List of transactions
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching transactions
 * @prisma_model transactions
 */
async function getTransactions(req, res) {
	const { user_id } = req.params;
	try {
		const transactions = await UserDao.getTransactions(user_id);
		if (transactions) {
			return res.status(200).json(transactions);
		}
		res.status(400).json({ error: 'Error updating wallet balance' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error fetching transactions', e });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user language.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserLanguage(req, res) {
	try {
		//console.log("language body req", req.body)
		const updatedUser = await UserDao.updateUserLanguage(req.body.user_id, req.body.language);
		if (updatedUser) {
			return res.status(200).json(updatedUser);
		}
		res.status(400).json({ error: 'Error updating user language.' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user language.', e });
	}
}
/**
 * GET /users/user/:code
 * @tag Users
 * @summary Get user by referral code
 * @description Finds a user by their referral code.
 * @operationId getUserByReferralCode
 * @pathParam {string} code - The referral code
 * @response 200 - User found
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching user by referral code
 * @prisma_model users
 */
async function getUserByReferralCode(req, res) {
	try {
		const user = await UserDao.getUserByReferralCode(req.params.code);
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error fetching user by referral code.' });
	} catch (err) {
		res.status(400).json({ error: 'Error fetching user by referral code.', err });
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
 * @prisma_model referrals (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function redeemReferralCode(req, res) {
	try {
		const { referral_code } = req.body;
		const user_id = req.user.user_id;
		// First check if user already has a referral
		const existingReferral = await ReferralDao.getReferralByReferredUserId(user_id);
		if (existingReferral) {
			return res.status(400).json({ errorCustom: 'User has already redeemed a referral code' });
		}
		// Find the referrer by their referral code
		const referrer = await UserDao.getUserByReferralCode(referral_code);
		if (!referrer) {
			return res.status(400).json({ errorCustom: 'Invalid referral code' });
		}
		// Prevent referral by user referrals
		const referrerReferral = await ReferralDao.getReferralByReferredUserId(referrer.user_id);
		if (referrerReferral?.referrer_user_id === user_id) {
			return res.status(400).json({ errorCustom: 'Cannot get referred by one of your referrals' });
		}
		// Prevent self-referral
		if (referrer.user_id === user_id) {
			return res.status(400).json({ errorCustom: 'Cannot use own referral code' });
		}
		// Referrer can only refer up to 10 people
		if (referrer.referrals_made?.length >= 10) {
			return res.status(400).json({ errorCustom: 'This user has already referred 10 people' });
		}
		const referral = await ReferralDao.createReferral(referrer.user_id, user_id, referral_code);
		return res.status(200).json({ message: 'Referral code redeemed successfully', referral });
	} catch (error) {
		return res.status(400).json({ error: error.message || 'Error redeeming referral code' });
	}
}
/**
 * PATCH /users/me/claim-reward
 * @tag Users
 * @summary Claim referral reward
 * @description Claims referral reward credits for the current user if eligible.
 * @operationId claimReward
 * @bodyDescription Referral id to claim
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Reward claimed
 * @responseContent {object} 200.application/json
 * @response 400 - Reward already claimed or error
 * @prisma_model referrals
 * @prisma_model wallet_funds
 */
async function claimReward(req, res) {
	try {
		const { referral_id } = req.body;
		if (!referral_id) {
			return res.status(400).json('Missing referral_id in the request body!');
		}
		const alreadyClaimed = await ReferralDao.getReferralByReferralId(referral_id);
		if (alreadyClaimed?.reward_claimed) {
			return res.status(400).json({ error: 'Reward already claimed!' });
		}
		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		await WalletFundsDao.createCredit({
			expires_at: expiryDate,
			user: { connect: { user_id: req.user.user_id } },
			amount: CREDITS.REFERRAL,
			type: FUNDS_TYPE.CREDITS_ANY, // we add taxi credits on referral
			referral: { connect: { referral_id: referral_id } },
		});
		const referral = await ReferralDao.updateReferralRewardClaimed(referral_id, true);
		if (!referral) {
			return res.status(400).json({ error: 'Error claiming reward' });
		}
		return res.status(200).json(referral);
	} catch (error) {
		return res.status(400).json({ error: error.message || 'Error claiming reward' });
	}
}
/**
 * GET /users/me/credits/:service_type
 * @tag Users
 * @summary Get my credits and cashback
 * @description Returns available and expired credits, and pending cashback for a given service type.
 * @operationId getUserCredits
 * @pathParam {string} service_type - Service type (e.g., taxi, delivery)
 * @response 200 - Credits and cashback data
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching user credits
 * @prisma_model wallet_funds
 * @prisma_model cashback
 */
async function getUserCredits(req, res) {
	try {
		const { service_type } = req.params;
		const { user_id } = req.user;
		const availableCredits = await WalletFundsDao.getAvailableCreditsByType(
			user_id,
			SERVICE_TYPE_TO_FUNDS_TYPE[service_type]
		);
		const expiredCredits = await WalletFundsDao.getExpiredCredits(
			user_id,
			SERVICE_TYPE_TO_FUNDS_TYPE[service_type]
		);
		const cashbacks = Object.keys(CASHBACK_TYPE).includes(service_type.toUpperCase())
			? await CashbackDao.getPendingUserCashbackByType(user_id, service_type)
			: [];
		return res.status(200).json({
			availableCredits: availableCredits,
			expiredCredits: expiredCredits,
			cashbacks: cashbacks,
		});
	} catch (error) {
		return res.status(400).json({ error: error.message || 'Error fetching user credits' });
	}
}
/**
 * GET /users/me/active_orders
 * @tag Users
 * @summary Get my active orders
 * @description Returns current active delivery, taxi/transfer orders and first active reservation.
 * @operationId getMyActiveOrders
 * @response 200 - Active orders by type
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching user active orders
 * @prisma_model delivery_orders
 * @prisma_model taxi_orders
 * @prisma_model reservations
 */
async function getMyActiveOrders(req, res) {
	const user_id = req.user.user_id;
	try {
		const [delivery_orders, taxi_orders, transfer_orders, first_reservation] = await Promise.all([
			DeliveryOrderDao.getDeliveryOrdersIfNotCompleted(user_id),
			TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, ORDER_TYPE.TAXI),
			TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, ORDER_TYPE.TRANSFER_PRIVATE),
			ReservationDao.getReservationIfNotCompleted(user_id),
		]);
		return res.status(200).json({
			delivery_orders: delivery_orders.filter(
				(order) => !order.is_daily_meal || order.timeline.includes(DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED)
			),
			taxi_orders,
			transfer_orders,
			first_reservation,
		});
	} catch (error) {
		return res.status(400).json({
			error: error.message || 'Error fetching user active order ids',
		});
	}
}
/**
 * GET /users/me/referral
 * @tag Users
 * @summary Get my referral record
 * @description Returns the referral record associated with the current user, if any.
 * @operationId getReferral
 * @response 200 - Referral record
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching referral
 * @prisma_model referrals
 */
async function getReferral(req, res) {
	try {
		const referral = await ReferralDao.getReferralByReferredUserId(req.user.user_id);
		if (!referral) return res.status(400).json({ error: 'Error fetching referral' });
		return res.status(200).json(referral);
	} catch (error) {
		return res.status(400).json({ error: error.message || 'Error fetching referral' });
	}
}
/**
 * PATCH /users/me/marketing-notifications
 * @tag Users
 * @summary Update marketing notifications preference
 * @description Updates the user's marketing notifications preference flags.
 * @operationId updateMarketingNotifications
 * @bodyDescription Preference payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateMarketingNotifications(req, res) {
	try {
		const user = await UserDao.updateUserMarketingNotifications(req.user.user_id, req.body.data);
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error setting marketing notifications' });
	} catch (err) {
		return res.status(400).json({ error: err.message || 'Error setting marketing notifications' });
	}
}
/**
 * PATCH /users/me/ads-personalization
 * @tag Users
 * @summary Update ads personalization preference
 * @description Updates the user's ads personalization preference flags.
 * @operationId updateAdsPersonalization
 * @bodyDescription Preference payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateAdsPersonalization(req, res) {
	try {
		const user = await UserDao.updateUserAdsPersonalization(req.user.user_id, req.body.data);
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error setting ads personalization' });
	} catch (err) {
		return res.status(400).json({ error: err.message || 'Error setting ads personalization' });
	}
}
/**
 * PATCH /users/me/newsletter
 * @tag Users
 * @summary Update newsletter subscription preference
 * @description Updates the user's newsletter preference flags.
 * @operationId updateNewsletter
 * @bodyDescription Preference payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateNewsletter(req, res) {
	try {
		const user = await UserDao.updateUserNewsletter(req.user.user_id, req.body.data);
		if (user) {
			return res.status(200).json(user);
		}
		res.status(400).json({ error: 'Error setting newsletter' });
	} catch (err) {
		return res.status(400).json({ error: err.message || 'Error setting newsletter' });
	}
}
/**
 * GET /users/me/request-data
 * @tag Users
 * @summary Request my stored data (GDPR)
 * @description Returns a comprehensive snapshot of the current user's stored data across related models.
 * @operationId requestData
 * @response 200 - Data payload returned
 * @responseContent {object} 200.application/json
 * @response 400 - Missing user id or bad request
 * @response 500 - Error obtaining personal user data
 * @prisma_model users
 * @prisma_model user_roles
 * @prisma_model user_address
 * @prisma_model addresses
 * @prisma_model business_users
 * @prisma_model driver
 * @prisma_model vehicle
 * @prisma_model documents
 * @prisma_model files
 * @prisma_model driver_history_locations
 * @prisma_model taxi_orders
 * @prisma_model delivery_orders
 * @prisma_model transactions
 * @prisma_model reservations
 * @prisma_model flag_history
 * @prisma_model lost_items
 * @prisma_model group_users
 * @prisma_model wallet_funds
 * @prisma_model referrals
 * @prisma_model cashback
 * @prisma_model business_teams
 * @prisma_model order_lobbies
 * @prisma_model promo_sections_buy
 * @prisma_model scoring_points
 * @prisma_model late_events
 * @prisma_model user_favorite_businesses
 * @prisma_model account_actions
 */
async function requestData(req, res) {
	try {
		const user_id = req.user.user_id;
		if (user_id) {
			const usersStoredData = {
				user_roles: {
					select: {
						user_roles_id: true,
						user_id: true,
						role: true,
						primary: true,
					},
				},
				addresses: {
					// user_address
					select: {
						address: true, // addresses model
					},
				},
				// tokens: { //NO NEED TO SEND BACK THE TOKENS
				// 	where: { active: true } // Optional: only active tokens
				// },
				business_users: {
					select: {
						business_users_id: true,
						online: true,
						company_role: true,
						created_at: true,
						user_id: true,
						business_id: true,
						//include
						business: {
							select: {
								business_id: true,
								name: true,
								type: true,
								// Only include minimal business information needed for identification
							},
						},
						operating_address: {
							select: {
								address_id: true,
								address: true,
								// Only include minimal address information needed for identification
							},
						},
					},
				},
				driver: {
					select: {
						driver_id: true,
						business_id: true,
						online: true,
						on_order: true,
						working_hours: true,
						ride_requirements: true,
						created_at: true,
						updated_at: true,
						user_id: true,
						current_vehicle_id: true,
						last_used_vehicle_id: true,
						location: true,
						delivery_timeline: true,
						last_ping_at: true,
						is_inactive: true,
						transfer_requirements: true,
						regions: true,
						handles_taxi_orders: true,
						handles_transfer_orders: true,
						handles_delivery_orders: true,
						taxi_orders_toggled: true,
						transfer_orders_toggled: true,
						delivery_orders_toggled: true,
						partner_cash_balance: true,
						come_to_work_last_sent_at: true,
						//include
						vehicles: {
							// vehicle_drivers
							select: {
								vehicle_drivers_id: true,
								vehicle_id: true,
								driver_id: true,
								can_drive: true,
								created_at: true,
								updated_at: true,
								//include
								vehicle: {
									select: {
										vehicle_id: true,
										class: true,
										category: true,
										make: true,
										model: true,
										color: true,
										license_plate: true,
									},
								},
							},
						},
						current_vehicle: {
							select: {
								vehicle_id: true,
								class: true,
								category: true,
								make: true,
								model: true,
								color: true,
								license_plate: true,
							},
						},
						documents: {
							select: {
								document_id: true,
								document_type: true,
								created_at: true,
								updated_at: true,
								expiration_date: true,
								issue_date: true,
								public: true,
							},
						},
						activity_logs: {
							select: {
								driver_activity_log_id: true,
								activity_type: true,
								started_at: true,
								ended_at: true,
								timeout_at: true,
								lockout_until: true,
							},
						},
						driver_municipalities: {
							select: {
								driver_municipalities_id: true,
								municipalities_id: true,
								created_at: true,
								updated_at: true,
							},
						},
						driver_history_locations: {
							select: {
								driver_history_location_id: true,
								taxi_order_id: true,
								delivery_order_id: true,
								status: true,
								location: true,
								created_at: true,
								updated_at: true,
							},
						},
						received_orders: {
							select: {
								taxi_order_sent_id: true,
								order_id: true,
								accepted: true,
								location: true,
								timeline: true,
								created_at: true,
								updated_at: true,
								rejected: true,
							},
						},
						received_delivery_orders: {
							select: {
								delivery_order_sent_id: true,
								order_id: true,
								accepted: true,
								location: true,
								timeline: true,
								created_at: true,
								updated_at: true,
							},
						},
					},
				},
				documents: {
					select: {
						document_id: true,
						document_type: true,
						created_at: true,
						updated_at: true,
						expiration_date: true,
						issue_date: true,
						additional_info: true,
						public: true,
						//include
						files: {
							select: {
								file_id: true,
								url: true,
								file_type: true,
								public: true,
								mime_type: true,
								created_at: true,
								updated_at: true,
							},
						},
					},
				},
				delivery_driver: {
					select: {
						delivery_driver_id: true,
						online: true,
						on_order: true,
						delivers_daily_meals: true,
						working_hours: true,
						business_id: true,
						created_at: true,
						updated_at: true,
						user_id: true,
						location: true,
						delivery_timeline: true,
						last_ping_at: true,
						on_daily_meals: true,
						is_inactive: true,
						scheduled_meals_route: true,
						regions: true,
						partner_cash_balance: true,
						daily_meal_business_id: true,
						//include
						vehicles: {
							select: {
								vehicle_id: true,
								class: true,
								category: true,
								make: true,
								model: true,
								color: true,
								license_plate: true,
							},
						},
						documents: {
							select: {
								document_id: true,
								document_type: true,
								created_at: true,
								updated_at: true,
								expiration_date: true,
								issue_date: true,
								public: true,
							},
						},
						delivery_driver_history_locations: {
							select: {
								delivery_driver_history_location_id: true,
								order_id: true,
								status: true,
								location: true,
								created_at: true,
								updated_at: true,
							},
						},
						received_orders: {
							select: {
								delivery_order_sent_id: true,
								order_id: true,
								accepted: true,
								location: true,
								timeline: true,
								created_at: true,
								updated_at: true,
							},
						},
						daily_meal_business: {
							select: {
								business_id: true,
								name: true,
								type: true,
							},
						},
					},
				},
				orders: {
					// taxi_orders
					select: {
						order_id: true,
						user_id: true,
						driver_id: true,
						vehicle_id: true,
						route: true,
						pickup_location: true,
						delivery_location: true,
						payment: true,
						estimates: true,
						timeline: true,
						preferences: true,
						status: true,
						last_sent_at: true,
						created_at: true,
						updated_at: true,
						business_id: true,
						telephone: true,
						first_name: true,
						last_name: true,
						cancellation_reason: true,
						find_drivers_attempts: true,
						is_scheduled: true,
						parent_order_id: true,
						type: true,
						subtype: true,
						flags: true,
						cargo_preferences: true,
						customer_note: true,
						parent_user_type: true,
						creating_user_id: true,
						allow_credits_usage: true,
						order_number: true,
						//include
						vehicle: {
							select: {
								vehicle_id: true,
								class: true,
								category: true,
								make: true,
								model: true,
								color: true,
								license_plate: true,
							},
						},
						driver: {
							select: {
								driver_id: true,
								user_id: true, // Only include the essential identifiers
							},
						},
						business: {
							select: {
								business_id: true,
								name: true,
								type: true,
							},
						},
						history: {
							select: {
								taxi_order_sent_id: true,
								order_id: true,
								driver_id: true,
								accepted: true,
								rejected: true,
								location: true,
								timeline: true,
								created_at: true,
								updated_at: true,
							},
						},
						grouped_orders: {
							select: {
								order_id: true,
								status: true,
							},
						},
						parent_order: {
							select: {
								order_id: true,
								status: true,
							},
						},
						wallet_transfer: {
							select: {
								wallet_transfer_history_id: true,
								amount: true,
								created_at: true,
								updated_at: true,
								success: true,
							},
						},
						transactions: {
							select: {
								transaction_id: true,
								amount: true,
								type: true,
								description: true,
								createdAt: true,
								updatedAt: true,
							},
						},
						scoring_points: {
							select: {
								scoring_points_id: true,
								points: true,
								isPenalty: true,
								reason: true,
								expiration_date: true,
								created_at: true,
								updated_at: true,
							},
						},
						late_events: {
							select: {
								late_events_id: true,
								seconds: true,
								created_at: true,
								updated_at: true,
							},
						},
						cashback: {
							select: {
								cashback_id: true,
								amount: true,
								type: true,
								source: true,
								status: true,
								earned_at: true,
								expires_at: true,
							},
						},
					},
				},
				delivery_orders: {
					select: {
						order_id: true,
						user_id: true,
						route: true,
						pickup_location: true,
						delivery_location: true,
						payment: true,
						estimates: true,
						items: true,
						details: true,
						courier_instructions: true,
						restaurant_message: true,
						scheduled: true,
						timeline: true,
						status: true,
						last_sent_at: true,
						created_at: true,
						updated_at: true,
						vehicle_id: true,
						delivery_driver_id: true,
						driver_id: true,
						business_id: true,
						payment_intent_id: true,
						find_drivers_attempts: true,
						is_daily_meal: true,
						flags: true,
						allow_credits_usage: true,
						order_number: true,
						//include
						vehicle: {
							select: {
								vehicle_id: true,
								class: true,
								category: true,
								make: true,
								model: true,
								color: true,
								license_plate: true,
							},
						},
						//we dont need to include the driver or delivery_driver details for the order
						// delivery_driver: {
						// 	select: {
						// 		delivery_driver_id: true,
						// 		user_id: true // Only include the essential identifiers
						// 	}
						// },
						// driver: {
						// 	select: {
						// 				user_id: true // Only include the essential identifiers
						// 			}
						business: {
							select: {
								name: true,
								// type: true
							},
						},
						// history: { //we dont need to include the history for this order
						// 	select: {
						// 		delivery_order_sent_id: true,
						// 		order_id: true,
						// 		delivery_driver_id: true,
						// 		driver_id: true,
						// 		accepted: true,
						// 		location: true,
						// 		timeline: true,
						// 		created_at: true,
						// 		updated_at: true
						// 	}
						// },
						transactions: {
							select: {
								transaction_id: true,
								amount: true,
								type: true,
								description: true,
								createdAt: true,
								updatedAt: true,
							},
						},
						wallet_transfer: {
							select: {
								wallet_transfer_history_id: true,
								amount: true,
								created_at: true,
								updated_at: true,
								success: true,
							},
						},
						scoring_points: {
							select: {
								scoring_points_id: true,
								points: true,
								isPenalty: true,
								reason: true,
								expiration_date: true,
								created_at: true,
								updated_at: true,
							},
						},
						late_events: {
							select: {
								late_events_id: true,
								seconds: true,
								created_at: true,
								updated_at: true,
							},
						},
						cashback: {
							select: {
								cashback_id: true,
								amount: true,
								type: true,
								source: true,
								status: true,
								earned_at: true,
								expires_at: true,
							},
						},
						order_lobbies: {
							select: {
								order_lobbies_id: true,
								lobby_name: true,
								lobby_description: true,
								active: true,
								business_id: true,
								restaurant_id: true,
								creator_id: true,
								created_at: true,
								updated_at: true,
							},
						},
					},
				},
				reviewable: {
					// Reviews left for the user
					select: {
						reviewable_id: true,
						reviews: {
							select: {
								review_id: true,
								rating: true,
								comment: true,
								feedback: true,
								created_at: true,
								updated_at: true,
							},
						},
					},
				},
				reviews: {
					// Reviews written by the user
					select: {
						review_id: true,
						rating: true,
						comment: true,
						feedback: true,
						created_at: true,
						updated_at: true,
						reviewable_id: true,
					},
				},
				transactions: {
					select: {
						transaction_id: true,
						amount: true,
						type: true,
						description: true,
						createdAt: true,
						updatedAt: true,
						delivery_order_id: true,
						taxi_order_id: true,
						wallet_fund_id: true,
						//include
						documents: {
							select: {
								document_id: true,
								document_type: true,
								created_at: true,
								expiration_date: true,
								issue_date: true,
							},
						},
					},
				},
				reservations: {
					select: {
						reservation_id: true,
						seats: true,
						date: true,
						time: true,
						datetime: true,
						created_at: true,
						updated_at: true,
						status: true,
						table: true,
						// business_id: true // Only include business ID, not full business details
					},
				},
				flag_changes: {
					select: {
						flag_history_id: true,
						flag_id: true,
						status: true,
						created_at: true,
						updated_at: true,
					},
				}, // flag_history
				lost_items: {
					select: {
						lost_item_id: true,
						status: true,
						description: true,
						found: true,
						created_at: true,
						updated_at: true,
						//include
						documents: {
							select: {
								document_id: true,
								document_type: true,
								created_at: true,
								updated_at: true,
								expiration_date: true,
							},
						},
					},
				},
				child_users: {
					// Users for whom the current user is a parent
					select: {
						group_user_id: true, // Only include the relationship ID, not the linked accounts' details
						created_at: true,
						updated_at: true,
						enabled: true,
					},
				},
				parent_user: {
					// If the current user is a child_user, this is their parent linkage
					select: {
						group_user_id: true, // Only include the relationship ID, not the linked accounts' details
						created_at: true,
						updated_at: true,
						enabled: true,
					},
				},
				wallet_funds: {
					select: {
						wallet_funds_id: true,
						user_id: true,
						referral_id: true,
						charge_id: true,
						amount: true,
						reserved_order: true,
						reserved_daily_meals_subscription: true,
						reserved_business: true,
						created_at: true,
						updated_at: true,
						expires_at: true,
						type: true,
						status: true,
					},
				}, // GDPR: Include wallet funds but without nested relations
				referrals_made: {
					// Referrals made by this user
					select: {
						referral_id: true,
						referral_code: true, // User's own code is okay to include
						referrer_user_id: true, // This is the user's own ID
						referred_user_id: true, // ID of who was referred
						created_at: true,
						updated_at: true,
					},
				},
				referral: {
					// If this user was referred by someone
					select: {
						referral_id: true,
						referrer_user_id: true, // ID of who referred the user
						referred_user_id: true, // This is the user's own ID
						conditions_met: true, // This relates to the user's own referral
						reward_claimed: true, // This relates to the user's own reward
						created_at: true,
						updated_at: true,
					},
				},
				cashback: {
					select: {
						cashback_id: true,
						user_id: true, // Added for GDPR completeness
						amount: true,
						type: true,
						source: true,
						status: true,
						description: true,
						earned_at: true,
						expires_at: true,
						converted_at: true,
						taxi_order_id: true,
						delivery_order_id: true,
					},
				},
				business_teams: {
					// Team the user belongs to
					select: {
						business_teams_id: true,
						team_name: true,
						business_id: true, // Only include business ID, not full business details
						limit_per_person: true,
						created_at: true,
						updated_at: true,
					},
				},
				order_lobby_users: {
					select: {
						order_lobby_users_id: true,
						limit: true,
						created_at: true,
						updated_at: true,
						order_lobbies_id: true,
						//includes
						order_lobbies: {
							select: {
								order_lobbies_id: true,
								lobby_name: true,
								lobby_description: true,
								active: true,
								business_id: true, // Only include business ID
								restaurant_id: true, // Only include restaurant ID
								created_at: true,
								updated_at: true,
							},
						},
					},
				},
				promo_section_buys: {
					select: {
						promo_sections_buy_id: true,
						promo_sections_id: true,
						stripe_subscription_id: true,
						business_id: true, // Only include business ID
						active_at: true,
						expires_at: true,
						tier: true,
						//include
						promo_section: {
							select: {
								promo_sections_id: true,
								name: true,
								tag: true,
								active: true,
								description: true,
								canPurchase: true,
								service_type: true,
								promo_duration_days: true,
							},
						},
					},
				},
				scoring_points: {
					select: {
						scoring_points_id: true,
						business_id: true, // Only include business ID
						delivery_order_id: true, // Only include order ID
						taxi_order_id: true, // Only include order ID
						points: true,
						isPenalty: true,
						reason: true,
						expiration_date: true,
						created_at: true,
						updated_at: true,
					},
				},
				// daily_meals_subscriptions: {
				// 	select: {
				// 		daily_meals_subscriptions_id: true,
				// 		grouped_id: true,
				// 		// business_id: true, // Only include business ID
				// 		menu_id: true, // Only include menu ID
				// 		address_id: true, // Only include address ID
				// 		menu_categories_id: true, // Only include menu category ID
				// 		created_at: true,
				// 		updated_at: true,
				// 		date: true,
				// 		quantity: true,
				// 		order_created: true,
				// 		restaurant_comment: true,
				// 		courier_comment: true,
				// 	},
				// },
				late_events: {
					select: {
						late_events_id: true,
						business_id: true, // Only include business ID
						delivery_order_id: true, // Only include order ID
						taxi_order_id: true, // Only include order ID
						scoring_points_id: true,
						seconds: true,
						created_at: true,
						updated_at: true,
					},
				},
				user_favorite_businesses: {
					select: {
						user_favorite_businesses_id: true,
						user_id: true,
						business_id: true,
						business_type: true,
						created_at: true,
						updated_at: true,
					},
				},
				account_actions: {
					// Actions performed on this user's account
					select: {
						account_action_id: true,
						user_id: true, // Keep the user's own ID - this is their data
						created_at: true,
						reason: true,
						action: true,
						// No reference to action_creator (other users) to maintain GDPR compliance
					},
				},
				created_account_actions: {
					// Actions this user performed on other accounts
					select: {
						account_action_id: true,
						action_creator_user_id: true, // Keep this as it's the requesting user's own ID
						created_at: true,
						reason: true,
						action: true,
						// No reference to affected users to maintain GDPR compliance
					},
				},
			};
			let userData = await UserDao.getUserById(user_id, { select: usersStoredData });
			if (userData) {
				delete userData.password; // Ensure password is not sent
				// Simplify delivery order items to only include essential items data (only slovenian translation, not all of them)
				if (userData.delivery_orders) {
					userData.delivery_orders.forEach((order) => {
						if (order.items && Array.isArray(order.items)) {
							order.items = order.items.map((item) => ({
								menu_item_id: item.menu_item_id,
								price: item.price,
								quantity: item.quantity,
								discount: item.discount,
								image: item.image,
								name: item.names?.sl || '',
							}));
						}
					});
				}
				return res.status(200).json(userData);
			} else {
				return res.status(404).json({ error: 'User not found' });
			}
		}
		res.status(400).json({ error: 'Error obtaining personal user data: User ID not provided' });
	} catch (err) {
		console.error('Error in requestData:', err);
		return res.status(500).json({ error: err.message || 'Error obtaining personal user data' });
	}
}
/**
 * POST /users/family/invite
 * @tag Users
 * @summary Invite family member
 * @description Sends an invitation to a family member via email or telephone.
 * @operationId inviteFamilyMember
 * @bodyDescription Invitation payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Invitation sent successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Missing user id or contact information
 * @response 500 - Error inviting family member
 */
async function inviteFamilyMember(req, res) {
	try {
		const userId = req.user?.user_id;
		const { email, telephone } = req.body;
		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' });
		}
		if (!email && !telephone) {
			return res.status(400).json({ error: 'Either email or telephone is required to send an invitation' });
		}
		// TODO: Implement the logic to send the invitation via email or SMS
		return res.status(200).json({ message: 'Family invitation sent successfully' });
	} catch (error) {
		return res.status(500).json({ error: error.message || 'Error inviting family member' });
	}
}
/**
 * POST /users/family/accept-invitation
 * @tag Users
 * @summary Accept family invitation
 * @description Accepts a family invitation using the provided invitation code.
 * @operationId acceptFamilyInvitation
 * @bodyDescription Invitation acceptance payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Invitation accepted successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Missing user id or invitation code
 * @response 500 - Error accepting family invitation
 * @prisma_model users
 * @prisma_model group_users
 */
async function acceptFamilyInvitation(req, res) {
	try {
		const userId = req.user?.user_id;
		const { invitationCode } = req.body;
		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' });
		}
		if (!invitationCode) {
			return res.status(400).json({ error: 'Invitation code is required to accept an invitation' });
		}
		// TODO: Implement the logic to accept the invitation using the invitationCode
		return res.status(200).json({ message: 'Family invitation accepted successfully' });
	} catch (error) {
		return res.status(500).json({ error: error.message || 'Error accepting family invitation' });
	}
}
export { getReferral };
export { claimReward };
export { redeemReferralCode };
export { getUserByReferralCode };
export { listUsers };
export { listPersonalUsers };
export { getUserById };
export { me };
export { updateMe };
export { verifyMe };
export { requestSMSVerification };
export { updatePassword };
export { updateEmail };
export { updateTelephone };
export { addAddress };
export { deleteAddress };
export { editAddress };
export { setPrimaryAddress };
export { oneSignalId };
export { getPaymentSheetCredentials };
export { requestToAddFundsToWallet };
export { updateUserTaxiPreferences };
export { updateUserAllergiesPreferences };
export { updateUserSpicyPreferences };
export { updateUserTransferPreferences };
export { updateUserRadioPreferences };
export { updateUserNotificationPreferences };
export { updateUserTaxiPushNotifications };
export { updateProfilePicture };
export { ping };
export { deleteUserByUserId };
export { getSelfScheduledOrders };
export { getMyReviews };
export { getReviewsByUserId };
export { updateUserByUserId };
export { updateUserTransferPushNotifications };
export { updateUserDeliveryPushNotifications };
export { disableMe };
export { updateUserDisabledByUserId };
export { updateUserActiveByUserId };
export { registerChildUser };
export { updateChildUserEnabledByGroupUserId };
export { updateChildUserAllowanceByGroupUserId };
export { deleteChildUserByGroupUserId };
export { getFamilyWalletBalanceAndType };
export { getAvailableWalletBalance };
export { getTransactions };
export { updateWalletBalance };
export { updateUserLanguage };
export { softDeleteUserByUserId };
export { requestPaymentIntent };
export { confirmPaymentIntent };
export { getUserCredits };
export { getMyActiveOrders };
export { updateMarketingNotifications };
export { updateAdsPersonalization };
export { updateNewsletter };
export { requestData };
export { inviteFamilyMember };
export { acceptFamilyInvitation };
export default {
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
	getAvailableWalletBalance,
	getTransactions,
	updateWalletBalance,
	updateUserLanguage,
	softDeleteUserByUserId,
	requestPaymentIntent,
	confirmPaymentIntent,
	getUserCredits,
	getMyActiveOrders,
	updateMarketingNotifications,
	updateAdsPersonalization,
	updateNewsletter,
	requestData,
	inviteFamilyMember,
	acceptFamilyInvitation,
};
