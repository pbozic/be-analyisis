var express = require("express");
const router = express.Router();
const AuthController = require("../../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } = require("../../../joi/authSchemas");

const joi = require("../../../middleware/joi");
const BusinessController = require("../../../controllers/BusinessController");

router.post("/register", AuthController.registerBusiness);
router.get("/businesses", BusinessController.listBusinesses);

module.exports = router;
