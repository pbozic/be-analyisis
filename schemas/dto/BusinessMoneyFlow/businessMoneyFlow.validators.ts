import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// Request schemas moved from types/payments/BusinessMoneyFlow.ts

export const CreateBusinessMoneyFlowSchema = z
	.object({
		balance_change_id: UUID,
		business_id: UUID,
		amount: z.number(),
		stripe_fee: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		payment_method: z.nativeEnum(PAYMENT_METHOD).nullable().optional(),
	})
	.openapi('CreateBusinessMoneyFlow');

export type CreateBusinessMoneyFlowInput = z.infer<typeof CreateBusinessMoneyFlowSchema>;

export const UpdateBusinessMoneyFlowSchema = CreateBusinessMoneyFlowSchema.partial().openapi('UpdateBusinessMoneyFlow');
export type UpdateBusinessMoneyFlowInput = z.infer<typeof UpdateBusinessMoneyFlowSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessMoneyFlow', CreateBusinessMoneyFlowSchema);
	registry.register('UpdateBusinessMoneyFlow', UpdateBusinessMoneyFlowSchema);
}
