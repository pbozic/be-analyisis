import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';

import type { Permission } from './Permission.js';
import type { UserRole } from './UserRole.js';
import type { Business } from '../business/Business.js';

// --- SCHEMAS ---

export const CreateRoleSchema = z.object({
	name: z.string(),
	module: z.nativeEnum(MODULE_TYPE),
	business_id: z.string().uuid().optional(), // null = global
});

export const UpdateRoleSchema = CreateRoleSchema.partial();

export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type UpdateRoleInput = z.infer<typeof UpdateRoleSchema>;

export type Role = {
	role_id: string;
	name: string;
	module: MODULE_TYPE;
	business_id?: string | null;
	permissions: Permission[];
	users: UserRole[];
	is_admin: boolean;
	business?: Business | null;
};
