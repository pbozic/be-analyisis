// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DAILY_MEAL_INSTANCE_STATUS, daily_meal_category_prices } from '@prisma/client';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealSubscriptionCustomer } from '../dailyMeals/DailyMealSubscriptionCustomer.js';
import type { MenuCategory } from '../menus/MenuCategory.js';

export type DailyMealInstance = {
	id: string;
	subscription_id: string;
	subscription_customer_id: string;
	menu_category_id: string;
	status: DAILY_MEAL_INSTANCE_STATUS;
	intended_date: string;
	delivery_date: string;
	daily_meal_category_price_id: string;
	created_at: string;
	updated_at: string;
	subscription: DailyMealSubscription;
	customer: DailyMealSubscriptionCustomer;
	menu_category: MenuCategory;
	daily_meal_category_price: daily_meal_category_prices;
};
