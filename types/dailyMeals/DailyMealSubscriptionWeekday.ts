import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealSubscriptionWeekday = {
	id: string;
	subscription_id: string;
	intended_weekday: number;
	delivery_weekday: number;
	subscription: DailyMealSubscription;
};
