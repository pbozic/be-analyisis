import * as express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } from '../../../joi/authSchemas.js';
import joi from '../../../middleware/joi.js';
const router = express.Router();
router.post('/register', AuthController.registerMerchantService);
export default router;
