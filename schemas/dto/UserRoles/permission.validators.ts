import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// Request schemas moved from permission.dto.ts

export const CreatePermissionSchema = z
	.object({
		role_id: UUID,
		action_id: UUID.optional(), // optional for non-action permissions
		name: z.string().optional(), // non-action identifier
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().int().optional(),
		scope: z.nativeEnum(PERMISSION_SCOPE).default(PERMISSION_SCOPE.GLOBAL),
	})
	.openapi('CreatePermission');

export const UpdatePermissionSchema = CreatePermissionSchema.partial().openapi('UpdatePermission');

export type CreatePermissionInput = z.infer<typeof CreatePermissionSchema>;
export type UpdatePermissionInput = z.infer<typeof UpdatePermissionSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePermission', CreatePermissionSchema);
	registry.register('UpdatePermission', UpdatePermissionSchema);
}
