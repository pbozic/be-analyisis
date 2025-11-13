import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';

import { BusinessResponseSchema } from '../Business/index.js';

extendZodWithOpenApi(z);

// Response DTOs moved from types/payments/BusinessMoneyFlow.ts

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

// Mappers moved to businessMoneyFlow.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BusinessMoneyFlowResponse', BusinessMoneyFlowResponseSchema);
}
