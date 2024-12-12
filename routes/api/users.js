require("dotenv").config();
const express = require("express");
const UserController = require("../../controllers/UserController");
const joi = require("../../middleware/joi");
const {
	updateSchema,
	verifyPhoneSchema,
	updateEmailSchema,
	updateUserLanguageSchema,
	updateTelephoneSchema,
	updatePasswordSchema,
	addAddressSchema,
	editAddressSchema,
	oneSignalIdSchema
} = require("../../joi/userSchemas");
const {reviewUserSchema} = require("../../joi/reviewSchemas");
const { registerChildSchema } = require("../../joi/authSchemas");

const router = express.Router();

router.get("/", UserController.listUsers);
router.get("/personal", UserController.listPersonalUsers);
router.get("/me", UserController.me);
router.get("/me/ping", UserController.ping);
router.get("/me/reviews", UserController.getMyReviews);
router.get("/:user_id/reviews", UserController.getReviewsByUserId);
router.get("/:user_id/wallet", UserController.getWalletBalance);
router.get("/:user_id/family_wallet", UserController.getFamilyWalletBalanceAndType);
router.get("/:user_id/transactions", UserController.getTransactions);
router.get("/:user_id", UserController.getUserById);
router.patch("/:user_id/wallet", UserController.updateWalletBalance);
router.patch("/me", joi(updateSchema), UserController.updateMe);
router.patch("/me/password", joi(updatePasswordSchema), UserController.updatePassword);
router.patch("/me/email", joi(updateEmailSchema), UserController.updateEmail);
router.patch("/me/profile_picture", UserController.updateProfilePicture);
router.patch("/me/taxi-preferences", UserController.updateUserTaxiPreferences);
router.patch("/me/notification-preferences", UserController.updateUserNotificationPreferences);
router.patch("/me/taxi-push-notification-preferences", UserController.updateUserTaxiPushNotifications);
router.patch("/me/transfer-push-notification-preferences", UserController.updateUserTransferPushNotifications);
router.patch("/me/delivery-push-notification-preferences", UserController.updateUserDeliveryPushNotifications);
router.patch("/me/spicy-preferences", UserController.updateUserSpicyPreferences);
router.patch("/me/transfer-preferences", UserController.updateUserTransferPreferences);
router.patch("/me/radio-preferences", UserController.updateUserRadioPreferences);
router.patch("/me/allergies-preferences", UserController.updateUserAllergiesPreferences);
router.patch("/me/phone", joi(updateTelephoneSchema), UserController.updateTelephone);
router.post("/me/oneSignalId", joi(oneSignalIdSchema), UserController.oneSignalId);
router.post("/me/address", joi(addAddressSchema), UserController.addAddress);
router.delete("/me/address/:address_id", UserController.deleteAddress);
router.patch("/me/address/:address_id", joi(editAddressSchema), UserController.editAddress);
router.patch("/me/address/:address_id/primary", UserController.setPrimaryAddress);
router.get("/me/verify/phone", UserController.requestSMSVerification);
router.post("/me/verify/phone", joi(verifyPhoneSchema), UserController.verifyMe);
router.post("/review", joi(reviewUserSchema), UserController.reviewUser);
router.get("/me/payment-sheet", UserController.getPaymentSheetCredentials);
router.post("/me/requestToAddFunds", UserController.requestToAddFundsToWallet);
router.get("/me/scheduled_orders", UserController.getSelfScheduledOrders);
router.delete("/delete/:user_id", UserController.softDeleteUserByUserId);
//router.delete("/delete/:user_id", UserController.deleteUserByUserId);
router.post("/me/update_user", UserController.updateUserByUserId);
router.patch("/disabled/:user_id", UserController.updateUserDisabledByUserId);
router.patch("/me/disabled", UserController.disableMe);
router.post("/me/group_user/register-child", joi(registerChildSchema), UserController.registerChildUser);
router.patch("/me/group_user/status/", UserController.updateChildUserEnabledByGroupUserId);
router.patch("/me/group_user/allowance/", UserController.updateChildUserAllowanceByGroupUserId);
router.patch("/group_user/allowance", UserController.updateChildUserAllowanceByGroupUserId);
router.delete("/me/group_user/delete/:group_user_id", UserController.deleteChildUserByGroupUserId);


module.exports = router;
