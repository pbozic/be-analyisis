import { CREDIT_STATUS, FUNDS_TYPE } from '@prisma/client';

import type { Referral } from '../referral/Referral.js';
import type { User } from '../users/User.js';
import type { Transaction } from '../payments/Transaction.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type WalletFund = {
	wallet_funds_id: string;
	user_id: string;
	referral_id?: string | null;
	charge_id?: string | null;
	amount: number;
	reserved_order?: string | null;
	reserved_daily_meals_subscription?: string | null;
	reserved_business?: string | null;
	created_at: Date;
	updated_at: Date;
	expires_at?: Date | null;
	type: FUNDS_TYPE;
	status?: CREDIT_STATUS | null;
	referral?: Referral | null;
	user: User;
	transactions: Transaction[];
};
