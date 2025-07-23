import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';

import { permission } from '../../prisma/schemas/interfaces.ts';
export const CreatePermissionSchema = z.object({
	role_id: z.string().uuid(),
	action_id: z.string().uuid().optional(), // optional for non-action permissions
	name: z.string().optional(), // non-action identifier
	module: z.nativeEnum(MODULE_TYPE),
	limit: z.number().int().optional(),
	scope: z.nativeEnum(PERMISSION_SCOPE).default(PERMISSION_SCOPE.GLOBAL),
});

export const UpdatePermissionSchema = CreatePermissionSchema.partial();

export type CreatePermissionInput = z.infer<typeof CreatePermissionSchema>;
export type UpdatePermissionInput = z.infer<typeof UpdatePermissionSchema>;
export type Permission = permission;
