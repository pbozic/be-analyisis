import express from 'express';

import authMiddleware from '../../middleware/auth.js';
import { validate } from '../../middleware/zod.js';
import CategoriesController from '../../controllers/CategoriesController.js';
import {
	CreateCategoryRequestSchema,
	UpdateCategoryRequestSchema,
} from '../../schemas/dto/Categories/categories.dto.js';
const router = express.Router();
router.get('/', CategoriesController.getCategories);
router.get('/:category_type', CategoriesController.getCategoriesByType);
router.post('/category/', [authMiddleware, validate(CreateCategoryRequestSchema)], CategoriesController.createCategory);
router.patch(
	'/category/:id',
	[authMiddleware, validate(UpdateCategoryRequestSchema)],
	CategoriesController.updateCategory
);
router.delete('/category/:id', [authMiddleware], CategoriesController.deleteCategory);
router.get('/category/:id', CategoriesController.getCategoryById);
export default router;
