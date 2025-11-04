import { DAILY_MEAL_INSTANCE_STATUS } from '@prisma/client';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealSubscriptionCustomer } from './DailyMealSubscriptionCustomer.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealInstance = {
	id: string;
	subscription_id: string;
	subscription_customer_id: string;
	menu_category_id: string;
	status: DAILY_MEAL_INSTANCE_STATUS;
	intended_date: Date;
	delivery_date: Date;
	daily_meal_category_price_id: string;
	created_at: Date;
	updated_at: Date;
	subscription: DailyMealSubscription;
	customer: DailyMealSubscriptionCustomer;
	menu_category: MenuCategory;
	daily_meal_category_price: DailyMealCategoryPrice;
};
