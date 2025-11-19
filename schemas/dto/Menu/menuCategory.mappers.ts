import type { MenuCategoryWithIncludesPrisma } from '../../../prisma/includes/menuCategories.js';
import type { MenuCategoryDetail } from '../../../dao/MenuCategory.js';
import type { MenuCategoryCategory } from './menucategory.dto.js';
import { toMenuItemResponse } from './menu.mappers.js';

// Map a Prisma payload for menu_categories (with includes) into a shape compatible with DAO interfaces.
export function toMenuCategoryDetail(payload: MenuCategoryWithIncludesPrisma): MenuCategoryDetail {
	return {
		menu_category_id: payload.menu_category_id,
		menu_id: payload.menu_id || '',
		food_drinks_id: payload.food_drinks_id,
		stores_id: payload.stores_id,
		menu_order_index: payload.menu_order_index,
		menu_items_ordered: payload.menu_items_ordered as string[] | null | undefined,
		daily_meal_category_price_id: payload.daily_meal_category_price_id,
		menu_categories_categories: payload.menu_categories_categories as unknown as MenuCategoryCategory[] | undefined,
		menu_items: Array.isArray(payload.menu_items)
			? payload.menu_items.map((mi) => toMenuItemResponse(mi as Parameters<typeof toMenuItemResponse>[0]))
			: [],
	};
}

export function toMenuCategoryList(payload: MenuCategoryWithIncludesPrisma[]) {
	return payload.map(toMenuCategoryDetail);
}
