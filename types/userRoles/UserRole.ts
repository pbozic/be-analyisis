import { z } from 'zod';

import type { user_role, permission } from '../../prisma/schemas/interfaces';

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
export const RemoveUserRoleSchema = CreateUserRoleSchema;

// --- TYPES ---

export type UserRole = user_role;
export type Permission = permission;

export type CreateUserRoleInput = z.infer<typeof CreateUserRoleSchema>;
export type UpdateUserRoleInput = z.infer<typeof UpdateUserRoleSchema>;
export type AssignUserRoleInput = z.infer<typeof AssignUserRoleSchema>;
export type RemoveUserRoleInput = z.infer<typeof RemoveUserRoleSchema>;
