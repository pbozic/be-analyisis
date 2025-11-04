import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreatePaymentIntentLogSchema = z
	.object({
		payment_intent_logs_id: z.string().uuid(),
		stripe_id: z.string().uuid(),
	})
	.openapi('CreatePaymentIntentLog');

export type CreatePaymentIntentLogInput = z.infer<typeof CreatePaymentIntentLogSchema>;

export const UpdatePaymentIntentLogSchema = CreatePaymentIntentLogSchema.partial().openapi('UpdatePaymentIntentLog');
export type UpdatePaymentIntentLogInput = z.infer<typeof UpdatePaymentIntentLogSchema>;

export const PaymentIntentLogResponseSchema = z
	.object({
		payment_intent_logs_id: z.string(),
		stripe_id: z.string(),
		created_at: z.string().datetime(),
	})
	.openapi('PaymentIntentLogResponse');

export type PaymentIntentLogResponse = z.infer<typeof PaymentIntentLogResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePaymentIntentLog', CreatePaymentIntentLogSchema);
	registry.register('UpdatePaymentIntentLog', UpdatePaymentIntentLogSchema);
	registry.register('PaymentIntentLogResponse', PaymentIntentLogResponseSchema);
}

export type PaymentIntentLog = {
	payment_intent_logs_id: string;
	stripe_id: string;
	created_at: Date;
};
