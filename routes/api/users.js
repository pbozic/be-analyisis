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
} = require("../../joi/userSchemas");

const router = express.Router();

router.get("/me", UserController.me);
router.patch("/me", joi(updateSchema), UserController.updateMe);
router.patch("/me/password", joi(updatePasswordSchema), UserController.updatePassword);
router.patch("/me/email", joi(updateEmailSchema), UserController.updateEmail);
router.patch("/me/telephone", joi(updateTelephoneSchema), UserController.updateEmail);
router.post("/me/address", joi(addAddressSchema), UserController.addAddress);
router.delete("/me/address/:address_id", UserController.deleteAddress);
router.patch("/me/address/:address_id", joi(editAddressSchema), UserController.editAddress);
router.patch("/me/address/:address_id/primary", UserController.setPrimaryAddress);
router.get("/me/verify/phone", UserController.requestSMSVerification);
router.post("/me/verify/phone", joi(verifyPhoneSchema), UserController.verifyMe);

module.exports = router;
