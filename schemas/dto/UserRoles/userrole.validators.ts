import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// Request schemas moved from userrole.dto.ts

/**
 * CreateUserRoleSchema - Assigns a role to a user within the current reservation module
 */
export const CreateUserRoleSchema = z
	.object({
		user_id: z.string().uuid(),
		role_id: z.string().uuid(),
	})
	.openapi('CreateUserRole');

/**
 * UpdateUserRoleSchema - Reassigns an existing role to a new one (within same module)
 */
export const UpdateUserRoleSchema = z
	.object({
		user_id: z.string().uuid(),
		role_id: z.string().uuid(), // current role
		new_role_id: z.string().uuid().optional(),
	})
	.openapi('UpdateUserRole');

// Optional: backward-compatible alias if you still use "assign/remove" terminology
export const AssignUserRoleSchema = CreateUserRoleSchema;

// --- TYPES ---

export type CreateUserRoleInput = z.infer<typeof CreateUserRoleSchema>;
export type UpdateUserRoleInput = z.infer<typeof UpdateUserRoleSchema>;
export type AssignUserRoleInput = z.infer<typeof AssignUserRoleSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserRole', CreateUserRoleSchema);
	registry.register('UpdateUserRole', UpdateUserRoleSchema);
}
