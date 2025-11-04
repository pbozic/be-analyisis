// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Role } from '../userRoles/Role.js';
import type { Action } from '../subscriptions/Action.js';
import { RoleResponseSchema } from '../userRoles/Role';
import { ActionResponseSchema } from '../subscriptions/Action';

extendZodWithOpenApi(z);

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
	roles: Role[];
	action?: Action | null;
};

export const CreatePermissionSchema = z
	.object({
		permission_id: z.string().uuid(),
		action_id: z.string().uuid().nullable().optional(),
		name: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		display_name: z.string().nullable().optional(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
		scope: z.nativeEnum(PERMISSION_SCOPE),
		group: z.string().nullable().optional(),
	})
	.openapi('CreatePermission');

export type CreatePermissionInput = z.infer<typeof CreatePermissionSchema>;

export const UpdatePermissionSchema = CreatePermissionSchema.partial().openapi('UpdatePermission');
export type UpdatePermissionInput = z.infer<typeof UpdatePermissionSchema>;

export const PermissionResponseSchema = z
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
		roles: z.array(RoleResponseSchema),
		action: ActionResponseSchema.nullable().optional(),
	})
	.openapi('PermissionResponse');

export type PermissionResponse = z.infer<typeof PermissionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePermission', CreatePermissionSchema);
	registry.register('UpdatePermission', UpdatePermissionSchema);
	registry.register('PermissionResponse', PermissionResponseSchema);
}
