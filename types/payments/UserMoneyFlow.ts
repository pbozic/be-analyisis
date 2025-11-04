import { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';

import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type UserMoneyFlow = {
	balance_change_id: string;
	user_id: string;
	amount: number;
	stripe_fee: number;
	type: TRANSACTION_TYPE;
	payment_method?: PAYMENT_METHOD | null;
	created_at: Date;
	user: User;
};
