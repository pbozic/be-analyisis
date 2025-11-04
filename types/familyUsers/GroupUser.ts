import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Allowance } from './Allowance.js';
import { UserResponseSchema } from '../users/User';
import { AllowanceResponseSchema } from './Allowance';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export type GroupUser = {
	group_user_id: string;
	parent_user_id: string;
	child_user_id: string;
	created_at: Date;
	updated_at: Date;
	parent_user: User;
	child_user: User;
	allowance?: Allowance | null;
	enabled: boolean;
};

export const CreateGroupUserSchema = z
	.object({
		group_user_id: z.string().uuid(),
		parent_user_id: z.string().uuid(),
		child_user_id: z.string().uuid(),
		enabled: z.boolean(),
	})
	.openapi('CreateGroupUser');

export type CreateGroupUserInput = z.infer<typeof CreateGroupUserSchema>;

export const UpdateGroupUserSchema = CreateGroupUserSchema.partial().openapi('UpdateGroupUser');
export type UpdateGroupUserInput = z.infer<typeof UpdateGroupUserSchema>;

export const GroupUserResponseSchema = z
	.object({
		group_user_id: z.string(),
		parent_user_id: z.string(),
		child_user_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		parent_user: UserResponseSchema,
		child_user: UserResponseSchema,
		allowance: AllowanceResponseSchema.nullable().optional(),
		enabled: z.boolean(),
	})
	.openapi('GroupUserResponse');

export type GroupUserResponse = z.infer<typeof GroupUserResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateGroupUser', CreateGroupUserSchema);
	registry.register('UpdateGroupUser', UpdateGroupUserSchema);
	registry.register('GroupUserResponse', GroupUserResponseSchema);
}
