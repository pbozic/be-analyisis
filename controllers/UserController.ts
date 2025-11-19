import { config } from 'dotenv';
import type { Response } from 'express';
import bcrypt from 'bcrypt';
import { ACCOUNT_ACTIONS_REASON, FUNDS_TYPE, USER_ROLES } from '@prisma/client';

import GroupDao from '../dao/Group.js';
import ReviewsDao from '../dao/Review.ts';
import UserDao from '../dao/User';
import userDataRequestDefaultInclude from '../prisma/includes/userDataRequest';
import type { ValidatedRequest } from '../types/validatedRequest.ts';
import TokenDao from '../dao/Token.js';
import AddressDao from '../dao/Address.js';
import DriverDao from '../dao/Driver.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import TaxiOrderDao from '../dao/TaxiOrder.ts';
import ReferralDao from '../dao/Referrals.ts';
import DeliveryOrderDao from '../dao/DeliveryOrder.ts';
import CashbackDao from '../dao/Cashback.ts';
import TableReservationDao from '../dao/TableReservation.ts';
import SMS from '../lib/SMS.js';
import stripe from '../lib/stripe.js';
import {
	VERIFICATION_TOKEN_EXPIRATION_MINUTES,
	DELIVERY_ORDER_STATUS,
	CREDITS,
	CASHBACK_TYPE,
	ORDER_TYPE,
	MAX_WALLET_FUNDS,
} from '../lib/constants.js';
import {
	AcceptFamilyInvitationRequest,
	AddAddressRequest,
	ClaimRewardRequest,
	ConfirmPaymentIntentRequest,
	EditAddressRequest,
	InviteFamilyMemberRequest,
	RedeemReferralCodeRequest,
	RequestPaymentIntentRequest,
	RequestToAddFundsRequest,
	SoftDeleteUserRequest,
	UpdateAdsPersonalizationRequest,
	UpdateAllergiesPreferencesRequest,
	UpdateDeliveryPushNotificationsRequest,
	UpdateEmailRequest,
	UpdateFavoriteServicesBody,
	UpdateMarketingNotificationsRequest,
	UpdateMeRequest,
	UpdateNewsletterRequest,
	UpdateNotificationPreferencesRequest,
	UpdateOneSignalIdRequest,
	UpdatePasswordRequest,
	UpdateRadioPreferencesRequest,
	UpdateSpicyPreferencesRequest,
	UpdateTaxiPreferencesRequest,
	UpdateTelephoneRequest,
	UpdateTransferPreferencesRequest,
	UpdateTransferPushNotificationsRequest,
	UpdateUserActiveRequest,
	UpdateUserByUserIdRequest,
	UpdateUserDisabledRequest,
	UpdateUserLanguageRequest,
	UpdateWalletBalanceRequest,
	VerifyPhoneRequest,
} from '../schemas/dto/User/user.validators.ts';

config();

