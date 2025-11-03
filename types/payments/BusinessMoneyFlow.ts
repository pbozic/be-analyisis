// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';

import type { Busines } from '../business/Busines.js';

export type BusinessMoneyFlow = {
	balance_change_id: string;
	business_id: string;
	amount: number;
	stripe_fee: number;
	type: TRANSACTION_TYPE;
	payment_method?: PAYMENT_METHOD | null;
	created_at: string;
	business: Busines;
};
