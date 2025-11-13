import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.js';
import { ActionRefSchema } from '../Action/index.js';

extendZodWithOpenApi(z);

// Base Schema - scalar fields only
export const AddonBaseSchema = z
	.object({
		addon_id: UUID,
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number().int().min(0),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
	})
	.openapi('AddonBase');

export type AddonBase = z.infer<typeof AddonBaseSchema>;

// Ref Schema - minimal identity for embedding elsewhere
export const AddonRefSchema = z
	.object({
		addon_id: UUID,
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		price_cents: z.number().int().min(0),
	})
	.openapi('AddonRef');

export type AddonRef = z.infer<typeof AddonRefSchema>;

// Response Schema - extends Base and embeds ONLY other models' Ref-variants
export const AddonResponseSchema = AddonBaseSchema.extend({
	actions: z.array(ActionRefSchema).optional(),
	// business_addons would be added here if needed
}).openapi('AddonResponse');

export type AddonResponse = z.infer<typeof AddonResponseSchema>;

// Response schemas for collections
export const AddonsListResponseSchema = z.array(AddonResponseSchema).openapi('AddonsListResponse');

export type AddonsListResponse = z.infer<typeof AddonsListResponseSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('AddonBase', AddonBaseSchema);
	registry.register('AddonRef', AddonRefSchema);
	registry.register('AddonResponse', AddonResponseSchema);

	// Register response schemas
	registry.register('AddonsListResponse', AddonsListResponseSchema);
}
