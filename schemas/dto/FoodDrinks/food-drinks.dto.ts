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
		seats: z.number().int().nullable().optional(),
		minimum_order: z.number().int().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FoodDrinksBase');
export type FoodDrinksBase = z.infer<typeof FoodDrinksBaseSchema>;

// Detail variant – keep relations minimal (no deep embeds by design)
export const FoodDrinksDetailSchema = FoodDrinksBaseSchema.openapi('FoodDrinksDetail');
export type FoodDrinksDetail = z.infer<typeof FoodDrinksDetailSchema>;

// Mapper from Prisma payload
export type PrismaFoodDrinks = {
	food_drinks_id: string;
	business_id?: string;
	enabled?: boolean;
	online?: boolean;
	overwhelmed?: boolean;
	seats?: number | null;
	minimum_order?: number | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

export function toFoodDrinksDetail(row: unknown): FoodDrinksDetail {
	const r = row as PrismaFoodDrinks;
	return FoodDrinksDetailSchema.parse({
		food_drinks_id: r.food_drinks_id,
		business_id: r.business_id,
		enabled: r.enabled,
		online: r.online,
		overwhelmed: r.overwhelmed,
		seats: r.seats ?? null,
		minimum_order: r.minimum_order ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('FoodDrinksOnlineBody', FoodDrinksOnlineBodySchema);
	registry.register('FoodDrinksOverwhelmedBody', FoodDrinksOverwhelmedBodySchema);

	registry.register('FoodDrinksBase', FoodDrinksBaseSchema);
	registry.register('FoodDrinksDetail', FoodDrinksDetailSchema);
}
