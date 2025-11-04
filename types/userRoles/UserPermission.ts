import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Action } from '../subscriptions/Action.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';

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

export type CreateUserPermissionInput = z.infer<typeof CreateUserPermissionSchema>;
export type UpdateUserPermissionInput = z.infer<typeof UpdateUserPermissionSchema>;

export type UserPermission = {
	user_permission_id: string;
	user_id: string;
	reservation_module_id?: string | null;
	action_id?: string | null;
	name?: string | null;
	display_name?: string | null;
	module: MODULE_TYPE;
	limit?: number | null;
	scope: PERMISSION_SCOPE;
	is_blocked: boolean;
	user: User;
	action?: Action | null;
	reservation_module?: ReservationModule | null;
};
