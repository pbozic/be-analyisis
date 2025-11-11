import moment from 'moment';
import { PrismaClient } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { MenuCategory, MenuBase, DailyMealMenuBase } from '../schemas/dto/Menu/index.js';

/**
 * Create a new daily meals menu for a dailyMealsModule.
 *
 * @param {string} dailyMealsModuleId - Daily meals module id.
 * @param {string|Date|null} date - Optional date for the menu.
 * @returns {Promise<MenuBase>} The created daily meal menu.
 */
const createDailyMealsMenu = async (dailyMealsModuleId: string, date?: string | Date | null): Promise<MenuBase> => {
	try {
		return await prisma.daily_meal_menus.create({
			data: {
				daily_meals_module_id: dailyMealsModuleId,
				date: date ? date : null,
			},
		});
	} catch (error: any) {
		console.error('Error creating daily meals menu:', error);
		throw new Error(error?.message || 'Error creating daily meals menu');
	}
};

/**
 * Create a new menu for a store.
 *
 * @param {string} module_id - The store's module ID to create the menu for.
 * @returns {Promise<MenuBase>} The created menu record.
 */
const createStoreMenu = async (module_id: string): Promise<MenuBase> => {
	try {
		return await prisma.menus.create({
			data: {
				stores_id: module_id,
			},
		});
	} catch (error: any) {
		console.error('Error creating store menu:', error);
		throw new Error(error?.message || 'Error creating store menu');
	}
};

/**
 * Create a new menu for a food and drinks business.
 *
 * @param {string} module_id - The food and drinks module ID.
 * @returns {Promise<MenuBase>} The created menu record.
 */
const createFoodDrinksMenu = async (module_id: string): Promise<MenuBase> => {
	try {
		return await prisma.menus.create({
			data: {
				food_drinks_id: module_id,
			},
		});
	} catch (error: any) {
		console.error('Error creating food & drinks menu:', error);
		throw new Error(error?.message || 'Error creating food & drinks menu');
	}
};

/**
 * List active menus for a business, optionally filtering daily meal menus by start date or module.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} [isDailyMeal=false] - Whether to fetch daily meal menus.
 * @param {Date|null} [startDate=null] - Start date for filtering daily meal menus.
 * @param {string|undefined} module_id - Module id for which it will fetch menu.
 * @param {'STORES'|'FOOD_DRINKS'|undefined} moduleType - Module type for which it will fetch menu.
 * @returns {Promise<MenuBase[]>} Array of menu records with categories and items.
 */
const getMenuByBusinessId = async (
	business_id: string,
	isDailyMeal = false,
	startDate: Date | null = null,
	module_id?: string,
	moduleType?: 'STORES' | 'FOOD_DRINKS'
): Promise<MenuBase[]> => {
	try {
		let extraWhereArgs: Record<string, any> = {};
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

		if (moduleType === 'STORES') {
			extraWhereArgs = { stores_id: module_id };
		}
		if (moduleType === 'FOOD_DRINKS') {
			extraWhereArgs = { food_drinks_id: module_id };
		}

		const menus = await prisma.menus.findMany({
			where: {
				business_id,
				isDailyMeal,
				active: true,
				...extraWhereArgs,
			},
			include: {
				categories: {
					orderBy: { menu_order_index: 'asc' },
					include: {
						menu_items: {
							orderBy: { menu_category_order_index: 'asc' },
							include: {
								documents: { include: { files: true } },
								tax_rate: true,
							},
						},
						menu_categories_categories: { include: { category: true } },
						daily_meal_category_price: true,
					},
				},
			},
		});
		return menus as MenuBase[];
	} catch (error: any) {
		console.error('Error fetching menus by business id:', error);
		throw new Error(error?.message || 'Error fetching menus by business id');
	}
};

/**
 * Delete a menu by ID.
 *
 * @param {string} menu_id - Menu ID.
 * @returns {Promise<MenuBase>} The deleted menu record.
 */
const deleteMenu = async (menu_id: string): Promise<MenuBase> => {
	try {
		return await prisma.menus.delete({
			where: { menu_id },
		});
	} catch (error: any) {
		console.error('Error deleting menu:', error);
		throw new Error(error?.message || 'Error deleting menu');
	}
};

/**
 * Set a menu's active flag.
 *
 * @param {string} menu_id - Menu ID.
 * @param {boolean} active - New active state.
 * @returns {Promise<MenuBase>} The updated menu record.
 */
const setActiveMenu = async (menu_id: string, active: boolean): Promise<MenuBase> => {
	try {
		return await prisma.menus.update({
			where: { menu_id },
			data: { active },
		});
	} catch (error: any) {
		console.error('Error setting active flag on menu:', error);
		throw new Error(error?.message || 'Error setting active flag on menu');
	}
};

