import express from 'express';

import MenuController from '../../controllers/MenuController.js';
const router = express.Router();
// Menu routes
/**
 *    * @module business
 *
 */
router.get('/business/:business_id', MenuController.getMenuByBusinessId);
/**
 *    * @module business
 *
 */
router.get('/menu/:business_id/:date', MenuController.getMenuByDate);
router.post('/', MenuController.createMenu);
router.post('/daily-meal', MenuController.createDailyMealMenu);
router.delete('/:menu_id', MenuController.deleteMenu);
router.patch('/active', MenuController.setActiveMenu);
router.patch('/add-category-order', MenuController.addMenuCategoryIdToOrder);
router.patch('/remove-category-order', MenuController.removeMenuCategoryIdFromOrder);
/**
 *    * @module business
 *
 */
router.post('/daily/business/:business_id', MenuController.getDailyMenuByBusinessId);
// Menu Category routes
router.get('/menu-categories/:menu_id', MenuController.getMenuCategoriesByMenuId);
router.post('/menu-categories/create', MenuController.createMenuCategory);
router.patch('/menu-categories/order', MenuController.updateMenuOrder);
router.patch('/menu-categories/price', MenuController.updateDailyMealMenuPrice);
router.delete('/menu-categories/:menu_category_id', MenuController.deleteMenuCategory);
router.get('/menu-categories/business/:business_id', MenuController.getMenuCategoriesByBusinessId);
router.patch('/menu-categories', MenuController.updateMenuCategory);
router.patch('/menu-categories/add', MenuController.addMenuCategory);
router.patch('/menu-categories/remove', MenuController.removeMenuCategory);
/**
 *    * @module business
 *
 */
router.get('/daily-meals-menu/:business_id', MenuController.getLastUploadedDailyMealsMenu);
router.post('/daily-meals-menu/create', MenuController.createDailyMealsMenu);
// Menu Item routes
router.post('/menu-items/create', MenuController.createMenuItem);
router.patch('/menu-items/add-order', MenuController.addMenuItemIdToOrder);
router.patch('/menu-items/remove-order', MenuController.removeMenuItemIdFromOrder);
router.get('/menu-items/tax-rates', MenuController.getActiveTaxRates);
router.get('/menu-items/:category_id', MenuController.getMenuItemsByCategoryId);
router.get('/menu-items/business/:business_id', MenuController.getMenuItemsByBusinessId);
/**
 *    * @module business
 *
 */
router.get('/menu-items/:business_id/:date', MenuController.getMenuItemsByDate);
router.delete('/menu-items/:menu_item_id', MenuController.deleteMenuItem);
router.patch('/menu-items', MenuController.updateMenuItem);
router.patch('/menu-items/is_enabled', MenuController.updateMenuItemEnabled);
router.patch('/menu-items/order', MenuController.updateMenuItemsOrder);
router.patch('/menu-items/price', MenuController.updateMenuItemPrice);
router.post('/menu-items/extras-sides/:business_id', MenuController.getMenuItemsByIds);
router.post('/menu-items/category/:category_id', MenuController.addMenuItemMenuCategory);
router.delete('/menu-items/category/:category_id', MenuController.addMenuItemMenuCategory);
router.patch('/menu-items/category/add', MenuController.addMenuItemMenuCategory);
router.patch('/menu-items/category/remove', MenuController.removeMenuItemFromCategory);
export default router;
