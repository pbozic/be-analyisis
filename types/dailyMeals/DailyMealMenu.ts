// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { MenuCategory } from '../menus/MenuCategory.js';

export type DailyMealMenu = {
	daily_meal_menu_id: string;
	daily_meals_module_id: string;
	daily_meals_module: DailyMealsModule;
	categories: MenuCategory[];
	date: string;
};
