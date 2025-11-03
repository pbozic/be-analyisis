// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DAY_OF_WEEK } from '@prisma/client';

import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';

export type DailyMealsModule = {
	id: string;
	food_drinks_id: string;
	food_drinks_module: FoodDrinksModule;
	daily_meals_days: DAY_OF_WEEK;
	daily_meals_delivery_mapping?: unknown | null;
};
