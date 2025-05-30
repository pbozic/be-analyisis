import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } from '../../../joi/authSchemas.js';
import joi from '../../../middleware/joi.js';
import BusinessController from '../../../controllers/BusinessController.js';
const router = express.Router();
router.post('/register', AuthController.registerBusiness);
router.get('/businesses', BusinessController.listBusinesses);
export default router;
