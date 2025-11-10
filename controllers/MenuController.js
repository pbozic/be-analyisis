import { MODULE } from '@prisma/client';

import MenuDao from '../dao/Menu.js';
import MenuCategoryDao from '../dao/MenuCategory.js';
import MenuItemDao from '../dao/MenuItem.js';
import DocumentDao from '../dao/Document.js';
import FileDao from '../dao/File.js';
import TaxDao from '../dao/Tax.js';
import S3Helper from '../lib/s3.js';
import { linkDocumentToBusiness } from '../dao/Document.js';
import elasticsearch from '../elasticsearch/index.js';
import { getModuleIdByBusinessId } from '../dao/Business.js';
const { businessIndex } = elasticsearch;
/**
 * GET /menus/business/:business_id
 * @tag Menu
 * @summary Get menus by business ID
 * @description Retrieves a list of menus for a specific business.
 * @operationId getMenuByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menus
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 * @prisma_model menus
 */
async function getMenuByBusinessId(req, res) {
	try {
		const menus = await MenuDao.getMenuByBusinessId(req.params.business_id);
		res.status(200).json(menus);
	} catch (e) {
		console.error('Error obtaining menus:', e);
		res.status(400).json({ error: 'Error obtaining menus', e });
	}
}
/**
 * POST /menus/auth/daily/business/:business_id
 * @tag Menu
 * @summary Get menus by business ID
 * @description Retrieves a list of menus for a specific business.
 * @operationId getDailyMenuByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menus
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 * @prisma_model menus
 */
async function getDailyMenuByBusinessId(req, res) {
	try {
		const menus = await MenuDao.getMenuByBusinessId(req.params.business_id, true, req.body.start_date);
		res.status(200).json(menus);
	} catch (e) {
		console.error('Error obtaining menus:', e);
		res.status(400).json({ error: 'Error obtaining menus', e });
	}
}
// /**
//  * POST /menus
//  * @tag Menu
//  * @summary Create a new menu
//  * @description Creates a new menu for a business.
//  * @operationId createMenu
//  * @bodyDescription The menu details to create
//  * @bodyContent {object} application/json
//  * @bodyRequired
//  * @response 201 - Menu created successfully
//  * @responseContent {object} 201.application/json
//  * @response 400 - Error creating new menu
//  * @prisma_model menus
//  */
// async function createMenu(req, res) {
// 	const { business_id, is_daily_meals } = req.body;
// 	try {
// 		const menu = await MenuDao.createMenu(business_id, is_daily_meals);
// 		businessIndex(business_id);
// 		res.status(201).json(menu);
// 	} catch (e) {
// 		console.error('Error creating menu:', e);
// 		res.status(400).json({ error: 'Error creating menu', e });
// 	}
// }
/**
 * POST /menus/daily-meal
 * @tag Menu
 * @summary Create a new daily meal menu
 * @description Creates a new daily meal menu for merchant.
 * @operationId createDailyMealMenu
 * @bodyDescription The menu details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu created successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error creating new menu
 * @prisma_model menus
 * @prisma_model menu_categories
 */
async function createDailyMealMenu(req, res) {
	const { business_id, date, menu_category } = req.body;
	try {
		const dailyMealsModuleId = getModuleIdByBusinessId(business_id, MODULE.DAILY_MEALS);
		const menu = await MenuDao.createDailyMealsMenu(dailyMealsModuleId, date);
		const menuCategory = await MenuCategoryDao.createMenuCategory(menu.daily_meal_menu_id, menu_category, true);
		businessIndex(business_id);
		res.status(200).json({ menu: menu, menuCategory: menuCategory });
	} catch (e) {
		console.error('Error creating daily meal menu:', e);
		res.status(400).json({ error: 'Error creating daily meal menu', e });
	}
}
/**
 * DELETE /menus/:menu_id
 * @tag Menu
 * @summary Delete a menu
 * @description Deletes a menu by its ID.
 * @operationId deleteMenu
 * @pathParam {string} menu_id - The ID of the menu to delete
 * @response 204 - Menu deleted successfully
 * @response 400 - Error deleting menu
 * @prisma_model menus
 */
