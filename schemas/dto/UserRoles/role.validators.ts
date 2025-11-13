import { z } from 'zod';
import { MODULE_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// Request schemas moved from role.dto.ts

export const CreateRoleSchema = z
	.object({
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		business_id: z.string().uuid().optional(), // null = global
	})
	.openapi('CreateRole');

export const UpdateRoleSchema = CreateRoleSchema.partial().openapi('UpdateRole');

export type CreateRoleInput = z.infer<typeof CreateRoleSchema>;
export type UpdateRoleInput = z.infer<typeof UpdateRoleSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateRole', CreateRoleSchema);
	registry.register('UpdateRole', UpdateRoleSchema);
}
