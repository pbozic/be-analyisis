// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ActionBundle } from '../subscriptions/ActionBundle.js';
import type { Action } from '../subscriptions/Action.js';
import type { ActionBundle } from './ActionBundle.js';
import type { Action } from './Action.js';
import { ActionBundleResponseSchema } from './ActionBundle';
import { ActionResponseSchema } from './Action';

extendZodWithOpenApi(z);

export type ActionBundleAction = {
	action_bundle_action_id: string;
	action_bundle_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number | null;
	action_bundle: ActionBundle;
	action: Action;
};

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

export const ActionBundleActionResponseSchema = z
	.object({
		action_bundle_action_id: z.string(),
		action_bundle_id: z.string(),
		action_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
		action_bundle: ActionBundleResponseSchema,
		action: ActionResponseSchema,
	})
	.openapi('ActionBundleActionResponse');

export type ActionBundleActionResponse = z.infer<typeof ActionBundleActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateActionBundleAction', CreateActionBundleActionSchema);
	registry.register('UpdateActionBundleAction', UpdateActionBundleActionSchema);
	registry.register('ActionBundleActionResponse', ActionBundleActionResponseSchema);
}
