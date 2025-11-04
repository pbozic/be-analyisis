import { z } from 'zod';
import { USER_ROLES } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Role } from './Role.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { UserResponseSchema } from '../users/User';
import { RoleResponseSchema } from './Role';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// --- SCHEMAS ---

/**
 * CreateUserRoleSchema - Assigns a role to a user within the current reservation module
 */
export const CreateUserRoleSchema = z.object({
	user_id: z.string().uuid(),
	role_id: z.string().uuid(),
});

/**
 * UpdateUserRoleSchema - Reassigns an existing role to a new one (within same module)
 */
export const UpdateUserRoleSchema = z.object({
	user_id: z.string().uuid(),
	role_id: z.string().uuid(), // current role
	new_role_id: z.string().uuid().optional(),
});

// Optional: backward-compatible alias if you still use "assign/remove" terminology
export const AssignUserRoleSchema = CreateUserRoleSchema;

// --- TYPES ---

export type CreateUserRoleInput = z.infer<typeof CreateUserRoleSchema>;
export type UpdateUserRoleInput = z.infer<typeof UpdateUserRoleSchema>;
export type AssignUserRoleInput = z.infer<typeof AssignUserRoleSchema>;

export type UserRole = {
	user_id: string;
	role_id: string;
	reservation_module_id?: string | null;
	user: User;
	role: Role;
	reservation_module?: ReservationModule | null;
};

export const UserRoleResponseSchema = z
	.object({
		user_id: z.string(),
		role_id: z.string(),
		reservation_module_id: z.string().nullable().optional(),
		user: UserResponseSchema,
		role: RoleResponseSchema,
		reservation_module: ReservationModuleResponseSchema.nullable().optional(),
	})
	.openapi('UserRoleResponse');

export type UserRoleResponse = z.infer<typeof UserRoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserRole', CreateUserRoleSchema);
	registry.register('UpdateUserRole', UpdateUserRoleSchema);
	registry.register('UserRoleResponse', UserRoleResponseSchema);
}
