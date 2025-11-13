import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// ===== Request Schemas (used in routes with validate()) =====
export const FoodDrinksOnlineBodySchema = z.object({ online: z.boolean() }).openapi('FoodDrinksOnlineBody');

export type FoodDrinksOnlineBody = z.infer<typeof FoodDrinksOnlineBodySchema>;

export const FoodDrinksOverwhelmedBodySchema = z
	.object({ overwhelmed: z.boolean() })
	.openapi('FoodDrinksOverwhelmedBody');

export type FoodDrinksOverwhelmedBody = z.infer<typeof FoodDrinksOverwhelmedBodySchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('FoodDrinksOnlineBody', FoodDrinksOnlineBodySchema);
	registry.register('FoodDrinksOverwhelmedBody', FoodDrinksOverwhelmedBodySchema);
}
