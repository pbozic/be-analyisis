import type { Translatable } from '../translations/Translatable.js';
import type { MenuItem } from '../menuItems/MenuItem.js';
import type { Menu } from './Menu.js';
import type { DailyMealMenu } from '../dailyMeals/DailyMealMenu.js';
import type { Category } from './Category.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';
import type { DailyMealCategoryPrice } from '../dailyMeals/DailyMealCategoryPrice.js';
import type { DailyMealInstance } from '../dailyMeals/DailyMealInstance.js';

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
	menu_categories_categories: Category[];
	menu_order_index?: number | null;
	daily_meal_category_id?: string | null;
	daily_meal_category_price_id?: string | null;
	daily_meal_category?: DailyMealCategory | null;
	daily_meal_category_price?: DailyMealCategoryPrice | null;
	daily_meal_instances: DailyMealInstance[];
};
