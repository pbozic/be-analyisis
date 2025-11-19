import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import type { RolePermission } from './RolePermission.js';
import type { UserRole } from './UserRole.js';
import { RolePermissionResponseBaseSchema } from './RolePermission';
import { UserRoleResponseBaseSchema } from './UserRole';
import { BusinessBaseSchema } from '../../schemas/dto/Business/index.js';

extendZodWithOpenApi(z);

// --- SCHEMAS ---

export const CreateRoleSchema = z
	.object({
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		business_id: z.string().uuid().optional(), // null = global
	})
	.openapi('CreateRole');

export const UpdateRoleSchema = CreateRoleSchema.partial().openapi('UpdateRole');

export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type UpdateRoleInput = z.infer<typeof UpdateRoleSchema>;

export const RoleResponseBaseSchema = z
	.object({
		role_id: z.string(),
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		business_id: z.string().nullable().optional(),
		is_admin: z.boolean(),
	})
	.openapi('RoleResponseBase');

export const RoleResponseSchema = RoleResponseBaseSchema.extend({
	permissions: z.array(RolePermissionResponseBaseSchema),
	users: z.array(UserRoleResponseBaseSchema),
	business: BusinessBaseSchema.nullable().optional(),
}).openapi('RoleResponse');

export type RoleBase = z.infer<typeof RoleResponseBaseSchema>;
export type RoleResponse = z.infer<typeof RoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateRole', CreateRoleSchema);
	registry.register('UpdateRole', UpdateRoleSchema);
	registry.register('RoleResponseBase', RoleResponseBaseSchema);
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
