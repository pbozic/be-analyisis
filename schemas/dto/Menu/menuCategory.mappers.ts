import type { MenuCategoryWithIncludesPrisma } from '../../../prisma/includes/menuCategories.js';
import { toMenuItemResponse } from './menu.mappers.js';

// Map a Prisma payload for menu_categories (with includes) into a shape compatible with DAO interfaces.
export function toMenuCategoryDetail(payload: MenuCategoryWithIncludesPrisma) {
	return {
		...payload,
		menu_items: Array.isArray(payload.menu_items)
			? payload.menu_items.map((mi) => toMenuItemResponse(mi as Parameters<typeof toMenuItemResponse>[0]))
			: undefined,
	} as unknown as MenuCategoryWithIncludesPrisma;
}

export function toMenuCategoryList(payload: MenuCategoryWithIncludesPrisma[]) {
	return payload.map(toMenuCategoryDetail);
}
