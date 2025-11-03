// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { daily_meal_category_prices, daily_meal_instances, daily_meal_menus, menu_items } from '@prisma/client';

import type { Translatable } from '../translations/Translatable.js';
import type { Menu } from '../menus/Menu.js';
import type { Category } from '../menus/Category.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';

export type MenuCategory = {
	menu_category_id: string;
	name_translatable_id: string;
	names?: Translatable | null;
	description_translatable_id: string;
	description?: Translatable | null;
	categories: string;
	business_id: string;
	menu_items: menu_items[];
	menu_id?: string | null;
	menu?: Menu | null;
	daily_meal_menu_id?: string | null;
	daily_meal_menu?: daily_meal_menus | null;
	order?: number | null;
	price?: number | null;
	menu_items_ordered?: unknown | null;
	menu_categories_categories: Category[];
	menu_order_index?: number | null;
	daily_meal_category_id?: string | null;
	daily_meal_category_price_id?: string | null;
	daily_meal_category?: DailyMealCategory | null;
	daily_meal_category_price?: daily_meal_category_prices | null;
	daily_meal_instances: daily_meal_instances[];
};
