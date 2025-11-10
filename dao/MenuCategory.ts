import prisma from '../prisma/prisma.js';
import type { CreateMenuCategoryWithCategoriesInput } from '../schemas/dto/Menu/menucategory.dto.js';
import type { MenuCategoryRef, MenuItemDetail, MenuCategoryCategory } from '../schemas/dto/Menu/menu.dto.js';

// MenuCategory Detail Response - extends Ref with full relations
export interface MenuCategoryDetail extends MenuCategoryRef {
	menu_category_id: string;
	menu_id: string;
	names?: Record<string, unknown> | null;
	business_id?: string | null;
	menu_order_index?: number | null;
	menu_items_ordered?: string[] | null;
	daily_meal_category_price_id?: string | null;
	created_at?: Date | null;
	updated_at?: Date | null;
	menu_categories_categories?: MenuCategoryCategory[];
	menu_items?: MenuItemDetail[];
	daily_meal_category_price?: {
		daily_meal_category_price_id: string;
		price?: number | null;
	} | null;
}

/**
 * Create a menu category for a given menu and optionally connect categories.
 *
 * @param menuId - Menu ID to attach to.
 * @param categoryData - Menu category data; may include category_ids to connect.
 * @returns The created menu category with related data.
 */
export const createMenuCategory = async (
	menuId: string,
	categoryData: CreateMenuCategoryWithCategoriesInput,
	dailyMeal: boolean = false
): Promise<MenuCategoryDetail> => {
	// Handle creating categories
	const categories = categoryData.category_ids ? categoryData.category_ids : [];
	const { category_ids, ...menuCategoryData } = categoryData;

	const menu_category = await prisma.menu_categories.create({
		data: {
			menu: !dailyMeal
				? {
						connect: { menu_id: menuId },
					}
				: undefined,
			daily_meals_menus: dailyMeal
				? {
						connect: { daily_meal_menu_id: menuId },
					}
				: undefined,
			...menuCategoryData,
		},
	});

	const errors: string[] = [];
	for (const cat of categories) {
		const category = await prisma.categories.findFirst({
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

	const menu_categoryR = await prisma.menu_categories.findUnique({
		where: { menu_category_id: menu_category.menu_category_id },
		include: {
			menu_categories_categories: {
				include: {
					category: true,
				},
			},
			menu_items: true,
			daily_meal_category_price: true,
		},
	});

	if (!menu_categoryR) {
		throw new Error('Failed to retrieve created menu category');
	}

	return menu_categoryR;
};

/**
 * Create a menu category specifically for daily meals with a price reference.
 *
 * @param menuId - Menu ID.
 * @param daily_meal_category_price_id - Daily meal category price ID.
 * @returns Created menu category.
 */
export const createDailyMealMenuCategory = async (
	menuId: string,
	daily_meal_category_price_id: string
): Promise<MenuCategoryDetail> => {
	try {
		const existingDailyMealPrice = await prisma.daily_meal_category_prices.findUnique({
			where: {
				daily_meal_category_price_id: daily_meal_category_price_id,
			},
			include: {
				daily_meal_categories: true,
			},
		});

		if (!existingDailyMealPrice) {
			throw new Error(`Daily meal category price with ID ${daily_meal_category_price_id} not found`);
		}

		const menuCategory = await prisma.menu_categories.create({
			data: {
				menu: {
					connect: { menu_id: menuId },
				},
				names: existingDailyMealPrice.daily_meal_categories?.names || null,
				daily_meal_category_price: {
					connect: {
						daily_meal_category_price_id: daily_meal_category_price_id,
					},
				},
			},
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
				menu_items: true,
				daily_meal_category_price: true,
			},
		});

		return menuCategory;
	} catch (error) {
		console.error('Error creating daily meal menu category:', error);
		throw error;
	}
};

/**
 * Add a menu category ID to a menu's ordered categories list.
 *
 * @param menu_id - Menu ID.
 * @param menuCategoryIdToAdd - Menu category ID to add.
 * @returns Updated menu.
 */
export const addMenuCategoryIdToOrder = async (menu_id: string, menuCategoryIdToAdd: string): Promise<any> => {
	const menu = await prisma.menus.findUnique({
		where: { menu_id },
	});

	if (!menu) {
		throw new Error(`Menu with ID ${menu_id} not found`);
	}

	const currentOrder = (menu.menu_categories_ordered as string[]) || [];
	const updatedOrder = [...currentOrder, menuCategoryIdToAdd];

	return await prisma.menus.update({
		where: { menu_id },
		data: {
			menu_categories_ordered: updatedOrder,
		},
	});
};

/**
 * Remove a menu category ID from a menu's ordered categories list.
 *
 * @param menu_id - Menu ID.
 * @param menuCategoryIdToRemove - Menu category ID to remove.
 * @returns Updated menu.
 */
export const removeMenuCategoryIdFromOrder = async (menu_id: string, menuCategoryIdToRemove: string): Promise<any> => {
	const menu = await prisma.menus.findUnique({
		where: { menu_id },
	});

	if (!menu) {
		throw new Error(`Menu with ID ${menu_id} not found`);
	}

	const currentOrder = (menu.menu_categories_ordered as string[]) || [];
	const updatedOrder = currentOrder.filter((id) => id !== menuCategoryIdToRemove);

	return await prisma.menus.update({
		where: { menu_id },
		data: {
			menu_categories_ordered: updatedOrder,
		},
	});
};

/**
 * Get menu categories by menu ID.
 *
 * @param menu_id - Menu ID.
 * @returns Array of menu categories.
 */
export const getMenuCategoriesByMenuId = async (menu_id: string): Promise<MenuCategoryDetail[]> => {
	try {
		return await prisma.menu_categories.findMany({
			where: { menu_id },
			orderBy: {
				menu_order_index: 'asc',
			},
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
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
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error getting menu categories by menu ID:', error);
		throw error;
	}
};

/**
 * Get menu categories by business ID.
 *
 * @param business_id - Business ID.
 * @returns Array of menu categories.
 */
export const getMenuCategoriesByBusinessId = async (business_id: string): Promise<MenuCategoryDetail[]> => {
	try {
		return await prisma.menu_categories.findMany({
			where: { business_id },
			orderBy: {
				menu_order_index: 'asc',
			},
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
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
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error getting menu categories by business ID:', error);
		throw error;
	}
};

/**
 * Delete a menu category and its relationships.
 *
 * @param menu_category_id - Menu category ID.
 * @returns Deleted menu category.
 */
export const deleteMenuCategory = async (menu_category_id: string): Promise<MenuCategoryDetail> => {
	try {
		// Delete relationships first
		await prisma.menu_categories_categories.deleteMany({
			where: { menu_category_id },
		});

		// Delete menu items in this category
		await prisma.menu_items.deleteMany({
			where: { menu_category_id },
		});

		return await prisma.menu_categories.delete({
			where: { menu_category_id },
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
				menu_items: true,
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error deleting menu category:', error);
		throw error;
	}
};

/**
 * Update a menu category.
 *
 * @param menu_category_id - Menu category ID.
 * @param data - Data to update.
 * @returns Updated menu category.
 */
export const updateMenuCategory = async (menu_category_id: string, data: any): Promise<MenuCategoryDetail> => {
	try {
		return await prisma.menu_categories.update({
			where: { menu_category_id },
			data,
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
				menu_items: true,
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error updating menu category:', error);
		throw error;
	}
};

/**
 * Update the order of menu items within a category.
 *
 * @param menu_category_id - Menu category ID.
 * @param ordered_menu_items_ids - Ordered list of menu item IDs.
 * @returns Updated menu category.
 */
export const updateMenuItemsOrder = async (
	menu_category_id: string,
	ordered_menu_items_ids: string[]
): Promise<MenuCategoryDetail> => {
	try {
		// Update each menu item with its new order index
		const updatePromises = ordered_menu_items_ids.map((menu_item_id, index) =>
			prisma.menu_items.update({
				where: { menu_item_id },
				data: { menu_category_order_index: index },
			})
		);

		await Promise.all(updatePromises);

		// Update the category with the ordered items list
		return await prisma.menu_categories.update({
			where: { menu_category_id },
			data: {
				menu_items_ordered: ordered_menu_items_ids,
			},
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
				menu_items: {
					orderBy: {
						menu_category_order_index: 'asc',
					},
				},
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error updating menu items order:', error);
		throw error;
	}
};

/**
 * Add a category to a menu (update menu_categories_ordered).
 *
 * @param menu_id - Menu ID.
 * @param menu_category_id - Menu category ID.
 * @returns Updated menu.
 */
export const addCategoryToMenu = async (menu_id: string, menu_category_id: string): Promise<any> => {
	try {
		return await addMenuCategoryIdToOrder(menu_id, menu_category_id);
	} catch (error) {
		console.error('Error adding category to menu:', error);
		throw error;
	}
};

/**
 * Remove a category from a menu.
 *
 * @param menu_category_id - Menu category ID to remove.
 * @returns Deleted menu category.
 */
export const removeCategoryFromMenu = async (menu_id: string, category_id: string): Promise<MenuCategoryDetail> => {
	try {
		return await deleteMenuCategory(category_id);
	} catch (error) {
		console.error('Error removing category from menu:', error);
		throw error;
	}
};

/**
 * Add a category relationship to a menu category.
 *
 * @param menu_category_id - Menu category ID.
 * @param category_id - Category ID.
 * @returns Created relationship.
 */
export const addCategoryToMenuCategory = async (menu_category_id: string, category_id: string): Promise<any> => {
	try {
		return await prisma.menu_categories_categories.create({
			data: {
				menu_category: {
					connect: { menu_category_id },
				},
				category: {
					connect: { categories_id: category_id },
				},
			},
		});
	} catch (error) {
		console.error('Error adding category to menu category:', error);
		throw error;
	}
};

/**
 * Remove a category relationship from a menu category.
 *
 * @param menu_category_id - Menu category ID.
 * @param category_id - Category ID.
 * @returns Deleted relationship.
 */
export const removeCategoryFromMenuCategory = async (menu_category_id: string, category_id: string): Promise<any> => {
	try {
		return await prisma.menu_categories_categories.deleteMany({
			where: {
				menu_category_id,
				categories_id: category_id,
			},
		});
	} catch (error) {
		console.error('Error removing category from menu category:', error);
		throw error;
	}
};

/**
 * Update daily meal menu price.
 *
 * @param menu_category_id - Menu category ID.
 * @param price - New price.
 * @returns Updated daily meal category price.
 */
export const updateDailyMealMenuPrice = async (menu_category_id: string, price: number): Promise<any> => {
	try {
		return await prisma.daily_meal_category_prices.updateMany({
			where: { menu_category_id },
			data: { price },
		});
	} catch (error) {
		console.error('Error updating daily meal menu price:', error);
		throw error;
	}
};

/**
 * Get a menu category by ID.
 *
 * @param menu_category_id - Menu category ID.
 * @returns Menu category or null.
 */
export const getMenuCategoryById = async (menuCategoryId: string): Promise<MenuCategoryDetail> => {
	try {
		return await prisma.menu_categories.findUnique({
			where: { menu_category_id: menuCategoryId },
			include: {
				menu_categories_categories: {
					include: {
						category: true,
					},
				},
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
				daily_meal_category_price: true,
			},
		});
	} catch (error) {
		console.error('Error getting menu category by ID:', error);
		throw error;
	}
};

/**
 * Update menu categories with new price for daily meals.
 *
 * @param dailyMealCategoryId - Daily meal category ID.
 * @param priceId - Price ID.
 * @param validFrom - Valid from date.
 * @returns Updated menu categories.
 */
export const updateMenuCategoriesWithNewPrice = async (
	dailyMealCategoryId: string,
	priceId: string,
	validFrom: Date
): Promise<any> => {
	try {
		return await prisma.menu_categories.updateMany({
			where: {
				daily_meal_category_price: {
					daily_meal_category_id: dailyMealCategoryId,
				},
			},
			data: {
				// Update logic would depend on your specific schema
				// This is a placeholder for the update operation
				updated_at: new Date(),
			},
		});
	} catch (error) {
		console.error('Error updating menu categories with new price:', error);
		throw error;
	}
};

export default {
	createMenuCategory,
	createDailyMealMenuCategory,
	addMenuCategoryIdToOrder,
	removeMenuCategoryIdFromOrder,
	getMenuCategoriesByMenuId,
	getMenuCategoriesByBusinessId,
	deleteMenuCategory,
	updateMenuCategory,
	updateMenuItemsOrder,
	addCategoryToMenu,
	removeCategoryFromMenu,
	addCategoryToMenuCategory,
	removeCategoryFromMenuCategory,
	updateDailyMealMenuPrice,
	getMenuCategoryById,
	updateMenuCategoriesWithNewPrice,
};
