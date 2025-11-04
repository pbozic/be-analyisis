import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Translatable } from '../translations/Translatable.js';
import type { MenuItem } from '../menuItems/MenuItem.js';
import type { Menu } from './Menu.js';
import type { DailyMealMenu } from '../dailyMeals/DailyMealMenu.js';
import type { Category } from './Category.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';
import type { DailyMealCategoryPrice } from '../dailyMeals/DailyMealCategoryPrice.js';
import type { DailyMealInstance } from '../dailyMeals/DailyMealInstance.js';
import type { MenuCategoriesCategory } from '../general/MenuCategoriesCategory.js';
import { TranslatableResponseSchema } from '../translations/Translatable';
import { MenuItemResponseSchema } from '../menuItems/MenuItem';
import { MenuResponseSchema } from './Menu';
import { DailyMealMenuResponseSchema } from '../dailyMeals/DailyMealMenu';
import { MenuCategoriesCategoryResponseSchema } from '../general/MenuCategoriesCategory';
import { DailyMealCategoryResponseSchema } from '../dailyMeals/DailyMealCategory';
import { DailyMealCategoryPriceResponseSchema } from '../dailyMeals/DailyMealCategoryPrice';
import { DailyMealInstanceResponseSchema } from '../dailyMeals/DailyMealInstance';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type MenuCategory = {
	menu_category_id: string;
	name_translatable_id: string;
	names?: Translatable | null;
	description_translatable_id: string;
	description?: Translatable | null;
	categories: string;
	business_id: string;
	menu_items: MenuItem[];
	menu_id?: string | null;
	menu?: Menu | null;
	daily_meal_menu_id?: string | null;
	daily_meal_menu?: DailyMealMenu | null;
	order?: number | null;
	price?: number | null;
	menu_items_ordered?: unknown | null;
	menu_categories_categories: MenuCategoriesCategory[];
	menu_order_index?: number | null;
	daily_meal_category_id?: string | null;
	daily_meal_category_price_id?: string | null;
	daily_meal_category?: DailyMealCategory | null;
	daily_meal_category_price?: DailyMealCategoryPrice | null;
	daily_meal_instances: DailyMealInstance[];
};

export const CreateMenuCategorySchema = z
	.object({
		menu_category_id: z.string().uuid(),
		name_translatable_id: z.string().uuid(),
		description_translatable_id: z.string().uuid(),
		categories: z.string(),
		business_id: z.string().uuid(),
		menu_id: z.string().uuid().nullable().optional(),
		daily_meal_menu_id: z.string().uuid().nullable().optional(),
		order: z.number().nullable().optional(),
		price: z.number().nullable().optional(),
		menu_items_ordered: z.unknown().nullable().optional(),
		menu_order_index: z.number().nullable().optional(),
		daily_meal_category_id: z.string().uuid().nullable().optional(),
		daily_meal_category_price_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateMenuCategory');

export type CreateMenuCategoryInput = z.infer<typeof CreateMenuCategorySchema>;

export const UpdateMenuCategorySchema = CreateMenuCategorySchema.partial().openapi('UpdateMenuCategory');
export type UpdateMenuCategoryInput = z.infer<typeof UpdateMenuCategorySchema>;

export const MenuCategoryResponseSchema = z
	.object({
		menu_category_id: z.string(),
		name_translatable_id: z.string(),
		names: TranslatableResponseSchema.nullable().optional(),
		description_translatable_id: z.string(),
		description: TranslatableResponseSchema.nullable().optional(),
		categories: z.string(),
		business_id: z.string(),
		menu_items: z.array(MenuItemResponseSchema),
		menu_id: z.string().nullable().optional(),
		menu: MenuResponseSchema.nullable().optional(),
		daily_meal_menu_id: z.string().nullable().optional(),
		daily_meal_menu: DailyMealMenuResponseSchema.nullable().optional(),
		order: z.number().nullable().optional(),
		price: z.number().nullable().optional(),
		menu_items_ordered: z.unknown().nullable().optional(),
		menu_categories_categories: z.array(MenuCategoriesCategoryResponseSchema),
		menu_order_index: z.number().nullable().optional(),
		daily_meal_category_id: z.string().nullable().optional(),
		daily_meal_category_price_id: z.string().nullable().optional(),
		daily_meal_category: DailyMealCategoryResponseSchema.nullable().optional(),
		daily_meal_category_price: DailyMealCategoryPriceResponseSchema.nullable().optional(),
		daily_meal_instances: z.array(DailyMealInstanceResponseSchema),
	})
	.openapi('MenuCategoryResponse');

export type MenuCategoryResponse = z.infer<typeof MenuCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuCategory', CreateMenuCategorySchema);
	registry.register('UpdateMenuCategory', UpdateMenuCategorySchema);
	registry.register('MenuCategoryResponse', MenuCategoryResponseSchema);
}
