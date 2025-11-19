import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UserBase } from '../User';
import { RoleBase } from '../UserRoles';
import { ReservationModuleBase } from '../reservations';
import { UserBaseSchema } from '../User';
import { RoleResponseBaseSchema } from './role.dto';
import { ReservationModuleBaseSchema } from '../reservations';

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
	user: UserBaseSchema,
	role: RoleResponseBaseSchema,
	reservation_module: ReservationModuleBaseSchema.nullable().optional(),
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
	user?: UserBase;
	role?: RoleBase;
	reservation_module?: ReservationModuleBase | null;
};
