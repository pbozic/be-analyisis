const prisma = require('../prisma/prisma');

const createMenuCategory = async (menuId, names, categories) => {
	return await prisma.menu_categories.create({
		data: {
			menu_id: menuId,
			names: names,
			categories: categories,
		},
	});
};

const getMenuCategoriesByMenuId = async (menu_id) => {
	return await prisma.menu_categories.findMany({
		where: {
			menu_id: menu_id,
		},
		include: {
			menu_items: true,
		},
	});
};

const deleteMenuCategory = async (menu_category_id) => {
	return await prisma.menu_categories.delete({
		where: {
			menu_category_id: menu_category_id,
		},
	});
};


module.exports = {
	createMenuCategory,
	getMenuCategoriesByMenuId,
	deleteMenuCategory,
};
