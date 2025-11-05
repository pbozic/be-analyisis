import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { CategoryRefSchema } from '../Category/category.dto.ts';

extendZodWithOpenApi(z);

// =======================
// Daily Meal Category DTOs
// =======================

export const DailyMealCategoryPriceBaseSchema = z
	.object({
		daily_meal_category_price_id: UUID.optional(),
		daily_meal_category_id: UUID,
		price: z.number(),
		valid_from: Timestamp,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealCategoryPriceBase');
export type DailyMealCategoryPriceBase = z.infer<typeof DailyMealCategoryPriceBaseSchema>;

export const DailyMealCategoryBaseSchema = z
	.object({
		daily_meal_category_id: UUID,
		business_id: UUID,
		category_id: UUID,
		start_date: Timestamp,
		active: z.boolean().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealCategoryBase');
export type DailyMealCategoryBase = z.infer<typeof DailyMealCategoryBaseSchema>;

export const DailyMealCategoryDetailSchema = DailyMealCategoryBaseSchema.extend({
	category: CategoryRefSchema.optional(),
	daily_meal_category_prices: z.array(DailyMealCategoryPriceBaseSchema).optional().default([]),
}).openapi('DailyMealCategoryDetail');
export type DailyMealCategoryDetail = z.infer<typeof DailyMealCategoryDetailSchema>;

// =======================
// Mappers
// =======================
type PrismaDailyMealCategoryPrice = {
	daily_meal_category_price_id?: string;
	daily_meal_category_id: string;
	price: number;
	valid_from: string | Date;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

export function toDailyMealCategoryPriceBase(row: unknown): DailyMealCategoryPriceBase {
	const r = row as PrismaDailyMealCategoryPrice;
	return DailyMealCategoryPriceBaseSchema.parse({
		daily_meal_category_price_id: r.daily_meal_category_price_id ?? undefined,
		daily_meal_category_id: r.daily_meal_category_id,
		price: r.price,
		valid_from: r.valid_from ? new Date(r.valid_from as string | Date).toISOString() : new Date().toISOString(),
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

type CategoryLike = { categories_id: string; name?: string | null; tag?: string; category_type?: string };
type PrismaDailyMealCategory = {
	daily_meal_category_id: string;
	business_id: string;
	category_id: string;
	start_date: string | Date;
	active?: boolean | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	category?: CategoryLike | null;
	daily_meal_category_prices?: PrismaDailyMealCategoryPrice[];
};

export function toDailyMealCategoryDetail(row: unknown): DailyMealCategoryDetail {
	const r = row as PrismaDailyMealCategory;
	const prices = Array.isArray(r.daily_meal_category_prices)
		? r.daily_meal_category_prices.map((p: unknown) => toDailyMealCategoryPriceBase(p))
		: [];
	const category = r.category
		? (CategoryRefSchema.parse(r.category) as z.infer<typeof CategoryRefSchema>)
		: undefined;
	return DailyMealCategoryDetailSchema.parse({
		daily_meal_category_id: r.daily_meal_category_id,
		business_id: r.business_id,
		category_id: r.category_id,
		start_date: r.start_date ? new Date(r.start_date as string | Date).toISOString() : new Date().toISOString(),
		active: r.active ?? undefined,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		category,
		daily_meal_category_prices: prices,
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealCategoryPriceBase', DailyMealCategoryPriceBaseSchema);
	registry.register('DailyMealCategoryBase', DailyMealCategoryBaseSchema);
	registry.register('DailyMealCategoryDetail', DailyMealCategoryDetailSchema);
}
