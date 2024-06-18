const prisma = require('../prisma/prisma');

const createMenuItem = async (categoryId, menuItemData) => {
	return await prisma.menu_items.create({
		data: {
			menu_category: {
				connect: { menu_category_id: categoryId },
			},
			...menuItemData
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
	return await prisma.menu_items.update({
		where: {
			menu_item_id: menu_item_id,
		},
		data: {
			menu_category: {
				disconnect: true,
			},
		},
	});
};

module.exports = {
	createMenuItem,
	getMenuItemsByCategoryId,
	deleteMenuItem,
	updateMenuItem,
	updateMenuItemPrice,
	addMenuItemToCategory,
	removeMenuItemFromCategory,
};