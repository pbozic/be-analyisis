import { config } from 'dotenv';
import express from 'express';

import UserController from '../../controllers/UserController.ts';
import StripeController from '../../controllers/StripeController.js';
import FavoriteDriversController from '../../controllers/FavoriteDriversController.ts';
import TutorialsController from '../../controllers/TutorialsController.ts';
import { validate } from '../../middleware/zod.ts';
import {
	UpdateMeSchema,
	UpdateEmailSchema,
	UpdateTelephoneSchema,
	UpdatePasswordSchema,
	AddAddressSchema,
	EditAddressSchema,
	UpdateOneSignalIdSchema,
	VerifyPhoneSchema,
	RequestToAddFundsSchema,
	RequestPaymentIntentSchema,
	ConfirmPaymentIntentSchema,
	UpdateUserActiveSchema,
	UpdateUserDisabledSchema,
	SoftDeleteUserSchema,
	UpdateUserByUserIdSchema,
	UpdateTaxiPreferencesSchema,
	UpdateNotificationPreferencesSchema,
	UpdateTaxiPushNotificationsSchema,
	UpdateTransferPushNotificationsSchema,
	UpdateDeliveryPushNotificationsSchema,
	UpdateSpicyPreferencesSchema,
	UpdateTransferPreferencesSchema,
	UpdateRadioPreferencesSchema,
	UpdateAllergiesPreferencesSchema,
	RedeemReferralCodeSchema,
	ClaimRewardSchema,
	UpdateMarketingNotificationsSchema,
	UpdateAdsPersonalizationSchema,
	UpdateNewsletterSchema,
	InviteFamilyMemberSchema,
	AcceptFamilyInvitationSchema,
	UpdateWalletBalanceSchema,
	UpdateFavoriteServicesBodySchema,
} from '../../schemas/dto/User/user.validators.js';
import { SetTutorialStatusBodySchema } from '../../schemas/dto/Tutorials/tutorials.validators.ts';

config();
const router = express.Router();

router.get('/', UserController.listUsers);
router.get('/personal', UserController.listPersonalUsers);
router.get('/me', UserController.me);

router.get('/me/verify/phone', UserController.requestSMSVerification);
router.post('/me/verify/phone', validate(VerifyPhoneSchema), UserController.verifyMe);
router.get('/me/ping', UserController.ping);
router.get('/me/reviews', UserController.getMyReviews);
// router.get('/me/active_order_ids', UserController.getMyActiveOrderIds);
router.get('/me/active_orders', UserController.getMyActiveOrders);
router.get('/:user_id/reviews', UserController.getReviewsByUserId);
router.get('/:user_id/wallet', UserController.getAvailableWalletBalance);
router.get('/:user_id/family_wallet', UserController.getFamilyWalletBalanceAndType);
router.get('/:user_id/transactions', UserController.getTransactions);
router.get('/:user_id', UserController.getUserById);

router.patch('/:user_id/wallet', validate(UpdateWalletBalanceSchema), UserController.updateWalletBalance);
router.patch('/me', validate(UpdateMeSchema), UserController.updateMe);
router.patch('/me/password', validate(UpdatePasswordSchema), UserController.updatePassword);
router.patch('/me/email', validate(UpdateEmailSchema), UserController.updateEmail);
// router.patch('/me/profile_picture', validate(UpdateProfilePictureSchema), UserController.updateProfilePicture);
router.patch('/me/taxi-preferences', validate(UpdateTaxiPreferencesSchema), UserController.updateUserTaxiPreferences);
router.patch(
	'/me/notification-preferences',
	validate(UpdateNotificationPreferencesSchema),
	UserController.updateUserNotificationPreferences
);
router.patch(
	'/me/taxi-push-notification-preferences',
	validate(UpdateTaxiPushNotificationsSchema),
	UserController.updateUserTaxiPushNotifications
);
router.patch(
	'/me/transfer-push-notification-preferences',
	validate(UpdateTransferPushNotificationsSchema),
	UserController.updateUserTransferPushNotifications
);
router.patch(
	'/me/delivery-push-notification-preferences',
	validate(UpdateDeliveryPushNotificationsSchema),
	UserController.updateUserDeliveryPushNotifications
);
router.patch(
	'/me/spicy-preferences',
	validate(UpdateSpicyPreferencesSchema),
	UserController.updateUserSpicyPreferences
);
router.patch(
	'/me/transfer-preferences',
	validate(UpdateTransferPreferencesSchema),
	UserController.updateUserTransferPreferences
);
router.patch(
	'/me/radio-preferences',
	validate(UpdateRadioPreferencesSchema),
	UserController.updateUserRadioPreferences
);
router.patch(
	'/me/allergies-preferences',
	validate(UpdateAllergiesPreferencesSchema),
	UserController.updateUserAllergiesPreferences
);
router.patch('/me/phone', validate(UpdateTelephoneSchema), UserController.updateTelephone);
router.post('/me/oneSignalId', validate(UpdateOneSignalIdSchema), UserController.oneSignalId);
router.post('/me/address', validate(AddAddressSchema), UserController.addAddress);
router.delete('/me/address/:address_id', UserController.deleteAddress);
router.patch('/me/address/:address_id', validate(EditAddressSchema), UserController.editAddress);
router.patch('/me/address/:address_id/primary', UserController.setPrimaryAddress);

