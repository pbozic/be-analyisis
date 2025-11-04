import { SUBSCRIPTION_STATUS, SUBSCRIPTION_TYPE } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Driver } from '../drivers/Driver.js';
import type { Address } from '../addresses/Address.js';
import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { DailyMealSubscriptionCustomer } from '../dailyMeals/DailyMealSubscriptionCustomer.js';
import type { DailyMealSubscriptionDay } from '../dailyMeals/DailyMealSubscriptionDay.js';
import type { DailyMealSubscriptionWeekday } from '../dailyMeals/DailyMealSubscriptionWeekday.js';
import type { DailyMealInstance } from '../dailyMeals/DailyMealInstance.js';
import type { Payment } from '../payments/Payment.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

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
	driver?: Driver | null;
	delivery_address: Address;
	daily_meals_module: DailyMealsModule;
	customers: DailyMealSubscriptionCustomer[];
	days: DailyMealSubscriptionDay[];
	weekdays: DailyMealSubscriptionWeekday[];
	daily_meal_instances: DailyMealInstance[];
	payment?: Payment | null;
	promo_analytics: PromoAnalytic[];
};
