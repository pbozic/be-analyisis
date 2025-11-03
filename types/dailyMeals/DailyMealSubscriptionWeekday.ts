// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';

export type DailyMealSubscriptionWeekday = {
	id: string;
	subscription_id: string;
	intended_weekday: number;
	delivery_weekday: number;
	subscription: DailyMealSubscription;
};
