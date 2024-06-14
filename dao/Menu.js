const prisma = require('../prisma/prisma');

const createMenu = async (business_id) => {
	return await prisma.menus.create({
		data: {
			business_id: business_id,
			active: true, // Assuming we want to create it as active by default
		},
	});
};

const getMenuByBusinessId = async (business_id) => {
	return await prisma.menus.findMany({
		where: {
			business_id: business_id,
		},
		include: {
			categories: true,
		},
	});
};

const deleteMenu = async (menu_id) => {
	return await prisma.menus.delete({
		where: {
			menu_id: menu_id,
		},
	});
};

const setActiveMenu = async (menu_id, active) => {
	return await prisma.menus.update({
		where: {
			menu_id: menu_id,
		},
		data: {
			active: active,
		},
	});
};

module.exports = {
	createMenu,
	getMenuByBusinessId,
	deleteMenu,
	setActiveMenu,
};