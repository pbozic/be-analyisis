import moment from 'moment';

import prisma from '../prisma/prisma.js';
/**
 * Create a new menu for a business.
 *
 * @param {string} business_id - The business ID to create the menu for.
 * @param {boolean} [isDailyMeal=false] - Whether the menu is a daily meal menu.
 * @param {string|Date|null} [date] - Optional date for daily meal menus.
 * @returns {Promise<object>} The created menu record.
 */
const createMenu = async (business_id, isDailyMeal = false, date) => {
	return await prisma.menus.create({
		data: {
			business_id: business_id,
			active: true, // Assuming we want to create it as active by default
			isDailyMeal: isDailyMeal,
			date: date ? date : null,
		},
	});
};
/**
 * List active menus for a business, optionally filtering daily meal menus by start date.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} [isDailyMeal=false] - Whether to fetch daily meal menus.
 * @param {Date|null} [startDate=null] - Start date for filtering daily meal menus.
 * @returns {Promise<object[]>} Array of menu records with categories and items.
 */
const getMenuByBusinessId = async (business_id, isDailyMeal = false, startDate = null) => {
	let extraWhereArgs = {};
	if (isDailyMeal) {
		if (!startDate) {
			startDate = new Date();
		}
		extraWhereArgs = {
			date: {
				gte: moment(startDate).startOf('day').toDate(),
			},
		};
	}
	const menus = await prisma.menus.findMany({
		where: {
			business_id: business_id,
			isDailyMeal: isDailyMeal,
			active: true,
			...extraWhereArgs,
		},
		include: {
			categories: {
				orderBy: {
					menu_order_index: 'asc',
				},
				include: {
					menu_items: {
						orderBy: {
							menu_category_order_index: 'asc',
						},
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
			},
		},
	});
	// menus.forEach(menu => {
	// 	if (menu.menu_categories_ordered) {
	// 		const orderedCategoryIds = JSON.parse(menu.menu_categories_ordered);
	// 		// Sort categories based on the order of IDs in orderedCategoryIds
	// 		menu.categories.sort((a, b) => {
	// 			return orderedCategoryIds.indexOf(a.menu_category_id) - orderedCategoryIds.indexOf(b.menu_category_id);
	// 		});
	// 	} else {
	// 		console.log('No menu_categories_ordered for menu', menu.menu_id);
	// 		return menu.categories
	// 	}
	//
	// 	// Sort menu items within each category
	// 	menu.categories.forEach(category => {
	// 		if (category.menu_items_ordered) {
	// 			const orderedItemIds = JSON.parse(category.menu_items_ordered);
	// 			// Sort items based on the order of IDs in orderedItemIds
	// 			category.menu_items.sort((a, b) => {
	// 				return orderedItemIds.indexOf(a.menu_item_id) - orderedItemIds.indexOf(b.menu_item_id);
	// 			});
	// 		} else {
	// 			console.log('No menu_items_ordered for category', category.menu_category_id);
	// 			return category.menu_items
	// 		}
	// 	});
	// });
	return menus;
};
/**
 * Delete a menu by ID.
 *
 * @param {string} menu_id - Menu ID.
 * @returns {Promise<object>} The deleted menu record.
 */
const deleteMenu = async (menu_id) => {
	return await prisma.menus.delete({
		where: {
			menu_id: menu_id,
		},
	});
};
/**
 * Set a menu's active flag.
 *
 * @param {string} menu_id - Menu ID.
 * @param {boolean} active - New active state.
 * @returns {Promise<object>} The updated menu record.
 */
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
/**
 * Update the order of menu categories for a menu by setting menu_order_index.
 *
 * @param {string} menu_id - Menu ID.
 * @param {string[]} orderedMenuCategoryIds - Ordered list of menu_category IDs belonging to the menu.
 * @returns {Promise<object>} The updated menu record with menu_categories_ordered set.
 */
const updateMenuOrder = async (menu_id, orderedMenuCategoryIds) => {
	return await prisma.$transaction(async (tx) => {
		const validCategories = await tx.menu_categories.findMany({
			where: {
				menu_id,
				menu_category_id: { in: orderedMenuCategoryIds },
			},
			select: { menu_category_id: true },
		});
		const validIds = validCategories.map((cat) => cat.menu_category_id);
		const invalidIds = orderedMenuCategoryIds.filter((id) => !validIds.includes(id));
		if (invalidIds.length > 0) {
			throw new Error(`Invalid category IDs for menu ${menu_id}: ${invalidIds.join(', ')}`);
		}
		const updatePromises = orderedMenuCategoryIds.map((id, index) =>
			tx.menu_categories.update({
				where: { menu_category_id: id },
				data: { menu_order_index: index },
			})
		);
		await Promise.all(updatePromises);
		return await tx.menus.update({
			where: { menu_id },
			data: {
				menu_categories_ordered: orderedMenuCategoryIds,
			},
		});
	});
};
/**
 * Get a daily meal menu for a business by date (same day match).
 *
 * @param {string} business_id - Business ID.
 * @param {Date|string} date - Target date.
 * @returns {Promise<object|null>} The menu record or null if not found.
 */
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
				lte: endOfDay.toISOString(),
			},
		},
		include: {
			categories: {
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
				},
			},
		},
	});
};
/**
 * Get a menu by its ID with categories and items.
 *
 * @param {string} menu_id - Menu ID.
 * @returns {Promise<object|null>} The menu record or null if not found.
 */
const getMenuById = async (menu_id) => {
	return await prisma.menus.findUnique({
		where: {
			menu_id: menu_id,
		},
		include: {
			categories: {
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
				},
			},
		},
	});
};
export { getMenuById };
export { createMenu };
export { getMenuByBusinessId };
export { deleteMenu };
export { setActiveMenu };
export { updateMenuOrder };
export { getMenuByDate };
export default {
	getMenuById,
	createMenu,
	getMenuByBusinessId,
	deleteMenu,
	setActiveMenu,
	updateMenuOrder,
	getMenuByDate,
};
