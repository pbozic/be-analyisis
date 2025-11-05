// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ActionBundle } from './ActionBundle.js';
import type { Action } from './Action.js';
import { ActionBundleResponseBaseSchema } from './ActionBundle';
import { ActionResponseBaseSchema } from './Action';

extendZodWithOpenApi(z);

export const CreateActionBundleActionSchema = z
	.object({
		action_bundle_action_id: z.string().uuid(),
		action_bundle_id: z.string().uuid(),
		action_id: z.string().uuid(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
	})
	.openapi('CreateActionBundleAction');

export type CreateActionBundleActionInput = z.infer<typeof CreateActionBundleActionSchema>;

export const UpdateActionBundleActionSchema =
	CreateActionBundleActionSchema.partial().openapi('UpdateActionBundleAction');
export type UpdateActionBundleActionInput = z.infer<typeof UpdateActionBundleActionSchema>;

export const ActionBundleActionResponseBaseSchema = z
	.object({
		action_bundle_action_id: z.string(),
		action_bundle_id: z.string(),
		action_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
	})
	.openapi('ActionBundleActionResponseBase');

export const ActionBundleActionResponseSchema = ActionBundleActionResponseBaseSchema.extend({
	action_bundle: ActionBundleResponseBaseSchema,
	action: ActionResponseBaseSchema,
}).openapi('ActionBundleActionResponse');

export type ActionBundleActionBase = z.infer<typeof ActionBundleActionResponseBaseSchema>;
export type ActionBundleActionResponse = z.infer<typeof ActionBundleActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateActionBundleAction', CreateActionBundleActionSchema);
	registry.register('UpdateActionBundleAction', UpdateActionBundleActionSchema);
	registry.register('ActionBundleActionResponseBase', ActionBundleActionResponseBaseSchema);
	registry.register('ActionBundleActionResponse', ActionBundleActionResponseSchema);
}

export type ActionBundleAction = {
	action_bundle_action_id: string;
	action_bundle_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number | null;
	action_bundle?: ActionBundle;
	action?: Action;
};
