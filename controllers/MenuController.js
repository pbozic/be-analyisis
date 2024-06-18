const MenuDao = require('../dao/Menu');
const MenuCategoryDao = require('../dao/MenuCategory');
const MenuItemDao = require('../dao/MenuItem');

/**
 * GET /menus/business/:business_id
 * @tag Menu
 * @summary Get menus by business ID
 * @description Retrieves a list of menus for a specific business.
 * @operationId getMenuByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns a list of menus
 * @responseContent {Menu[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 */
async function getMenuByBusinessId(req, res) {
	try {
		const menus = await MenuDao.getMenuByBusinessId(req.params.business_id);
		res.status(200).json(menus);
	} catch (e) {
		console.error("Error obtaining menus:", e);
		res.status(400).json({ error: "Error obtaining menus", e });
	}
}

/**
 * POST /menus
 * @tag Menu
 * @summary Create a new menu
 * @description Creates a new menu for a business.
 * @operationId createMenu
 * @bodyDescription The menu details to create
 * @bodyContent {MenuCreateRequest} application/json
 * @bodyRequired
 * @response 201 - Menu created successfully
 * @responseContent {Menu} 201.application/json
 * @response 400 - Error creating new menu
 */
async function createMenu(req, res) {
	const { business_id } = req.body;
	try {
		const menu = await MenuDao.createMenu(business_id);
		res.status(201).json(menu);
	} catch (e) {
		console.error("Error creating menu:", e);
		res.status(400).json({ error: "Error creating menu", e });
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
 */
async function deleteMenu(req, res) {
	const { menu_id } = req.params;
	try {
		await MenuDao.deleteMenu(menu_id);
		res.status(204).send();
	} catch (e) {
		console.error("Error deleting menu:", e);
		res.status(400).json({ error: "Error deleting menu", e });
	}
}

/**
 * PATCH /menus/active
 * @tag Menu
 * @summary Set menu active status
 * @description Updates the active status of a menu.
 * @operationId setActiveMenu
 * @pathParam {string} menu_id - The ID of the menu to update
 * @bodyDescription The active status to set
 * @bodyContent {ActiveStatusRequest} application/json
 * @bodyRequired
 * @response 200 - Menu active status updated successfully
 * @responseContent {Menu} 200.application/json
 * @response 400 - Error updating menu active status
 */
async function setActiveMenu(req, res) {
	const { menu_id, active } = req.body;
	//todo: deactivate all other active menus for this business_id when activating this one
	try {
		const menu = await MenuDao.setActiveMenu(menu_id, active);
		res.status(200).json(menu);
	} catch (e) {
		console.error("Error updating menu active status:", e);
		res.status(400).json({ error: "Error updating menu active status", e });
	}
}

/**
 * POST /menus/menu-categories/create
 * @tag MenuCategory
 * @summary Create a new menu category
 * @description Creates a new menu category for a menu.
 * @operationId createMenuCategory
 * @bodyDescription The menu category details to create
 * @bodyContent {MenuCategoryCreateRequest} application/json
 * @bodyRequired
 * @response 201 - Menu category created successfully
 * @responseContent {MenuCategory} 201.application/json
 * @response 400 - Error creating new menu category
 */
async function createMenuCategory(req, res) {
	const { menu_id, data} = req.body;
	try {
		const menuCategory = await MenuCategoryDao.createMenuCategory(menu_id, data);
		res.status(201).json(menuCategory);
	} catch (e) {
		console.error("Error creating menu category:", e);
		res.status(400).json({ error: "Error creating menu category", e });
	}
}

/**
 * GET /menus/menu-items/:category_id
 * @tag MenuItem
 * @summary Get menu items by category ID
 * @description Retrieves a list of menu items for a specific menu category.
 * @operationId getMenuItemsByCategoryId
 * @pathParam {string} category_id - The ID of the menu category
 * @response 200 - Successful operation, returns a list of menu items
 * @responseContent {MenuItem[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 */
async function getMenuItemsByCategoryId(req, res) {
	try {
		const items = await MenuItemDao.getMenuItemsByCategoryId(req.params.menu_category_id);
		res.status(200).json(items);
	} catch (e) {
		console.error("Error obtaining menu items:", e);
		res.status(400).json({ error: "Error obtaining menu items", e });
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
 * @responseContent {MenuCategory[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 */
async function getMenuCategoriesByMenuId(req, res) {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByMenuId(req.params.menu_id);
		res.status(200).json(categories);
	} catch (e) {
		console.error("Error obtaining menu categories:", e);
		res.status(400).json({ error: "Error obtaining menu categories", e });
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
 * @responseContent {MenuCategory[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu categories
 */
async function getMenuCategoriesByBusinessId(req, res) {
	try {
		const categories = await MenuCategoryDao.getMenuCategoriesByBusinessId(req.params.business_id);
		res.status(200).json(categories);
	} catch (e) {
		console.error("Error obtaining menu categories:", e);
		res.status(400).json({ error: "Error obtaining menu categories", e });
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
 * @responseContent {MenuItem[]} 200.application/json
 * @response 400 - Error occurred while obtaining the menu items
 */
async function getMenuItemsByBusinessId(req, res) {
	try {
		const items = await MenuItemDao.getMenuItemsByBusinessId(req.params.business_id);
		res.status(200).json(items);
	} catch (e) {
		console.error("Error obtaining menu items:", e);
		res.status(400).json({ error: "Error obtaining menu items", e });
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
 */
async function deleteMenuCategory(req, res) {
	const { menu_category_id } = req.params;
	try {
		await MenuCategoryDao.deleteMenuCategory(menu_category_id);
		res.status(204).send();
	} catch (e) {
		console.error("Error deleting menu category:", e);
		res.status(400).json({ error: "Error deleting menu category", e });
	}
}

/**
 * PATCH /menus/menu-categories
 * @tag MenuCategory
 * @summary Update a menu category
 * @description Updates a menu category by its ID.
 * @operationId updateMenuCategory
 * @pathParam {string} menu_category_id - The ID of the menu category to update
 * @bodyDescription The menu category details to update
 * @bodyContent {MenuCategoryUpdateRequest} application/json
 * @bodyRequired
 * @response 200 - Menu category updated successfully
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error updating menu category
 */
async function updateMenuCategory(req, res) {
	const { menu_category_id, data } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.updateMenuCategory(menu_category_id, data);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error("Error updating menu category:", e);
		res.status(400).json({ error: "Error updating menu category", e });
	}
}

/**
 * POST /menus/menu-items/create
 * @tag MenuItem
 * @summary Create a new menu item
 * @description Creates a new menu item for a menu category.
 * @operationId createMenuItem
 * @bodyDescription The menu item details to create
 * @bodyContent {MenuItemCreateRequest} application/json
 * @bodyRequired
 * @response 201 - Menu item created successfully
 * @responseContent {MenuItem} 201.application/json
 * @response 400 - Error creating new menu item
 */
async function createMenuItem(req, res) {
	const { category_id, data } = req.body;
	try {
		const menuItem = await MenuItemDao.createMenuItem(category_id, data);
		res.status(201).json(menuItem);
	} catch (e) {
		console.error("Error creating menu item:", e);
		res.status(400).json({ error: "Error creating menu item", e });
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
 */
async function deleteMenuItem(req, res) {
	const { menu_item_id } = req.params;
	try {
		await MenuItemDao.deleteMenuItem(menu_item_id);
		res.status(204).send();
	} catch (e) {
		console.error("Error deleting menu item:", e);
		res.status(400).json({ error: "Error deleting menu item", e });
	}
}

/**
 * PATCH /menus/menu-items
 * @tag MenuItem
 * @summary Update a menu item
 * @description Updates a menu item by its ID.
 * @operationId updateMenuItem
 * @pathParam {string} menu_item_id - The ID of the menu item to update
 * @bodyDescription The menu item details to update
 * @bodyContent {MenuItemUpdateRequest} application/json
 * @bodyRequired
 * @response 200 - Menu item updated successfully
 * @responseContent {MenuItem} 200.application/json
 * @response 400 - Error updating menu item
 */
async function updateMenuItem(req, res) {
	const { menu_item_id, data } = req.body;
	try {
		const menuItem = await MenuItemDao.updateMenuItem(menu_item_id, data);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error("Error updating menu item:", e);
		res.status(400).json({ error: "Error updating menu item", e });
	}
}

/**
 * PATCH /menus/menu-items/price
 * @tag MenuItem
 * @summary Update menu item price
 * @description Updates the price of a menu item.
 * @operationId updateMenuItemPrice
 * @pathParam {string} menu_item_id - The ID of the menu item to update
 * @bodyDescription The new price to set
 * @bodyContent {PriceUpdateRequest} application/json
 * @bodyRequired
 * @response 200 - Menu item price updated successfully
 * @responseContent {MenuItem} 200.application/json
 * @response 400 - Error updating menu item price
 */
async function updateMenuItemPrice(req, res) {
	const { menu_item_id } = req.params;
	const { price } = req.body;
	try {
		const menuItem = await MenuItemDao.updateMenuItemPrice(menu_item_id, price);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error("Error updating menu item price:", e);
		res.status(400).json({ error: "Error updating menu item price", e });
	}
}
/**
 * PATCH /menus/menu-items/category/add
 * @tag MenuItem
 * @summary Update menu item category
 * @description Add menu item to a category.
 * @operationId addMenuItemToCategory
 * @pathParam {string} menu_item_id - The ID of the menu item to update
 * @bodyDescription The new category ID to set
 * @bodyContent {CategoryUpdateRequest} application/json
 * @bodyRequired
 * @response 200 - Menu item category updated successfully
 * @responseContent {MenuItem} 200.application/json
 * @response 400 - Error updating menu item category
 */
async function addMenuItemMenuCategory(req, res) {
	const { menu_item_id, menu_category_id } = req.body;

	try {
		const menuItem = await MenuItemDao.addMenuItemToCategory(menu_item_id, menu_category_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error("Error updating menu item category:", e);
		res.status(400).json({ error: "Error updating menu item category", e });
	}
}

/**
 * PATCH /menus/menu-items/category/remove
 * @tag MenuItem
 * @summary Remove menu item from category
 * @description Removes a menu item from its category.
 * @operationId removeMenuItemFromCategory
 * @pathParam {string} menu_item_id - The ID of the menu item to update
 * @response 200 - Menu item removed from category successfully
 * @responseContent {MenuItem} 200.application/json
 * @response 400 - Error removing menu item from category
 */
async function removeMenuItemFromCategory(req, res) {
	const { menu_item_id } = req.params;
	try {
		const menuItem = await MenuItemDao.removeMenuItemFromCategory(menu_item_id);
		res.status(200).json(menuItem);
	} catch (e) {
		console.error("Error removing menu item from category:", e);
		res.status(400).json({ error: "Error removing menu item from category", e });
	}
}

/**
 * PATCH /menus/menu-categories/add
 * @tag MenuCategory
 * @summary Add a menu category to a menu
 * @description Adds a menu category to a menu.
 * @operationId addMenuCategory
 * @bodyDescription The menu ID and category ID to add
 * @bodyContent {AddMenuCategoryRequest} application/json
 * @bodyRequired
 * @response 200 - Menu category added successfully
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error adding menu category
 */
async function addMenuCategory(req, res) {
	const { menu_id, menu_category_id } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.addCategoryToMenu(menu_id, menu_category_id);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error("Error adding menu category:", e);
		res.status(400).json({ error: "Error adding menu category", e });
	}
}

/**
 * PATCH /menus/menu-categories/remove
 * @tag MenuCategory
 * @summary Remove a menu category from a menu
 * @description Removes a menu category from a menu.
 * @operationId removeMenuCategory
 * @bodyDescription The category ID to remove
 * @bodyContent {RemoveMenuCategoryRequest} application/json
 * @bodyRequired
 * @response 200 - Menu category removed successfully
 * @responseContent {MenuCategory} 200.application/json
 * @response 400 - Error removing menu category
 */
async function removeMenuCategory(req, res) {
	const { menu_category_id } = req.body;
	try {
		const menuCategory = await MenuCategoryDao.removeCategoryFromMenu(menu_category_id);
		res.status(200).json(menuCategory);
	} catch (e) {
		console.error("Error removing menu category:", e);
		res.status(400).json({ error: "Error removing menu category", e });
	}
}


module.exports = {
	getMenuByBusinessId,
	createMenu,
	deleteMenu,
	setActiveMenu,
	createMenuCategory,
	getMenuCategoriesByMenuId,
	getMenuCategoriesByBusinessId,
	deleteMenuCategory,
	addMenuCategory,
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
};