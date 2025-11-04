import { z } from 'zod';

import type { User } from '../users/User.js';
import type { Role } from './Role.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';

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

export type Permission = permission;

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
