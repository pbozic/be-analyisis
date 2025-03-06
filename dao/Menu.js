const prisma = require('../prisma/prisma');

const createMenu = async (business_id, isDailyMeal = false, date = null) => {
	return await prisma.menus.create({
		data: {
			business_id: business_id,
			active: true, // Assuming we want to create it as active by default
			isDailyMeal: isDailyMeal,
			date: date,
		},
	});
};

const getMenuByBusinessId = async (business_id, isDailyMeal = false, startDate = null) => {
	let extraWhereArgs = {};
	if (isDailyMeal) {
		if (!startDate) {
			startDate = new Date();
		}
		extraWhereArgs = {
			date: {
				gte: moment(startDate).startOf('day').toDate()
			}
		}
	}

	const menus = await prisma.menus.findMany({
		where: {
			business_id: business_id,
			isDailyMeal: isDailyMeal,
			...extraWhereArgs
		},
		include: {
			categories: {
				include: {
					menu_items: {
						include: {
							documents: {
								include: {
									files: true
								}
							}
						}
					}
				}
			}
		},
	});

	menus.forEach(menu => {
		if (menu.menu_categories_ordered) {
			const orderedCategoryIds = JSON.parse(menu.menu_categories_ordered);
			// Sort categories based on the order of IDs in orderedCategoryIds
			menu.categories.sort((a, b) => {
				return orderedCategoryIds.indexOf(a.menu_category_id) - orderedCategoryIds.indexOf(b.menu_category_id);
			});
		} else {
			console.log('No menu_categories_ordered for menu', menu.menu_id);
			return menu.categories
		}

		// Sort menu items within each category
		menu.categories.forEach(category => {
			if (category.menu_items_ordered) {
				const orderedItemIds = JSON.parse(category.menu_items_ordered);
				// Sort items based on the order of IDs in orderedItemIds
				category.menu_items.sort((a, b) => {
					return orderedItemIds.indexOf(a.menu_item_id) - orderedItemIds.indexOf(b.menu_item_id);
				});
			} else {
				console.log('No menu_items_ordered for category', category.menu_category_id);
				return category.menu_items
			}
		});
	});

	return menus
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

const updateMenuOrder = async (menu_id, orderedMenuCategoryIds) => {
	return await prisma.menus.update({
		where: {
			menu_id: menu_id
		},
		data: {
			menu_categories_ordered: orderedMenuCategoryIds
		}
	});
};

const getMenuByDate = async (business_id, date) => {
	const startOfDay = new Date(date);
	startOfDay.setHours(0, 0, 0, 0);
	const endOfDay = new Date(date);
	endOfDay.setHours(23, 59, 59, 999);

	return await prisma.menus.findFirst({
		where: {
			business_id: business_id,
			isDailyMeal: true,
			date: {
				gte: startOfDay.toISOString(),
				lte: endOfDay.toISOString()
			}
		},
		include: {
			categories: {
				include: {
					menu_items: true,
					menu_categories_catgeories: {
						include: {
							category: true
						}
					}
				}
			}
		},
	});
};

module.exports = {
	createMenu,
	getMenuByBusinessId,
	deleteMenu,
	setActiveMenu,
	updateMenuOrder,
	getMenuByDate,
};