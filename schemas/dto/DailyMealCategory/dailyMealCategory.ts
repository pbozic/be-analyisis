import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { CategoryBaseSchema } from '../Category/category.dto.js';

extendZodWithOpenApi(z);

// =======================
// Daily Meal Category DTOs
// =======================

export const DailyMealCategoryPriceBaseSchema = z
	.object({
		daily_meal_category_prices_id: UUID.optional(),
		daily_meal_category_id: UUID,
		price: z.number(),
		valid_from: Timestamp,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealCategoryPriceBase');
export type DailyMealCategoryPriceBase = z.infer<typeof DailyMealCategoryPriceBaseSchema>;

export const DailyMealCategoryPriceRefSchema = z
	.object({
		daily_meal_category_price_id: UUID,
		daily_meal_category_id: UUID,
		price: z.number(),
		valid_from: Timestamp,
	})
	.openapi('DailyMealCategoryPriceRef');
export type DailyMealCategoryPriceRef = z.infer<typeof DailyMealCategoryPriceRefSchema>;

export const DailyMealCategoryBaseSchema = z
	.object({
		daily_meal_category_id: UUID,
		daily_meals_id: UUID,
		category_id: UUID,
		start_date: Timestamp,
		active: z.boolean().optional(),
		created_at: Timestamp,
	})
	.openapi('DailyMealCategoryBase');
export type DailyMealCategoryBase = z.infer<typeof DailyMealCategoryBaseSchema>;

export const DailyMealCategoryDetailSchema = DailyMealCategoryBaseSchema.extend({
	category: CategoryBaseSchema.optional(),
	// daily_meals_module: DailyMealsModuleSchema.optional(),
	daily_meal_category_prices: z.array(DailyMealCategoryPriceBaseSchema).optional().default([]),
}).openapi('DailyMealCategoryDetail');
export type DailyMealCategoryDetail = z.infer<typeof DailyMealCategoryDetailSchema>;

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealCategoryPriceBase', DailyMealCategoryPriceBaseSchema);
	registry.register('DailyMealCategoryPriceRef', DailyMealCategoryPriceRefSchema);
	registry.register('DailyMealCategoryBase', DailyMealCategoryBaseSchema);
	registry.register('DailyMealCategoryDetail', DailyMealCategoryDetailSchema);
}
