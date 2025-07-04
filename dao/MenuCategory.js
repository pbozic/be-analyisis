import prisma from '../prisma/prisma.js';
const createMenuCategory = async (menuId, categoryData) => {
	// Handle creating categories
	let categories = categoryData.category_ids ? categoryData.category_ids : [];
	delete categoryData.category_ids;
	let menu_category = await prisma.menu_categories.create({
		data: {
			menu: {
				connect: { menu_id: menuId },
			},
			...categoryData,
		},
	});
	let errors = [];
	for (let cat of categories) {
		let category = await prisma.categories.findFirst({
			where: {
				categories_id: cat,
			},
		});
		if (!category) {
			errors.push(`Category with ID ${cat} not found`);
			console.log(`Category with ID ${cat} not found`);
			continue;
		}
		await prisma.menu_categories_categories.create({
			data: {
				menu_category: {
					connect: { menu_category_id: menu_category.menu_category_id },
				},
				category: {
					connect: { categories_id: cat },
				},
			},
		});
	}
	let menu_categoryR = await prisma.menu_categories.findUnique({
		where: { menu_category_id: menu_category.menu_category_id },
		include: {
			menu_categories_categories: {
				include: {
					category: true,
				},
			},

			daily_meal_category_price: true,
		},
	});
	return menu_categoryR;
};
const createDailyMealMenuCategory = async (menuId, daily_meal_category_price_id) => {
	const existing_dmc_price = await prisma.daily_meal_category_prices.findUnique({
		where: {
			daily_meal_category_prices_id: daily_meal_category_price_id,
		},
		include: {
			daily_meal_category: true,
		},
	});
	if (!existing_dmc_price) {
		throw new Error('Unknown daily_meal_category_price_id');
	}
	let menu_category = await prisma.menu_categories.create({
		data: {
			business_id: existing_dmc_price.daily_meal_category.business_id,
			menu: {
				connect: { menu_id: menuId },
			},
			daily_meal_category_price: {
				connect: {
					daily_meal_category_price_id: daily_meal_category_price_id,
				},
			},
			daily_meal_category: {
				connect: {
					daily_meal_category_id: existing_dmc_price.daily_meal_category_id,
				},
			},
			menu_categories_categories: {
				create: {
					categories_id: existing_dmc_price.daily_meal_category.category_id,
				},
			},
		},
		include: {
			menu_categories_categories: {
				include: {
					category: true,
				},
			},
			daily_meal_category_price: {
				include: {
					daily_meal_category: true,
				},
			},
		},
	});
	return menu_category;
};

