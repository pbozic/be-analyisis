const prisma = require("../prisma/prisma");

const createMenuCategory = async (menuId, categoryData) => {
	return await prisma.menu_categories.create({
		data: {
			menu: {
				connect: { menu_id: menuId }
			},
			...categoryData
		}
	});
};

const getMenuCategoriesByMenuId = async (menu_id) => {
	return await prisma.menu_categories.findMany({
		where: {
			menu_id: menu_id
		},
		include: {
			menu_items: true
		}
	});
};

const deleteMenuCategory = async (menu_category_id) => {
	return await prisma.menu_categories.delete({
		where: {
			menu_category_id: menu_category_id
		}
	});
};

const updateMenuCategory = async (menu_category_id, data) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id,
		},
		data: data,
	});
};

const addCategoryToMenu = async (menu_id, menu_category_id) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id
		},
		data: {
			menu: {
				connect: { menu_id: menu_id }
			}
		}
	});
};

const removeCategoryFromMenu = async (menu_category_id) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id
		},
		data: {
			menu: {
				disconnect: true
			}
		}
	});
};

module.exports = {
	createMenuCategory,
	getMenuCategoriesByMenuId,
	deleteMenuCategory,
	updateMenuCategory,
	addCategoryToMenu,
	removeCategoryFromMenu
};