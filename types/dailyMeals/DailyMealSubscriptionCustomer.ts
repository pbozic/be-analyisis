import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealInstance } from './DailyMealInstance.js';
import type { DailyMealCategory } from './DailyMealCategory.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	daily_meal_instances: DailyMealInstance[];
	daily_meal_categories?: DailyMealCategory | null;
	daily_meal_category_price: DailyMealCategoryPrice;
};
