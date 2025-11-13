import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { PaymentSplitRefSchema } from './payment-split.dto.ts';

extendZodWithOpenApi(z);

// === Common Payment Schemas (moved from common/Payment.dto.ts) ===
// === Money Amount ===
export const MoneyAmountSchema = z
	.object({
		amount: z.number().min(0),
		currency: z.string().length(3).default('EUR'),
	})
	.openapi({
		title: 'MoneyAmount',
		description: 'Money amount with currency',
	});

// === Payment Method ===
export const PaymentMethodSchema = z
	.object({
		type: z.string(), // Could be enum from Prisma PAYMENT_METHOD
		payment_method_id: z.string().optional(),
		return_url: z.string().url().optional(),
	})
	.openapi({
		title: 'PaymentMethod',
		description: 'Payment method information',
	});

// === Payment Intent ===
export const PaymentIntentSchema = z
	.object({
		amount: z.number().positive(),
		currency: z.string().length(3).default('EUR'),
		return_url: z.string().url().optional(),
	})
	.openapi({
		title: 'PaymentIntent',
		description: 'Payment intent with amount and currency',
	});

// === Payment Intent with Method ===
export const PaymentIntentWithMethodSchema = PaymentIntentSchema.extend({
	payment_method_id: z.string().min(1),
}).openapi({
	title: 'PaymentIntentWithMethod',
	description: 'Payment intent with specific payment method',
});

// === Payment Confirmation ===
export const PaymentConfirmationSchema = z
	.object({
		payment_intent_id: z.string().min(1),
	})
	.openapi({
		title: 'PaymentConfirmation',
		description: 'Payment intent confirmation by ID',
	});

// === Wallet Update ===
export const WalletUpdateSchema = z
	.object({
		amount: z.number(),
		documents: z.array(z.record(z.any())).optional(),
	})
	.openapi({
		title: 'WalletUpdate',
		description: 'Wallet balance update with optional documents',
	});

// === Type exports ===
export type MoneyAmount = z.infer<typeof MoneyAmountSchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type PaymentIntent = z.infer<typeof PaymentIntentSchema>;
export type PaymentIntentWithMethod = z.infer<typeof PaymentIntentWithMethodSchema>;
export type PaymentConfirmation = z.infer<typeof PaymentConfirmationSchema>;
export type WalletUpdate = z.infer<typeof WalletUpdateSchema>;

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

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const PaymentRefSchema = z
	.object({
		payment_id: UUID,
		payment_method: z.string(),
	})
	.openapi('PaymentRef');
export type PaymentRef = z.infer<typeof PaymentRefSchema>;

export const PaymentDetailSchema = PaymentBaseSchema.extend({
	payment_splits: z.array(PaymentSplitRefSchema).optional().default([]),
}).openapi('PaymentDetail');
export type PaymentDetail = z.infer<typeof PaymentDetailSchema>;

// =======================
// Mappers
// =======================

type PrismaPaymentSplitRef = z.input<typeof PaymentSplitRefSchema>;
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
	payment_splits?: PrismaPaymentSplitRef[];
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
			? r.payment_splits.map((s) => PaymentSplitRefSchema.parse(s))
			: [],
	});
}

// =======================
// Registry
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common payment schemas
	registry.register('MoneyAmount', MoneyAmountSchema);
	registry.register('PaymentMethod', PaymentMethodSchema);
	registry.register('PaymentIntent', PaymentIntentSchema);
	registry.register('PaymentIntentWithMethod', PaymentIntentWithMethodSchema);
	registry.register('PaymentConfirmation', PaymentConfirmationSchema);
	registry.register('WalletUpdate', WalletUpdateSchema);

	// Register payment schemas
	registry.register('PaymentBase', PaymentBaseSchema);
	registry.register('PaymentRef', PaymentRefSchema);
	registry.register('PaymentDetail', PaymentDetailSchema);
}
