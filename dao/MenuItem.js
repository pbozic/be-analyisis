const prisma = require('../prisma/prisma');

const createMenuItem = async (categoryId, names, description, price) => {
	return await prisma.menu_items.create({
		data: {
			menu_category_id: categoryId,
			names: names,
			description: description,
			price: price,
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

const updateMenuItemMenuCategory = async (menu_item_id, menu_category_id) => {
	return await prisma.menu_items.update({
		where: {
			menu_item_id: menu_item_id,
		},
		data: {
			menu_category_id: menu_category_id,
		},
	});
};


module.exports = {
	createMenuItem,
	getMenuItemsByCategoryId,
	deleteMenuItem,
	updateMenuItemPrice,
	updateMenuItemMenuCategory
};