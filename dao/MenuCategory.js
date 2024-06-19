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

const getMenuCategoriesByBusinessId = async (business_id) => {
	return await prisma.menu_categories.findMany({
		where: {
			business_id: business_id
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
	try {
		return await prisma.menu_categories.update({
			where: {
				menu_category_id: menu_category_id,
			},
			data: {
				menu_id: null
			},
		});
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = {
	createMenuCategory,
	getMenuCategoriesByMenuId,
	getMenuCategoriesByBusinessId,
	deleteMenuCategory,
	updateMenuCategory,
	addCategoryToMenu,
	removeCategoryFromMenu
};