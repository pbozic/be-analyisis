import { Prisma } from '@prisma/client';
import { float } from '@elastic/elasticsearch/lib/api/types.js';

import prisma from '../prisma/prisma.js';
import { MenuItem, MenuCategory, MenuItemDetail, UpdateMenuItem, MenuItemVersionResponse } from '../schemas/dto/Menu/menu.dto.js';
import menuItemsDefaultInclude, { MenuItemWithIncludesPrisma } from '../prisma/includes/menuItems.js';
import { toMenuItemResponse, toMenuItemList, toMenuItemVersionResponse } from '../schemas/dto/Menu/menu.mappers.js';

function getErrorMessage(err: unknown): string {
	if (err instanceof Error) return err.message;
	try {
		return String(err);
	} catch {
		return 'Unknown error';
	}
}
/**
 * Create a new version for a menu item and set it as the current version.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @param {number} version - Version number.
 * @param {object} snapshot - Snapshot payload for the version.
 * @returns {Promise<MenuItemDataSchema>} The created version record.
 */
const createMenuItemVersion = async (menu_item_id: string, version: number, snapshot: object): Promise<MenuItemVersionResponse> => {
	// Create a transaction to update the menu item version
	const transaction = await prisma.$transaction(async (prisma: Prisma.TransactionClient) => {
		// Create the new version
		const newVersion = await prisma.menu_item_versions.create({
			data: { menu_item_id, version, snapshot },
		});
		// Update the menu item to point to the new version
		await prisma.menu_items.update({
			where: { menu_item_id },
			data: { latest_version_id: newVersion.menu_item_version_id },
		});
		return newVersion;
	});

	// map to DTO and return
	return toMenuItemVersionResponse(transaction);
};

/**
 * Create a new menu item under a category with an optional tax rate.
 *
 * @param {string} categoryId - Menu category ID to attach to.
 * @param {string|null} taxRateId - Optional tax rate ID to connect.
 * @param {MenuItem} menuItemData - Menu item fields to create.
 * @param {boolean} is_copy - Whether this item is a copied item.
 * @returns {Promise<MenuItem>} The created menu item.
 */
const createMenuItem = async (
	categoryId: string,
	taxRateId: string | null,
	menuItemData: MenuItem,
	is_copy: boolean
): Promise<MenuItemDetail> => {
	try {
		const created = await prisma.menu_items.create({
			data: {
				menu_category: { connect: { menu_category_id: categoryId } },
				tax_rate: taxRateId ? { connect: { tax_rates_id: taxRateId } } : undefined,
				...menuItemData,
				is_copy: is_copy || false,
			},
		});

		// Fetch with includes and map to DTO
		const fetched = await prisma.menu_items.findUnique({ where: { menu_item_id: created.menu_item_id }, include: menuItemsDefaultInclude as any });
		return toMenuItemResponse(fetched as MenuItemWithIncludesPrisma);
	} catch (error: unknown) {
		console.error('Error creating menu item:', error);
		throw new Error(getErrorMessage(error));
	}
};
/**
 * Append a menu_item_id to a category's ordered list if not present.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} menuItemIdToAdd - Menu item ID to add.
 * @returns {Promise<object|MenuCategory>} The updated category or undefined if already present.
 */
const addMenuItemIdToOrder = async (
	menu_category_id: string,
	menuItemIdToAdd: string
): Promise<MenuCategory | undefined> => {
	try {
		const category = await prisma.menu_categories.findUnique({
			where: { menu_category_id: menu_category_id },
			select: { menu_items_ordered: true },
		});
		let orderedItems = category.menu_items_ordered ? category.menu_items_ordered : [];
		if (!orderedItems.includes(menuItemIdToAdd)) {
			orderedItems.push(menuItemIdToAdd);
			return await prisma.menu_categories.update({
				where: { menu_category_id: menu_category_id },
				data: { menu_items_ordered: orderedItems },
			});
		}
	} catch (error: unknown) {
		console.error('Error adding menu item ID to order:', error);
		throw new Error(getErrorMessage(error));
	}
};
/**
 * Remove a menu_item_id from a category's ordered list.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} menuItemIdToRemove - Menu item ID to remove.
 * @returns {Promise<MenuCategory>} The updated category.
 */
