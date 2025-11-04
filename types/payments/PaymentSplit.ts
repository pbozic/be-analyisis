import { SPLIT_DESTINATION_TYPE, SPLIT_STATUS, SPLIT_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Payment } from './Payment.js';
import type { PaymentTransferGroup } from './PaymentTransferGroup.js';
import { PaymentResponseSchema } from './Payment';
import { PaymentTransferGroupResponseSchema } from './PaymentTransferGroup';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreatePaymentSplitSchema = z
	.object({
		payment_split_id: z.string().uuid(),
		status: z.nativeEnum(SPLIT_STATUS),
		type: z.nativeEnum(SPLIT_TYPE),
		payment_id: z.string().uuid(),
		destination_type: z.nativeEnum(SPLIT_DESTINATION_TYPE),
		destination_id: z.string().uuid().nullable().optional(),
		payment_transfer_group_id: z.string().uuid().nullable().optional(),
		amount_regular: z.number(),
		amount_credits: z.number(),
		metadata: z.unknown().nullable().optional(),
		external_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreatePaymentSplit');

export type CreatePaymentSplitInput = z.infer<typeof CreatePaymentSplitSchema>;

export const UpdatePaymentSplitSchema = CreatePaymentSplitSchema.partial().openapi('UpdatePaymentSplit');
export type UpdatePaymentSplitInput = z.infer<typeof UpdatePaymentSplitSchema>;

export const PaymentSplitResponseSchema = z
	.object({
		payment_split_id: z.string(),
		status: z.nativeEnum(SPLIT_STATUS),
		type: z.nativeEnum(SPLIT_TYPE),
		payment_id: z.string(),
		destination_type: z.nativeEnum(SPLIT_DESTINATION_TYPE),
		destination_id: z.string().nullable().optional(),
		payment_transfer_group_id: z.string().nullable().optional(),
		amount_regular: z.number(),
		amount_credits: z.number(),
		metadata: z.unknown().nullable().optional(),
		external_id: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		payment: PaymentResponseSchema,
		payment_transfer_group: PaymentTransferGroupResponseSchema.nullable().optional(),
	})
	.openapi('PaymentSplitResponse');

export type PaymentSplitResponse = z.infer<typeof PaymentSplitResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePaymentSplit', CreatePaymentSplitSchema);
	registry.register('UpdatePaymentSplit', UpdatePaymentSplitSchema);
	registry.register('PaymentSplitResponse', PaymentSplitResponseSchema);
}

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
	payment?: Payment;
	payment_transfer_group?: PaymentTransferGroup | null;
};
