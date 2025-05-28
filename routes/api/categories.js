import * as express from 'express';

import authMiddleware from '../../middleware/auth.js';
import CategoriesController from '../../controllers/CategoriesController.js';
const router = express.Router();
router.get('/', CategoriesController.getCategories);
router.get('/:category_type', CategoriesController.getCategoriesByType);
router.post('/category/', [authMiddleware], CategoriesController.createCategory);
router.patch('/category/:id', [authMiddleware], CategoriesController.updateCategory);
router.delete('/category/:id', [authMiddleware], CategoriesController.deleteCategory);
router.get('/category/:id', [authMiddleware], CategoriesController.getCategoryById);
export default router;
