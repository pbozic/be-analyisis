// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { TRANSFER_GROUP_STATUS, TRANSFER_GROUP_TYPE } from '@prisma/client';

import type { PaymentSplit } from '../payments/PaymentSplit.js';
import type { Payment } from '../payments/Payment.js';

export type PaymentTransferGroup = {
	payment_transfer_group_id: string;
	status: TRANSFER_GROUP_STATUS;
	type: TRANSFER_GROUP_TYPE;
	amount: number;
	metadata?: unknown | null;
	payment_id: string;
	created_at: string;
	updated_at: string;
	payment_splits: PaymentSplit[];
	payment: Payment;
};
