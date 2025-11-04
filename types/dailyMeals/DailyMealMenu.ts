import type { DailyMealsModule } from './DailyMealsModule.js';
import type { MenuCategory } from '../menus/MenuCategory.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealMenu = {
	daily_meal_menu_id: string;
	daily_meals_module_id: string;
	daily_meals_module: DailyMealsModule;
	categories: MenuCategory[];
	date: string;
};
