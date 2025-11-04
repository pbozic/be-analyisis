import { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import { BusinessResponseSchema } from '../business/Business';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBusinessMoneyFlowSchema = z
	.object({
		balance_change_id: z.string().uuid(),
		business_id: z.string().uuid(),
		amount: z.number(),
		stripe_fee: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		payment_method: z.nativeEnum(PAYMENT_METHOD).nullable().optional(),
	})
	.openapi('CreateBusinessMoneyFlow');

export type CreateBusinessMoneyFlowInput = z.infer<typeof CreateBusinessMoneyFlowSchema>;

export const UpdateBusinessMoneyFlowSchema = CreateBusinessMoneyFlowSchema.partial().openapi('UpdateBusinessMoneyFlow');
export type UpdateBusinessMoneyFlowInput = z.infer<typeof UpdateBusinessMoneyFlowSchema>;

export const BusinessMoneyFlowResponseSchema = z
	.object({
		balance_change_id: z.string(),
		business_id: z.string(),
		amount: z.number(),
		stripe_fee: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		payment_method: z.nativeEnum(PAYMENT_METHOD).nullable().optional(),
		created_at: z.string().datetime(),
		business: BusinessResponseSchema,
	})
	.openapi('BusinessMoneyFlowResponse');

export type BusinessMoneyFlowResponse = z.infer<typeof BusinessMoneyFlowResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessMoneyFlow', CreateBusinessMoneyFlowSchema);
	registry.register('UpdateBusinessMoneyFlow', UpdateBusinessMoneyFlowSchema);
	registry.register('BusinessMoneyFlowResponse', BusinessMoneyFlowResponseSchema);
}

export type BusinessMoneyFlow = {
	balance_change_id: string;
	business_id: string;
	amount: number;
	stripe_fee: number;
	type: TRANSACTION_TYPE;
	payment_method?: PAYMENT_METHOD | null;
	created_at: Date;
	business?: Business;
};
