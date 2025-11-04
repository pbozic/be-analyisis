import { SPLIT_DESTINATION_TYPE, SPLIT_STATUS, SPLIT_TYPE } from '@prisma/client';

import type { Payment } from './Payment.js';
import type { PaymentTransferGroup } from './PaymentTransferGroup.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PaymentSplit = {
	payment_split_id: string;
	status: SPLIT_STATUS;
	type: SPLIT_TYPE;
	payment_id: string;
	destination_type: SPLIT_DESTINATION_TYPE;
	destination_id?: string | null;
	payment_transfer_group_id?: string | null;
	amount_regular: number;
	amount_credits: number;
	metadata?: unknown | null;
	external_id?: string | null;
	created_at: Date;
	updated_at: Date;
	payment: Payment;
	payment_transfer_group?: PaymentTransferGroup | null;
};
