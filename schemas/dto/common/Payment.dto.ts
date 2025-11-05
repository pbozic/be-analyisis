import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

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

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('MoneyAmount', MoneyAmountSchema);
	registry.register('PaymentMethod', PaymentMethodSchema);
	registry.register('PaymentIntent', PaymentIntentSchema);
	registry.register('PaymentIntentWithMethod', PaymentIntentWithMethodSchema);
	registry.register('PaymentConfirmation', PaymentConfirmationSchema);
	registry.register('WalletUpdate', WalletUpdateSchema);
}
