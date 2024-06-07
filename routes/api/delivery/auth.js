var express = require("express");
const router = express.Router();
const AuthController = require("../../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } = require("../../../joi/authSchemas");

const joi = require("../../../middleware/joi");

router.post("/register", joi(registerSchema), AuthController.registerDeliveryService);

module.exports = router;
