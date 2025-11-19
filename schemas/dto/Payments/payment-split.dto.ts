import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Payment Split Base (relation-free, reusable) ===
export const PaymentSplitBaseSchema = z
	.object({
		payment_split_id: UUID,
		payment_id: UUID,
		destination_type: z.string(),
		destination_id: UUID.nullable().optional(),
		amount_regular: z.number(),
		amount_credits: z.number(),
		metadata: z.record(z.any()).nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi({ title: 'PaymentSplitBase', description: 'Base payment split (no relations)' });
export type PaymentSplitBase = z.infer<typeof PaymentSplitBaseSchema>;

// === Payment Split Ref (minimal identity) ===
export const PaymentSplitRefSchema = z
	.object({
		payment_split_id: UUID,
	})
	.openapi({ title: 'PaymentSplitRef', description: 'Minimal payment split reference' });
export type PaymentSplitRef = z.infer<typeof PaymentSplitRefSchema>;

// =======================
// Payment Splits DTOs
// =======================

export const PaymentSplitDetailSchema = PaymentSplitBaseSchema.extend({
	payment: z
		.object({
			payment_id: UUID,
			payment_method: z.string(),
		})
		.optional(),
}).openapi('PaymentSplitDetail');
export type PaymentSplitDetail = z.infer<typeof PaymentSplitDetailSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PaymentSplitBase', PaymentSplitBaseSchema);
	registry.register('PaymentSplitRef', PaymentSplitRefSchema);
	registry.register('PaymentSplitDetail', PaymentSplitDetailSchema);
}