const addMenuCategoryIdToOrder = async (menu_id, menuCategoryIdToAdd) => {
	try {
		const menu = await prisma.menus.findUnique({
			where: { menu_id: menu_id },
			select: { menu_categories_ordered: true },
		});
		let orderedCategories = menu.menu_categories_ordered ? menu.menu_categories_ordered : [];
		if (!orderedCategories.includes(menuCategoryIdToAdd)) {
			orderedCategories.push(menuCategoryIdToAdd);
			return await prisma.menus.update({
				where: { menu_id: menu_id },
				data: { menu_categories_ordered: orderedCategories },
			});
		}
	} catch (error) {
		console.error('Error adding menu category ID to order:', error);
		throw error;
	}
};
const removeMenuCategoryIdFromOrder = async (menu_id, menuCategoryIdToRemove) => {
	try {
		const menu = await prisma.menus.findUnique({
			where: { menu_id: menu_id },
			select: { menu_categories_ordered: true },
		});
		let orderedCategories = menu.menu_categories_ordered ? menu.menu_categories_ordered : [];
		orderedCategories = orderedCategories.filter((id) => id !== menuCategoryIdToRemove);
		return await prisma.menus.update({
			where: { menu_id: menu_id },
			data: { menu_categories_ordered: orderedCategories },
		});
	} catch (error) {
		console.error('Error removing menu category ID from order:', error);
		throw error;
	}
};
const getMenuCategoriesByMenuId = async (menu_id) => {
	const categories = await prisma.menu_categories.findMany({
		where: {
			menu_id: menu_id,
		},
		include: {
			menu_items: {
				include: {
					documents: {
						include: {
							files: true,
						},
					},
				},
			},
			menu_categories_categories: {
				include: {
					category: true,
				},
			},

			daily_meal_category_price: true,
		},
	});
	// Sort menu items within each category based on the ordered JSON field
	categories.forEach((category) => {
		if (category.menu_items_ordered) {
			try {
				const orderedItemIds = category.menu_items_ordered;
				category.menu_items.sort((a, b) => {
					return orderedItemIds.indexOf(a.menu_item_id) - orderedItemIds.indexOf(b.menu_item_id);
				});
			} catch (error) {
				console.error(`Error parsing menu_items_ordered for category ${category.menu_category_id}:`, error);
			}
		} else {
			console.log('No menu_items_ordered for category', category.menu_category_id);
			return category.menu_items;
		}
	});
	return categories;
};
const getMenuCategoriesByBusinessId = async (business_id) => {
	const categories = await prisma.menu_categories.findMany({
		where: {
			business_id: business_id,
		},
		include: {
			menu_items: {
				include: {
					documents: {
						include: {
							files: true,
						},
					},
				},
			},
			menu_categories_categories: {
				include: {
					category: true,
				},
			},
		},
	});
	// Sort menu items within each category based on the ordered JSON field
	categories.forEach((category) => {
		if (category.menu_items_ordered) {
			try {
				const orderedItemIds = category.menu_items_ordered;
				category.menu_items.sort((a, b) => {
					return orderedItemIds.indexOf(a.menu_item_id) - orderedItemIds.indexOf(b.menu_item_id);
				});
			} catch (error) {
				console.error(`Error parsing menu_items_ordered for category ${category.menu_category_id}:`, error);
			}
		} else {
			console.log('No menu_items_ordered for category', category.menu_category_id);
			return category.menu_items;
		}
	});
	return categories;
};
const deleteMenuCategory = async (menu_category_id) => {
	const menu_category = await prisma.menu_categories.findUnique({
		where: {
			menu_category_id: menu_category_id,
		},
		include: {
			menu_categories_categories: true,
		},
	});
	if (menu_category.menu_categories_categories.length > 0) {
		await prisma.menu_categories_categories.deleteMany({
			where: {
				menu_categories_id: menu_category_id,
			},
		});
	}
	return await prisma.menu_categories.delete({
		where: {
			menu_category_id: menu_category_id,
		},
	});
};
const updateMenuCategory = async (menu_category_id, data) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id,
		},
		data: data,
		include: {
			menu_categories_categories: {
				include: {
					category: true,
				},
			},
		},
	});
};
const updateMenuItemsOrder = async (menu_category_id, ordered_menu_items_ids) => {
	return await prisma.$transaction(async (tx) => {
		const validItems = await tx.menu_items.findMany({
			where: {
				menu_category_id,
				menu_item_id: { in: ordered_menu_items_ids },
			},
			select: { menu_item_id: true },
		});
		const validIds = validItems.map((item) => item.menu_item_id);
		const invalidIds = ordered_menu_items_ids.filter((id) => !validIds.includes(id));
		if (invalidIds.length > 0) {
			throw new Error(`Invalid menu_item IDs for category ${menu_category_id}: ${invalidIds.join(', ')}`);
		}
		const updatePromises = ordered_menu_items_ids.map((id, index) =>
			tx.menu_items.update({
				where: { menu_item_id: id },
				data: { menu_category_order_index: index },
			})
		);
		await Promise.all(updatePromises);
		return await tx.menu_categories.update({
			where: { menu_category_id },
			data: {
				menu_items_ordered: ordered_menu_items_ids,
			},
		});
	});
};
const addCategoryToMenu = async (menu_id, menu_category_id) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id,
		},
		data: {
			menu: {
				connect: { menu_id: menu_id },
			},
		},
	});
};
const removeCategoryFromMenu = async (menu_category_id) => {
	try {
		return await prisma.menu_categories.update({
			where: {
				menu_category_id: menu_category_id,
			},
			data: {
				menu_id: null,
			},
		});
	} catch (error) {
		throw new Error(error);
	}
};
const addCategoryToMenuCategory = async (menu_category_id, category_id) => {
	return await prisma.menu_categories_categories.create({
		data: {
			menu_category: {
				connect: { menu_category_id: menu_category_id },
			},
			category: {
				connect: { categories_id: category_id },
			},
		},
	});
};
const removeCategoryFromMenuCategory = async (menu_category_id, category_id) => {
	return await prisma.menu_categories_categories.delete({
		where: {
			menu_categories_id_categories_id: {
				menu_categories_id: menu_category_id,
				categories_id: category_id,
			},
		},
	});
};
const updateDailyMealMenuPrice = async (menu_category_id, price) => {
	return await prisma.menu_categories.update({
		where: {
			menu_category_id: menu_category_id,
		},
		data: {
			price: price,
		},
	});
};
const getMenuCategoryById = async (menu_category_id) => {
	return await prisma.menu_categories.findUnique({
		where: {
			menu_category_id: menu_category_id,
		},
		include: {
			menu_items: true,
			menu_categories_categories: {
				include: {
					category: true,
				},
			},
			daily_meal_category_price: true,
		},
	});
};

