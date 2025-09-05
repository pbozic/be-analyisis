import express from 'express';

import authMiddleware from '../../middleware/auth.js';
import MenuController from '../../controllers/MenuController.js';
const router = express.Router();
// Menu routes
router.get('/business/:business_id', [authMiddleware], MenuController.getMenuByBusinessId);
router.get('/menu/:business_id/:date', [authMiddleware], MenuController.getMenuByDate);
router.post('/', [authMiddleware], MenuController.createMenu);
router.post('/daily-meal', [authMiddleware], MenuController.createDailyMealMenu);
router.delete('/:menu_id', [authMiddleware], MenuController.deleteMenu);
router.patch('/active', [authMiddleware], MenuController.setActiveMenu);
router.patch('/add-category-order', [authMiddleware], MenuController.addMenuCategoryIdToOrder);
router.patch('/remove-category-order', [authMiddleware], MenuController.removeMenuCategoryIdFromOrder);
router.post('/daily/business/:business_id', MenuController.getDailyMenuByBusinessId);
// Menu Category routes
router.get('/menu-categories/:menu_id', [authMiddleware], MenuController.getMenuCategoriesByMenuId);
router.post('/menu-categories/create', [authMiddleware], MenuController.createMenuCategory);
router.patch('/menu-categories/order', [authMiddleware], MenuController.updateMenuOrder);
router.patch('/menu-categories/price', [authMiddleware], MenuController.updateDailyMealMenuPrice);
router.delete('/menu-categories/:menu_category_id', [authMiddleware], MenuController.deleteMenuCategory);
router.get('/menu-categories/business/:business_id', [authMiddleware], MenuController.getMenuCategoriesByBusinessId);
router.patch('/menu-categories', [authMiddleware], MenuController.updateMenuCategory);
router.patch('/menu-categories/add', [authMiddleware], MenuController.addMenuCategory);
router.patch('/menu-categories/remove', [authMiddleware], MenuController.removeMenuCategory);
router.get('/daily-meals-menu/:business_id', [authMiddleware], MenuController.getLastUploadedDailyMealsMenu);
router.post('/daily-meals-menu/create', [authMiddleware], MenuController.createDailyMealsMenu);
// Menu Item routes
router.post('/menu-items/create', [authMiddleware], MenuController.createMenuItem);
router.patch('/menu-items/add-order', [authMiddleware], MenuController.addMenuItemIdToOrder);
router.patch('/menu-items/remove-order', [authMiddleware], MenuController.removeMenuItemIdFromOrder);
router.get('/menu-items/tax-rates', [authMiddleware], MenuController.getActiveTaxRates);
router.get('/menu-items/:category_id', [authMiddleware], MenuController.getMenuItemsByCategoryId);
router.get('/menu-items/business/:business_id', [authMiddleware], MenuController.getMenuItemsByBusinessId);
router.get('/menu-items/:business_id/:date', [authMiddleware], MenuController.getMenuItemsByDate);
router.delete('/menu-items/:menu_item_id', [authMiddleware], MenuController.deleteMenuItem);
router.patch('/menu-items', [authMiddleware], MenuController.updateMenuItem);
router.patch('/menu-items/is_enabled', [authMiddleware], MenuController.updateMenuItemEnabled);
router.patch('/menu-items/order', [authMiddleware], MenuController.updateMenuItemsOrder);
router.patch('/menu-items/price', [authMiddleware], MenuController.updateMenuItemPrice);
router.post('/menu-items/extras-sides/:business_id', [authMiddleware], MenuController.getMenuItemsByIds);
router.post('/menu-items/category/:category_id', [authMiddleware], MenuController.addMenuItemMenuCategory);
router.delete('/menu-items/category/:category_id', [authMiddleware], MenuController.addMenuItemMenuCategory);
router.patch('/menu-items/category/add', [authMiddleware], MenuController.addMenuItemMenuCategory);
router.patch('/menu-items/category/remove', [authMiddleware], MenuController.removeMenuItemFromCategory);
export default router;
