import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';

import type { role } from '../../prisma/schemas/interfaces';

// --- SCHEMAS ---

export const CreateRoleSchema = z.object({
	name: z.string(),
	module: z.nativeEnum(MODULE_TYPE),
	business_id: z.string().uuid().optional(), // null = global
});

export const UpdateRoleSchema = CreateRoleSchema.partial();

export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type UpdateRoleInput = z.infer<typeof UpdateRoleSchema>;

export type Role = role;
