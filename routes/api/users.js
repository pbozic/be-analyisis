require("dotenv").config();
const express = require("express");
const UserController = require("../../controllers/UserController");
const joi = require("../../middleware/joi");
const {
	updateSchema,
	verifyPhoneSchema,
	updateEmailSchema,
	updateTelephoneSchema,
	updatePasswordSchema,
	addAddressSchema,
	editAddressSchema,
	oneSignalIdSchema
} = require("../../joi/userSchemas");
const {reviewUserSchema} = require("../../joi/reviewSchemas");

const router = express.Router();

router.get("/me", UserController.me);
router.get("/me/ping", UserController.ping);
router.patch("/me", joi(updateSchema), UserController.updateMe);
router.patch("/me/password", joi(updatePasswordSchema), UserController.updatePassword);
router.patch("/me/email", joi(updateEmailSchema), UserController.updateEmail);
router.patch("/me/profile_picture", UserController.updateProfilePicture);
router.patch("/me/taxi-preferences", UserController.updateUserTaxiPreferences);
router.patch("/me/notification-preferences", UserController.updateUserNotificationPreferences);
router.patch("/me/push-notification-preferences", UserController.updateUserPushNotifications);
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
router.delete("/delete/:user_id", UserController.deleteUserByUserId);


module.exports = router;
