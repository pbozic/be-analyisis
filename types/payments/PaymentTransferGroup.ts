import { TRANSFER_GROUP_STATUS, TRANSFER_GROUP_TYPE } from '@prisma/client';

import type { PaymentSplit } from './PaymentSplit.js';
import type { Payment } from './Payment.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PaymentTransferGroup = {
	payment_transfer_group_id: string;
	status: TRANSFER_GROUP_STATUS;
	type: TRANSFER_GROUP_TYPE;
	amount: number;
	metadata?: unknown | null;
	payment_id: string;
	created_at: Date;
	updated_at: Date;
	payment_splits: PaymentSplit[];
	payment: Payment;
};
