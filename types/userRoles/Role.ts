import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Permission } from './Permission.js';
import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';
import type { RolePermission } from './RolePermission.js';
import type { UserRole } from './UserRole.js';
import { RolePermissionResponseSchema } from './RolePermission';
import { UserRoleResponseSchema } from './UserRole';
import { BusinessResponseSchema } from '../business/Business';

extendZodWithOpenApi(z);

// --- SCHEMAS ---

export const CreateRoleSchema = z.object({
	name: z.string(),
	module: z.nativeEnum(MODULE_TYPE),
	business_id: z.string().uuid().optional(), // null = global
});

export const UpdateRoleSchema = CreateRoleSchema.partial();

export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type UpdateRoleInput = z.infer<typeof UpdateRoleSchema>;

export const RoleResponseSchema = z
	.object({
		role_id: z.string(),
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		business_id: z.string().nullable().optional(),
		permissions: z.array(RolePermissionResponseSchema),
		users: z.array(UserRoleResponseSchema),
		is_admin: z.boolean(),
		business: BusinessResponseSchema.nullable().optional(),
	})
	.openapi('RoleResponse');

export type RoleResponse = z.infer<typeof RoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateRole', CreateRoleSchema);
	registry.register('UpdateRole', UpdateRoleSchema);
	registry.register('RoleResponse', RoleResponseSchema);
}

export type Role = {
	role_id: string;
	name: string;
	module: MODULE_TYPE;
	business_id?: string | null;
	permissions?: RolePermission[];
	users?: UserRole[];
	is_admin: boolean;
	business?: Business | null;
};