async function deleteMenu(req, res) {
	const { menu_id } = req.params;
	try {
		await MenuDao.deleteMenu(menu_id);
		// TODO: update bussines in ES
		res.status(204).send();
	} catch (e) {
		console.error('Error deleting menu:', e);
		res.status(400).json({ error: 'Error deleting menu', e });
	}
}
/**
 * PATCH /menus/active
 * @tag Menu
 * @summary Set menu active status
 * @description Updates the active status of a menu.
 * @operationId setActiveMenu
 * @bodyDescription The active status to set
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu active status updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu active status
 * @prisma_model menus
 */
async function setActiveMenu(req, res) {
	const { menu_id, active } = req.body;
	//todo: deactivate all other active menus for this business_id when activating this one
	try {
		const menu = await MenuDao.setActiveMenu(menu_id, active);
		businessIndex(menu.business_id);
		res.status(200).json(menu);
	} catch (e) {
		console.error('Error updating menu active status:', e);
		res.status(400).json({ error: 'Error updating menu active status', e });
	}
}
/**
 * POST /menus/menu-categories/create
 * @tag MenuCategory
 * @summary Create a new menu category
 * @description Creates a new menu category for a menu.
 * @operationId createMenuCategory
 * @bodyDescription The menu category details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Menu category created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating new menu category
 * @prisma_model menu_categories
 */
async function createMenuCategory(req, res) {
	const { menu_id, data } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.createMenuCategory(menu_id, data);
		businessIndex(menuCategory.business_id);
		res.status(201).json(menuCategory);
	} catch (e) {
		console.error('Error creating menu category:', e);
		res.status(400).json({ error: 'Error creating menu category', e });
	}
}
/**
 * POST /menus/menu-items/add-order
 * @tag MenuItem
 * @summary Add a menu item ID to the ordered list
 * @description Adds a menu item ID to the ordered list of a menu category.
 * @operationId addMenuItemIdToOrder
 * @bodyDescription The menu category ID and menu item ID to add
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item ID added to order successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error adding menu item ID to order
 * @prisma_model menu_categories
 */
async function addMenuItemIdToOrder(req, res) {
	const { menu_category_id, menuItemIdToAdd } = req.body;
	try {
		const response = await MenuItemDao.addMenuItemIdToOrder(menu_category_id, menuItemIdToAdd);
		res.status(200).json(response);
	} catch (error) {
		console.error('Error adding menu item ID to order:', error);
		res.status(400).json({ error: 'Error adding menu item ID to order', details: error });
	}
}
/**
 * POST /menus/menu-items/remove-order
 * @tag MenuCategory
 * @summary Remove a menu item ID from the ordered list
 * @description Removes a menu item ID from the ordered list of a menu category.
 * @operationId removeMenuItemIdFromOrder
 * @bodyDescription The menu category ID and menu item ID to remove
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item ID removed from order successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing menu item ID from order
 * @prisma_model menu_categories
 */
async function removeMenuItemIdFromOrder(req, res) {
	const { menu_category_id, menuItemIdToRemove } = req.body;
	try {
		const response = await MenuItemDao.removeMenuItemIdFromOrder(menu_category_id, menuItemIdToRemove);
		res.status(200).json(response);
	} catch (error) {
		console.error('Error removing menu item ID from order:', error);
		res.status(400).json({ error: 'Error removing menu item ID from order', details: error });
	}
}
/**
 * POST /menus/add-category-order
 * @tag Menu
 * @summary Add a menu category ID to the ordered list
 * @description Adds a menu category ID to the ordered list of categories in a menu.
 * @operationId addMenuCategoryIdToOrder
 * @bodyDescription The menu ID and the menu category ID to add
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category ID added to order successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error adding menu category ID to order
 * @prisma_model menus
 */
async function addMenuCategoryIdToOrder(req, res) {
	const { menu_id, menuCategoryIdToAdd } = req.body;
	try {
		const response = await MenuCategoryDao.addMenuCategoryIdToOrder(menu_id, menuCategoryIdToAdd);
		res.status(200).json(response);
	} catch (error) {
		console.error('Error adding menu category ID to order:', error);
		res.status(400).json({ error: 'Error adding menu category ID to order', details: error });
	}
}
/**
 * POST /menus/remove-category-order
 * @tag Menu
 * @summary Remove a menu category ID from the ordered list
 * @description Removes a menu category ID from the ordered list of categories in a menu.
 * @operationId removeMenuCategoryIdFromOrder
 * @bodyDescription The menu ID and the menu category ID to remove
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category ID removed from order successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing menu category ID from order
 * @prisma_model menus
 */
