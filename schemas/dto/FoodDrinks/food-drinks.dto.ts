import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// FoodDrinks Controller Input Schemas
// =======================

export const FoodDrinksOnlineBodySchema = z.object({ online: z.boolean() }).openapi('FoodDrinksOnlineBody');
export type FoodDrinksOnlineBody = z.infer<typeof FoodDrinksOnlineBodySchema>;

export const FoodDrinksOverwhelmedBodySchema = z
	.object({ overwhelmed: z.boolean() })
	.openapi('FoodDrinksOverwhelmedBody');
export type FoodDrinksOverwhelmedBody = z.infer<typeof FoodDrinksOverwhelmedBodySchema>;

// Base scalars of food_drinks module
export const FoodDrinksBaseSchema = z
	.object({
		food_drinks_id: UUID,
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

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('FoodDrinksOnlineBody', FoodDrinksOnlineBodySchema);
	registry.register('FoodDrinksOverwhelmedBody', FoodDrinksOverwhelmedBodySchema);

	registry.register('FoodDrinksBase', FoodDrinksBaseSchema);
	registry.register('FoodDrinksDetail', FoodDrinksDetailSchema);
}
