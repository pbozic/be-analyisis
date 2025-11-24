import { MODULE } from '@prisma/client';
import { Response } from 'express';

import MenuDao from '../dao/Menu.js';
import MenuCategoryDao from '../dao/MenuCategory.js';
import MenuItemDao from '../dao/MenuItem.js';
import DocumentDao from '../dao/Document.js';
import FileDao from '../dao/File.js';
import BusinessDao from '../dao/Business.js';
import TaxDao from '../dao/Tax.js';
import S3Helper from '../lib/s3.js';
import { linkDocumentToBusiness } from '../dao/Document.js';
import elasticsearch from '../elasticsearch/index.js';
import { getModuleIdByBusinessId } from '../dao/Business.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import {
	CreateDailyMealMenu,
	CreateMenuItemSchemaInput,
	CreateDailyMealsMenu,
	UpdateMenuItemEnabled,
	UpdateMenuItemPrice,
	GetMenuItemsByIdsRequest,
	CreateMenuItemVersion,
} from '../schemas/dto/Menu/menu.validators.ts';
import {
	SetActiveMenuInput,
	UpdateMenuOrderInput,
	DailyMenuByBusinessIdBody,
	UpdateMenuCategoryInput,
	AddMenuCategoryIdToOrderInput,
	RemoveMenuCategoryIdFromOrderInput,
	AddCategoryToMenuInput,
	RemoveCategoryFromMenuInput,
	UpdateDailyMealMenuPriceInput,
	UpdateMenuItemInput,
	AddMenuItemToCategoryInput,
	RemoveMenuItemFromCategoryInput,
	UpdateMenuItemsOrderInput,
	CreateMenuCategoryInput,
} from '../schemas/dto/Menu/index.js';
import { AddMenuItemIdToOrderInput, RemoveMenuItemIdFromOrderInput } from '../schemas/dto/Menu/menuitem.dto.ts';
import { MenuCategoryCategory } from '../schemas/dto/Menu/menucategory.dto.ts';
const { businessIndex } = elasticsearch;

/**
 * GET /menus/business/:business_id/:module
 * @tag Menu
 * @summary Get menus by business ID
 * @description Retrieves a list of menus for a specific business.
 * @operationId getMenuByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menus
 * @responseContent {MenuBase[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 * @prisma_model menus
 */
