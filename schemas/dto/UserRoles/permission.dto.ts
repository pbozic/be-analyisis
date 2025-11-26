import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ActionBase } from '../Subscription/index.js';
import type { RolePermission } from './rolepermission.dto.ts';
import { RolePermissionResponseBaseSchema } from './rolepermission.dto.ts';
import { ActionBaseSchema } from '../Subscription/index.ts';

extendZodWithOpenApi(z);

// Request schemas moved to permission.validators.ts

export const PermissionResponseBaseSchema = z
	.object({
		permission_id: z.string(),
		action_id: z.string().nullable().optional(),
		name: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		display_name: z.string().nullable().optional(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
		scope: z.nativeEnum(PERMISSION_SCOPE),
		group: z.string().nullable().optional(),
	})
	.openapi('PermissionResponseBase');

export const PermissionResponseSchema = PermissionResponseBaseSchema.extend({
	roles: z.lazy(() => z.array(RolePermissionResponseBaseSchema)),
	action: z
		.lazy(() => ActionBaseSchema)
		.nullable()
		.optional(),
}).openapi('PermissionResponse');

export type PermissionBase = z.infer<typeof PermissionResponseBaseSchema>;
export type PermissionResponse = z.infer<typeof PermissionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PermissionResponseBase', PermissionResponseBaseSchema);
	registry.register('PermissionResponse', PermissionResponseSchema);
}

export type Permission = {
	permission_id: string;
	action_id?: string | null;
	name?: string | null;
	description?: string | null;
	display_name?: string | null;
	module: MODULE_TYPE;
	limit?: number | null;
	scope: PERMISSION_SCOPE;
	group?: string | null;
	roles?: RolePermission[];
	action?: ActionBase | null;
};
