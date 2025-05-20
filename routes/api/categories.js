var express = require('express');

const router = express.Router();
const authMiddleware = require('../../middleware/auth');
// Middleware and validation schemas (if applicable)

const CategoriesController = require('../../controllers/CategoriesController');

router.get('/', CategoriesController.getCategories);
router.get('/:category_type', CategoriesController.getCategoriesByType);
router.post('/category/', [authMiddleware], CategoriesController.createCategory);
router.patch('/category/:id', [authMiddleware], CategoriesController.updateCategory);
router.delete('/category/:id', [authMiddleware], CategoriesController.deleteCategory);
router.get('/category/:id', [authMiddleware], CategoriesController.getCategoryById);

module.exports = router;
