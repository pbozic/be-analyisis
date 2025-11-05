import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BusinessUsage } from './BusinessUsage.js';
import type { Permission } from '../userRoles/Permission.js';
import type { UserPermission } from '../userRoles/UserPermission.js';
import type { ActionBundleAction } from './ActionBundleAction.js';
import type { AddonAction } from './AddonAction.js';
import { ActionBundleActionResponseBaseSchema } from './ActionBundleAction';
import { AddonActionResponseBaseSchema } from './AddonAction';
import { BusinessUsageResponseBaseSchema } from './BusinessUsage';
import { PermissionResponseBaseSchema } from '../userRoles/Permission';
import { UserPermissionResponseBaseSchema } from '../userRoles/UserPermission';

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

export const ActionResponseBaseSchema = z
	.object({
		action_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
	})
	.openapi('ActionResponseBase');

export const ActionResponseSchema = ActionResponseBaseSchema.extend({
	action_bundle_actions: z.array(ActionBundleActionResponseBaseSchema),
	addon_actions: z.array(AddonActionResponseBaseSchema),
	business_usages: z.array(BusinessUsageResponseBaseSchema),
	permissions: z.array(PermissionResponseBaseSchema),
	user_permissions: z.array(UserPermissionResponseBaseSchema),
}).openapi('ActionResponse');

export type ActionBase = z.infer<typeof ActionResponseBaseSchema>;
export type ActionResponse = z.infer<typeof ActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAction', CreateActionSchema);
	registry.register('UpdateAction', UpdateActionSchema);
	registry.register('ActionResponseBase', ActionResponseBaseSchema);
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
