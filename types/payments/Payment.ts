import { PAYMENT_METHOD, PAYMENT_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { User } from '../users/User.js';
import type { PaymentSplit } from './PaymentSplit.js';
import type { PaymentTransferGroup } from './PaymentTransferGroup.js';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { UserResponseSchema } from '../users/User';
import { PaymentSplitResponseSchema } from './PaymentSplit';
import { PaymentTransferGroupResponseSchema } from './PaymentTransferGroup';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreatePaymentSchema = z
	.object({
		payment_id: z.string().uuid(),
		amount: z.number(),
		credits_amount: z.number(),
		payment_method: z.nativeEnum(PAYMENT_METHOD),
		payment_intent_id: z.string().uuid().nullable().optional(),
		status: z.nativeEnum(PAYMENT_STATUS),
		order_type: z.string().nullable().optional(),
		payment_type: z.string().nullable().optional(),
		daily_meal_subscription_id: z.string().uuid().nullable().optional(),
		user_id: z.string().uuid(),
	})
	.openapi('CreatePayment');

export type CreatePaymentInput = z.infer<typeof CreatePaymentSchema>;

export const UpdatePaymentSchema = CreatePaymentSchema.partial().openapi('UpdatePayment');
export type UpdatePaymentInput = z.infer<typeof UpdatePaymentSchema>;

export const PaymentResponseSchema = z
	.object({
		payment_id: z.string(),
		amount: z.number(),
		credits_amount: z.number(),
		payment_method: z.nativeEnum(PAYMENT_METHOD),
		payment_intent_id: z.string().nullable().optional(),
		status: z.nativeEnum(PAYMENT_STATUS),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order_type: z.string().nullable().optional(),
		payment_type: z.string().nullable().optional(),
		daily_meal_subscription_id: z.string().nullable().optional(),
		daily_meal_subscription: DailyMealSubscriptionResponseSchema.nullable().optional(),
		user_id: z.string(),
		user: UserResponseSchema,
		payment_splits: z.array(PaymentSplitResponseSchema),
		payment_transfer_groups: z.array(PaymentTransferGroupResponseSchema),
	})
	.openapi('PaymentResponse');

export type PaymentResponse = z.infer<typeof PaymentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePayment', CreatePaymentSchema);
	registry.register('UpdatePayment', UpdatePaymentSchema);
	registry.register('PaymentResponse', PaymentResponseSchema);
}

export type Payment = {
	payment_id: string;
	amount: number;
	credits_amount: number;
	payment_method: PAYMENT_METHOD;
	payment_intent_id?: string | null;
	status: PAYMENT_STATUS;
	created_at: Date;
	updated_at: Date;
	order_type?: string | null;
	payment_type?: string | null;
	daily_meal_subscription_id?: string | null;
	daily_meal_subscription?: DailyMealSubscription | null;
	user_id: string;
	user?: User;
	payment_splits?: PaymentSplit[];
	payment_transfer_groups?: PaymentTransferGroup[];
};
