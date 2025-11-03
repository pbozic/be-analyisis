// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { PAYMENT_METHOD, PAYMENT_STATUS, payment_splits, payment_transfer_groups } from '@prisma/client';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { User } from '../users/User.js';

export type Payment = {
	payment_id: string;
	amount: number;
	credits_amount: number;
	payment_method: PAYMENT_METHOD;
	payment_intent_id?: string | null;
	status: PAYMENT_STATUS;
	created_at: string;
	updated_at: string;
	order_type?: string | null;
	payment_type?: string | null;
	daily_meal_subscription_id?: string | null;
	daily_meal_subscription?: DailyMealSubscription | null;
	user_id: string;
	user: User;
	payment_splits: payment_transfer_groups[];
	payment_transfer_groups: payment_splits[];
};
