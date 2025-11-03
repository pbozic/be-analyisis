// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type {
	SUBSCRIPTION_STATUS,
	SUBSCRIPTION_TYPE,
	addresses,
	daily_meal_instances,
	daily_meal_subscription_customers,
	daily_meal_subscription_days,
	daily_meal_subscription_weekdays,
	daily_meals_module,
	drivers,
	payments,
	promo_analytics,
} from '@prisma/client';

import type { User } from '../users/User.js';

export type DailyMealSubscription = {
	id: string;
	user_id: string;
	daily_meals_id: string;
	delivery_address_id: string;
	driver_id?: string | null;
	start_date: string;
	end_date?: string | null;
	type: SUBSCRIPTION_TYPE;
	status: SUBSCRIPTION_STATUS;
	courier_comment?: string | null;
	created_at: string;
	updated_at: string;
	user: User;
	driver?: drivers | null;
	delivery_address: addresses;
	daily_meals_module: daily_meals_module;
	customers: daily_meal_subscription_customers[];
	days: daily_meal_subscription_days[];
	weekdays: daily_meal_subscription_weekdays[];
	daily_meal_instances: daily_meal_instances[];
	payment?: payments | null;
	promo_analytics: promo_analytics[];
};
