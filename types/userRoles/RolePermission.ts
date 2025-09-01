import { z } from 'zod';
import type { role_permission } from '../../prisma/schemas/interfaces';

export type RolePermission = role_permission;

export const GetRolePermissionsParamsSchema = z.object({
	role_id: z.string().uuid(),
});
export type GetRolePermissionsParams = z.infer<typeof GetRolePermissionsParamsSchema>;
export const CreateRolePermissionSchema = z.object({
	role_id: z.string().uuid(),
	permission_id: z.string().uuid(),
});
export type CreateRolePermissionInput = z.infer<typeof CreateRolePermissionSchema>;

// Nested RESTful routes param schemas
export const UpsertRolePermissionParamsSchema = z.object({
	role_id: z.string().uuid(),
	permission_id: z.string().uuid(),
});
export type UpsertRolePermissionParams = z.infer<typeof UpsertRolePermissionParamsSchema>;

export const DeleteRolePermissionParamsSchema = z.object({
	role_id: z.string().uuid(),
	permission_id: z.string().uuid(),
});
export type DeleteRolePermissionParams = z.infer<typeof DeleteRolePermissionParamsSchema>;

// Matrix request: fetch many role-permissions for selected roles
export const RolePermissionsMatrixBodySchema = z.object({
	role_ids: z.array(z.string().uuid()).min(1),
});
export type RolePermissionsMatrixBody = z.infer<typeof RolePermissionsMatrixBodySchema>;
