import { ACCOUNT_ACTIONS, ACCOUNT_ACTIONS_REASON } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';
import { BusinessResponseSchema } from '../business/Business';
import { UserResponseSchema } from '../users/User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateAccountActionSchema = z
	.object({
		account_action_id: z.string().uuid(),
		business_id: z.string().uuid().nullable().optional(),
		user_id: z.string().uuid().nullable().optional(),
		action_creator_user_id: z.string().uuid(),
		reason: z.nativeEnum(ACCOUNT_ACTIONS_REASON),
		action: z.nativeEnum(ACCOUNT_ACTIONS),
	})
	.openapi('CreateAccountAction');

export type CreateAccountActionInput = z.infer<typeof CreateAccountActionSchema>;

export const UpdateAccountActionSchema = CreateAccountActionSchema.partial().openapi('UpdateAccountAction');
export type UpdateAccountActionInput = z.infer<typeof UpdateAccountActionSchema>;

export const AccountActionResponseSchema = z
	.object({
		account_action_id: z.string(),
		business_id: z.string().nullable().optional(),
		user_id: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		action_creator_user_id: z.string(),
		reason: z.nativeEnum(ACCOUNT_ACTIONS_REASON),
		action: z.nativeEnum(ACCOUNT_ACTIONS),
		business: BusinessResponseSchema.nullable().optional(),
		user: UserResponseSchema.nullable().optional(),
		action_creator: UserResponseSchema.nullable().optional(),
	})
	.openapi('AccountActionResponse');

export type AccountActionResponse = z.infer<typeof AccountActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAccountAction', CreateAccountActionSchema);
	registry.register('UpdateAccountAction', UpdateAccountActionSchema);
	registry.register('AccountActionResponse', AccountActionResponseSchema);
}

export type AccountAction = {
	account_action_id: string;
	business_id?: string | null;
	user_id?: string | null;
	created_at: Date;
	action_creator_user_id: string;
	reason: ACCOUNT_ACTIONS_REASON;
	action: ACCOUNT_ACTIONS;
	business?: Business | null;
	user?: User | null;
	action_creator?: User | null;
};