router.get('/me/payment-sheet/:type?/:business_id?', UserController.getPaymentSheetCredentials);
router.post('/me/requestToAddFunds', validate(RequestToAddFundsSchema), UserController.requestToAddFundsToWallet);
router.get('/me/scheduled_orders', UserController.getSelfScheduledOrders);
router.delete('/delete/:user_id', validate(SoftDeleteUserSchema), UserController.softDeleteUserByUserId);
router.post('/me/update_user', validate(UpdateUserByUserIdSchema), UserController.updateUserByUserId);
router.patch('/disabled/:user_id', validate(UpdateUserDisabledSchema), UserController.updateUserDisabledByUserId);
router.patch('/active/:user_id', validate(UpdateUserActiveSchema), UserController.updateUserActiveByUserId);
router.patch('/me/disabled', validate(UpdateUserDisabledSchema), UserController.disableMe);

router.post('/me/request-payment-intent', validate(RequestPaymentIntentSchema), UserController.requestPaymentIntent);
router.post('/me/confirm-payment-intent', validate(ConfirmPaymentIntentSchema), UserController.confirmPaymentIntent);
router.get('/me/credits/:service_type', UserController.getUserCredits);
router.patch('/me/claim-reward', validate(ClaimRewardSchema), UserController.claimReward);
router.post('/me/redeem-referral-code', validate(RedeemReferralCodeSchema), UserController.redeemReferralCode);
router.get('/user/:code', UserController.getUserByReferralCode);
router.get('/me/referral', UserController.getReferral);
router.patch(
	'/me/marketing-notifications',
	validate(UpdateMarketingNotificationsSchema),
	UserController.updateMarketingNotifications
);
router.patch(
	'/me/ads-personalization',
	validate(UpdateAdsPersonalizationSchema),
	UserController.updateAdsPersonalization
);
router.patch('/me/newsletter', validate(UpdateNewsletterSchema), UserController.updateNewsletter);
router.get('/me/request-data', UserController.requestData);

router.delete('/me/remove-payment-method/:pm_id', StripeController.removePaymentMethod);

router.post('/me/favorite-drivers/:driver_id', FavoriteDriversController.addFavoriteDriver);
router.delete('/me/favorite-drivers/:driver_id', FavoriteDriversController.removeFavoriteDriver);
router.get('/me/favorite-drivers', FavoriteDriversController.listFavoriteDrivers);

router.patch(
	'/me/favorite-services',
	validate(UpdateFavoriteServicesBodySchema),
	UserController.updateFavoriteServices
);

router.get('/me/tutorials', TutorialsController.listTutorials);
router.post('/me/tutorials/state/reset', TutorialsController.resetTutorials);
router.post(
	'/me/tutorials/:tutorial_key/status',
	validate(SetTutorialStatusBodySchema),
	TutorialsController.setTutorialStatus
);

// Family
router.post('/family/invite', validate(InviteFamilyMemberSchema), UserController.inviteFamilyMember);
router.post('/family/accept-invitation', validate(AcceptFamilyInvitationSchema), UserController.acceptFamilyInvitation);

export default router;
