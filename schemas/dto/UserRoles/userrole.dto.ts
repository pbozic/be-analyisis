import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Role } from './role.dto.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { UserResponseBaseSchema } from '../users/User.js';
import { RoleResponseBaseSchema } from './role.dto.js';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule.js';

extendZodWithOpenApi(z);

// Request schemas moved to userrole.validators.ts

export const UserRoleResponseBaseSchema = z
	.object({
		user_id: z.string(),
		role_id: z.string(),
		reservation_module_id: z.string().nullable().optional(),
	})
	.openapi('UserRoleResponseBase');

export const UserRoleResponseSchema = UserRoleResponseBaseSchema.extend({
	user: UserResponseBaseSchema,
	role: RoleResponseBaseSchema,
	reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
}).openapi('UserRoleResponse');

export type UserRoleBase = z.infer<typeof UserRoleResponseBaseSchema>;
export type UserRoleResponse = z.infer<typeof UserRoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('UserRoleResponseBase', UserRoleResponseBaseSchema);
	registry.register('UserRoleResponse', UserRoleResponseSchema);
}

export type UserRole = {
	user_id: string;
	role_id: string;
	reservation_module_id?: string | null;
	user?: User;
	role?: Role;
	reservation_module?: ReservationModule | null;
};
