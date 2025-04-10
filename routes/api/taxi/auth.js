var express = require("express");
const router = express.Router();
const AuthController = require("../../../controllers/AuthController");
const { registerTaxiBusinessSchema } = require("../../../joi/authSchemas");

const joi = require("../../../middleware/joi");

router.post("/register", joi(registerTaxiBusinessSchema), AuthController.registerTaxiService);

module.exports = router;
