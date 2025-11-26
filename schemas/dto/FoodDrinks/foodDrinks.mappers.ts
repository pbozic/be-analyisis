import { FoodDrinksDetailSchema, FoodDrinksModuleRefSchema } from './foodDrinks.dto.js';
import type { FoodDrinksDetail, FoodDrinksModuleRef } from './foodDrinks.dto.js';
import type { FoodDrinksWithIncludesPrisma } from '../../../prisma/includes/foodDrinks.js';

// =======================
// Mappers
// =======================
type PrismaFoodDrinks = {
	food_drinks_id: string;
	business_id?: string | null;
	enabled?: boolean | null;
	online?: boolean | null;
	overwhelmed?: boolean | null;
	minimum_order?: number | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

export function toFoodDrinksDetail(row: FoodDrinksWithIncludesPrisma | unknown): FoodDrinksDetail {
	const r = row as PrismaFoodDrinks;
	return FoodDrinksDetailSchema.parse({
		food_drinks_id: r.food_drinks_id,
		business_id: r.business_id,
		enabled: r.enabled,
		online: r.online,
		overwhelmed: r.overwhelmed,
		minimum_order: r.minimum_order ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export function toFoodDrinksRef(row: FoodDrinksWithIncludesPrisma | unknown): FoodDrinksModuleRef {
	const r = row as PrismaFoodDrinks;
	return FoodDrinksModuleRefSchema.parse({
		food_drinks_id: r.food_drinks_id,
		enabled: r.enabled,
		online: r.online,
		overwhelmed: r.overwhelmed,
		minimum_order: r.minimum_order ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}
