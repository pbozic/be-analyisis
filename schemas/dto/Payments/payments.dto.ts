import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PAYMENT_METHOD, PAYMENT_STATUS, SPLIT_STATUS, SPLIT_TYPE, SPLIT_DESTINATION_TYPE } from '@prisma/client';

extendZodWithOpenApi(z);

export const PaymentSplitSchema = z
	.object({
		payment_split_id: z.string().uuid(),
		status: z.nativeEnum(SPLIT_STATUS),
		type: z.nativeEnum(SPLIT_TYPE),
		payment_id: z.string().uuid(),
		destination_type: z.nativeEnum(SPLIT_DESTINATION_TYPE),
		destination_id: z.string().nullable().optional(),
		payment_transfer_group_id: z.string().nullable().optional(),
		amount_regular: z.number().int(),
		amount_credits: z.number().int(),
		metadata: z.any().nullable().optional(),
		external_id: z.string().nullable().optional(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('PaymentSplit');

export type PaymentSplit = z.infer<typeof PaymentSplitSchema>;

export const PaymentBaseSchema = z
	.object({
		payment_id: z.string().uuid(),
		amount: z.number().int(),
		credits_amount: z.number().int().optional(),
		payment_method: z.nativeEnum(PAYMENT_METHOD),
		payment_intent_id: z.string().nullable().optional(),
		status: z.nativeEnum(PAYMENT_STATUS),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
		order_type: z.string().nullable().optional(),
		payment_type: z.string().nullable().optional(),
		daily_meal_subscription_id: z.string().uuid().nullable().optional(),
		user_id: z.string().uuid(),
	})
	.openapi('PaymentBase');

export type PaymentBase = z.infer<typeof PaymentBaseSchema>;

export const PaymentResponseSchema = PaymentBaseSchema.extend({
	payment_splits: z.array(PaymentSplitSchema).optional(),
	daily_meal_subscription: z.any().nullable().optional(),
}).openapi('PaymentResponse');

export type PaymentResponse = z.infer<typeof PaymentResponseSchema>;

export const PaymentListResponseSchema = z.array(PaymentResponseSchema).openapi('PaymentListResponse');
export type PaymentListResponse = z.infer<typeof PaymentListResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PaymentSplit', PaymentSplitSchema);
	registry.register('PaymentBase', PaymentBaseSchema);
	registry.register('PaymentResponse', PaymentResponseSchema);
	registry.register('PaymentListResponse', PaymentListResponseSchema);
}
