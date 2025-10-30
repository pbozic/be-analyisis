import { config } from 'dotenv';
import express from 'express';

import UserController from '../../controllers/UserController.js';
import joi from '../../middleware/joi.js';
import {
	updateSchema,
	updateEmailSchema,
	updateTelephoneSchema,
	updatePasswordSchema,
	addAddressSchema,
	editAddressSchema,
	oneSignalIdSchema,
} from '../../joi/userSchemas.js';
import { reviewUserSchema } from '../../joi/reviewSchemas.js';
import StripeController from '../../controllers/StripeController.js';
import { verifyPhoneSchema } from '../../joi/userSchemas.js';
import FavoriteDriversController from '../../controllers/FavoriteDriversController.ts';
import FavoriteServicesController from '../../controllers/FavoriteServicesController.ts';
import TutorialsController from '../../controllers/TutorialsController.ts';
config();
const router = express.Router();
router.get('/', UserController.listUsers);
router.get('/personal', UserController.listPersonalUsers);
router.get('/me', UserController.me);

router.get('/me/verify/phone', UserController.requestSMSVerification);
router.post('/me/verify/phone', joi(verifyPhoneSchema), UserController.verifyMe);
router.get('/me/ping', UserController.ping);
router.get('/me/reviews', UserController.getMyReviews);
/**
 *    * @module user,order
 *
 */
// router.get('/me/active_order_ids', UserController.getMyActiveOrderIds);
/**
 *    * @module order
 *
 */
router.get('/me/active_orders', UserController.getMyActiveOrders);
router.get('/:user_id/reviews', UserController.getReviewsByUserId);
/**
 *    * @module wallet
 *
 */
router.get('/:user_id/wallet', UserController.getAvailableWalletBalance);
/**
 *    * @module wallet
 *
 */
router.get('/:user_id/family_wallet', UserController.getFamilyWalletBalanceAndType);
/**
 *    * @module wallet
 *
 */
router.get('/:user_id/transactions', UserController.getTransactions);
router.get('/:user_id', UserController.getUserById);
/**
 *    * @module wallet
 *
 */
router.patch('/:user_id/wallet', UserController.updateWalletBalance);
router.patch('/me', joi(updateSchema), UserController.updateMe);
router.patch('/me/password', joi(updatePasswordSchema), UserController.updatePassword);
router.patch('/me/email', joi(updateEmailSchema), UserController.updateEmail);
router.patch('/me/profile_picture', UserController.updateProfilePicture);
/**
 *    * @module preferences
 *
 */
router.patch('/me/taxi-preferences', UserController.updateUserTaxiPreferences);
/**
 *    * @module preferences
 *
 */
router.patch('/me/notification-preferences', UserController.updateUserNotificationPreferences);
/**
 *    * @module preferences
 *
 */
router.patch('/me/taxi-push-notification-preferences', UserController.updateUserTaxiPushNotifications);
/**
 *    * @module preferences
 *
 */
router.patch('/me/transfer-push-notification-preferences', UserController.updateUserTransferPushNotifications);
/**
 *    * @module preferences
 *
 */
router.patch('/me/delivery-push-notification-preferences', UserController.updateUserDeliveryPushNotifications);
/**
 *    * @module preferences
 *
 */
router.patch('/me/spicy-preferences', UserController.updateUserSpicyPreferences);
/**
 *    * @module preferences
 *
 */
router.patch('/me/transfer-preferences', UserController.updateUserTransferPreferences);
/**
 *    * @module preferences
 *
 */
router.patch('/me/radio-preferences', UserController.updateUserRadioPreferences);
/**
 *    * @module preferences
 *
 */
router.patch('/me/allergies-preferences', UserController.updateUserAllergiesPreferences);
router.patch('/me/phone', joi(updateTelephoneSchema), UserController.updateTelephone);
router.post('/me/oneSignalId', joi(oneSignalIdSchema), UserController.oneSignalId);
router.post('/me/address', joi(addAddressSchema), UserController.addAddress);
router.delete('/me/address/:address_id', UserController.deleteAddress);
router.patch('/me/address/:address_id', joi(editAddressSchema), UserController.editAddress);
router.patch('/me/address/:address_id/primary', UserController.setPrimaryAddress);

router.post('/review', joi(reviewUserSchema), UserController.reviewUser);
/**
 *    * @module wallet
 *
 */
router.get('/me/payment-sheet/:type?/:business_id?', UserController.getPaymentSheetCredentials);
/**
 *    * @module wallet
 *
 */
router.post('/me/requestToAddFunds', UserController.requestToAddFundsToWallet);
router.get('/me/scheduled_orders', UserController.getSelfScheduledOrders);
router.delete('/delete/:user_id', UserController.softDeleteUserByUserId);
//router.delete("/delete/:user_id", UserController.deleteUserByUserId);
router.post('/me/update_user', UserController.updateUserByUserId);
router.patch('/disabled/:user_id', UserController.updateUserDisabledByUserId);
router.patch('/active/:user_id', UserController.updateUserActiveByUserId);
router.patch('/me/disabled', UserController.disableMe);
// router.post('/me/group_user/register-child', joi(registerChildSchema), UserController.registerChildUser);
// router.patch('/me/group_user/status/', UserController.updateChildUserEnabledByGroupUserId);
// router.patch('/me/group_user/allowance/', UserController.updateChildUserAllowanceByGroupUserId);
// router.patch('/group_user/allowance', UserController.updateChildUserAllowanceByGroupUserId);
// router.delete('/me/group_user/delete/:group_user_id', UserController.deleteChildUserByGroupUserId);
/**
 *    * @module wallet
 *
 */
router.post('/me/request-payment-intent', UserController.requestPaymentIntent);
/**
 *    * @module wallet
 *
 */
router.post('/me/confirm-payment-intent', UserController.confirmPaymentIntent);
/**
 *    * @module wallet
 *
 */
router.get('/me/credits/:service_type', UserController.getUserCredits);
router.patch('/me/claim-reward', UserController.claimReward);
router.post('/me/redeem-referral-code', UserController.redeemReferralCode);
router.get('/user/:code', UserController.getUserByReferralCode);
router.get('/me/referral', UserController.getReferral);
router.patch('/me/marketing-notifications', UserController.updateMarketingNotifications);
router.patch('/me/ads-personalization', UserController.updateAdsPersonalization);
router.patch('/me/newsletter', UserController.updateNewsletter);
router.post('/me/request-data', UserController.requestData);
/**
 *    * @module wallet
 *
 */
router.delete('/me/remove-payment-method/:pm_id', StripeController.removePaymentMethod);

router.post('/me/favorite-drivers', FavoriteDriversController.addFavoriteDriver);
router.delete('/me/favorite-drivers/:driver_id', FavoriteDriversController.removeFavoriteDriver);
router.get('/me/favorite-drivers', FavoriteDriversController.listFavoriteDrivers);

router.patch('/me/favorite-services', FavoriteServicesController.updateFavoriteServices);
router.get('/me/favorite-services', FavoriteServicesController.listFavoriteServices);

router.get('/me/tutorials', TutorialsController.listTutorials);
router.post('/me/tutorials/state/reset', TutorialsController.resetTutorials);
router.post('/me/tutorials/:tutorial_key/status', TutorialsController.setTutorialStatus);

router.post('/family/invite', UserController.inviteFamilyMember);
router.post('/family/accept-invitation', UserController.acceptFamilyInvitation);

export default router;
