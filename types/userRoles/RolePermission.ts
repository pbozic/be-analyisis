import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Role } from './Role.js';
import type { Permission } from './Permission.js';
import { RoleResponseSchema } from './Role';
import { PermissionResponseSchema } from './Permission';

extendZodWithOpenApi(z);

export const GetRolePermissionsParamsSchema = z
	.object({
		role_id: z.string().uuid(),
	})
	.openapi('GetRolePermissionsParams');

export type GetRolePermissionsParams = z.infer<typeof GetRolePermissionsParamsSchema>;

export const CreateRolePermissionSchema = z
	.object({
		role_id: z.string().uuid(),
		permission_id: z.string().uuid(),
	})
	.openapi('CreateRolePermission');

export type CreateRolePermissionInput = z.infer<typeof CreateRolePermissionSchema>;

// Nested RESTful routes param schemas
export const UpsertRolePermissionParamsSchema = z
	.object({
		role_id: z.string().uuid(),
		permission_id: z.string().uuid(),
	})
	.openapi('UpsertRolePermissionParams');

export type UpsertRolePermissionParams = z.infer<typeof UpsertRolePermissionParamsSchema>;

export const DeleteRolePermissionParamsSchema = z
	.object({
		role_id: z.string().uuid(),
		permission_id: z.string().uuid(),
	})
	.openapi('DeleteRolePermissionParams');

export type DeleteRolePermissionParams = z.infer<typeof DeleteRolePermissionParamsSchema>;

// Matrix request: fetch many role-permissions for selected roles
export const RolePermissionsMatrixBodySchema = z
	.object({
		role_ids: z.array(z.string().uuid()).min(1),
	})
	.openapi('RolePermissionsMatrixBody');

export type RolePermissionsMatrixBody = z.infer<typeof RolePermissionsMatrixBodySchema>;

export const RolePermissionResponseSchema = z
	.object({
		role_permission_id: z.string(),
		role_id: z.string(),
		permission_id: z.string(),
		role: RoleResponseSchema,
		permission: PermissionResponseSchema,
	})
	.openapi('RolePermissionResponse');

export type RolePermissionResponse = z.infer<typeof RolePermissionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateRolePermission', CreateRolePermissionSchema);
	registry.register('GetRolePermissionsParams', GetRolePermissionsParamsSchema);
	registry.register('UpsertRolePermissionParams', UpsertRolePermissionParamsSchema);
	registry.register('DeleteRolePermissionParams', DeleteRolePermissionParamsSchema);
	registry.register('RolePermissionsMatrixBody', RolePermissionsMatrixBodySchema);
	registry.register('RolePermissionResponse', RolePermissionResponseSchema);
}

export type RolePermission = {
	role_permission_id: string;
	role_id: string;
	permission_id: string;
	role?: Role;
	permission?: Permission;
};
