import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// FoodDrinks Response DTOs
// =======================

// Base scalars of food_drinks module
export const FoodDrinksBaseSchema = z
	.object({
		food_drinks_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'FDabc123def45678', description: 'Public link hash' }),
		business_id: UUID.optional(),
		enabled: z.boolean().optional(),
		online: z.boolean().optional(),
		overwhelmed: z.boolean().optional(),
		minimum_order: z.number().int().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FoodDrinksBase');

export type FoodDrinksBase = z.infer<typeof FoodDrinksBaseSchema>;

// Detail variant – keep relations minimal (no deep embeds by design)
export const FoodDrinksDetailSchema = FoodDrinksBaseSchema.openapi('FoodDrinksDetail');

export type FoodDrinksDetail = z.infer<typeof FoodDrinksDetailSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('FoodDrinksBase', FoodDrinksBaseSchema);
	registry.register('FoodDrinksDetail', FoodDrinksDetailSchema);
}
