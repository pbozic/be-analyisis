import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';

import type { user_permission } from '../../prisma/schemas/interfaces';

export const CreateUserPermissionSchema = z.object({
	user_id: z.string().uuid(),
	action_id: z.string().uuid().optional(),
	name: z.string().optional(),
	module: z.nativeEnum(MODULE_TYPE),
	limit: z.number().int().optional(),
	scope: z.nativeEnum(PERMISSION_SCOPE).default(PERMISSION_SCOPE.GLOBAL),
	is_blocked: z.boolean().default(false),
});

export const UpdateUserPermissionSchema = CreateUserPermissionSchema.partial();

export type UserPermission = user_permission;
export type CreateUserPermissionInput = z.infer<typeof CreateUserPermissionSchema>;
export type UpdateUserPermissionInput = z.infer<typeof UpdateUserPermissionSchema>;
