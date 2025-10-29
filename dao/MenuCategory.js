import prisma from '../prisma/prisma.js';
/**
 * Create a menu category for a given menu and optionally connect categories.
 *
 * @param {string} menuId - Menu ID to attach to.
 * @param {object} categoryData - Menu category data; may include category_ids to connect.
 * @returns {Promise<object>} The created menu category with related data.
 */
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
/**
 * Create a menu category based on a daily meal category price entry.
 *
 * @param {string} menuId - Menu ID to attach to.
 * @param {string} daily_meal_category_price_id - Reference to daily_meal_category_prices entry.
 * @returns {Promise<object>} The created menu category with related data.
 */
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
					daily_meal_category_prices_id: daily_meal_category_price_id,
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

/**
 * Append a menu_category_id to a menu's ordered list, if not already present.
 *
 * @param {string} menu_id - Menu ID.
 * @param {string} menuCategoryIdToAdd - Menu category ID to append.
 * @returns {Promise<object|undefined>} The updated menu or undefined if already present.
 */
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
/**
 * Remove a menu_category_id from a menu's ordered list.
 *
 * @param {string} menu_id - Menu ID.
 * @param {string} menuCategoryIdToRemove - Menu category ID to remove.
 * @returns {Promise<object>} The updated menu.
 */
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
/**
 * Get menu categories for a given menu with items and categories included; sorts items by stored order.
 *
 * @param {string} menu_id - Menu ID.
 * @returns {Promise<object[]>} Array of menu categories with items.
 */
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
					tax_rate: true,
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
/**
 * Get menu categories for a business across all menus.
 *
 * @param {string} business_id - Business ID.
 * @returns {Promise<object[]>} Array of menu categories with items.
 */
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
					tax_rate: true,
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
/**
 * Delete a menu category, disconnecting related category links first.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<object>} Deleted menu category record.
 */
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
/**
 * Update a menu category and include category relations.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {object} data - Fields to update.
 * @returns {Promise<object>} The updated menu category.
 */
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
/**
 * Update the ordering of menu items within a category by setting menu_category_order_index.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string[]} ordered_menu_items_ids - Ordered list of menu_item IDs belonging to the category.
 * @returns {Promise<object>} The updated menu category with menu_items_ordered set.
 */
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
/**
 * Connect a menu category to a menu.
 *
 * @param {string} menu_id - Menu ID.
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<object>} The updated menu category.
 */
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
/**
 * Disconnect a menu category from its menu.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<object>} The updated menu category.
 */
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
/**
 * Link a category to a menu category.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} category_id - Category ID.
 * @returns {Promise<object>} The created link record.
 */
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
/**
 * Unlink a category from a menu category.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {string} category_id - Category ID.
 * @returns {Promise<object>} The deleted link record.
 */
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
/**
 * Update the price on a menu category (daily meal context).
 *
 * @param {string} menu_category_id - Menu category ID.
 * @param {number} price - New price value.
 * @returns {Promise<object>} The updated menu category.
 */
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
/**
 * Get a menu category by ID with items, categories, and daily meal price.
 *
 * @param {string} menu_category_id - Menu category ID.
 * @returns {Promise<object|null>} The menu category or null if not found.
 */
const getMenuCategoryById = async (menu_category_id) => {
	return await prisma.menu_categories.findUnique({
		where: {
			menu_category_id: menu_category_id,
		},
		include: {
			menu_items: {
				include: {
					tax_rate: true,
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