export async function getMenuByBusinessId(
	req: ValidatedRequest<never, { business_id: string; module: 'STORES' | 'FOOD_DRINKS' }>,
	res: Response
): Promise<void> {
	try {
		const { business_id, module } = req.params;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			throw new Error(`Business with id: ${business_id} not found!`);
		}
		const moduleId =
			module === 'STORES' ? business.stores_module?.stores_id : business.food_drinks_module?.food_drinks_id;
		if (!moduleId) {
			res.status(400).json({ error: 'Module not found!' });
			return;
		}
		const menus = await MenuDao.getMenuByBusinessId(moduleId, module);
		res.status(200).json(menus);
	} catch (error: any) {
		console.error('Error obtaining menus:', error);
		res.status(400).json({ error: 'Error obtaining menus', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/auth/daily/business/:business_id
 * @tag Menu
 * @summary Get menus by business ID
 * @description Retrieves a list of menus for a specific business.
 * @operationId getDailyMenuByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {DailyMenuByBusinessIdBody} application/json
 * @bodyRequired
 * @response 200 - Successful operation, returns a list of menus
 * @responseContent {MenuBase[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 * @prisma_model menus
 */
export async function getDailyMenuByBusinessId(
	req: ValidatedRequest<DailyMenuByBusinessIdBody, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const menus = await MenuDao.getDailyMenusByBusinessId(req.params.business_id, req.body.start_date);
		res.status(200).json(menus);
	} catch (error: any) {
		console.error('Error obtaining menus:', error);
		res.status(400).json({ error: 'Error obtaining menus', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/daily-meal
 * @tag Menu
 * @summary Create a new daily meal menu
 * @description Creates a new daily meal menu for merchant.
 * @operationId createDailyMealMenu
 * @bodyDescription The menu details to create
 * @bodyContent {CreateDailyMealMenu} application/json
 * @bodyRequired
 * @response 200 - Menu created successfully
 * @responseContent {{menu: MenuBase, menuCategory: MenuCategoryDetail}} 200.application/json
 * @response 400 - Error creating new menu
 * @prisma_model menus
 * @prisma_model menu_categories
 */
export async function createDailyMealMenu(req: ValidatedRequest<CreateDailyMealMenu>, res: Response): Promise<void> {
	try {
		const { business_id, date, menu_category } = req.body;
		const dailyMealsModuleId = await getModuleIdByBusinessId(business_id, MODULE.DAILY_MEALS);
		const menu = await MenuDao.createDailyMealsMenu(dailyMealsModuleId, date);
		const menuCategory = await MenuCategoryDao.createMenuCategory(menu.daily_meal_menu_id, menu_category, true);
		businessIndex(business_id);
		res.status(200).json({ menu: menu, menuCategory: menuCategory });
	} catch (error: any) {
		console.error('Error creating daily meal menu:', error);
		res.status(400).json({ error: 'Error creating daily meal menu', detail: error?.message ?? String(error) });
	}
}

/**
 * DELETE /menus/:menu_id
 * @tag Menu
 * @summary Delete a menu
 * @description Deletes a menu by its ID.
 * @operationId deleteMenu
 * @pathParam {string} menu_id - The ID of the menu to delete
 * @responseContent {MenuBase} 200.application/json
 * @response 204 - Menu deleted successfully
 * @response 400 - Error deleting menu
 * @prisma_model menus
 */
export async function deleteMenu(req: ValidatedRequest<never, { menu_id: string }>, res: Response): Promise<void> {
	try {
		await MenuDao.deleteMenu(req.params.menu_id);
		// TODO: update business in ES
		res.status(204).send();
	} catch (error: any) {
		console.error('Error deleting menu:', error);
		res.status(400).json({ error: 'Error deleting menu', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/active
 * @tag Menu
 * @summary Set menu active status
 * @description Updates the active status of a menu.
 * @operationId setActiveMenu
 * @bodyDescription The active status to set
 * @bodyContent {SetActiveMenuInput} application/json
 * @bodyRequired
 * @response 200 - Menu active status updated successfully
 * @responseContent {MenuBase} 200.application/json
 * @response 400 - Error updating menu active status
 * @prisma_model menus
 */
export async function setActiveMenu(req: ValidatedRequest<SetActiveMenuInput>, res: Response): Promise<void> {
	try {
		const { menu_id, active } = req.body;
		//todo: deactivate all other active menus for this business_id when activating this one
		const menu = await MenuDao.setActiveMenu(menu_id, active);
		businessIndex(menu.food_drinks_id);
		res.status(200).json(menu);
	} catch (error: any) {
		console.error('Error updating menu active status:', error);
		res.status(400).json({ error: 'Error updating menu active status', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/menu-categories/create
 * @tag MenuCategory
 * @summary Create a new menu category
 * @description Creates a new menu category for a menu.
 * @operationId createMenuCategory
 * @bodyDescription The menu category details to create
 * @bodyContent {CreateMenuCategory} application/json
 * @bodyRequired
 * @response 201 - Menu category created successfully
 * @responseContent {MenuCategoryDetail} 201.application/json
 * @response 400 - Error creating new menu category
 * @prisma_model menu_categories
 */
export async function createMenuCategory(req: ValidatedRequest<CreateMenuCategoryInput>, res: Response): Promise<void> {
	try {
		const { menu_id, categoryData } = req.body;
		const menuCategory = await MenuCategoryDao.createMenuCategory(menu_id, categoryData);
		businessIndex(menuCategory.food_drinks_id);
		res.status(201).json(menuCategory);
	} catch (error: any) {
		console.error('Error creating menu category:', error);
		res.status(400).json({ error: 'Error creating menu category', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/menu-items/add-order
 * @tag MenuItem
 * @summary Add a menu item ID to the ordered list
 * @description Adds a menu item ID to the ordered list of a menu category.
 * @operationId addMenuItemIdToOrder
 * @bodyDescription The menu category ID and menu item ID to add
 * @bodyContent {AddMenuItemIdToOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu item ID added to order successfully
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error adding menu item ID to order
 * @prisma_model menu_categories
 */
export async function addMenuItemIdToOrder(
	req: ValidatedRequest<AddMenuItemIdToOrderInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_category_id, menu_item_id } = req.body;
		const response = await MenuItemDao.addMenuItemIdToOrder(menu_category_id, menu_item_id);
		res.status(200).json(response);
	} catch (error: any) {
		console.error('Error adding menu item ID to order:', error);
		res.status(400).json({ error: 'Error adding menu item ID to order', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/menu-items/remove-order
 * @tag MenuCategory
 * @summary Remove a menu item ID from the ordered list
 * @description Removes a menu item ID from the ordered list of a menu category.
 * @operationId removeMenuItemIdFromOrder
 * @bodyDescription The menu category ID and menu item ID to remove
 * @bodyContent {RemoveMenuItemIdFromOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu item ID removed from order successfully
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error removing menu item ID from order
 * @prisma_model menu_categories
 */
export async function removeMenuItemIdFromOrder(
	req: ValidatedRequest<RemoveMenuItemIdFromOrderInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_category_id, menu_item_id } = req.body;
		const response = await MenuItemDao.removeMenuItemIdFromOrder(menu_category_id, menu_item_id);
		res.status(200).json(response);
	} catch (error: any) {
		console.error('Error removing menu item ID from order:', error);
		res.status(400).json({
			error: 'Error removing menu item ID from order',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * POST /menus/add-category-order
 * @tag Menu
 * @summary Add a menu category ID to the ordered list
 * @description Adds a menu category ID to the ordered list of categories in a menu.
 * @operationId addMenuCategoryIdToOrder
 * @bodyDescription The menu ID and the menu category ID to add
 * @bodyContent {AddMenuCategoryIdToOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu category ID added to order successfully
 * @responseContent {MenuBase} 200.application/json
 * @response 400 - Error adding menu category ID to order
 * @prisma_model menus
 */
export async function addMenuCategoryIdToOrder(
	req: ValidatedRequest<AddMenuCategoryIdToOrderInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_id, menuCategoryIdToAdd } = req.body;
		const response = await MenuCategoryDao.addMenuCategoryIdToOrder(menu_id, menuCategoryIdToAdd);
		res.status(200).json(response);
	} catch (error: any) {
		console.error('Error adding menu category ID to order:', error);
		res.status(400).json({
			error: 'Error adding menu category ID to order',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * POST /menus/remove-category-order
 * @tag Menu
 * @summary Remove a menu category ID from the ordered list
 * @description Removes a menu category ID from the ordered list of categories in a menu.
 * @operationId removeMenuCategoryIdFromOrder
 * @bodyDescription The menu ID and the menu category ID to remove
 * @bodyContent {RemoveMenuCategoryIdFromOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu category ID removed from order successfully
 * @responseContent {MenuBase} 200.application/json
 * @response 400 - Error removing menu category ID from order
 * @prisma_model menus
 */
export async function removeMenuCategoryIdFromOrder(
	req: ValidatedRequest<RemoveMenuCategoryIdFromOrderInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_id, menuCategoryIdToRemove } = req.body;
		const response = await MenuCategoryDao.removeMenuCategoryIdFromOrder(menu_id, menuCategoryIdToRemove);
		res.status(200).json(response);
	} catch (error: any) {
		console.error('Error removing menu category ID from order:', error);
		res.status(400).json({
			error: 'Error removing menu category ID from order',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * GET /menus/menu-items/:menu_category_id
 * @tag MenuItem
 * @summary Get menu items by category ID
 * @description Retrieves a list of menu items for a specific menu category.
 * @operationId getMenuItemsByCategoryId
 * @pathParam {string} menu_category_id - The ID of the menu category
 * @response 200 - Successful operation, returns a list of menu items
 * @responseContent {MenuItemDetail[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 * @prisma_model menu_items
 */
export async function getMenuItemsByCategoryId(
	req: ValidatedRequest<never, { menu_category_id: string }>,
	res: Response
): Promise<void> {
	try {
		const items = await MenuItemDao.getMenuItemsByCategoryId(req.params.menu_category_id);
		res.status(200).json(items);
	} catch (error: any) {
		console.error('Error obtaining menu items:', error);
		res.status(400).json({ error: 'Error obtaining menu items', detail: error?.message ?? String(error) });
	}
}

/**
 * GET /menus/menu-categories/:menu_id
 * @tag MenuCategory
 * @summary Get menu categories by menu ID
 * @description Retrieves a list of menu categories for a specific menu.
 * @operationId getMenuCategoriesByMenuId
 * @pathParam {string} menu_id - The ID of the menu
 * @response 200 - Successful operation, returns a list of menu categories
 * @responseContent {MenuCategoryDetail[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 * @prisma_model menu_categories
 */
export async function getMenuCategoriesByMenuId(
	req: ValidatedRequest<never, { menu_id: string }>,
	res: Response
): Promise<void> {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByMenuId(req.params.menu_id);
		res.status(200).json(categories);
	} catch (error: any) {
		console.error('Error obtaining menu categories:', error);
		res.status(400).json({
			error: 'Error obtaining menu categories',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * GET /menus/menu-categories/business/:business_id
 * @tag MenuCategory
 * @summary Get menu categories by business ID
 * @description Retrieves a list of menu categories for a specific business.
 * @operationId getMenuCategoriesByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menu categories
 * @responseContent {MenuCategoryDetail[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 * @prisma_model menu_categories
 */
export async function getMenuCategoriesByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByBusinessId(req.params.business_id);
		res.status(200).json(categories);
	} catch (error: any) {
		console.error('Error obtaining menu categories:', error);
		res.status(400).json({
			error: 'Error obtaining menu categories',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * GET /menus/menu-items/business/:business_id
 * @tag MenuItem
 * @summary Get menu items by business ID
 * @description Retrieves a list of menu items for a specific business.
 * @operationId getMenuItemsByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menu items
 * @responseContent {MenuItemDetail[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 * @prisma_model menu_items
 */
export async function getMenuItemsByBusinessId(
	req: ValidatedRequest<never, { business_id: string; type: string }>,
	res: Response
): Promise<void> {
	try {
		const items = await MenuItemDao.getMenuItemsByBusinessId(req.params.business_id, {
			is_copy: false,
		});
		res.status(200).json(items);
	} catch (error: any) {
		console.error('Error obtaining menu items:', error);
		res.status(400).json({ error: 'Error obtaining menu items', detail: error?.message ?? String(error) });
	}
}

/**
 * DELETE /menus/menu-categories/:menu_category_id
 * @tag MenuCategory
 * @summary Delete a menu category
 * @description Deletes a menu category by its ID.
 * @operationId deleteMenuCategory
 * @pathParam {string} menu_category_id - The ID of the menu category to delete
 * @response 204 - Menu category deleted successfully
 * @responseContent {MenuCategoryDetail} 200.application/json
 * @response 400 - Error deleting menu category
 * @prisma_model menu_categories
 */
export async function deleteMenuCategory(
	req: ValidatedRequest<never, { menu_category_id: string }>,
	res: Response
): Promise<void> {
	try {
		const menuCategory = await MenuCategoryDao.deleteMenuCategory(req.params.menu_category_id);
		// TODO: uncomment
		// businessIndex(menuCategory.business_id);
		res.status(204).send();
	} catch (error: any) {
		console.error('Error deleting menu category:', error);
		res.status(400).json({ error: 'Error deleting menu category', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-categories
 * @tag MenuCategory
 * @summary Update a menu category
 * @description Updates a menu category by its ID.
 * @operationId updateMenuCategory
 * @bodyDescription The menu category details to update
 * @bodyContent {UpdateMenuCategoryInput} application/json
 * @bodyRequired
 * @response 200 - Menu category updated successfully
 * @responseContent {MenuCategoryDetail} 200.application/json
 * @response 400 - Error updating menu category
 * @prisma_model menu_categories
 */
export async function updateMenuCategory(req: ValidatedRequest<UpdateMenuCategoryInput>, res: Response): Promise<void> {
	try {
		const { menu_category_id, data } = req.body;
		const category_ids: string[] = Array.isArray(data?.category_ids) ? (data!.category_ids as string[]) : [];
		delete data?.category_ids;

		const menuCategory = await MenuCategoryDao.updateMenuCategory({ menu_category_id, data });
		const categories_to_add = category_ids.filter(
			(id: string) =>
				!menuCategory.menu_categories_categories?.map((c: MenuCategoryCategory) => c.categories_id).includes(id)
		);
		const categories_to_remove = menuCategory.menu_categories_categories
			? menuCategory.menu_categories_categories
					.map((c: MenuCategoryCategory) => c.categories_id)
					.filter((id: string) => !category_ids.includes(id))
			: [];
		for (const c_id of categories_to_add) {
			await MenuCategoryDao.addCategoryToMenuCategory(menu_category_id, c_id);
		}
		await MenuCategoryDao.removeCategoryFromMenuCategory(menu_category_id, categories_to_remove);
		// TODO: uncomment
		// businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (error: any) {
		console.error('Error updating menu category:', error);
		res.status(400).json({ error: 'Error updating menu category', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-categories/order
 * @tag Menu
 * @summary Update a menu order
 * @description Updates a menu order by the menu category IDs.
 * @operationId updateMenuOrder
 * @bodyDescription The request body must include the new order of menu category IDs. This order is used to update the sequence of categories in the specified menu.
 * @bodyContent {UpdateMenuOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu category updated successfully
 * @responseContent {MenuBase} 200.application/json
 * @response 400 - Error updating menu order
 * @prisma_model menus
 */
export async function updateMenuOrder(req: ValidatedRequest<UpdateMenuOrderInput>, res: Response): Promise<void> {
	try {
		const { menu_id, orderedMenuCategoryIds } = req.body;
		const menu = await MenuDao.updateMenuOrder(menu_id, orderedMenuCategoryIds);
		res.status(200).json(menu);
	} catch (error: any) {
		console.error('Error updating menu order:', error);
		res.status(400).json({ error: 'Error updating menu order', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items/order
 * @tag MenuItems
 * @summary Update a menu items order
 * @description Updates a menu items order by the menu items IDs.
 * @operationId updateMenuItemsOrder
 * @bodyDescription The request body must include the new order of menu category IDs. This order is used to update the sequence of menu items in the specified menu category.
 * @bodyContent {UpdateMenuItemsOrderInput} application/json
 * @bodyRequired
 * @response 200 - Menu items order updated successfully
 * @responseContent {MenuCategoryDetail} 200.application/json
 * @response 400 - Error updating menu order
 * @prisma_model menu_items
 */
export async function updateMenuItemsOrder(
	req: ValidatedRequest<UpdateMenuItemsOrderInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_category_id, ordered_menu_items_ids } = req.body;
		const menu = await MenuCategoryDao.updateMenuItemsOrder(menu_category_id, ordered_menu_items_ids);
		res.status(200).json(menu);
	} catch (error: any) {
		console.error('Error updating menu items order:', error);
		res.status(400).json({
			error: 'Error updating menu items order',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * POST /menus/menu-items/create
 * @tag MenuItem
 * @summary Create a new menu item
 * @description Creates a new menu item for a menu category.
 * @operationId createMenuItem
 * @bodyDescription The menu item details to create
 * @bodyContent {CreateMenuItem} application/json
 * @bodyRequired
 * @response 201 - Menu item created successfully
 * @responseContent {MenuItemDetail} 201.application/json
 * @response 400 - Error creating new menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function createMenuItem(req: ValidatedRequest<CreateMenuItemSchemaInput>, res: Response): Promise<void> {
	try {
		const { category_id, tax_rate_id, data, image, is_copy } = req.body;
		if (image?.documentData) {
			if (image?.files?.length) {
				for (const file of image.files) {
					let { base64, ...fileRest } = file;
					let fileData = await FileDao.createFile(fileRest.file_type, fileRest.mime_type, true);
					if (!image?.document_id) {
						let key = S3Helper.getFileKey(fileData.file_id, fileRest.mime_type);
						await S3Helper.SaveObject(key, base64, fileRest.mime_type, {}, fileData, fileData.public);
					}
					data.image_file = {
						connect: {
							image_file_id: fileData.file_id,
						},
					};
				}
			}
		}
		const safeTaxRateId: string | null = tax_rate_id ?? null;
		const menuItem = await MenuItemDao.createMenuItem(category_id, safeTaxRateId, data, is_copy);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(201).json(menuItem);
	} catch (error: any) {
		console.error('Error creating menu item:', error);
		res.status(400).json({ error: 'Error creating menu item', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/daily-meals-menu/create
 * @tag MenuItem
 * @summary Create a new menu daily meals menu
 * @description Creates a new daily meals menu for a business
 * @operationId createDailyMealsMenu
 * @bodyDescription The menu details to create
 * @bodyContent {CreateDailyMealsMenuSchema} application/json
 * @bodyRequired
 * @response 201 - Menu created successfully
 * @responseContent {DocumentResponse} 201.application/json
 * @response 400 - Error creating new menu
 * @prisma_model documents
 * @prisma_model files
 */
export async function createDailyMealsMenu(req: ValidatedRequest<CreateDailyMealsMenu>, res: Response): Promise<void> {
	try {
		const { business_id, data } = req.body;
		const document = await DocumentDao.createDocument({
			document_type: 'DAILY_MEALS_MENU',
			...data.documentData,
		});
		for (const file of data.files) {
			let oldBase64 = file.base64;
			let { base64, ...fileRest } = file;

			let fileData = await FileDao.addFileToDocument(document.document_id, fileRest, fileRest.public);
			let key = S3Helper.getFileKey(fileData.file_id, fileRest.mime_type);
			await S3Helper.SaveObject(key, oldBase64, fileRest.mime_type, {}, fileData, fileData.public);
		}
		await linkDocumentToBusiness(document.document_id, business_id);
		businessIndex(business_id);
		res.status(201).json(document);
	} catch (error: any) {
		console.error('Error creating daily meals menu document:', error);
		res.status(400).json({
			error: 'Error creating daily meals menu document',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * GET /menus/daily-meals-menu/:business_id
 * @tag MenuItem
 * @summary Retrieve the last uploaded daily meals menu
 * @description Fetches the most recent daily meals menu for a business, including the menu's name and URL.
 * @operationId getLastDailyMealsMenu
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Last daily meals menu retrieved successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 404 - No daily meals menu found
 * @prisma_model documents
 * @prisma_model files
 */
export async function getLastUploadedDailyMealsMenu(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const lastDocument = await DocumentDao.getLastDocumentByTypeAndBusinessId('DAILY_MEALS_MENU', business_id);
		const files = await FileDao.getFilesByDocumentId(lastDocument.document_id);
		const file = files[0];
		if (!file) {
			res.status(404).json({ error: 'No files found for the last daily meals menu' });
			return;
		}
		res.status(200).json({
			document_id: lastDocument.document_id,
			name: 'Menu',
			url: file.url,
			business_id: business_id,
		});
	} catch (error: any) {
		console.error('Error retrieving last uploaded daily meals menu:', error);
		res.status(500).json({
			error: 'Error retrieving last uploaded daily meals menu',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * DELETE /menus/menu-items/:menu_item_id
 * @tag MenuItem
 * @summary Delete a menu item
 * @description Deletes a menu item by its ID.
 * @operationId deleteMenuItem
 * @pathParam {string} menu_item_id - The ID of the menu item to delete
 * @response 200 - Menu item deleted successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error deleting menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function deleteMenuItem(
	req: ValidatedRequest<never, { menu_item_id: string }>,
	res: Response
): Promise<void> {
	try {
		await DocumentDao.deleteDocumentsAndFiles('menu_item_id', req.params.menu_item_id);
		const mI = await MenuItemDao.deleteMenuItem(req.params.menu_item_id);
		// TODO: uncomment
		// businessIndex(mI.business_id);
		res.status(204).send();
	} catch (error: any) {
		console.error('Error deleting menu item:', error);
		res.status(400).json({ error: 'Error deleting menu item', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items
 * @tag MenuItem
 * @summary Update a menu item
 * @description Updates a menu item by its ID.
 * @operationId updateMenuItem
 * @bodyDescription The menu item details to update
 * @bodyContent {UpdateMenuItemInput} application/json
 * @bodyRequired
 * @response 200 - Menu item updated successfully
 * @responseContent {MenuItemDetail} 200.application/json
 * @response 400 - Error updating menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function updateMenuItem(req: ValidatedRequest<UpdateMenuItemInput>, res: Response): Promise<void> {
	try {
		const { menuItemId, data, image } = req.body;
		if (image?.files?.[0]?.file_type === 'IMAGE') {
			for (const file of image.files) {
				let oldBase64 = file.base64;
				let { base64, ...fileRest } = file;
				let fileData = await FileDao.createFile(fileRest.file_type, fileRest.mime_type, true);
				let key = S3Helper.getFileKey(fileData.file_id, fileRest.mime_type);
				await S3Helper.SaveObject(key, oldBase64, fileRest.mime_type, {}, fileData, true);
				data.image_file = {
					connect: {
						image_file_id: fileData.file_id,
					},
				};
			}
		}
		const menuItem = await MenuItemDao.updateMenuItem(menuItemId, data);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (error: any) {
		console.error('Error updating menu item:', error);
		res.status(400).json({ error: 'Error updating menu item', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items/is_enabled
 * @tag MenuItem
 * @summary Update a menu item enabled field
 * @description Updates a menu item by its ID.
 * @operationId updateMenuItem
 * @bodyDescription The new menu item enabled field value
 * @bodyContent {UpdateMenuItemEnabled} application/json
 * @bodyRequired
 * @response 200 - Menu item updated successfully
 * @responseContent {MenuItemDetail} 200.application/json
 * @response 400 - Error updating menu item
 * @prisma_model menu_items
 */
export async function updateMenuItemEnabled(
	req: ValidatedRequest<UpdateMenuItemEnabled>,
	res: Response
): Promise<void> {
	try {
		const { menu_item_id, is_enabled } = req.body;
		const menuItem = await MenuItemDao.updateMenuItemEnabled(menu_item_id, is_enabled);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (error: any) {
		console.error('Error updating menu item:', error);
		res.status(400).json({ error: 'Error updating menu item', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items/:menu_item_id/price
 * @tag MenuItem
 * @summary Update menu item price
 * @description Updates the price of a menu item.
 * @operationId updateMenuItemPrice
 * @pathParam {string} menu_item_id - The ID of the menu item to update
 * @bodyDescription The new price to set
 * @bodyContent {UpdateMenuItemPrice} application/json
 * @bodyRequired
 * @response 200 - Menu item price updated successfully
 * @responseContent {MenuItemDetail} 200.application/json
 * @response 400 - Error updating menu item price
 * @prisma_model menu_items
 */
export async function updateMenuItemPrice(
	req: ValidatedRequest<UpdateMenuItemPrice, { menu_item_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { menu_item_id } = req.params;
		const { price } = req.body;
		const menuItem = await MenuItemDao.updateMenuItemPrice(menu_item_id, price);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (error: any) {
		console.error('Error updating menu item price:', error);
		res.status(400).json({ error: 'Error updating menu item price', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items/category/add
 * @tag MenuItem
 * @summary Update menu item category
 * @description Add menu item to a category.
 * @operationId addMenuItemToCategory
 * @bodyDescription The new category ID to set
 * @bodyContent {AddMenuItemToCategoryInput} application/json
 * @bodyRequired
 * @response 200 - Menu item category updated successfully
 * @responseContent {MenuItemDetail} 200.application/json
 * @response 400 - Error updating menu item category
 * @prisma_model menu_items
 * @prisma_model menu_categories
 */
export async function addMenuItemMenuCategory(
	req: ValidatedRequest<AddMenuItemToCategoryInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_item_id, menu_category_id } = req.body;
		const menuItem = await MenuItemDao.addMenuItemToCategory(menu_item_id, menu_category_id);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (error: any) {
		console.error('Error updating menu item category:', error);
		res.status(400).json({ error: 'Error updating menu item category', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-items/category/remove
 * @tag MenuItem
 * @summary Remove menu item from category
 * @description Removes a menu item from its category.
 * @operationId removeMenuItemFromCategory
 * @bodyContent {RemoveMenuItemFromCategoryInput} application/json
 * @response 200 - Menu item removed from category successfully
 * @responseContent {MenuItemDetail} 200.application/json
 * @response 400 - Error removing menu item from category
 * @prisma_model menu_items
 * @prisma_model menu_categories
 */
export async function removeMenuItemFromCategory(
	req: ValidatedRequest<RemoveMenuItemFromCategoryInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_item_id } = req.body;
		const menuItem = await MenuItemDao.removeMenuItemFromCategory(menu_item_id);
		// TODO: uncomment
		// businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (error: any) {
		console.error('Error removing menu item from category:', error);
		res.status(400).json({
			error: 'Error removing menu item from category',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * PATCH /menus/menu-categories/add
 * @tag MenuCategory
 * @summary Add a menu category to a menu
 * @description Adds a menu category to a menu.
 * @operationId addMenuCategory
 * @bodyDescription The menu ID and category ID to add
 * @bodyContent {AddCategoryToMenuInput} application/json
 * @bodyRequired
 * @response 200 - Menu category added successfully
 * @responseContent {MenuBase} 200.application/json
 * @response 400 - Error adding menu category
 * @prisma_model menus
 * @prisma_model menu_categories
 */
export async function addMenuCategory(req: ValidatedRequest<AddCategoryToMenuInput>, res: Response): Promise<void> {
	try {
		const { menu_id, menu_category_id } = req.body;
		const menuCategory = await MenuCategoryDao.addCategoryToMenu(menu_id, menu_category_id);
		// TODO: uncomment
		// businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (error: any) {
		console.error('Error adding menu category:', error);
		res.status(400).json({ error: 'Error adding menu category', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/menu-categories/remove
 * @tag MenuCategory
 * @summary Remove a menu category from a menu
 * @description Removes a menu category from a menu.
 * @operationId removeMenuCategory
 * @bodyDescription The category ID to remove
 * @bodyContent {RemoveCategoryFromMenuInput} application/json
 * @bodyRequired
 * @response 200 - Menu category removed successfully
 * @responseContent {MenuCategoryDetail} 200.application/json
 * @response 400 - Error removing menu category
 * @prisma_model menus
 * @prisma_model menu_categories
 */
export async function removeMenuCategory(
	req: ValidatedRequest<RemoveCategoryFromMenuInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_category_id } = req.body;
		const menuCategory = await MenuCategoryDao.removeCategoryFromMenu(menu_category_id);
		// TODO: uncomment
		// businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (error: any) {
		console.error('Error removing menu category:', error);
		res.status(400).json({ error: 'Error removing menu category', detail: error?.message ?? String(error) });
	}
}

/**
 * DELETE /menus/documents/:field/:id
 * @tag Menu
 * @summary Delete documents and files by field and id
 * @description Deletes all documents and associated files based on the provided field and id.
 * @operationId deleteDocumentsAndFilesByDocumentId
 * @pathParam {string} field - The field to filter by
 * @pathParam {string} id - The id value to match
 * @response 200 - Documents and files deleted successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 500 - Failed to delete documents and files
 * @prisma_model documents
 * @prisma_model files
 */
export async function deleteDocumentsAndFilesByDocumentId(
	req: ValidatedRequest<never, { field: string; id: string }>,
	res: Response
): Promise<void> {
	try {
		const { field, id } = req.params;
		await DocumentDao.deleteDocumentsAndFilesByDocumentId(field, id);
		res.status(200).json({ message: `Documents and files deleted successfully for ${field}: ${id}` });
	} catch (error: any) {
		res.status(500).json({
			error: `Failed to delete documents and files for the provided ${req.params.field} ${req.params.id}.`,
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * GET /menus/menu-items/date/:business_id/:date
 * @tag MenuItem
 * @summary Get menu items by date
 * @description Retrieves menu items for a business on a specific date.
 * @operationId getMenuItemsByDate
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} date - The date to filter by (ISO string)
 * @response 200 - Menu items retrieved successfully
 * @responseContent {MenuItemDetail[]} 200.application/json
 * @response 400 - Error obtaining menu items
 * @prisma_model menu_items
 */
export async function getMenuItemsByDate(
	req: ValidatedRequest<never, { business_id: string; date: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id, date } = req.params;
		const startOfDay = new Date(date);
		startOfDay.setHours(0, 0, 0, 0);
		const endOfDay = new Date(date);
		endOfDay.setHours(23, 59, 59, 999);
		const items = await MenuItemDao.getMenuItemsByBusinessId(business_id, {
			daily_date: {
				gte: startOfDay.toISOString(),
				lte: endOfDay.toISOString(),
			},
		});
		res.status(200).json(items);
	} catch (error: any) {
		console.error('Error obtaining menu items:', error);
		res.status(400).json({ error: 'Error obtaining menu items', detail: error?.message ?? String(error) });
	}
}

/**
 * GET /menus/date/:business_id/:date
 * @tag Menu
 * @summary Get menu by date
 * @description Retrieves a menu for a business on a specific date.
 * @operationId getMenuByDate
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} date - The date to filter by (ISO string)
 * @response 200 - Menu retrieved successfully
 * @responseContent {DailyMealMenuBase} 200.application/json
 * @response 400 - Error obtaining menu
 * @prisma_model menus
 */
export async function getMenuByDate(
	req: ValidatedRequest<never, { business_id: string; date: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id, date } = req.params;
		const items = await MenuDao.getMenuByDate(business_id, date);
		res.status(200).json(items);
	} catch (error: any) {
		console.error('Error obtaining menu items:', error);
		res.status(400).json({ error: 'Error obtaining menu items', detail: error?.message ?? String(error) });
	}
}

/**
 * PATCH /menus/daily-meal/price
 * @tag Menu
 * @summary Update daily meal menu price
 * @description Updates the price for a daily meal menu category.
 * @operationId updateDailyMealMenuPrice
 * @bodyDescription The menu category id and new price
 * @bodyContent {UpdateDailyMealMenuPriceInput} application/json
 * @bodyRequired
 * @response 200 - Price updated and menu returned
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error updating menu price
 * @prisma_model menu_categories
 * @prisma_model menus
 */
export async function updateDailyMealMenuPrice(
	req: ValidatedRequest<UpdateDailyMealMenuPriceInput>,
	res: Response
): Promise<void> {
	try {
		const { menu_category_id, price } = req.body;
		const menu_category = await MenuCategoryDao.updateDailyMealMenuPrice(menu_category_id, price);
		if (menu_category) {
			const menu = await MenuDao.getMenuById(menu_category.menu_id);
			// TODO: uncomment
			// businessIndex(menu.business_id);
			res.status(200).json(menu);
		} else {
			res.status(400).json({ error: 'Error updating menu price' });
		}
	} catch (error: any) {
		console.error('Error updating menu price:', error);
		res.status(400).json({ error: 'Error updating menu price', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menus/auth/menu-items/extras-sides/:business_id
 * @tag MenuItem
 * @summary Get menu items by IDs
 * @description Retrieves menu items by list of ids for a business.
 * @operationId getMenuItemsByIds
 * @pathParam {string} business_id - The business id
 * @bodyDescription The list of menu item IDs
 * @bodyContent {GetMenuItemsByIdsRequest} application/json
 * @bodyRequired
 * @response 200 - Menu items retrieved successfully
 * @responseContent {MenuItemDetail[]} 200.application/json
 * @response 400 - Error fetching menu items
 * @prisma_model menu_items
 */
export async function getMenuItemsByIds(
	req: ValidatedRequest<GetMenuItemsByIdsRequest, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const menuItems = await MenuItemDao.getMenuItemsByBusinessId(req.params.business_id, {
			menu_item_id: {
				in: req.body.ids,
			},
		});
		if (menuItems) {
			res.status(200).json(menuItems);
		} else {
			res.status(400).json({ error: 'Error fetching menu items' });
		}
	} catch (error: any) {
		console.error('Error fetching menu items:', error);
		res.status(400).json({ error: 'Error fetching menu items', detail: error?.message ?? String(error) });
	}
}

/**
 * GET /menus/menu-items/tax-rates
 * @tag Menu
 * @summary Get active tax rates
 * @description Retrieves all active tax rates.
 * @operationId getActiveTaxRates
 * @response 200 - Active tax rates retrieved successfully
 * @responseContent {TaxRateDetail[]} 200.application/json
 * @response 500 - Error fetching tax rates
 * @prisma_model tax_rates
 */
export async function getActiveTaxRates(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const taxRates = await TaxDao.getActiveTaxRates();
		if (taxRates) {
			res.status(200).json(taxRates);
		} else {
			res.status(400).json({ error: 'No active tax rates found' });
		}
	} catch (error: any) {
		console.error('Error fetching tax rates:', error);
		res.status(500).json({ error: 'Error fetching tax rates', detail: error?.message ?? String(error) });
	}
}

/**
 * POST /menu-items/{menu_item_id}/versions
 * @tag MenuItems
 * @summary Create a new menu item version
 * @description Creates a menu_item_versions snapshot for a menu item.
 * @operationId createMenuItemVersion
 * @bodyDescription Version payload
 * @bodyContent {CreateMenuItemVersion} application/json
 * @bodyRequired
 * @response 200 - Version created
 * @responseContent {MenuItemVersionResponse} 200.application/json
 * @response 400 - Error creating menu item version
 * @prisma_model menu_item_versions
 */
export async function createMenuItemVersion(
	req: ValidatedRequest<CreateMenuItemVersion, { menu_item_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { menu_item_id } = req.params;
		const { version, snapshot } = req.body;
		if (typeof version !== 'number' || !snapshot) {
			res.status(400).json({ error: 'version (number) and snapshot (object) are required' });
			return;
		}
		const created = await MenuItemDao.createMenuItemVersion(menu_item_id, version, snapshot);
		res.json(created);
	} catch (error: any) {
		res.status(500).json({ error: error?.message ?? String(error) });
	}
}

export default {
	getMenuItemsByIds,
	updateDailyMealMenuPrice,
	getMenuItemsByDate,
	getMenuByDate,
	getMenuByBusinessId,
	updateMenuOrder,
	updateMenuItemsOrder,
	deleteMenu,
	setActiveMenu,
	createMenuCategory,
	getMenuCategoriesByMenuId,
	getMenuCategoriesByBusinessId,
	deleteMenuCategory,
	addMenuCategory,
	addMenuCategoryIdToOrder,
	removeMenuCategoryIdFromOrder,
	addMenuItemIdToOrder,
	removeMenuItemIdFromOrder,
	removeMenuCategory,
	updateMenuCategory,
	createMenuItem,
	getMenuItemsByCategoryId,
	getMenuItemsByBusinessId,
	deleteMenuItem,
	updateMenuItem,
	updateMenuItemPrice,
	addMenuItemMenuCategory,
	removeMenuItemFromCategory,
	createDailyMealsMenu,
	createDailyMealMenu,
	getLastUploadedDailyMealsMenu,
	deleteDocumentsAndFilesByDocumentId,
	getDailyMenuByBusinessId,
	updateMenuItemEnabled,
	getActiveTaxRates,
	createMenuItemVersion,
};
