const prisma = require('../prisma/prisma');

const createMenu = async (business_id) => {
	return await prisma.menus.create({
		data: {
			business_id: business_id,
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

module.exports = {
	createMenu,
	getMenuByBusinessId,
	deleteMenu,
};