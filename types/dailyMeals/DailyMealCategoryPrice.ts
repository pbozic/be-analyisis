// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealInstance } from '../dailyMeals/DailyMealInstance.js';
import type { DailyMealSubscriptionCustomer } from '../dailyMeals/DailyMealSubscriptionCustomer.js';

export type DailyMealCategoryPrice = {
	daily_meal_category_prices_id: string;
	daily_meal_category_id: string;
	price: number;
	valid_from: string;
	created_at: string;
	daily_meal_category: DailyMealCategory;
	menu_categories: MenuCategory[];
	daily_meal_instances: DailyMealInstance[];
	daily_meal_subscription_customers: DailyMealSubscriptionCustomer[];
};
