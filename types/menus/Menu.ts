import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { MenuCategory } from './MenuCategory.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Menu = {
	menu_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	categories: MenuCategory[];
	menu_categories_ordered?: unknown | null;
};
