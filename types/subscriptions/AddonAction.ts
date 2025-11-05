// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Addon } from './Addon.js';
import type { Action } from './Action.js';
import { AddonResponseBaseSchema } from './Addon';
import { ActionResponseBaseSchema } from './Action';

extendZodWithOpenApi(z);

export const CreateAddonActionSchema = z
	.object({
		addon_action_id: z.string().uuid(),
		addon_id: z.string().uuid(),
		action_id: z.string().uuid(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
	})
	.openapi('CreateAddonAction');

export type CreateAddonActionInput = z.infer<typeof CreateAddonActionSchema>;

export const UpdateAddonActionSchema = CreateAddonActionSchema.partial().openapi('UpdateAddonAction');
export type UpdateAddonActionInput = z.infer<typeof UpdateAddonActionSchema>;

export const AddonActionResponseBaseSchema = z
	.object({
		addon_action_id: z.string(),
		addon_id: z.string(),
		action_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		limit: z.number().nullable().optional(),
	})
	.openapi('AddonActionResponseBase');

export const AddonActionResponseSchema = AddonActionResponseBaseSchema.extend({
	addon: AddonResponseBaseSchema,
	action: ActionResponseBaseSchema,
}).openapi('AddonActionResponse');

export type AddonActionBase = z.infer<typeof AddonActionResponseBaseSchema>;
export type AddonActionResponse = z.infer<typeof AddonActionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAddonAction', CreateAddonActionSchema);
	registry.register('UpdateAddonAction', UpdateAddonActionSchema);
	registry.register('AddonActionResponseBase', AddonActionResponseBaseSchema);
	registry.register('AddonActionResponse', AddonActionResponseSchema);
}

export type AddonAction = {
	addon_action_id: string;
	addon_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number | null;
	addon?: Addon;
	action?: Action;
};
