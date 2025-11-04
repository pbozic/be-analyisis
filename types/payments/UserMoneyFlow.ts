import { PAYMENT_METHOD, TRANSACTION_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import { UserResponseSchema } from '../users/User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateUserMoneyFlowSchema = z
	.object({
		balance_change_id: z.string().uuid(),
		user_id: z.string().uuid(),
		amount: z.number(),
		stripe_fee: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		payment_method: z.nativeEnum(PAYMENT_METHOD).nullable().optional(),
	})
	.openapi('CreateUserMoneyFlow');

export type CreateUserMoneyFlowInput = z.infer<typeof CreateUserMoneyFlowSchema>;

export const UpdateUserMoneyFlowSchema = CreateUserMoneyFlowSchema.partial().openapi('UpdateUserMoneyFlow');
export type UpdateUserMoneyFlowInput = z.infer<typeof UpdateUserMoneyFlowSchema>;

export const UserMoneyFlowResponseSchema = z
	.object({
		balance_change_id: z.string(),
		user_id: z.string(),
		amount: z.number(),
		stripe_fee: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		payment_method: z.nativeEnum(PAYMENT_METHOD).nullable().optional(),
		created_at: z.string().datetime(),
		user: UserResponseSchema,
	})
	.openapi('UserMoneyFlowResponse');

export type UserMoneyFlowResponse = z.infer<typeof UserMoneyFlowResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserMoneyFlow', CreateUserMoneyFlowSchema);
	registry.register('UpdateUserMoneyFlow', UpdateUserMoneyFlowSchema);
	registry.register('UserMoneyFlowResponse', UserMoneyFlowResponseSchema);
}

export type UserMoneyFlow = {
	balance_change_id: string;
	user_id: string;
	amount: number;
	stripe_fee: number;
	type: TRANSACTION_TYPE;
	payment_method?: PAYMENT_METHOD | null;
	created_at: Date;
	user?: User;
};
