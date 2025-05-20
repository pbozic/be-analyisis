var express = require('express');

const router = express.Router();
const AuthController = require('../../../controllers/AuthController');
const { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } = require('../../../joi/authSchemas');
const joi = require('../../../middleware/joi');

router.post('/register', AuthController.registerMerchantService);

module.exports = router;