/**
 * Updates all menu_categories for a given daily_meal_category_id where the related menu.date is >= valid_from,
 * setting daily_meal_category_price_id to the provided priceId.
 * @param {string} dailyMealCategoryId
 * @param {string} priceId
 * @param {Date} validFrom
 * @returns {Promise<{ count: number }>} The result of updateMany
 */
const updateMenuCategoriesWithNewPrice = async (dailyMealCategoryId, priceId, validFrom) => {
	const eligibleMenuCategories = await prisma.menu_categories.findMany({
		where: {
			daily_meal_category_id: dailyMealCategoryId,
			menu: {
				is: {
					isDailyMeal: true,
					date: {
						gte: validFrom,
					},
				},
			},
		},
		select: {
			menu_category_id: true,
		},
	});

	const updates = await Promise.all(
		eligibleMenuCategories.map((cat) =>
			prisma.menu_categories.update({
				where: { menu_category_id: cat.menu_category_id },
				data: {
					daily_meal_category_price: {
						connect: { daily_meal_category_prices_id: priceId },
					},
				},
			})
		)
	);

	return updates;
};

export { updateDailyMealMenuPrice };
export { createMenuCategory };
export { createDailyMealMenuCategory };
export { addMenuCategoryIdToOrder };
export { removeMenuCategoryIdFromOrder };
export { getMenuCategoriesByMenuId };
export { getMenuCategoriesByBusinessId };
export { deleteMenuCategory };
export { updateMenuCategory };
export { addCategoryToMenu };
export { removeCategoryFromMenu };
export { updateMenuItemsOrder };
export { addCategoryToMenuCategory };
export { removeCategoryFromMenuCategory };
export { getMenuCategoryById };
export { updateMenuCategoriesWithNewPrice };

export default {
	updateDailyMealMenuPrice,
	createMenuCategory,
	createDailyMealMenuCategory,
	addMenuCategoryIdToOrder,
	removeMenuCategoryIdFromOrder,
	getMenuCategoriesByMenuId,
	getMenuCategoriesByBusinessId,
	deleteMenuCategory,
	updateMenuCategory,
	addCategoryToMenu,
	removeCategoryFromMenu,
	updateMenuItemsOrder,
	addCategoryToMenuCategory,
	removeCategoryFromMenuCategory,
	getMenuCategoryById,
	updateMenuCategoriesWithNewPrice,
};
