import { PAYMENT_METHOD, PAYMENT_STATUS } from '@prisma/client';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { User } from '../users/User.js';
import type { PaymentSplit } from './PaymentSplit.js';
import type { PaymentTransferGroup } from './PaymentTransferGroup.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Payment = {
	payment_id: string;
	amount: number;
	credits_amount: number;
	payment_method: PAYMENT_METHOD;
	payment_intent_id?: string | null;
	status: PAYMENT_STATUS;
	created_at: Date;
	updated_at: Date;
	order_type?: string | null;
	payment_type?: string | null;
	daily_meal_subscription_id?: string | null;
	daily_meal_subscription?: DailyMealSubscription | null;
	user_id: string;
	user: User;
	payment_splits: PaymentSplit[];
	payment_transfer_groups: PaymentTransferGroup[];
};
