import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Role } from './role.dto.js';
import type { Permission } from './permission.dto.js';
import { RoleResponseBaseSchema } from './role.dto.js';
import { PermissionResponseBaseSchema } from './permission.dto.js';

extendZodWithOpenApi(z);

// Request schemas moved to rolepermission.validators.ts

export const RolePermissionResponseBaseSchema = z
	.object({
		role_permission_id: z.string(),
		role_id: z.string(),
		permission_id: z.string(),
	})
	.openapi('RolePermissionResponseBase');

export const RolePermissionResponseSchema = RolePermissionResponseBaseSchema.extend({
	role: z.lazy(() => RoleResponseBaseSchema),
	permission: PermissionResponseBaseSchema,
}).openapi('RolePermissionResponse');

export type RolePermissionBase = z.infer<typeof RolePermissionResponseBaseSchema>;
export type RolePermissionResponse = z.infer<typeof RolePermissionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('RolePermissionResponseBase', RolePermissionResponseBaseSchema);
	registry.register('RolePermissionResponse', RolePermissionResponseSchema);
}

export type RolePermission = {
	role_permission_id: string;
	role_id: string;
	permission_id: string;
	role?: Role;
	permission?: Permission;
};
