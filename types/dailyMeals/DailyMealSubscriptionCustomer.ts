// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { daily_meal_category_prices, daily_meal_instances } from '@prisma/client';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';

export type DailyMealSubscriptionCustomer = {
	id: string;
	subscription_id: string;
	daily_meal_category_id: string;
	daily_meal_category_price_id: string;
	first_name: string;
	last_name: string;
	telephone: string;
	restaurant_comment?: string | null;
	created_at: string;
	updated_at: string;
	subscription: DailyMealSubscription;
	daily_meal_instances: daily_meal_instances[];
	daily_meal_categories?: DailyMealCategory | null;
	daily_meal_category_price: daily_meal_category_prices;
};
