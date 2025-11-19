import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { RolePermission } from './rolepermission.dto.js';
import type { UserRole } from './userrole.dto.js';
import { RolePermissionResponseBaseSchema } from './rolepermission.dto.js';
import { UserRoleResponseBaseSchema } from './userrole.dto.js';
import { BusinessBase } from '../Business';
import { BusinessBaseSchema } from '../Business/business.js';

extendZodWithOpenApi(z);

// Request schemas moved to role.validators.ts

export const RoleResponseBaseSchema = z
	.object({
		role_id: z.string(),
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		business_id: z.string().nullable().optional(),
		is_admin: z.boolean(),
	})
	.openapi('RoleResponseBase');

export const RoleResponseSchema = RoleResponseBaseSchema.extend({
	permissions: z.array(RolePermissionResponseBaseSchema),
	users: z.array(UserRoleResponseBaseSchema),
	business: BusinessBaseSchema.nullable().optional(),
}).openapi('RoleResponse');

export type RoleBase = z.infer<typeof RoleResponseBaseSchema>;
export type RoleResponse = z.infer<typeof RoleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('RoleResponseBase', RoleResponseBaseSchema);
	registry.register('RoleResponse', RoleResponseSchema);
}

export type Role = {
	role_id: string;
	name: string;
	module: MODULE_TYPE;
	business_id?: string | null;
	permissions?: RolePermission[];
	users?: UserRole[];
	is_admin: boolean;
	business?: BusinessBase | null;
};