const removeMenuItemIdFromOrder = async (
	menu_category_id: string,
	menuItemIdToRemove: string
): Promise<MenuCategory> => {
	try {
		const category = await prisma.menu_categories.findUnique({
			where: { menu_category_id: menu_category_id },
			select: { menu_items_ordered: true },
		});
		let orderedItems = category.menu_items_ordered ? category.menu_items_ordered : [];
		orderedItems = orderedItems.filter((id: string) => id !== menuItemIdToRemove);
		return await prisma.menu_categories.update({
			where: { menu_category_id: menu_category_id },
			data: { menu_items_ordered: orderedItems },
		});
	} catch (error: unknown) {
		console.error('Error removing menu item ID from order:', error);
		throw new Error(getErrorMessage(error));
	}
};
/**
 * Get menu items by a list of IDs including their categories and categories' categories.
 *
 * @param {string[]} menu_item_ids - List of menu item IDs.
 * @returns {Promise<MenuItemDetail[]>} Array of menu items with category context.
 */
const getMenuItemsByIds = async (menu_item_ids: string[]): Promise<MenuItemDetail[]> => {
	const rows = await prisma.menu_items.findMany({ where: { menu_item_id: { in: menu_item_ids } }, include: menuItemsDefaultInclude });
	return toMenuItemList(rows as MenuItemWithIncludesPrisma[]);
};
/**
 * Get menu items for a business with optional filters.
 *
 * @param {string} stores_id - Stores module ID.
 * @param {string} food_drinks_id - Food or drinks module  ID.
 * @param {object} args - Additional where filters or options.
 * @returns {Promise<MenuItemDetail[]>} Array of menu items with documents and files.
 */
const getMenuItemsByBusinessId = async (
	data: {
		food_drinks_id: string;
		stores_id: string;
	},
	args: object
): Promise<MenuItemDetail[]> => {
	const { food_drinks_id, stores_id } = data;
	const rows = await prisma.menu_items.findMany({ where: { ...(stores_id ? { stores_id } : {}), ...(food_drinks_id ? { food_drinks_id } : {}), ...args }, include: menuItemsDefaultInclude });
	return toMenuItemList(rows as MenuItemWithIncludesPrisma[]);
};
/**
 * Get menu items by their menu category.
 *
 * @param {string} categoryId - Menu category ID.
 * @returns {Promise<MenuItem[]>} Array of menu items.
 */
const getMenuItemsByCategoryId = async (categoryId: string): Promise<MenuItemDetail[]> => {
	const rows = await prisma.menu_items.findMany({ where: { menu_category_id: categoryId }, include: menuItemsDefaultInclude });
	return toMenuItemList(rows as MenuItemWithIncludesPrisma[]);
};
/**
 * Delete a menu item by ID.
 *
 * @param {string} menuItemId - Menu item ID.
 * @returns {Promise<MenuItem>} The deleted menu item.
 */
const deleteMenuItem = async (menuItemId: string): Promise<MenuItemDetail> => {
	try {
		const deleted = await prisma.menu_items.delete({ where: { menu_item_id: menuItemId } });
		// Fetch with includes for a detailed response
		const row = await prisma.menu_items.findUnique({ where: { menu_item_id: deleted.menu_item_id }, include: menuItemsDefaultInclude as any });
		return toMenuItemResponse(row as MenuItemWithIncludesPrisma);
	} catch (error: unknown) {
		console.error('Error deleting menu item:', error);
		throw new Error(getErrorMessage(error));
	}
};
/**
 * Update a menu item; logs stock changes separately when stock is provided.
 *
 * @param {string} menuItemId - Menu item ID.
 * @param {UpdateMenuItem} data - Partial fields to update (stock handled specially).
 * @returns {Promise<MenuItem>} The updated menu item.
 */
