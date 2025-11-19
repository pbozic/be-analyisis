import express from 'express';

import MenuController from '../../controllers/MenuController.ts';
import { validate } from '../../middleware/zod.js';
import { CreateDailyMealsMenuSchema } from '../../schemas/dto/Menu/menu.validators.js';
import {
	CreateMenuSchema,
	CreateDailyMealMenuSchema,
	CreateMenuCategorySchema,
	UpdateMenuOrderInputSchema,
	CreateMenuItemSchema,
	GetMenuItemsByIdsRequestSchema,
	UpdateMenuItemEnabledSchema,
	UpdateMenuItemPriceSchema,
	SetActiveMenuInputSchema,
	DailyMenuByBusinessIdBodySchema,
} from '../../schemas/dto/Menu/index.js';
import {
	AddMenuCategoryIdToOrderInputSchema,
	RemoveMenuCategoryIdFromOrderInputSchema,
	UpdateMenuCategoryInputSchema,
	UpdateMenuItemsOrderInputSchema,
	AddCategoryToMenuInputSchema,
	RemoveCategoryFromMenuInputSchema,
	UpdateDailyMealMenuPriceInputSchema,
} from '../../schemas/dto/Menu/menucategory.dto.js';
import {
	AddMenuItemIdToOrderInputSchema,
	RemoveMenuItemIdFromOrderInputSchema,
	UpdateMenuItemInputSchema,
	AddMenuItemToCategoryInputSchema,
	RemoveMenuItemFromCategoryInputSchema,
} from '../../schemas/dto/Menu/menuitem.dto.js';
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
router.post('/', validate(CreateMenuSchema), MenuController.createMenu);
router.post('/daily-meal', validate(CreateDailyMealMenuSchema), MenuController.createDailyMealMenu);
router.delete('/:menu_id', MenuController.deleteMenu);
router.patch('/active', validate(SetActiveMenuInputSchema), MenuController.setActiveMenu);
router.patch(
	'/add-category-order',
	validate(AddMenuCategoryIdToOrderInputSchema),
	MenuController.addMenuCategoryIdToOrder
);
router.patch(
	'/remove-category-order',
	validate(RemoveMenuCategoryIdFromOrderInputSchema),
	MenuController.removeMenuCategoryIdFromOrder
);
/**
 *    * @module business
 *
 */
router.post(
	'/daily/business/:business_id',
	validate(DailyMenuByBusinessIdBodySchema),
	MenuController.getDailyMenuByBusinessId
);
// Menu Category routes
router.get('/menu-categories/:menu_id', MenuController.getMenuCategoriesByMenuId);
router.post('/menu-categories/create', validate(CreateMenuCategorySchema), MenuController.createMenuCategory);
router.patch('/menu-categories/order', validate(UpdateMenuOrderInputSchema), MenuController.updateMenuOrder);
router.patch(
	'/menu-categories/price',
	validate(UpdateDailyMealMenuPriceInputSchema),
	MenuController.updateDailyMealMenuPrice
);
router.delete('/menu-categories/:menu_category_id', MenuController.deleteMenuCategory);
router.get('/menu-categories/business/:business_id', MenuController.getMenuCategoriesByBusinessId);
router.patch('/menu-categories', validate(UpdateMenuCategoryInputSchema), MenuController.updateMenuCategory);
router.patch('/menu-categories/add', validate(AddCategoryToMenuInputSchema), MenuController.addMenuCategory);
router.patch('/menu-categories/remove', validate(RemoveCategoryFromMenuInputSchema), MenuController.removeMenuCategory);
/**
 *    * @module business
 *
 */
router.get('/daily-meals-menu/:business_id', MenuController.getLastUploadedDailyMealsMenu);
router.post('/daily-meals-menu/create', validate(CreateDailyMealsMenuSchema), MenuController.createDailyMealsMenu);
// Menu Item routes
router.post('/menu-items/create', validate(CreateMenuItemSchema), MenuController.createMenuItem);
router.patch('/menu-items/add-order', validate(AddMenuItemIdToOrderInputSchema), MenuController.addMenuItemIdToOrder);
router.patch(
	'/menu-items/remove-order',
	validate(RemoveMenuItemIdFromOrderInputSchema),
	MenuController.removeMenuItemIdFromOrder
);
router.get('/menu-items/tax-rates', MenuController.getActiveTaxRates);
router.get('/menu-items/:category_id', MenuController.getMenuItemsByCategoryId);
router.get('/menu-items/business/:business_id', MenuController.getMenuItemsByBusinessId);
/**
 *    * @module business
 *
 */
router.get('/menu-items/:business_id/:date', MenuController.getMenuItemsByDate);
router.delete('/menu-items/:menu_item_id', MenuController.deleteMenuItem);
router.patch('/menu-items', validate(UpdateMenuItemInputSchema), MenuController.updateMenuItem);
router.patch('/menu-items/is_enabled', validate(UpdateMenuItemEnabledSchema), MenuController.updateMenuItemEnabled);
router.patch('/menu-items/order', validate(UpdateMenuItemsOrderInputSchema), MenuController.updateMenuItemsOrder);
router.patch('/menu-items/price', validate(UpdateMenuItemPriceSchema), MenuController.updateMenuItemPrice);
router.post(
	'/menu-items/extras-sides/:business_id',
	validate(GetMenuItemsByIdsRequestSchema),
	MenuController.getMenuItemsByIds
);
router.post(
	'/menu-items/category/:category_id',
	validate(AddMenuItemToCategoryInputSchema),
	MenuController.addMenuItemMenuCategory
);
router.delete('/menu-items/category/:category_id', MenuController.addMenuItemMenuCategory);
router.patch(
	'/menu-items/category/add',
	validate(AddMenuItemToCategoryInputSchema),
	MenuController.addMenuItemMenuCategory
);
router.patch(
	'/menu-items/category/remove',
	validate(RemoveMenuItemFromCategoryInputSchema),
	MenuController.removeMenuItemFromCategory
);
export default router;