/**
 * Update the order of menu categories for a menu by setting menu_order_index.
 *
 * @param {string} menu_id - Menu ID.
 * @param {string[]} orderedMenuCategoryIds - Ordered list of menu_category IDs belonging to the menu.
 * @returns {Promise<MenuBase>} The updated menu record with menu_categories_ordered set.
 */
const updateMenuOrder = async (menu_id: string, orderedMenuCategoryIds: string[]): Promise<MenuBase> => {
	try {
		return await prisma.$transaction(async (tx: PrismaClient) => {
			const validCategories = await tx.menu_categories.findMany({
				where: { menu_id, menu_category_id: { in: orderedMenuCategoryIds } },
				select: { menu_category_id: true },
			});
			const validIds = validCategories.map((cat: MenuCategory) => cat.menu_category_id);
			const invalidIds = orderedMenuCategoryIds.filter((id) => !validIds.includes(id));
			if (invalidIds.length > 0) {
				throw new Error(`Invalid category IDs for menu ${menu_id}: ${invalidIds.join(', ')}`);
			}
			const updatePromises = orderedMenuCategoryIds.map((id, index) =>
				tx.menu_categories.update({ where: { menu_category_id: id }, data: { menu_order_index: index } })
			);
			await Promise.all(updatePromises);
			return await tx.menus.update({
				where: { menu_id },
				data: { menu_categories_ordered: orderedMenuCategoryIds },
			});
		});
	} catch (error: any) {
		console.error('Error updating menu order:', error);
		throw new Error(error?.message || 'Error updating menu order');
	}
};
/**
 * Get daily meals module id by business id.
 *
 * @param {string} business_id - Business ID.
 * @returns {Promise<string|null>} daily_meals_module id or null.
 */
const getDailyMealsModuleIdByBusinessId = async (business_id: string): Promise<string | null> => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: { daily_meals_module: { select: { id: true } } },
		});
		return business?.daily_meals_module?.id ?? null;
	} catch (error: any) {
		console.error('Error getting daily meals module id:', error);
		throw new Error(error?.message || 'Error getting daily meals module id');
	}
};

/**
 * Get a daily meal menu for a business by date (same day match).
 *
 * @param {string} business_id - Business ID.
 * @param {Date|string} date - Target date.
 * @returns {Promise<DailyMealMenuBase|null>} The menu record or null if not found.
 */
const getMenuByDate = async (business_id: string, date: Date | string): Promise<DailyMealMenuBase | null> => {
	try {
		const dailyMealsModuleId = await getDailyMealsModuleIdByBusinessId(business_id);
		if (!dailyMealsModuleId) throw new Error(`Business with id: ${business_id} doesn't have daily meals module!`);
		const startOfDay = new Date(date as Date);
		startOfDay.setHours(0, 0, 0, 0);
		const endOfDay = new Date(date as Date);
		endOfDay.setHours(23, 59, 59, 999);
		return await prisma.daily_meal_menus.findFirst({
			where: {
				daily_meals_module_id: dailyMealsModuleId,
				date: { gte: startOfDay.toISOString(), lte: endOfDay.toISOString() },
			},
			include: {
				categories: {
					include: {
						menu_items: { include: { tax_rate: true } },
						menu_categories_categories: { include: { category: true } },
					},
				},
			},
		});
	} catch (error: any) {
		console.error('Error getting menu by date:', error);
		throw new Error(error?.message || 'Error getting menu by date');
	}
};

/**
 * Get a menu by its ID with categories and items.
 *
 * @param {string} menu_id - Menu ID.
 * @returns {Promise<MenuBase|null>} The menu record or null if not found.
 */
const getMenuById = async (menu_id: string): Promise<MenuBase | null> => {
	try {
		return await prisma.menus.findUnique({
			where: { menu_id },
			include: {
				categories: {
					include: {
						menu_items: { include: { tax_rate: true } },
						menu_categories_categories: { include: { category: true } },
					},
				},
			},
		});
	} catch (error: any) {
		console.error('Error getting menu by id:', error);
		throw new Error(error?.message || 'Error getting menu by id');
	}
};

export { getMenuById };
export { createDailyMealsMenu };
export { createStoreMenu };
export { createFoodDrinksMenu };
export { getMenuByBusinessId };
export { deleteMenu };
export { setActiveMenu };
export { updateMenuOrder };
export { getMenuByDate };
export default {
	getMenuById,
	createDailyMealsMenu,
	createStoreMenu,
	createFoodDrinksMenu,
	getMenuByBusinessId,
	deleteMenu,
	setActiveMenu,
	updateMenuOrder,
	getMenuByDate,
};