const updateMenuItem = async (menuItemId: string, data: UpdateMenuItem): Promise<MenuItemDetail> => {
	// exclude stock from the data object if it exists
	let { stock, ...rest } = data;
	data = rest;
	let existingItem = await prisma.menu_items.findUnique({
		where: {
			menu_item_id: menuItemId,
		},
	});

	if (!existingItem) {
		// Guard: if the item doesn't exist, fail fast with a clear error instead of allowing a runtime exception later
		throw new Error(`Menu item not found: ${menuItemId}`);
	}
	console.log(`Updating menu item ${menuItemId} with data:`, data);
	if (stock !== undefined) {
		let stockChange = stock - existingItem.stock; // Ensure stock is initialized to 0 if it doesn't exist
		// If stock is provided, update the stock in the menu_items table
		await prisma.menu_item_stock_change.create({
			data: {
				menu_item_id: menuItemId,
				quantity: stockChange, // Adjust stock based on the existing stock
				order_id: null, // Assuming this is not linked to an order
				reason: 'Manual stock update', // You can customize this reason
			},
		});
	}

	try {
		const updated = await prisma.menu_items.update({ where: { menu_item_id: menuItemId }, data });
		const row = await prisma.menu_items.findUnique({ where: { menu_item_id: updated.menu_item_id }, include: menuItemsDefaultInclude as any });
		return toMenuItemResponse(row as MenuItemWithIncludesPrisma);
	} catch (error: unknown) {
		console.error('Error updating menu item:', error);
		throw new Error(getErrorMessage(error));
	}
};
/**
 * Update the price for a menu item.
 *
 * @param {string} menuItemId - Menu item ID.
 * @param {float} price - New price value.
 * @returns {Promise<MenuItem>} The updated menu item.
 */
const updateMenuItemPrice = async (menuItemId: string, price: float): Promise<MenuItemDetail> => {
	const updated = await prisma.menu_items.update({ where: { menu_item_id: menuItemId }, data: { price: price } });
	const row = await prisma.menu_items.findUnique({ where: { menu_item_id: updated.menu_item_id }, include: menuItemsDefaultInclude as any });
	return toMenuItemResponse(row as MenuItemWithIncludesPrisma);
};
/**
 * Connect a menu item to a menu category.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<MenuItem>} The updated menu item.
 */
const addMenuItemToCategory = async (menu_item_id: string, menu_category_id: string): Promise<MenuItemDetail> => {
	const updated = await prisma.menu_items.update({ where: { menu_item_id }, data: { menu_category: { connect: { menu_category_id } } } });
	const row = await prisma.menu_items.findUnique({ where: { menu_item_id: updated.menu_item_id }, include: menuItemsDefaultInclude as any });
	return toMenuItemResponse(row as MenuItemWithIncludesPrisma);
};
/**
 * Disconnect a menu item from its category.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @returns {Promise<MenuItem>} The updated menu item.
 */
const removeMenuItemFromCategory = async (menu_item_id: string): Promise<MenuItemDetail> => {
	try {
		const updated = await prisma.menu_items.update({ where: { menu_item_id }, data: { menu_category_id: null } });
		const row = await prisma.menu_items.findUnique({ where: { menu_item_id: updated.menu_item_id }, include: menuItemsDefaultInclude as any });
		return toMenuItemResponse(row as MenuItemWithIncludesPrisma);
	} catch (error: unknown) {
		throw new Error(getErrorMessage(error));
	}
};
export { createMenuItem };
export { addMenuItemIdToOrder };
export { removeMenuItemIdFromOrder };
export { getMenuItemsByIds };
export { getMenuItemsByCategoryId };
export { getMenuItemsByBusinessId };
export { deleteMenuItem };
export { updateMenuItem };
export { updateMenuItemPrice };
export { addMenuItemToCategory };
export { removeMenuItemFromCategory };
export { createMenuItemVersion };
export default {
	createMenuItem,
	addMenuItemIdToOrder,
	removeMenuItemIdFromOrder,
	getMenuItemsByIds,
	getMenuItemsByCategoryId,
	getMenuItemsByBusinessId,
	deleteMenuItem,
	updateMenuItem,
	updateMenuItemPrice,
	addMenuItemToCategory,
	removeMenuItemFromCategory,
	createMenuItemVersion,
};
