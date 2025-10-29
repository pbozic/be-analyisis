import prisma from '../prisma/prisma.js';
/**
 * Create a new version for a menu item and set it as the current version.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @param {number} version - Version number.
 * @param {object} snapshot - Snapshot payload for the version.
 * @returns {Promise<object>} The created version record.
 */
const createMenuItemVersion = async (menu_item_id, version, snapshot) => {
	// Create a transaction to update the menu item version
	const transaction = await prisma.$transaction(async (prisma) => {
		// Create the new version
		const newVersion = await prisma.menu_item_versions.create({
			data: { menu_item_id, version, snapshot },
		});
		// Update the menu item to point to the new version
		await prisma.menu_items.update({
			where: { menu_item_id },
			data: { current_version_id: newVersion.menu_item_version_id },
		});
		return newVersion;
	});

	return transaction;
};

/**
 * Create a new menu item under a category with an optional tax rate.
 *
 * @param {string} categoryId - Menu category ID to attach to.
 * @param {string|null} taxRateId - Optional tax rate ID to connect.
 * @param {object} menuItemData - Menu item fields to create.
 * @param {boolean} is_copy - Whether this item is a copied item.
 * @returns {Promise<object>} The created menu item.
 */
const createMenuItem = async (categoryId, taxRateId, menuItemData, is_copy) => {
	return await prisma.menu_items.create({
		data: {
			menu_category: {
				connect: { menu_category_id: categoryId },
			},
			tax_rate: taxRateId
				? {
						connect: { tax_rates_id: taxRateId },
					}
				: undefined,
			...menuItemData,
			is_copy: is_copy || false,
		},
	});
};
/**
 * Append a menu_item_id to a category's ordered list if not present.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} menuItemIdToAdd - Menu item ID to add.
 * @returns {Promise<object|undefined>} The updated category or undefined if already present.
 */
const addMenuItemIdToOrder = async (menu_category_id, menuItemIdToAdd) => {
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
	} catch (error) {
		console.error('Error adding menu item ID to order:', error);
		throw error;
	}
};
/**
 * Remove a menu_item_id from a category's ordered list.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} menuItemIdToRemove - Menu item ID to remove.
 * @returns {Promise<object>} The updated category.
 */
const removeMenuItemIdFromOrder = async (menu_category_id, menuItemIdToRemove) => {
	try {
		const category = await prisma.menu_categories.findUnique({
			where: { menu_category_id: menu_category_id },
			select: { menu_items_ordered: true },
		});
		let orderedItems = category.menu_items_ordered ? category.menu_items_ordered : [];
		orderedItems = orderedItems.filter((id) => id !== menuItemIdToRemove);
		return await prisma.menu_categories.update({
			where: { menu_category_id: menu_category_id },
			data: { menu_items_ordered: orderedItems },
		});
	} catch (error) {
		console.error('Error removing menu item ID from order:', error);
		throw error;
	}
};
/**
 * Get menu items by a list of IDs including their categories and categories' categories.
 *
 * @param {string[]} menu_item_ids - List of menu item IDs.
 * @returns {Promise<object[]>} Array of menu items with category context.
 */
const getMenuItemsByIds = async (menu_item_ids) => {
	return await prisma.menu_items.findMany({
		where: {
			menu_item_id: {
				in: menu_item_ids,
			},
		},
		include: {
			menu_category: {
				include: {
					menu_categories_categories: {
						include: {
							category: true,
						},
					},
				},
			},
		},
	});
};
/**
 * Get menu items for a business with optional filters.
 *
 * @param {string} business_id - Business ID.
 * @param {object} args - Additional where filters or options.
 * @returns {Promise<object[]>} Array of menu items with documents and files.
 */
const getMenuItemsByBusinessId = async (business_id, args) => {
	return await prisma.menu_items.findMany({
		where: {
			business_id: business_id,
			...args,
		},
		include: {
			menu_category: true,
			documents: {
				include: {
					files: true,
				},
			},
		},
	});
};
/**
 * Get menu items by their menu category.
 *
 * @param {string} categoryId - Menu category ID.
 * @returns {Promise<object[]>} Array of menu items.
 */
const getMenuItemsByCategoryId = async (categoryId) => {
	return await prisma.menu_items.findMany({
		where: {
			menu_category_id: categoryId,
		},
	});
};
/**
 * Delete a menu item by ID.
 *
 * @param {string} menuItemId - Menu item ID.
 * @returns {Promise<object>} The deleted menu item.
 */
const deleteMenuItem = async (menuItemId) => {
	return await prisma.menu_items.delete({
		where: {
			menu_item_id: menuItemId,
		},
	});
};
/**
 * Update a menu item; logs stock changes separately when stock is provided.
 *
 * @param {string} menuItemId - Menu item ID.
 * @param {object} data - Partial fields to update (stock handled specially).
 * @returns {Promise<object>} The updated menu item.
 */
const updateMenuItem = async (menuItemId, data) => {
	// exclude stock from the data object if it exists
	let { stock, ...rest } = data;
	data = rest;
	let existingItem = await prisma.menu_items.findUnique({
		where: {
			menu_item_id: menuItemId,
		},
	});
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

	return await prisma.menu_items.update({
		where: {
			menu_item_id: menuItemId,
		},
		data: data,
	});
};
/**
 * Update the price for a menu item.
 *
 * @param {string} menuItemId - Menu item ID.
 * @param {number} price - New price value.
 * @returns {Promise<object>} The updated menu item.
 */
const updateMenuItemPrice = async (menuItemId, price) => {
	return await prisma.menu_items.update({
		where: {
			menu_item_id: menuItemId,
		},
		data: {
			price: price,
		},
	});
};
/**
 * Connect a menu item to a menu category.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<object>} The updated menu item.
 */
const addMenuItemToCategory = async (menu_item_id, menu_category_id) => {
	return await prisma.menu_items.update({
		where: {
			menu_item_id: menu_item_id,
		},
		data: {
			menu_category: {
				connect: { menu_category_id: menu_category_id },
			},
		},
	});
};
/**
 * Disconnect a menu item from its category.
 *
 * @param {string} menu_item_id - Menu item ID.
 * @returns {Promise<object>} The updated menu item.
 */
const removeMenuItemFromCategory = async (menu_item_id) => {
	try {
		return await prisma.menu_items.update({
			where: {
				menu_item_id: menu_item_id,
			},
			data: {
				menu_category_id: null,
			},
		});
	} catch (error) {
		console.error(`Error removing menu item ${menu_item_id} from category:`, error);
		throw new Error(error);
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
