import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// Request schemas moved from rolepermission.dto.ts

export const GetRolePermissionsParamsSchema = z
	.object({
		role_id: UUID,
	})
	.openapi('GetRolePermissionsParams');

export type GetRolePermissionsParams = z.infer<typeof GetRolePermissionsParamsSchema>;

export const CreateRolePermissionSchema = z
	.object({
		role_id: UUID,
		permission_id: UUID,
	})
	.openapi('CreateRolePermission');

export type CreateRolePermissionInput = z.infer<typeof CreateRolePermissionSchema>;

// Nested RESTful routes param schemas
export const UpsertRolePermissionParamsSchema = z
	.object({
		role_id: UUID,
		permission_id: UUID,
	})
	.openapi('UpsertRolePermissionParams');

export type UpsertRolePermissionParams = z.infer<typeof UpsertRolePermissionParamsSchema>;

export const DeleteRolePermissionParamsSchema = z
	.object({
		role_id: UUID,
		permission_id: UUID,
	})
	.openapi('DeleteRolePermissionParams');

export type DeleteRolePermissionParams = z.infer<typeof DeleteRolePermissionParamsSchema>;

// Matrix request: fetch many role-permissions for selected roles
export const RolePermissionsMatrixBodySchema = z
	.object({
		role_ids: z.array(UUID).min(1),
	})
	.openapi('RolePermissionsMatrixBody');

export type RolePermissionsMatrixBody = z.infer<typeof RolePermissionsMatrixBodySchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateRolePermission', CreateRolePermissionSchema);
	registry.register('GetRolePermissionsParams', GetRolePermissionsParamsSchema);
	registry.register('UpsertRolePermissionParams', UpsertRolePermissionParamsSchema);
	registry.register('DeleteRolePermissionParams', DeleteRolePermissionParamsSchema);
	registry.register('RolePermissionsMatrixBody', RolePermissionsMatrixBodySchema);
}
