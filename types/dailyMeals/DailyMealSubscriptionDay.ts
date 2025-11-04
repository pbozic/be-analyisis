import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealSubscriptionDay = {
	id: string;
	subscription_id: string;
	intended_date: string;
	delivery_date: string;
	subscription: DailyMealSubscription;
};
