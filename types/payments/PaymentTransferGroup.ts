import { TRANSFER_GROUP_STATUS, TRANSFER_GROUP_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { PaymentSplit } from './PaymentSplit.js';
import type { Payment } from './Payment.js';
import { PaymentSplitResponseSchema } from './PaymentSplit';
import { PaymentResponseSchema } from './Payment';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreatePaymentTransferGroupSchema = z
	.object({
		payment_transfer_group_id: z.string().uuid(),
		status: z.nativeEnum(TRANSFER_GROUP_STATUS),
		type: z.nativeEnum(TRANSFER_GROUP_TYPE),
		amount: z.number(),
		metadata: z.unknown().nullable().optional(),
		payment_id: z.string().uuid(),
	})
	.openapi('CreatePaymentTransferGroup');

export type CreatePaymentTransferGroupInput = z.infer<typeof CreatePaymentTransferGroupSchema>;

export const UpdatePaymentTransferGroupSchema =
	CreatePaymentTransferGroupSchema.partial().openapi('UpdatePaymentTransferGroup');
export type UpdatePaymentTransferGroupInput = z.infer<typeof UpdatePaymentTransferGroupSchema>;

export const PaymentTransferGroupResponseSchema = z
	.object({
		payment_transfer_group_id: z.string(),
		status: z.nativeEnum(TRANSFER_GROUP_STATUS),
		type: z.nativeEnum(TRANSFER_GROUP_TYPE),
		amount: z.number(),
		metadata: z.unknown().nullable().optional(),
		payment_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		payment_splits: z.array(PaymentSplitResponseSchema),
		payment: PaymentResponseSchema,
	})
	.openapi('PaymentTransferGroupResponse');

export type PaymentTransferGroupResponse = z.infer<typeof PaymentTransferGroupResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePaymentTransferGroup', CreatePaymentTransferGroupSchema);
	registry.register('UpdatePaymentTransferGroup', UpdatePaymentTransferGroupSchema);
	registry.register('PaymentTransferGroupResponse', PaymentTransferGroupResponseSchema);
}

export type PaymentTransferGroup = {
	payment_transfer_group_id: string;
	status: TRANSFER_GROUP_STATUS;
	type: TRANSFER_GROUP_TYPE;
	amount: number;
	metadata?: unknown | null;
	payment_id: string;
	created_at: Date;
	updated_at: Date;
	payment_splits?: PaymentSplit[];
	payment?: Payment;
};
