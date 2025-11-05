import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Role } from './Role.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { UserResponseBaseSchema } from '../users/User';
import { RoleResponseBaseSchema } from './Role';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// --- SCHEMAS ---

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

export const UserRoleResponseBaseSchema = z
	.object({
		user_id: z.string(),
		role_id: z.string(),
		reservation_module_id: z.string().nullable().optional(),
	})
	.openapi('UserRoleResponseBase');

export const UserRoleResponseSchema = UserRoleResponseBaseSchema.extend({
	user: UserResponseBaseSchema,
	role: RoleResponseBaseSchema,
	reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
}).openapi('UserRoleResponse');

export type UserRoleBase = z.infer<typeof UserRoleResponseBaseSchema>;
export type UserRoleResponse = z.infer<typeof UserRoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserRole', CreateUserRoleSchema);
	registry.register('UpdateUserRole', UpdateUserRoleSchema);
	registry.register('UserRoleResponseBase', UserRoleResponseBaseSchema);
	registry.register('UserRoleResponse', UserRoleResponseSchema);
}

export type UserRole = {
	user_id: string;
	role_id: string;
	reservation_module_id?: string | null;
	user?: User;
	role?: Role;
	reservation_module?: ReservationModule | null;
};
