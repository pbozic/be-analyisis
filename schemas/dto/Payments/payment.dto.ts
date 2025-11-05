import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { PaymentSplitBaseSchema } from './payment-split.dto.ts';

extendZodWithOpenApi(z);

// =======================
// Payments DTOs
// =======================

export const PaymentBaseSchema = z
	.object({
		payment_id: UUID,
		user_id: UUID,
		amount: z.number(),
		payment_method: z.string(),
		credits_amount: z.number().optional(),
		payment_intent_id: z.string().nullable().optional(),
		daily_meal_subscription_id: UUID.nullable().optional(),
		status: z.string().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('PaymentBase');
export type PaymentBase = z.infer<typeof PaymentBaseSchema>;

export const PaymentDetailSchema = PaymentBaseSchema.extend({
	payment_splits: z.array(PaymentSplitBaseSchema).optional().default([]),
}).openapi('PaymentDetail');
export type PaymentDetail = z.infer<typeof PaymentDetailSchema>;

// =======================
// Mappers
// =======================

type PrismaPaymentSplit = z.input<typeof PaymentSplitBaseSchema>;
type PrismaPayment = {
	payment_id: string;
	user_id: string;
	amount: number;
	payment_method: string;
	credits_amount?: number | null;
	payment_intent_id?: string | null;
	daily_meal_subscription_id?: string | null;
	status?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	payment_splits?: PrismaPaymentSplit[];
};

export function toPaymentDetail(row: unknown): PaymentDetail {
	const r = row as PrismaPayment;
	return PaymentDetailSchema.parse({
		payment_id: r.payment_id,
		user_id: r.user_id,
		amount: r.amount,
		payment_method: r.payment_method,
		credits_amount: r.credits_amount ?? undefined,
		payment_intent_id: r.payment_intent_id ?? null,
		daily_meal_subscription_id: r.daily_meal_subscription_id ?? null,
		status: r.status ?? undefined,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		payment_splits: Array.isArray(r.payment_splits)
			? r.payment_splits.map((s) => PaymentSplitBaseSchema.parse(s))
			: [],
	});
}

// =======================
// Registry
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PaymentBase', PaymentBaseSchema);
	registry.register('PaymentDetail', PaymentDetailSchema);
}
