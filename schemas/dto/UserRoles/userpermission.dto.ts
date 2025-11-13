import { z } from 'zod';
import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Action } from '../subscriptions/Action.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { UserResponseBaseSchema } from '../users/User';
import { ActionResponseBaseSchema } from '../subscriptions/Action';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// Request schemas moved to userpermission.validators.ts

export const UserPermissionResponseBaseSchema = z
	.object({
		user_permission_id: z.string(),
		user_id: z.string(),
		reservation_module_id: z.string().nullable().optional(),
		action_id: z.string().nullable().optional(),
		name: z.string().nullable().optional(),
		display_name: z.string().nullable().optional(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
		scope: z.nativeEnum(PERMISSION_SCOPE),
		is_blocked: z.boolean(),
	})
	.openapi('UserPermissionResponseBase');

export const UserPermissionResponseSchema = UserPermissionResponseBaseSchema.extend({
	user: UserResponseBaseSchema,
	action: ActionResponseBaseSchema.nullable().optional(),
	reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
}).openapi('UserPermissionResponse');

export type UserPermissionBase = z.infer<typeof UserPermissionResponseBaseSchema>;
export type UserPermissionResponse = z.infer<typeof UserPermissionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('UserPermissionResponseBase', UserPermissionResponseBaseSchema);
	registry.register('UserPermissionResponse', UserPermissionResponseSchema);
}

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
	user?: User;
	action?: Action | null;
	reservation_module?: ReservationModule | null;
};
