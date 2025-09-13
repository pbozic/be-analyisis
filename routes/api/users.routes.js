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
import { registerChildSchema } from '../../joi/authSchemas.js';
import StripeController from '../../controllers/StripeController.js';
config();
const router = express.Router();
router.get('/', UserController.listUsers);
router.get('/personal', UserController.listPersonalUsers);
router.get('/me', UserController.me);
router.get('/me/ping', UserController.ping);
router.get('/me/reviews', UserController.getMyReviews);
router.get('/me/active_order_ids', UserController.getMyActiveOrderIds);
router.get('/me/active_orders', UserController.getMyActiveOrders);
router.get('/:user_id/reviews', UserController.getReviewsByUserId);
router.get('/:user_id/wallet', UserController.getAvailableWalletBalance);
router.get('/:user_id/family_wallet', UserController.getFamilyWalletBalanceAndType);
router.get('/:user_id/transactions', UserController.getTransactions);
router.get('/:user_id', UserController.getUserById);
router.patch('/:user_id/wallet', UserController.updateWalletBalance);
router.patch('/me', joi(updateSchema), UserController.updateMe);
router.patch('/me/password', joi(updatePasswordSchema), UserController.updatePassword);
router.patch('/me/email', joi(updateEmailSchema), UserController.updateEmail);
router.patch('/me/profile_picture', UserController.updateProfilePicture);
router.patch('/me/taxi-preferences', UserController.updateUserTaxiPreferences);
router.patch('/me/notification-preferences', UserController.updateUserNotificationPreferences);
router.patch('/me/taxi-push-notification-preferences', UserController.updateUserTaxiPushNotifications);
router.patch('/me/transfer-push-notification-preferences', UserController.updateUserTransferPushNotifications);
router.patch('/me/delivery-push-notification-preferences', UserController.updateUserDeliveryPushNotifications);
router.patch('/me/spicy-preferences', UserController.updateUserSpicyPreferences);
router.patch('/me/transfer-preferences', UserController.updateUserTransferPreferences);
router.patch('/me/radio-preferences', UserController.updateUserRadioPreferences);
router.patch('/me/allergies-preferences', UserController.updateUserAllergiesPreferences);
router.patch('/me/phone', joi(updateTelephoneSchema), UserController.updateTelephone);
router.post('/me/oneSignalId', joi(oneSignalIdSchema), UserController.oneSignalId);
router.post('/me/address', joi(addAddressSchema), UserController.addAddress);
router.delete('/me/address/:address_id', UserController.deleteAddress);
router.patch('/me/address/:address_id', joi(editAddressSchema), UserController.editAddress);
router.patch('/me/address/:address_id/primary', UserController.setPrimaryAddress);

router.post('/review', joi(reviewUserSchema), UserController.reviewUser);
router.get('/me/payment-sheet/:type?/:business_id?', UserController.getPaymentSheetCredentials);
router.post('/me/requestToAddFunds', UserController.requestToAddFundsToWallet);
router.get('/me/scheduled_orders', UserController.getSelfScheduledOrders);
router.delete('/delete/:user_id', UserController.softDeleteUserByUserId);
//router.delete("/delete/:user_id", UserController.deleteUserByUserId);
router.post('/me/update_user', UserController.updateUserByUserId);
router.patch('/disabled/:user_id', UserController.updateUserDisabledByUserId);
router.patch('/active/:user_id', UserController.updateUserActiveByUserId);
router.patch('/me/disabled', UserController.disableMe);
router.post('/me/group_user/register-child', joi(registerChildSchema), UserController.registerChildUser);
router.patch('/me/group_user/status/', UserController.updateChildUserEnabledByGroupUserId);
router.patch('/me/group_user/allowance/', UserController.updateChildUserAllowanceByGroupUserId);
router.patch('/group_user/allowance', UserController.updateChildUserAllowanceByGroupUserId);
router.delete('/me/group_user/delete/:group_user_id', UserController.deleteChildUserByGroupUserId);
router.post('/me/request-payment-intent', UserController.requestPaymentIntent);
router.post('/me/confirm-payment-intent', UserController.confirmPaymentIntent);
router.get('/me/credits/:service_type', UserController.getUserCredits);
router.patch('/me/claim-reward', UserController.claimReward);
router.post('/me/redeem-referral-code', UserController.redeemReferralCode);
router.get('/user/:code', UserController.getUserByReferralCode);
router.get('/me/referral', UserController.getReferral);
router.patch('/me/marketing-notifications', UserController.updateMarketingNotifications);
router.patch('/me/ads-personalization', UserController.updateAdsPersonalization);
router.patch('/me/newsletter', UserController.updateNewsletter);
router.post('/me/request-data', UserController.requestData);
router.delete('/me/remove-payment-method/:pm_id', StripeController.removePaymentMethod);
export default router;
