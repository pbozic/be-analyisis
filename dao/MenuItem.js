const prisma = require('../prisma/prisma');

const createMenuItem = async (categoryId, menuItemData) => {
	return await prisma.menu_items.create({
		data: {
			menu_category: {
				connect: { menu_category_id: categoryId },
			},
			...menuItemData,
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
	// Exclude price from the data object if it exists
	const { price, ...updateData } = data;
	return await prisma.menu_items.update({
		where: {
			menu_item_id: menuItemId,
		},
		data: updateData,
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

module.exports = {
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
