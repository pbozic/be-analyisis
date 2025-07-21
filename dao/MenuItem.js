import prisma from '../prisma/prisma.js';
const createMenuItem = async (categoryId, taxRateId, menuItemData, is_copy) => {
	return await prisma.menu_items.create({
		data: {
			menu_category: {
				connect: { menu_category_id: categoryId },
			},
			tax_rates: {
				connect: { tax_rates_id: taxRateId },
			},
			...menuItemData,
			is_copy: is_copy || false,
		},
	});
};
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
const getMenuItemsByCategoryId = async (categoryId) => {
	return await prisma.menu_items.findMany({
		where: {
			menu_category_id: categoryId,
		},
	});
};
const deleteMenuItem = async (menuItemId) => {
	return await prisma.menu_items.delete({
		where: {
			menu_item_id: menuItemId,
		},
	});
};
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
};
