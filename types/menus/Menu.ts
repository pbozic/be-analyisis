// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { menu_categories } from '@prisma/client';

import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';

export type Menu = {
	menu_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	categories: menu_categories[];
	menu_categories_ordered?: unknown | null;
};