async function removeMenuCategoryIdFromOrder(req, res) {
	const { menu_id, menuCategoryIdToRemove } = req.body;
	try {
		const response = await MenuCategoryDao.removeMenuCategoryIdFromOrder(menu_id, menuCategoryIdToRemove);
		res.status(200).json(response);
	} catch (error) {
		console.error('Error removing menu category ID from order:', error);
		res.status(400).json({ error: 'Error removing menu category ID from order', details: error });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 * @prisma_model menu_items
 */
async function getMenuItemsByCategoryId(req, res) {
	try {
		const items = await MenuItemDao.getMenuItemsByCategoryId(req.params.menu_category_id);
		res.status(200).json(items);
	} catch (e) {
		console.error('Error obtaining menu items:', e);
		res.status(400).json({ error: 'Error obtaining menu items', e });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 * @prisma_model menu_categories
 */
async function getMenuCategoriesByMenuId(req, res) {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByMenuId(req.params.menu_id);
		res.status(200).json(categories);
	} catch (e) {
		console.error('Error obtaining menu categories:', e);
		res.status(400).json({ error: 'Error obtaining menu categories', e });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 * @prisma_model menu_categories
 */
async function getMenuCategoriesByBusinessId(req, res) {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByBusinessId(req.params.business_id);
		res.status(200).json(categories);
	} catch (e) {
		console.error('Error obtaining menu categories:', e);
		res.status(400).json({ error: 'Error obtaining menu categories', e });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 * @prisma_model menu_items
 */
async function getMenuItemsByBusinessId(req, res) {
	try {
		const items = await MenuItemDao.getMenuItemsByBusinessId(req.params.business_id, {
			is_copy: false,
		});
		res.status(200).json(items);
	} catch (e) {
		console.error('Error obtaining menu items:', e);
		res.status(400).json({ error: 'Error obtaining menu items', e });
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
 * @response 400 - Error deleting menu category
 * @prisma_model menu_categories
 */
async function deleteMenuCategory(req, res) {
	const { menu_category_id } = req.params;
	try {
		let menuCategory = await MenuCategoryDao.deleteMenuCategory(menu_category_id);
		businessIndex(menuCategory.business_id);
		res.status(204).send();
	} catch (e) {
		console.error('Error deleting menu category:', e);
		res.status(400).json({ error: 'Error deleting menu category', e });
	}
}
/**
 * PATCH /menus/menu-categories
 * @tag MenuCategory
 * @summary Update a menu category
 * @description Updates a menu category by its ID.
 * @operationId updateMenuCategory
 * @bodyDescription The menu category details to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu category
 * @prisma_model menu_categories
 */
async function updateMenuCategory(req, res) {
	const { menu_category_id, data } = req.body;
	try {
		const category_ids = data?.category_ids;
		delete data?.category_ids;
		const menuCategory = await MenuCategoryDao.updateMenuCategory(menu_category_id, data);
		const categories_to_add = category_ids.filter(
			(id) => !menuCategory.menu_categories_categories?.map((c) => c.categories_id).includes(id)
		);
		const categories_to_remove = menuCategory.menu_categories_categories
			?.map((c) => c.categories_id)
			.filter((id) => !category_ids.includes(id));
		for (const c_id of categories_to_add) {
			await MenuCategoryDao.addCategoryToMenuCategory(menu_category_id, c_id);
		}
		for (const c_id of categories_to_remove) {
			await MenuCategoryDao.removeCategoryFromMenuCategory(menu_category_id, c_id);
		}
		businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error('Error updating menu category:', e);
		res.status(400).json({ error: 'Error updating menu category', e });
	}
}
/**
 * PATCH /menus/menu-categories/order
 * @tag Menu
 * @summary Update a menu order
 * @description Updates a menu order by the menu category IDs.
 * @operationId updateMenuOrder
 * @bodyDescription The request body must include the new order of menu category IDs. This order is used to update the sequence of categories in the specified menu.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu order
 * @prisma_model menus
 */
async function updateMenuOrder(req, res) {
	const { menu_id, ordered_menu_categories_ids } = req.body;
	console.log(ordered_menu_categories_ids);
	try {
		const menu = await MenuDao.updateMenuOrder(menu_id, ordered_menu_categories_ids);
		res.status(200).json(menu);
	} catch (e) {
		console.error('Error updating menu order:', e);
		res.status(400).json({ error: 'Error updating menu order', e });
	}
}
/**
 * PATCH /menus/menu-items/order
 * @tag MenuItems
 * @summary Update a menu items order
 * @description Updates a menu items order by the menu items IDs.
 * @operationId updateMenuItemsOrder
 * @bodyDescription The request body must include the new order of menu category IDs. This order is used to update the sequence of menu items in the specified menu category.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu items order updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu order
 * @prisma_model menu_items
 */
async function updateMenuItemsOrder(req, res) {
	const { menu_category_id, ordered_menu_items_ids } = req.body;
	try {
		const menu = await MenuCategoryDao.updateMenuItemsOrder(menu_category_id, ordered_menu_items_ids);
		res.status(200).json(menu);
	} catch (e) {
		console.error('Error updating menu items order:', e);
		res.status(400).json({ error: 'Error updating menu items order', e });
	}
}
/**
 * POST /menus/menu-items/create
 * @tag MenuItem
 * @summary Create a new menu item
 * @description Creates a new menu item for a menu category.
 * @operationId createMenuItem
 * @bodyDescription The menu item details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Menu item created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating new menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
async function createMenuItem(req, res) {
	const { category_id, tax_rate_id, data, image, is_copy } = req.body;
	try {
		let document = null;
		if (image?.documentData) {
			if (image?.files?.length) {
				for (const file of image.files) {
					let base64 = file.base64;
					delete file.base64;
					let fileData = await FileDao.createFile(file.file_type, file.mime_type, true);
					if (!image?.document_id) {
						let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
						await S3Helper.SaveObject(key, base64, file.mime_type, {}, fileData, document.public);
					}
					data.image_file = {
						connect: {
							image_file_id: fileData.file_id,
						},
					};
				}
			}
		}

		const menuItem = await MenuItemDao.createMenuItem(category_id, tax_rate_id, data, is_copy);
		businessIndex(menuItem.business_id);
		res.status(201).json(menuItem);
	} catch (e) {
		console.error('Error creating menu item:', e);
		res.status(400).json({ error: 'Error creating menu item', message: e.message });
	}
}
/**
 * POST /menus/daily-meals-menu/create
 * @tag MenuItem
 * @summary Create a new menu daily meals menu
 * @description Creates a new daily meals menu for a business
 * @operationId createDailyMealsMenu
 * @bodyDescription The menu details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Menu created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating new menu
 * @prisma_model documents
 * @prisma_model files
 */
async function createDailyMealsMenu(req, res) {
	const { business_id, data } = req.body;
	try {
		const document = await DocumentDao.createDocument({
			document_type: 'DAILY_MEALS_MENU',
			...data.documentData,
		});
		for (const file of data.files) {
			let base64 = file.base64;
			delete file.base64;
			let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
			let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
			await S3Helper.SaveObject(key, base64, file.mime_type, {}, fileData, document.public);
		}
		await linkDocumentToBusiness(document.document_id, business_id);
		businessIndex(business_id);
		res.status(201).json(document);
	} catch (e) {
		console.error('Error creating daily meals menu document:', e);
		res.status(400).json({ error: 'Error creating daily meals menu document', e });
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
 * @responseContent {object} 200.application/json
 * @response 404 - No daily meals menu found
 * @responseContent {object} 404.application/json
 * @response 500 - Error retrieving the last daily meals menu
 * @responseContent {object} 500.application/json
 * @prisma_model documents
 * @prisma_model files
 */
async function getLastUploadedDailyMealsMenu(req, res) {
	const { business_id } = req.params;
	try {
		const lastDocument = await DocumentDao.getLastDocumentByTypeAndBusinessId('DAILY_MEALS_MENU', business_id);
		if (!lastDocument) {
			return res.status(404).json({ error: 'No daily meals menu found for the given business ID' });
		}
		const files = await FileDao.getFilesByDocumentId(lastDocument.document_id);
		if (!files || files.length === 0) {
			return res.status(404).json({ error: 'No files found for the document' });
		}
		const file = files[0];
		res.status(200).json({
			document_id: lastDocument.document_id,
			name: 'Menu',
			url: file.url,
			business_id: business_id,
		});
	} catch (e) {
		console.error('Error retrieving last uploaded daily meals menu:', e);
		res.status(500).json({ error: 'Error retrieving last uploaded daily meals menu', e });
	}
}
/**
 * DELETE /menus/menu-items/:menu_item_id
 * @tag MenuItem
 * @summary Delete a menu item
 * @description Deletes a menu item by its ID.
 * @operationId deleteMenuItem
 * @pathParam {string} menu_item_id - The ID of the menu item to delete
 * @response 204 - Menu item deleted successfully
 * @response 400 - Error deleting menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
async function deleteMenuItem(req, res) {
	const { menu_item_id } = req.params;
	try {
		await DocumentDao.deleteDocumentsAndFiles('menu_item_id', menu_item_id);
		let mI = await MenuItemDao.deleteMenuItem(menu_item_id);
		businessIndex(mI.business_id);
		res.status(204).send();
	} catch (e) {
		console.error('Error deleting menu item:', e);
		res.status(400).json({ error: 'Error deleting menu item', e });
	}
}
/**
 * PATCH /menus/menu-items
 * @tag MenuItem
 * @summary Update a menu item
 * @description Updates a menu item by its ID.
 * @operationId updateMenuItem
 * @bodyDescription The menu item details to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu item
 * @prisma_model menu_items
 * @prisma_model documents
 * @prisma_model files
 */
async function updateMenuItem(req, res) {
	const { menu_item_id, data, image } = req.body;
	try {
		if (image?.files[0].file_type === 'IMAGE') {
			for (const file of image.files) {
				let base64 = file.base64;
				delete file.base64;
				let fileData = await FileDao.createFile(file.file_type, file.mime_type, true);
				let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
				await S3Helper.SaveObject(key, base64, file.mime_type, {}, fileData, true);
				data.image_file = {
					connect: {
						image_file_id: fileData.file_id,
					},
				};
			}
			//const menuItem = await MenuItemDao.updateMenuItem(menu_item_id, data);
		}
		const menuItem = await MenuItemDao.updateMenuItem(menu_item_id, data);
		businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error('Error updating menu item:', e);
		res.status(400).json({ error: 'Error updating menu item', e });
	}
}
/**
 * PATCH /menus/menu-items/is_enabled
 * @tag MenuItem
 * @summary Update a menu item enabled field
 * @description Updates a menu item by its ID.
 * @operationId updateMenuItem
 * @bodyDescription The new menu item enabled field value
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu item
 * @prisma_model menu_items
 */
async function updateMenuItemEnabled(req, res) {
	const { menu_item_id, is_enabled } = req.body;
	try {
		const menuItem = await MenuItemDao.updateMenuItem(menu_item_id, { is_enabled: is_enabled });
		businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error('Error updating menu item:', e);
		res.status(400).json({ error: 'Error updating menu item', e });
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item price updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu item price
 * @prisma_model menu_items
 */
async function updateMenuItemPrice(req, res) {
	const { menu_item_id } = req.params;
	const { price } = req.body;
	try {
		const menuItem = await MenuItemDao.updateMenuItemPrice(menu_item_id, price);
		businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error('Error updating menu item price:', e);
		res.status(400).json({ error: 'Error updating menu item price', e });
	}
}
/**
 * PATCH /menus/menu-items/category/add
 * @tag MenuItem
 * @summary Update menu item category
 * @description Add menu item to a category.
 * @operationId addMenuItemToCategory
 * @bodyDescription The new category ID to set
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu item category updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu item category
 * @prisma_model menu_items
 * @prisma_model menu_categories
 */
async function addMenuItemMenuCategory(req, res) {
	const { menu_item_id, menu_category_id } = req.body;
	try {
		const menuItem = await MenuItemDao.addMenuItemToCategory(menu_item_id, menu_category_id);
		businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error('Error updating menu item category:', e);
		res.status(400).json({ error: 'Error updating menu item category', e });
	}
}
/**
 * PATCH /menus/menu-items/category/remove
 * @tag MenuItem
 * @summary Remove menu item from category
 * @description Removes a menu item from its category.
 * @operationId removeMenuItemFromCategory
 * @response 200 - Menu item removed from category successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing menu item from category
 * @prisma_model menu_items
 * @prisma_model menu_categories
 */
async function removeMenuItemFromCategory(req, res) {
	const { menu_item_id } = req.body;
	try {
		const menuItem = await MenuItemDao.removeMenuItemFromCategory(menu_item_id);
		businessIndex(menuItem.business_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error('Error removing menu item from category:', e);
		res.status(400).json({ error: 'Error removing menu item from category', e });
	}
}
/**
 * PATCH /menus/menu-categories/add
 * @tag MenuCategory
 * @summary Add a menu category to a menu
 * @description Adds a menu category to a menu.
 * @operationId addMenuCategory
 * @bodyDescription The menu ID and category ID to add
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category added successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error adding menu category
 * @prisma_model menus
 * @prisma_model menu_categories
 */
async function addMenuCategory(req, res) {
	const { menu_id, menu_category_id } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.addCategoryToMenu(menu_id, menu_category_id);
		businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error('Error adding menu category:', e);
		res.status(400).json({ error: 'Error adding menu category', e });
	}
}
/**
 * PATCH /menus/menu-categories/remove
 * @tag MenuCategory
 * @summary Remove a menu category from a menu
 * @description Removes a menu category from a menu.
 * @operationId removeMenuCategory
 * @bodyDescription The category ID to remove
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu category removed successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing menu category
 * @prisma_model menus
 * @prisma_model menu_categories
 */
async function removeMenuCategory(req, res) {
	const { menu_category_id } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.removeCategoryFromMenu(menu_category_id);
		businessIndex(menuCategory.business_id);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error('Error removing menu category:', e);
		res.status(400).json({ error: 'Error removing menu category', e });
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
 * @responseContent {object} 200.application/json
 * @response 500 - Failed to delete documents and files
 * @prisma_model documents
 * @prisma_model files
 */
const deleteDocumentsAndFilesByDocumentId = async (req, res) => {
	const { field, id } = req.params;
	try {
		await DocumentDao.deleteDocumentsAndFilesByDocumentId(field, id);
		res.status(200).json({ message: `Documents and files deleted successfully for ${field}: ${id}` });
	} catch (error) {
		res.status(500).json({
			error: `Failed to delete documents and files for ${field}: ${id}`,
			details: error.message,
		});
	}
};
/**
 * GET /menus/menu-items/date/:business_id/:date
 * @tag MenuItem
 * @summary Get menu items by date
 * @description Retrieves menu items for a business on a specific date.
 * @operationId getMenuItemsByDate
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} date - The date to filter by (ISO string)
 * @response 200 - Menu items retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error obtaining menu items
 * @prisma_model menu_items
 */
const getMenuItemsByDate = async (req, res) => {
	const { business_id, date } = req.params;
	try {
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
	} catch (e) {
		console.error('Error obtaining menu items:', e);
		res.status(400).json({ error: 'Error obtaining menu items', e });
	}
};
/**
 * GET /menus/date/:business_id/:date
 * @tag Menu
 * @summary Get menu by date
 * @description Retrieves a menu for a business on a specific date.
 * @operationId getMenuByDate
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} date - The date to filter by (ISO string)
 * @response 200 - Menu retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error obtaining menu
 * @prisma_model menus
 */
const getMenuByDate = async (req, res) => {
	const { business_id, date } = req.params;
	try {
		const items = await MenuDao.getMenuByDate(business_id, date);
		res.status(200).json(items);
	} catch (e) {
		console.error('Error obtaining menu items:', e);
		res.status(400).json({ error: 'Error obtaining menu items', e });
	}
};
/**
 * PATCH /menus/daily-meal/price
 * @tag Menu
 * @summary Update daily meal menu price
 * @description Updates the price for a daily meal menu category.
 * @operationId updateDailyMealMenuPrice
 * @bodyDescription The menu category id and new price
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Price updated and menu returned
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating menu price
 * @prisma_model menu_categories
 * @prisma_model menus
 */
const updateDailyMealMenuPrice = async (req, res) => {
	const { menu_category_id, price } = req.body;
	try {
		const menu_category = await MenuCategoryDao.updateDailyMealMenuPrice(menu_category_id, price);
		if (menu_category) {
			const menu = await MenuDao.getMenuById(menu_category.menu_id);
			businessIndex(menu.business_id);
			res.status(200).json(menu);
		} else {
			res.status(400).json({ error: 'Error updating menu price' });
		}
	} catch (e) {
		console.error('Error updating menu price:', e);
		res.status(400).json({ error: 'Error updating menu price', e });
	}
};
/**
 * POST /menus/auth/menu-items/extras-sides/:business_id
 * @tag MenuItem
 * @summary Get menu items by IDs
 * @description Retrieves menu items by list of ids for a business.
 * @operationId getMenuItemsByIds
 * @pathParam {string} business_id - The business id
 * @bodyDescription The list of menu item IDs
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Menu items retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching menu items
 * @prisma_model menu_items
 */
const getMenuItemsByIds = async (req, res) => {
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
	} catch (e) {
		console.error('Error fetching menu items:', e);
		res.status(400).json({ error: 'Error fetching menu items', e });
	}
};
/**
 * GET /menus/menu-items/tax-rates
 * @tag Menu
 * @summary Get active tax rates
 * @description Retrieves all active tax rates.
 * @operationId getActiveTaxRates
 * @response 200 - Active tax rates retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching tax rates
 * @prisma_model tax_rates
 */
const getActiveTaxRates = async (req, res) => {
	try {
		const taxRates = await TaxDao.getActiveTaxRates();
		if (taxRates) {
			res.status(200).json(taxRates);
		} else {
			res.status(400).json({ error: 'No active tax rates found' });
		}
	} catch (e) {
		console.error('Error fetching tax rates:', e);
		res.status(500).json({ error: 'Error fetching tax rates', e });
	}
};

/**
 *
 * - POST /menu-items/{menu_item_id}/versions
 * - @tag MenuItems
 * - @summary Create a new menu item version
 * - @description Creates a menu_item_versions snapshot for a menu item.
 * - @operationId createMenuItemVersion
 * - @bodyDescription Version payload
 * - @bodyContent {
 *   "version": 2,
 *   "snapshot": { "price": 999, "names": { "en": "Burger" } }
 * } application/json
 * - @bodyRequired
 * - @response 200 - Version created
 * - @prisma_model menu_item_versions
 */
export async function createMenuItemVersion(req, res) {
	try {
		const { menu_item_id } = req.params;
		const { version, snapshot } = req.body;
		if (typeof version !== 'number' || !snapshot) {
			res.status(400).json({ error: 'version (number) and snapshot (object) are required' });
			return;
		}
		const created = await MenuItemDao.createMenuItemVersion(menu_item_id, version, snapshot);
		res.json(created);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
}

export { getMenuItemsByIds };
export { updateDailyMealMenuPrice };
export { getMenuItemsByDate };
export { getMenuByDate };
export { getMenuByBusinessId };
//export { createMenu };
export { updateMenuOrder };
export { updateMenuItemsOrder };
export { deleteMenu };
export { setActiveMenu };
export { createMenuCategory };
export { getMenuCategoriesByMenuId };
export { getMenuCategoriesByBusinessId };
export { deleteMenuCategory };
export { addMenuCategory };
export { addMenuCategoryIdToOrder };
export { removeMenuCategoryIdFromOrder };
export { addMenuItemIdToOrder };
export { removeMenuItemIdFromOrder };
export { removeMenuCategory };
export { updateMenuCategory };
export { createMenuItem };
export { getMenuItemsByCategoryId };
export { getMenuItemsByBusinessId };
export { deleteMenuItem };
export { updateMenuItem };
export { updateMenuItemPrice };
export { addMenuItemMenuCategory };
export { removeMenuItemFromCategory };
export { createDailyMealsMenu };
export { createDailyMealMenu };
export { getLastUploadedDailyMealsMenu };
export { deleteDocumentsAndFilesByDocumentId };
export { getDailyMenuByBusinessId };
export { updateMenuItemEnabled };
export { getActiveTaxRates };
export default {
	getMenuItemsByIds,
	updateDailyMealMenuPrice,
	getMenuItemsByDate,
	getMenuByDate,
	getMenuByBusinessId,
	//createMenu,
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
