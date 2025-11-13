import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// Request schemas moved from userpermission.dto.ts

export const CreateUserPermissionSchema = z
	.object({
		user_id: z.string().uuid(),
		action_id: z.string().uuid().optional(),
		name: z.string().optional(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().int().optional(),
		scope: z.nativeEnum(PERMISSION_SCOPE).default(PERMISSION_SCOPE.GLOBAL),
		is_blocked: z.boolean().default(false),
	})
	.openapi('CreateUserPermission');

export const UpdateUserPermissionSchema = CreateUserPermissionSchema.partial().openapi('UpdateUserPermission');

export type CreateUserPermissionInput = z.infer<typeof CreateUserPermissionSchema>;
export type UpdateUserPermissionInput = z.infer<typeof UpdateUserPermissionSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserPermission', CreateUserPermissionSchema);
	registry.register('UpdateUserPermission', UpdateUserPermissionSchema);
}
