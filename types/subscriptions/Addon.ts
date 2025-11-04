import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BusinessAddon } from './BusinessAddon.js';
import type { Action } from './Action.js';
import type { AddonAction } from './AddonAction.js';
import { AddonActionResponseSchema } from './AddonAction';
import { BusinessAddonResponseSchema } from './BusinessAddon';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateAddonSchema = z
	.object({
		addon_id: z.string().uuid(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string().uuid(),
		stripe_product_id: z.string().uuid(),
	})
	.openapi('CreateAddon');

export type CreateAddonInput = z.infer<typeof CreateAddonSchema>;

export const UpdateAddonSchema = CreateAddonSchema.partial().openapi('UpdateAddon');
export type UpdateAddonInput = z.infer<typeof UpdateAddonSchema>;

export const AddonResponseSchema = z
	.object({
		addon_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
		actions: z.array(AddonActionResponseSchema),
		business_addons: z.array(BusinessAddonResponseSchema),
	})
	.openapi('AddonResponse');

export type AddonResponse = z.infer<typeof AddonResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAddon', CreateAddonSchema);
	registry.register('UpdateAddon', UpdateAddonSchema);
	registry.register('AddonResponse', AddonResponseSchema);
}

export type Addon = {
	addon_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions?: AddonAction[];
	business_addons?: BusinessAddon[];
};
