import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import { UserResponseSchema } from './User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateUserTutorialStateSchema = z
	.object({
		id: z.string().uuid(),
		user_id: z.string().uuid(),
		epoch: z.number(),
		updatedAt: z.unknown(),
	})
	.openapi('CreateUserTutorialState');

export type CreateUserTutorialStateInput = z.infer<typeof CreateUserTutorialStateSchema>;

export const UpdateUserTutorialStateSchema = CreateUserTutorialStateSchema.partial().openapi('UpdateUserTutorialState');
export type UpdateUserTutorialStateInput = z.infer<typeof UpdateUserTutorialStateSchema>;

export const UserTutorialStateResponseSchema = z
	.object({
		id: z.string(),
		user_id: z.string(),
		epoch: z.number(),
		updatedAt: z.string().datetime(),
		user: UserResponseSchema,
	})
	.openapi('UserTutorialStateResponse');

export type UserTutorialStateResponse = z.infer<typeof UserTutorialStateResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserTutorialState', CreateUserTutorialStateSchema);
	registry.register('UpdateUserTutorialState', UpdateUserTutorialStateSchema);
	registry.register('UserTutorialStateResponse', UserTutorialStateResponseSchema);
}

export type UserTutorialState = {
	id: string;
	user_id: string;
	epoch: number;
	updatedAt: Date;
	user?: User;
};