/**
 * GET /users/:user_id
 * @tag Users
 * @summary Get a user by ID
 * @description Retrieves detailed information about a specific user by their ID.
 * @operationId getUserById
 * @pathParam {string} user_id - The ID of the user to retrieve
 * @response 200 - Successful operation, returns detailed user information
 * @responseContent {UserResponse} 200.application/json
 * @response 404 - User not found
 * @response 400 - Error retrieving user information
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 */
async function getUserById(req: ValidatedRequest<never, { user_id: string }>, res: Response): Promise<void> {
	try {
		let user = await UserDao.getUserById(req.params.user_id);
		if (user) {
			if (!user.profile_picture_id) {
				res.status(404).json({ error: 'Profile picture not found' });
				return;
			}
			const userWithProfilePic = {
				...user,
				profile_picture: user.profile_picture?.url || null,
			};
			res.status(200).json(userWithProfilePic);
		} else {
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Error retrieving user:', error);
		res.status(400).json({ error: 'Error retrieving user information', detail: (error as Error).message });
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
 * @responseContent {UserWithPayments} 200.application/json
 * @response 400 - Error obtaining user information.
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
async function me(req: ValidatedRequest<never>, res: Response): Promise<void> {
	if (!req.user) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	try {
		let user = await UserDao.getUserById(req.user.user_id);
		if (!user) {
			res.status(404).json({ error: 'User not found!' });
			return;
		}

		console.log('/me user: ', user?.user_id);

		if (user) {
			let payment_methods: any[] = [];
			if (user.stripe_customer_id) {
				payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
			}

			console.log(user.business_users, 'business_users from this user');
			if (user.business_users) {
				for (const businessUser of user.business_users) {
					if (businessUser.business && businessUser.business.stripe_customer_id) {
						const paymentMethods = await stripe.getPaymentMethods(businessUser.business.stripe_customer_id);
						console.log(businessUser.business.stripe_customer_id, 'business_id');
						if (paymentMethods && paymentMethods.length > 0) {
							businessUser.business.payment_methods = paymentMethods;
						}
					}
				}
			}

			const userWithPayments = {
				...user,
				payment_methods,
			};
			res.status(200).json(userWithPayments);
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
 * @bodyContent {UpdateMeRequest} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateMe(req: ValidatedRequest<UpdateMeRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUser(req.user.user_id, req.body);
		if (user) {
			if (req.userSocket) req.userSocket.emit('updateUser', user);
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
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
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTaxiPreferences(
	req: ValidatedRequest<UpdateTaxiPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserTaxiPreferences(req.user.user_id, req.body.taxi_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserNotificationPreferences(
	req: ValidatedRequest<UpdateNotificationPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserNotificationPreferences(
			req.user.user_id,
			req.body.notification_preferences
		);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateNotificationPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTaxiPushNotifications(
	req: ValidatedRequest<UpdateNotificationPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserTaxiPushNotifications(req.user.user_id, req.body.notification_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateTransferPushNotificationsRequest} application/json
 * @bodyRequired
 * @response 200 - Transfer push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTransferPushNotifications(
	req: ValidatedRequest<UpdateTransferPushNotificationsRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserTransferPushNotifications(
			req.user.user_id,
			req.body.transfer_push_notification_preferences
		);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateDeliveryPushNotificationsRequest} application/json
 * @bodyRequired
 * @response 200 - Delivery push notification preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserDeliveryPushNotifications(
	req: ValidatedRequest<UpdateDeliveryPushNotificationsRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserDeliveryPushNotifications(
			req.user.user_id,
			req.body.delivery_push_notification_preferences
		);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateSpicyPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Spicy preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserSpicyPreferences(
	req: ValidatedRequest<UpdateSpicyPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserSpicyPreferences(req.user.user_id, req.body.spicy_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateRadioPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Radio preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserRadioPreferences(
	req: ValidatedRequest<UpdateRadioPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserRadioPreferences(req.user.user_id, req.body.radio_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateAllergiesPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Allergies preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserAllergiesPreferences(
	req: ValidatedRequest<UpdateAllergiesPreferencesRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserAllergiesPreferences(req.user.user_id, req.body.allergies_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateTelephoneRequest} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateTelephone(req: ValidatedRequest<UpdateTelephoneRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const phoneExists = await UserDao.getUserByEmailOrTelephone(req.body.telephone);
		if (phoneExists) {
			res.status(400).json({ error: 'Telephone already exists..' });
			return;
		}
		let user = await UserDao.updateTelephone(req.user.user_id, req.body);
		user = await UserDao.updateUserTelephoneVerified(req.user.user_id, false);
		if (!user.stripe_customer_id) {
			res.status(400).json({ error: "User doesn't have stripe customer id" });
			return;
		}
		await stripe.updateCustomerPhone(user.stripe_customer_id, req.body.telephone);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
async function requestSMSVerification(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const token = await TokenDao.generateSMSVerificationToken(req.user.user_id);
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user) {
			res.status(400).json({ error: 'Error obtaining user information' });
			return;
		}
		await SMS.sendSMSVerification(user.telephone, token.token);
		if (token) {
			res.status(200).json({ message: 'Token sent', telephone: user.telephone });
		} else {
			res.status(400).json({ error: 'Error obtaining user information' });
		}
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
 * @bodyContent {VerifyPhoneRequest} application/json
 * @bodyRequired
 * @response 200 - User verified successfully.
 * @response 400 - Invalid token or error obtaining user information.
 * @prisma_model tokens
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function verifyMe(req: ValidatedRequest<VerifyPhoneRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(req.user.user_id);

		if (!user) {
			res.status(400).json({ error: 'Error obtaining user information' });
			return;
		}
		const token = await TokenDao.getActiveSMSToken(user);

		console.info(token);
		if (
			token &&
			token.created_at &&
			token.token_id &&
			token.token === req.body.token &&
			token.user_id === req.user.user_id
		) {
			if (Date.now() > new Date(token.created_at).getTime() + 3600000 * VERIFICATION_TOKEN_EXPIRATION_MINUTES) {
				res.status(400).json({ error: 'Token has expired' });
				return;
			}
			await TokenDao.updateToken(token.token_id, { active: false });
			await UserDao.updateUser(req.user.user_id, { phone_verified: true });
			res.status(200).json({ message: 'Phone verified successfully.' });
		} else {
			res.status(400).json({ error: 'Invalid token' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}

/**
 * PATCH /me/one-signal-id
 * @tag Users
 * @summary Updates the current user's OneSignal player ID
 * @description This endpoint is used to update the current user's OneSignal player ID.
 * @operationId updateOneSignalId
 * @bodyDescription The new OneSignal player ID
 * @bodyContent {UpdateOneSignalIdRequest} application/json
 * @bodyRequired
 * @response 200 - OneSignal player ID updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */

async function oneSignalId(req: ValidatedRequest<UpdateOneSignalIdRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUser(req.user.user_id, { one_signal_id: req.body.player_id });
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
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
async function deleteAddress(req: ValidatedRequest<never, { address_id: string }>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		await AddressDao.deleteUserAddress(req.user.user_id, req.params.address_id);
		res.status(200).json({ message: 'Address deleted successfully.' });
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: 'Error deleting address.' });
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
async function deleteUserByUserId(req: ValidatedRequest<never, { user_id: string }>, res: Response): Promise<void> {
	const { user_id } = req.params;
	try {
		const deletedUser = await UserDao.deleteUserByUserId(user_id);
		res.status(200).json({
			message: 'User deleted successfully.',
			user: deletedUser,
		});
	} catch (error: any) {
		if (error.code === 'P2025') {
			res.status(404).json({ error: 'User not found.' });
		} else {
			console.error('Error deleting user:', error);
			res.status(400).json({ error: 'Error deleting user.' });
		}
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
 * @bodyContent {UpdateUserActiveRequest} application/json
 * @response 200 - User active field updated successfully.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating active field.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserActiveByUserId(
	req: ValidatedRequest<UpdateUserActiveRequest, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	const { active, reason } = req.body;
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason as ACCOUNT_ACTIONS_REASON)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		const updatedUser = await UserDao.updateUserActive(
			user_id,
			active,
			req.user.user_id,
			reason as ACCOUNT_ACTIONS_REASON
		);
		res.status(200).json({
			message: 'User active field updated successfully.',
			user: updatedUser,
		});
	} catch (error) {
		console.error('Error updating active field:', error);
		res.status(400).json({ error: 'Error updating active field.' });
	}
}

/**
 * PATCH /users/disabled/{user_id}
 * @tag Users
 * @summary Disables a user by their ID
 * @description This endpoint is used to disable a user's account by their user ID.
 * @operationId disableUserByUserId
 * @pathParam {string} user_id - The ID of the user to disable
 * @bodyDescription The disabled status and reason
 * @bodyContent {UpdateUserDisabledRequest} application/json
 * @response 200 - User disabled successfully.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error disabling user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserDisabledByUserId(
	req: ValidatedRequest<UpdateUserDisabledRequest, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	const { disabled, reason } = req.body;
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason as ACCOUNT_ACTIONS_REASON)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		const disabledUser = await UserDao.updateUserDisabled(
			user_id,
			disabled,
			req.user.user_id,
			reason as ACCOUNT_ACTIONS_REASON
		);
		res.status(200).json({
			message: 'User disabled field updated successfully.',
			user: disabledUser,
		});
	} catch (error) {
		console.error('Error updating disabled field:', error);
		res.status(400).json({ error: 'Error updating disabled field.' });
	}
}

/**
 * PATCH /users/soft_delete/{user_id}
 * @tag Users
 * @summary Performs a "soft delete" for a user by their ID
 * @description This endpoint is used to "soft delete" a user's account by their user ID.
 * @operationId softDeleteUserByUserId
 * @pathParam {string} user_id - The ID of the user to disable
 * @bodyDescription The reason for soft deletion
 * @bodyContent {SoftDeleteUserRequest} application/json
 * @response 200 - User "soft delete" successful.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error soft deleting user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function softDeleteUserByUserId(
	req: ValidatedRequest<SoftDeleteUserRequest, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	const { reason } = req.body;
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		if (!user_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason as ACCOUNT_ACTIONS_REASON)) {
			throw new Error('Missing user_id or invalid reason.');
		}
		await UserDao.updateUserDisabled(user_id, true, req.user.user_id, reason as ACCOUNT_ACTIONS_REASON);
		const wipedUser = await UserDao.wipeUserPersonalData(user_id);
		res.status(200).json({
			message: 'User "soft delete" successful.',
			user: wipedUser,
		});
	} catch (error) {
		console.error('Error soft deleting user:', error);
		res.status(400).json({ error: 'Error soft deleting user.' });
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
 * @bodyContent {EditAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Address edited successfully. Returns the updated user address.
 * @responseContent {UserAddressResponse} 200.application/json
 * @response 400 - Error editing address.
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function editAddress(
	req: ValidatedRequest<EditAddressRequest, { address_id: string }>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const userAddress = await AddressDao.editUserAddress(req.user.user_id, req.params.address_id, req.body);
		if (userAddress) {
			res.status(200).json(userAddress);
		} else {
			res.status(400).json({ error: 'Error editing address' });
		}
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
async function setPrimaryAddress(req: ValidatedRequest<never, { address_id: string }>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const userAddress = await AddressDao.setPrimaryUserAddress(req.user.user_id, req.params.address_id);
		if (userAddress) {
			res.status(200).json({ message: 'Primary address set.' });
		} else {
			res.status(400).json({ error: 'Error setting primary address' });
		}
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
async function getPaymentSheetCredentials(
	req: ValidatedRequest<never, { type: string; business_id?: string }>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user) {
			res.status(400).json({ error: 'Error obtaining user information' });
			return;
		}
		const { type, business_id } = req.params;
		let credentials = null;
		if (type === 'business') {
			console.log(credentials, 'business credentials12');
			credentials = await stripe.generateBusinessPaymentSheetCredentials(business_id!);
		} else {
			console.log(credentials, 'credentials12');
			credentials = await stripe.generatePaymentSheetCredentials(user);
		}
		if (credentials) {
			res.status(200).json(credentials);
		} else {
			res.status(400).json({ error: 'Error obtaining payment sheet credentials' });
		}
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
 * @bodyContent {RequestToAddFundsRequest} application/json
 * @bodyRequired
 * @response 200 - Payment intent created
 * @response 400 - Invalid parameters or error creating payment intent
 * @prisma_model users
 * @prisma_model wallet_funds
 */
async function requestToAddFundsToWallet(
	req: ValidatedRequest<RequestToAddFundsRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user || !user.stripe_customer_id) {
			res.status(400).json({ error: 'Error obtaining user information' });
			return;
		}
		const { amount, currency, payment_method_id, return_url } = req.body;
		if ((!amount && amount <= 0) || !currency || !payment_method_id) {
			res.status(400).json({ error: 'Error requesting to add funds to wallet: Invalid parameters!' });
			return;
		}
		const availableWalletFunds = await WalletFundsDao.getAvailableWalletFunds(user.user_id, FUNDS_TYPE.FUNDS);
		let sum = 0;
		const included_wallet_funds = [];
		for (let i = 0; i < availableWalletFunds.length; i++) {
			sum += availableWalletFunds[i]?.amount ?? 0;
			included_wallet_funds.push(availableWalletFunds[i]);
			if (sum >= MAX_WALLET_FUNDS) {
				break;
			}
		}
		if (sum >= MAX_WALLET_FUNDS) {
			res.status(400).json({
				error_type: 'MAX_WALLET_FUNDS_ERR',
				error: 'You have reached the maximum wallet funds limit.',
			});
			return;
		}
		const paymentIntent = await stripe.createPaymentIntentForWallet(
			Math.round(amount * 100),
			currency,
			payment_method_id,
			user.stripe_customer_id,
			user.user_id,
			return_url
		);
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
 * @bodyContent {RequestPaymentIntentRequest} application/json
 * @bodyRequired
 * @response 200 - Payment intent created
 * @response 400 - Invalid parameters or error creating payment intent
 * @prisma_model users
 */
async function requestPaymentIntent(req: ValidatedRequest<RequestPaymentIntentRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { amount, currency } = req.body;
		if ((!amount && amount <= 0) || !currency) {
			res.status(400).json({ error: 'Error requesting payment intent: Invalid parameters!' });
			return;
		}
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user || !user.stripe_customer_id) {
			res.status(400).json({ error: 'Error obtaining user information' });
			return;
		}
		const paymentIntent = await stripe.createPaymentIntentForPlatform(
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
 * GET /users/me/scheduled_orders
 * @tag Users
 * @summary List my scheduled taxi orders
 * @description Returns pending scheduled taxi orders for the current user.
 * @operationId getSelfScheduledOrders
 * @response 200 - List of scheduled orders
 * @responseContent {TaxiOrderDetail[]} 200.application/json
 * @response 500 - Error fetching scheduled orders
 * @prisma_model taxi_orders
 */
async function getSelfScheduledOrders(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const orders = await TaxiOrderDao.getPendingScheduledOrdersByUserId(req.user.user_id);
		res.status(200).json(orders);
	} catch (e) {
		console.info('TaxiOrderController', e);
		res.status(500).json(e);
	}
}

/**
 * GET /users
 * @tag Users
 * @summary Get a list of users
 * @description Returns a list of users.
 * @operationId getUsers
 * @response 200 - successful operation
 * @responseContent {UserResponse[]} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function listUsers(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		const users = await UserDao.getAllUsersWithAddressesAndConnections();
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
 * GET /users/personal
 * @tag Users
 * @summary Get a list of personal users
 * @description Returns a list of personal users.
 * @operationId getPersonalUsers
 * @response 200 - successful operation
 * @responseContent {UserResponse[]} 200.application/json
 * @response 400 - Error occurred while obtaining the user list
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function listPersonalUsers(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		const users = await UserDao.getPersonalUsers(USER_ROLES.PERSONAL, null, false);
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
 * PATCH /me/update_user
 * @tag Users
 * @summary Updates a user's details by user_id
 * @description This endpoint is used to update a user's details by user_id.
 * @operationId updateUserByUserId
 * @bodyDescription The user_id and data to update
 * @bodyContent {UpdateUserByUserIdRequest} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserByUserId(req: ValidatedRequest<UpdateUserByUserIdRequest>, res: Response): Promise<void> {
	const { user_id, data } = req.body;
	try {
		const user = await UserDao.updateScheduledUser(user_id, data);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdatePasswordRequest} application/json
 * @bodyRequired
 * @response 200 - Password updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updatePassword(req: ValidatedRequest<UpdatePasswordRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const postData = req.body;
		const userPassword = await UserDao.getPasswordByUserId(req.user.user_id);
		if (!userPassword) {
			res.status(400).json({ error: 'Error retrieving old password' });
			return;
		}
		const correctPw = await bcrypt.compare(postData.password, userPassword);
		if (!correctPw) {
			res.status(400).json({ error: 'Wrong password..' });
			return;
		}
		const hash = await bcrypt.hash(postData.new_password, Number(process.env.BCRYPT_SALT_ROUNDS));
		const user = await UserDao.updateUserPassword(req.user.user_id, hash);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
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
 * @bodyContent {UpdateEmailRequest} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateEmail(req: ValidatedRequest<UpdateEmailRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserByEmailOrTelephone(req.body.email);
		if (user) {
			res.status(400).json({ error: 'Email already exists..' });
			return;
		}
		const updated_user = await UserDao.updateEmail(req.user.user_id, req.body.email);
		if (!updated_user.stripe_customer_id && updated_user.email) {
			const stripe_customer = await stripe.createCustomer(
				updated_user.email,
				updated_user.first_name + ' ' + updated_user.last_name,
				updated_user.telephone
			);
			await UserDao.updateStripeCustomerId(req.user.user_id, stripe_customer.id);
		} else {
			if (!updated_user.stripe_customer_id) {
				throw new Error('Missing stripe customer id.');
			}
			await stripe.updateCustomerEmail(updated_user.stripe_customer_id, req.body.email);
		}
		if (updated_user) {
			res.status(200).json(updated_user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
	} catch (e) {
		console.log(e);
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
 * @bodyContent {UpdateTransferPreferencesRequest} application/json
 * @bodyRequired
 * @response 200 - Transfer preferences updated successfully. Returns the updated user's details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserTransferPreferences(
	req: ValidatedRequest<UpdateTransferPreferencesRequest>,
	res: Response
): Promise<void> {
	if (!req.user) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	try {
		const user = await UserDao.updateUserTransferPreferences(req.user.user_id, req.body.transfer_preferences);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
	} catch (e) {
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
 * @bodyContent {AddAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Address added successfully. Returns the updated user's details.
 * @responseContent {UserAddressResponse} 200.application/json
 * @response 400 - Error adding address.
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 */
async function addAddress(req: ValidatedRequest<AddAddressRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const address = await AddressDao.addAddress(req.body);
		const userAddress = await AddressDao.addUserAddress(req.user.user_id, address.address_id);
		if (userAddress) {
			res.status(200).json(address);
		} else {
			res.status(400).json({ error: 'Error adding address1' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error adding address', e });
	}
}

/**
 * PATCH /me/disabled
 * @tag Users
 * @summary Disables the current user
 * @description This endpoint is used to disable the current user.
 * @operationId disableMe
 * @bodyDescription The disabled status and reason
 * @bodyContent {UpdateUserDisabledRequest} application/json
 * @bodyRequired
 * @response 200 - User disabled successfully. Returns user.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function disableMe(req: ValidatedRequest<UpdateUserDisabledRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const disabledUser = await UserDao.updateUserDisabled(
			req.user.user_id,
			true,
			req.user.user_id,
			ACCOUNT_ACTIONS_REASON.SELF_DISABLE
		);
		if (disabledUser) {
			res.status(200).json({
				message: 'User disabled successfully.',
				user: disabledUser,
			});
		} else {
			res.status(400).json({ error: 'Error updating user information' });
		}
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}

/**
 * POST /users/me/confirm-payment-intent
 * @tag Users
 * @summary Confirm a payment intent
 * @description Confirms a Stripe Payment Intent by id.
 * @operationId confirmPaymentIntent
 * @bodyDescription Payment intent id to confirm
 * @bodyContent {ConfirmPaymentIntentRequest} application/json
 * @bodyRequired
 * @response 200 - Payment intent confirmed
 * @response 400 - Invalid parameters or error confirming payment intent
 */
async function confirmPaymentIntent(req: ValidatedRequest<ConfirmPaymentIntentRequest>, res: Response): Promise<void> {
	try {
		const { payment_intent_id } = req.body;
		if (!payment_intent_id) {
			res.status(400).json({ error: 'Error confirming payment intent: Invalid parameters!' });
			return;
		}
		const paymentIntent = await stripe.confirmPaymentIntent(payment_intent_id);
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
 * @responseContent {string} 200.application/json
 * @response 400 - User is not a driver
 * @prisma_model users
 * @prisma_model driver
 * @prisma_model delivery_driver
 */
async function ping(req: ValidatedRequest<never>, res: Response): Promise<void> {
	console.log('ping, req.user ', req.user);
	if (!req.user) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	const user_driver = await DriverDao.getDriverByUserId(req.user.user_id);
	if (!user_driver) {
		res.status(400).json({ error: 'User is not a driver' });
		return;
	}
	await DriverDao.updateDriver(user_driver.driver_id, {
		last_ping_at: new Date().toISOString(),
		is_inactive: false,
	});
	res.status(200).json({ message: 'Driver is online' });
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
async function requestData(req: ValidatedRequest<never>, res: any) {
	// TODO: DEPRECATED FUNCTION
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user_id = req.user.user_id;
		if (user_id) {
			const usersStoredData = {
				select: {
					user_roles_id: true,
					user_id: true,
					role: true,
					primary: true,
				},
				include: userDataRequestDefaultInclude,
			};
			let userData = await UserDao.getUserById(user_id);
			if (userData) {
				// delete userData.password; // Ensure password is not sent
				// // Simplify delivery order items to only include essential items data (only slovenian translation, not all of them)
				// if (userData.delivery_orders) {
				// 	userData.delivery_orders.forEach((order) => {
				// 		if (order.items && Array.isArray(order.items)) {
				// 			order.items = order.items.map((item) => ({
				// 				menu_item_id: item.menu_item_id,
				// 				price: item.price,
				// 				quantity: item.quantity,
				// 				discount: item.discount,
				// 				image: item.image,
				// 				name: item.names?.sl || '',
				// 			}));
				// 		}
				// 	});
				// }
				return res.status(200).json(userData);
			} else {
				return res.status(404).json({ error: 'User not found' });
			}
		}
		res.status(400).json({ error: 'Error obtaining personal user data: User ID not provided' });
	} catch (err: any) {
		console.error('Error in requestData:', err);
		return res.status(500).json({ error: err.message || 'Error obtaining personal user data' });
	}
}

/**
 * GET /users/me/reviews
 * @tag Users
 * @summary List my reviews
 * @description Returns reviews written for or by the current user, including author and target details.
 * @operationId getMyReviews
 * @response 200 - List of reviews
 * @responseContent {ReviewResponse[]} 200.application/json
 * @response 500 - Error fetching reviews
 * @prisma_model reviews
 * @prisma_model users
 * @prisma_model business
 * @prisma_model documents
 * @prisma_model files
 */
async function getMyReviews(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const reviews = await ReviewsDao.getReviewsByUserId(req.user.user_id);
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
 * @responseContent {ReviewResponse[]} 200.application/json
 * @response 404 - User not found
 * @response 500 - Error fetching reviews
 * @prisma_model reviews
 * @prisma_model users
 * @prisma_model business
 * @prisma_model documents
 * @prisma_model files
 */
async function getReviewsByUserId(req: ValidatedRequest<never, { user_id: string }>, res: Response): Promise<void> {
	try {
		const reviews = await ReviewsDao.getReviewsByUserId(req.params.user_id);
		res.status(200).json(reviews);
	} catch (e) {
		console.error('UserController', e);
		res.status(500).json({ error: 'Internal server error' });
	}
}

// TODO: Check these routes for childUser if they existed before
// /**
//  * PATCH /users/me/group_user/status
//  * @tag Users
//  * @summary Updates the enabled field of the given child_user_id
//  * @description This endpoint is used to update enabled field of the given child_user_id
//  * @operationId updateChildUser
//  * @bodyDescription The child's group_user_id and value to set for the child user's enabled field
//  * @bodyContent {object} application/json
//  * @bodyRequired
//  * @response 200 - User updated successfully. Returns the updated group_user.
//  * @responseContent {object} 200.application/json
//  * @response 400 - Error updating group user enabled status.
//  */
// async function updateChildUserEnabledByGroupUserId(
// 	req: ValidatedRequest<GroupUserStatusBody>,
// 	res: Response
// ): Promise<void> {
// 	const { group_user_id, value } = req.body;
// 	if (!group_user_id || typeof value !== 'boolean') {
// 		res.status(400).json({ error: 'Invalid input. Please provide a valid group_user_id and a boolean value.' });
// 		return;
// 	}
// 	try {
// 		const group_user = await GroupDao.updateGroupUserEnabled(group_user_id, value);
// 		if (group_user) {
// 			res.status(200).json(group_user);
// 		} else {
// 			res.status(400).json({ error: 'Error updating group user enabled status' });
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		res.status(400).json({ error: 'Error updating group user enabled status', e });
// 	}
// }

// /**
//  * PATCH /users/me/group_user/allowance
//  * @tag Users
//  * @summary Updates the allowance of the given child_user_id for the given service_type
//  * @description This endpoint is used to update the allowance of the given child_user_id for the given service_type
//  * @operationId updateChildUserAllowance
//  * @bodyDescription The child's group_user_id and value to set for the child user's allowance for the given service type
//  * @bodyContent {object} application/json
//  * @bodyRequired
//  * @response 200 - User allowance updated successfully. Returns the updated group_user.
//  * @responseContent {object} 200.application/json
//  * @response 400 - Error updating group user enabled status.
//  */
// async function updateChildUserAllowanceByGroupUserId(
// 	req: ValidatedRequest<GroupUserAllowanceBody>,
// 	res: Response
// ): Promise<void> {
// 	const { group_user_id, value, type } = req.body;
// 	try {
// 		const group_user = await GroupDao.updateGroupUserAllowance(group_user_id, value, type);
// 		if (group_user) {
// 			res.status(200).json(group_user);
// 		} else {
// 			res.status(400).json({ error: 'Error updating group user allowance' });
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		res.status(400).json({ error: 'Error updating group user allowance', e });
// 	}
// }

// /**
//  * DELETE /users/me/group_user/delete/:group_user_id
//  * @tag Users
//  * @summary Deletes a group_user by their ID
//  * @description This endpoint is used to delete a child user from the system by their group_user ID.
//  * @operationId deleteChildUserByGroupUserId
//  * @pathParam {string} group_user_id - The ID of the child user to delete
//  * @response 200 - User deleted successfully.
//  * @response 400 - Error deleting user.
//  * @response 404 - User not found.
//  */
// async function deleteChildUserByGroupUserId(
// 	req: ValidatedRequest<any, { group_user_id: string }>,
// 	res: Response
// ): Promise<void> {
// 	const group_user_id = req.params.group_user_id;
// 	try {
// 		const group_user = await GroupDao.deleteGroupUser(group_user_id);
// 		if (group_user) {
// 			res.status(200).json(group_user);
// 		} else {
// 			res.status(400).json({ error: 'Error deleting group user' });
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		res.status(400).json({ error: 'Error deleting group user', e });
// 	}
// }

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
async function getAvailableWalletBalance(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		const balance = await WalletFundsDao.getAvailableWalletBalance(req.params.user_id);
		res.status(200).json({ wallet_balance: balance });
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
 * @pathParam {string} user_id - The ID of the child user
 * @response 200 - Returning object with parent_wallet_balance, allowance and family_wallet_type
 * @responseContent {FamilyWalletResponse} 200.application/json
 * @response 400 - Error checking wallet balances
 * @prisma_model wallet_funds (see ./prisma/schemas/base.prisma)
 * @prisma_model group_users (see ./prisma/schemas/user.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function getFamilyWalletBalanceAndType(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		const group_user = await GroupDao.getGroupUserByChildId(req.params.user_id);
		if (group_user === null) {
			res.status(200).json({ parent_wallet_balance: 0, allowance: 0, family_wallet_type: null });
			return;
		}
		if (group_user) {
			console.log(group_user);
			if (group_user.enabled) {
				const parent_wallet_balance = await WalletFundsDao.getAvailableWalletBalance(
					group_user.parent_user.user_id
				);
				res.status(200).json({
					parent_wallet_balance: parent_wallet_balance,
					allowance: group_user.allowance,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? 'BUSINESS' : 'FAMILY',
				});
			} else {
				res.status(200).json({
					parent_wallet_balance: 0,
					allowance: 0,
					family_wallet_type: group_user.parent_user.user_role.startsWith('BUSINESS') ? 'BUSINESS' : 'FAMILY',
				});
			}
		} else {
			res.status(400).json({ error: 'Error obtaining family wallet balance and type' });
		}
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
 * @bodyContent {UpdateWalletBalanceRequest} application/json
 * @bodyRequired
 * @response 200 - Wallet balance updated successfully.
 * @response 400 - Error updating wallet balance.
 * @responseContent {string} 200.application/json
 * @prisma_model wallet_funds (see ./prisma/schemas/base.prisma)
 * @prisma_model transactions (see ./prisma/schemas/base.prisma)
 */
async function updateWalletBalance(
	req: ValidatedRequest<UpdateWalletBalanceRequest, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	const { amount, documents } = req.body;
	try {
		const new_transaction = await UserDao.updateWalletBalance(user_id, amount, documents);
		if (new_transaction) {
			const wallet_balance = (await WalletFundsDao.getAvailableWalletBalance(user_id)) / 100;
			res.status(200).json({ message: 'Wallet balance updated successfully.', wallet_balance });
		} else {
			res.status(400).json({ error: 'Error updating wallet balance' });
		}
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
 * @responseContent {TransactionResponse[]} 200.application/json
 * @response 400 - Error fetching transactions
 * @prisma_model transactions
 */
async function getTransactions(req: ValidatedRequest<never, { user_id: string }>, res: Response): Promise<void> {
	const { user_id } = req.params;
	try {
		const transactions = await UserDao.getTransactions(user_id);
		if (transactions) {
			res.status(200).json(transactions);
		} else {
			res.status(400).json({ error: 'Error updating wallet balance' });
		}
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
 * @bodyContent {UpdateUserLanguageRequest} application/json
 * @bodyRequired
 * @response 200 - Language updated successfully. Returns the updated user details.
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating user language.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function updateUserLanguage(req: ValidatedRequest<UpdateUserLanguageRequest>, res: Response): Promise<void> {
	try {
		const updatedUser = await UserDao.updateUserLanguage(req.body.user_id, req.body.language);
		if (updatedUser) {
			res.status(200).json(updatedUser);
		} else {
			res.status(400).json({ error: 'Error updating user language.' });
		}
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
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error fetching user by referral code
 * @prisma_model users
 */
async function getUserByReferralCode(req: ValidatedRequest<never, { code: string }>, res: Response): Promise<void> {
	try {
		const user = await UserDao.getUserByReferralCode(req.params.code);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error fetching user by referral code.' });
		}
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
 * @bodyContent {RedeemReferralCodeRequest} application/json
 * @bodyRequired
 * @response 200 - Referral code redeemed successfully
 * @response 400 - Error redeeming referral code
 * @responseContent {ReferralDetail} 200.application/json
 * @prisma_model referrals (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function redeemReferralCode(req: ValidatedRequest<RedeemReferralCodeRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { referral_code } = req.body;
		const user_id = req.user.user_id;
		// First check if user already has a referral
		const existingReferral = await ReferralDao.getReferralByReferredUserId(user_id);
		if (existingReferral) {
			res.status(400).json({ errorCustom: 'User has already redeemed a referral code' });
			return;
		}
		// Find the referrer by their referral code
		const referrer = await UserDao.getUserByReferralCode(referral_code);
		if (!referrer) {
			res.status(400).json({ errorCustom: 'Invalid referral code' });
			return;
		}
		// Prevent referral by user referrals
		const referrerReferral = await ReferralDao.getReferralByReferredUserId(referrer.user_id);
		if (referrerReferral?.referrer_user_id === user_id) {
			res.status(400).json({ errorCustom: 'Cannot get referred by one of your referrals' });
			return;
		}
		// Prevent self-referral
		if (referrer.user_id === user_id) {
			res.status(400).json({ errorCustom: 'Cannot use own referral code' });
			return;
		}
		// Referrer can only refer up to 10 people
		if (referrer.referrals_made?.length && referrer.referrals_made.length >= 10) {
			res.status(400).json({ errorCustom: 'This user has already referred 10 people' });
			return;
		}
		const referral = await ReferralDao.createReferral(referrer.user_id, user_id, referral_code);
		res.status(200).json({ message: 'Referral code redeemed successfully', referral });
	} catch (error) {
		res.status(400).json({ error: (error as Error).message || 'Error redeeming referral code' });
	}
}

/**
 * PATCH /users/me/claim-reward
 * @tag Users
 * @summary Claim referral reward
 * @description Claims referral reward credits for the current user if eligible.
 * @operationId claimReward
 * @bodyDescription Referral id to claim
 * @bodyContent {ClaimRewardRequest} application/json
 * @bodyRequired
 * @response 200 - Reward claimed
 * @response 400 - Reward already claimed or error
 * @responseContent {ReferralBase} 200.application/json
 * @prisma_model referrals
 * @prisma_model wallet_funds
 */
async function claimReward(req: ValidatedRequest<ClaimRewardRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { referral_id } = req.body;
		if (!referral_id) {
			res.status(400).json({ error: 'Missing referral_id in the request body!' });
			return;
		}
		const alreadyClaimed = await ReferralDao.getReferralByReferralId(referral_id);
		if (alreadyClaimed?.reward_claimed) {
			res.status(400).json({ error: 'Reward already claimed!' });
			return;
		}
		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		await WalletFundsDao.createCredit({
			expires_at: expiryDate.toISOString(),
			user_id: req.user.user_id,
			amount: CREDITS.REFERRAL,
			type: FUNDS_TYPE.CREDITS_ANY,
			referral_id: referral_id,
		});
		const referral = await ReferralDao.updateReferralRewardClaimed(referral_id, true);
		if (!referral) {
			res.status(400).json({ error: 'Error claiming reward' });
			return;
		}
		res.status(200).json(referral);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message || 'Error claiming reward' });
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
 * @responseContent {UserCreditsResponse} 200.application/json
 * @response 400 - Error fetching user credits
 * @prisma_model wallet_funds
 * @prisma_model cashback
 */
async function getUserCredits(
	req: ValidatedRequest<never, { service_type: FUNDS_TYPE }>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { service_type } = req.params;
		const { user_id } = req.user;
		const availableCredits = await WalletFundsDao.getAvailableCreditsByType(user_id, service_type);
		const expiredCredits = await WalletFundsDao.getExpiredCredits(user_id, service_type);
		const cashbacks = Object.keys(CASHBACK_TYPE).includes(service_type.toUpperCase())
			? await CashbackDao.getPendingUserCashbackByType(user_id, service_type)
			: [];
		res.status(200).json({
			availableCredits: availableCredits,
			expiredCredits: expiredCredits,
			cashbacks: cashbacks,
		});
	} catch (error) {
		res.status(400).json({ error: (error as Error).message || 'Error fetching user credits' });
	}
}

/**
 * GET /users/me/active_orders
 * @tag Users
 * @summary Get my active orders
 * @description Returns current active delivery, taxi/transfer orders and first active reservation.
 * @operationId getMyActiveOrders
 * @response 200 - Active orders by type
 * @responseContent {MyActiveOrdersResponse} 200.application/json
 * @response 400 - Error fetching user active orders
 * @prisma_model delivery_orders
 * @prisma_model taxi_orders
 * @prisma_model reservations
 */
async function getMyActiveOrders(req: ValidatedRequest<never>, res: Response): Promise<void> {
	if (!req.user) {
		res.status(401).json({ error: 'Unauthorized' });
		return;
	}
	const user_id = req.user.user_id;
	try {
		const [delivery_orders, taxi_orders, transfer_orders, first_reservation] = await Promise.all([
			DeliveryOrderDao.getDeliveryOrdersIfNotCompleted(user_id),
			TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, ORDER_TYPE.TAXI),
			TaxiOrderDao.getTaxiOrdersIfNotCompleted(user_id, ORDER_TYPE.TRANSFER_PRIVATE),
			TableReservationDao.getReservationIfNotCompleted(user_id),
		]);

		const filteredDeliveryOrders = delivery_orders.filter((order) => {
			if (!order.is_daily_meal) return true;
			return order.timeline.some((entry) => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED);
		});

		res.status(200).json({
			delivery_orders: filteredDeliveryOrders,
			taxi_orders,
			transfer_orders,
			first_reservation,
		});
	} catch (error) {
		res.status(400).json({
			error: (error as Error).message || 'Error fetching user active order ids',
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
 * @responseContent {ReferralDetail} 200.application/json
 * @response 400 - Error fetching referral
 * @prisma_model referrals
 */
async function getReferral(req: ValidatedRequest<never>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const referral = await ReferralDao.getReferralByReferredUserId(req.user.user_id);
		if (!referral) {
			res.status(400).json({ error: 'Error fetching referral' });
			return;
		}
		res.status(200).json(referral);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message || 'Error fetching referral' });
	}
}

/**
 * PATCH /users/me/marketing-notifications
 * @tag Users
 * @summary Update marketing notifications preference
 * @description Updates the user's marketing notifications preference flags.
 * @operationId updateMarketingNotifications
 * @bodyDescription Preference payload
 * @bodyContent {UpdateMarketingNotificationsRequest} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateMarketingNotifications(
	req: ValidatedRequest<UpdateMarketingNotificationsRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserMarketingNotifications(
			req.user.user_id,
			req.body.data.allow_marketing_push_notifications
		);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error setting marketing notifications' });
		}
	} catch (err) {
		res.status(400).json({ error: (err as Error).message || 'Error setting marketing notifications' });
	}
}

/**
 * PATCH /users/me/ads-personalization
 * @tag Users
 * @summary Update ads personalization preference
 * @description Updates the user's ads personalization preference flags.
 * @operationId updateAdsPersonalization
 * @bodyDescription Preference payload
 * @bodyContent {UpdateAdsPersonalizationRequest} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateAdsPersonalization(
	req: ValidatedRequest<UpdateAdsPersonalizationRequest>,
	res: Response
): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserAdsPersonalization(
			req.user.user_id,
			req.body.data.allow_ads_personalization
		);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error setting ads personalization' });
		}
	} catch (err) {
		res.status(400).json({ error: (err as Error).message || 'Error setting ads personalization' });
	}
}

/**
 * PATCH /users/me/newsletter
 * @tag Users
 * @summary Update newsletter subscription preference
 * @description Updates the user's newsletter preference flags.
 * @operationId updateNewsletter
 * @bodyDescription Preference payload
 * @bodyContent {UpdateNewsletterRequest} application/json
 * @bodyRequired
 * @response 200 - Preferences updated
 * @responseContent {UserResponse} 200.application/json
 * @response 400 - Error updating preferences
 * @prisma_model users
 */
async function updateNewsletter(req: ValidatedRequest<UpdateNewsletterRequest>, res: Response): Promise<void> {
	try {
		if (!req.user) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.updateUserNewsletter(req.user.user_id, req.body.data.allow_newsletter);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ error: 'Error setting newsletter' });
		}
	} catch (err) {
		res.status(400).json({ error: (err as Error).message || 'Error setting newsletter' });
	}
}

/**
 * POST /users/family/invite
 * @tag Users
 * @summary Invite family member
 * @description Sends an invitation to a family member via email or telephone.
 * @operationId inviteFamilyMember
 * @bodyDescription Invitation payload
 * @bodyContent {InviteFamilyMemberRequest} application/json
 * @bodyRequired
 * @response 200 - Invitation sent successfully
 * @responseContent {string} 200.application/json
 * @response 400 - Missing user id or contact information
 * @response 500 - Error inviting family member
 */
async function inviteFamilyMember(req: ValidatedRequest<InviteFamilyMemberRequest>, res: Response): Promise<void> {
	try {
		const userId = req.user?.user_id;
		const { email, telephone } = req.body;
		if (!userId) {
			res.status(400).json({ error: 'User ID is required' });
			return;
		}
		if (!email && !telephone) {
			res.status(400).json({ error: 'Either email or telephone is required to send an invitation' });
			return;
		}
		// TODO: Implement the logic to send the invitation via email or SMS
		res.status(200).json({ message: 'Family invitation sent successfully' });
	} catch (error) {
		res.status(500).json({ error: (error as Error).message || 'Error inviting family member' });
	}
}

/**
 * POST /users/family/accept-invitation
 * @tag Users
 * @summary Accept family invitation
 * @description Accepts a family invitation using the provided invitation code.
 * @operationId acceptFamilyInvitation
 * @bodyDescription Invitation acceptance payload
 * @bodyContent {AcceptFamilyInvitationRequest} application/json
 * @bodyRequired
 * @response 200 - Invitation accepted successfully
 * @responseContent {string} 200.application/json
 * @response 400 - Missing user id or invitation code
 * @response 500 - Error accepting family invitation
 * @prisma_model users
 * @prisma_model group_users
 */
async function acceptFamilyInvitation(
	req: ValidatedRequest<AcceptFamilyInvitationRequest>,
	res: Response
): Promise<void> {
	try {
		const userId = req.user?.user_id;
		const { invitationCode } = req.body;
		if (!userId) {
			res.status(400).json({ error: 'User ID is required' });
			return;
		}
		if (!invitationCode) {
			res.status(400).json({ error: 'Invitation code is required to accept an invitation' });
			return;
		}
		// TODO: Implement the logic to accept the invitation using the invitationCode
		res.status(200).json({ message: 'Family invitation accepted successfully' });
	} catch (error) {
		res.status(500).json({ error: (error as Error).message || 'Error accepting family invitation' });
	}
}

/**
 * PATCH /users/me/favorite-services
 * @tag Users
 * @summary Update the authenticated user's favorite service links
 * @description Updates user_favorite_service_links for the user.
 * @operationId updateFavoriteServices
 * @bodyContent {UpdateFavoriteServicesBody} application/json
 * @response 200 - Favorites updated
 * @response 400 - Invalid input data
 * @responseContent {UserResponse} 200.application/json
 * @response 500 - Error updating favorites
 * @prisma_model users
 */
async function updateFavoriteServices(req: ValidatedRequest<UpdateFavoriteServicesBody>, res: Response): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { services } = req.body;
		const updatedFavs = await UserDao.updateFavoriteServices(user_id, services);
		res.status(200).json(updatedFavs);
	} catch (e) {
		res.status(500).json({ error: (e as Error).message });
	}
}

// Add these exports at the end
export { getMyReviews };
export { getReviewsByUserId };
/* export { updateChildUserEnabledByGroupUserId };
export { updateChildUserAllowanceByGroupUserId };
export { deleteChildUserByGroupUserId }; */
export { getAvailableWalletBalance };
export { getFamilyWalletBalanceAndType };
export { updateWalletBalance };
export { getTransactions };
export { updateUserLanguage };
export { getUserByReferralCode };
export { redeemReferralCode };
export { claimReward };
export { getUserCredits };
export { getMyActiveOrders };
export { getReferral };
export { updateMarketingNotifications };
export { updateAdsPersonalization };
export { updateNewsletter };
export { inviteFamilyMember };
export { acceptFamilyInvitation };
export { updateFavoriteServices };
export { listUsers };
export { listPersonalUsers };
export { me };
export { getUserById };
export { updateMe };
export { updateUserByUserId };
export { updatePassword };
export { updateEmail };
export { updateUserTaxiPreferences };
export { updateUserNotificationPreferences };
export { updateUserTaxiPushNotifications };
export { updateUserTransferPushNotifications };
export { updateUserDeliveryPushNotifications };
export { updateUserSpicyPreferences };
export { updateUserTransferPreferences };
export { updateUserRadioPreferences };
export { updateUserAllergiesPreferences };
export { updateTelephone };
export { requestSMSVerification };
export { verifyMe };
export { oneSignalId };
export { addAddress };
export { deleteAddress };
export { deleteUserByUserId };
export { updateUserActiveByUserId };
export { updateUserDisabledByUserId };
export { softDeleteUserByUserId };
export { disableMe };
export { editAddress };
export { setPrimaryAddress };
export { getPaymentSheetCredentials };
export { requestToAddFundsToWallet };
export { requestPaymentIntent };
export { confirmPaymentIntent };
export { ping };
export { getSelfScheduledOrders };
export { requestData };

export default {
	getMyReviews,
	getReviewsByUserId,
	// updateChildUserEnabledByGroupUserId,
	// updateChildUserAllowanceByGroupUserId,
	// deleteChildUserByGroupUserId,
	getAvailableWalletBalance,
	getFamilyWalletBalanceAndType,
	updateWalletBalance,
	getTransactions,
	updateUserLanguage,
	getUserByReferralCode,
	redeemReferralCode,
	claimReward,
	getUserCredits,
	getMyActiveOrders,
	getReferral,
	updateMarketingNotifications,
	updateAdsPersonalization,
	updateNewsletter,
	inviteFamilyMember,
	acceptFamilyInvitation,
	updateFavoriteServices,
	listUsers,
	listPersonalUsers,
	me,
	getUserById,
	updateMe,
	updateUserByUserId,
	updatePassword,
	updateEmail,
	updateUserTaxiPreferences,
	updateUserNotificationPreferences,
	updateUserTaxiPushNotifications,
	updateUserTransferPushNotifications,
	updateUserDeliveryPushNotifications,
	updateUserSpicyPreferences,
	updateUserTransferPreferences,
	updateUserRadioPreferences,
	updateUserAllergiesPreferences,
	updateTelephone,
	requestSMSVerification,
	verifyMe,
	oneSignalId,
	addAddress,
	deleteAddress,
	deleteUserByUserId,
	updateUserActiveByUserId,
	updateUserDisabledByUserId,
	softDeleteUserByUserId,
	disableMe,
	editAddress,
	setPrimaryAddress,
	getPaymentSheetCredentials,
	requestToAddFundsToWallet,
	requestPaymentIntent,
	confirmPaymentIntent,
	ping,
	getSelfScheduledOrders,
	requestData,
};
