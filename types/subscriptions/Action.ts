import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BusinessUsage } from './BusinessUsage.js';
import type { Permission } from '../userRoles/Permission.js';
import type { UserPermission } from '../userRoles/UserPermission.js';
import type { ActionBundleAction } from './ActionBundleAction.js';
import type { AddonAction } from './AddonAction.js';
import { ActionBundleActionResponseSchema } from './ActionBundleAction';
import { AddonActionResponseSchema } from './AddonAction';
import { BusinessUsageResponseSchema } from './BusinessUsage';
import { PermissionResponseSchema } from '../userRoles/Permission';
import { UserPermissionResponseSchema } from '../userRoles/UserPermission';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateActionSchema = z
	.object({
		action_id: z.string().uuid(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
	})
	.openapi('CreateAction');

export type CreateActionInput = z.infer<typeof CreateActionSchema>;

export const UpdateActionSchema = CreateActionSchema.partial().openapi('UpdateAction');
export type UpdateActionInput = z.infer<typeof UpdateActionSchema>;

export const ActionResponseSchema = z
	.object({
		action_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		action_bundle_actions: z.array(ActionBundleActionResponseSchema),
		addon_actions: z.array(AddonActionResponseSchema),
		business_usages: z.array(BusinessUsageResponseSchema),
		permissions: z.array(PermissionResponseSchema),
		user_permissions: z.array(UserPermissionResponseSchema),
	})
	.openapi('ActionResponse');

export type ActionResponse = z.infer<typeof ActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAction', CreateActionSchema);
	registry.register('UpdateAction', UpdateActionSchema);
	registry.register('ActionResponse', ActionResponseSchema);
}

export type Action = {
	action_id: string;
	module: MODULE_TYPE;
	name: string;
	action_bundle_actions?: ActionBundleAction[];
	addon_actions?: AddonAction[];
	business_usages?: BusinessUsage[];
	permissions?: Permission[];
	user_permissions?: UserPermission[];
};
