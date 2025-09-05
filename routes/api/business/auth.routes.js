import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } from '../../../joi/authSchemas.js';
import joi from '../../../middleware/joi.js';
import BusinessController from '../../../controllers/BusinessController.js';
import * as DailyMealCategoryController from '../../../controllers/DailyMealCategoryController.js';

const router = express.Router();
router.post('/register', AuthController.registerBusiness);
router.get('/businesses', BusinessController.listBusinesses);
router.get('/:business_id/daily-meal-categories', DailyMealCategoryController.getDailyMealCategoriesForBusiness);

export default router;
