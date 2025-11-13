import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Request Schemas (used in routes with validate()) =====
// These schemas are also defined in types/dailyMeals/DailyMealCategory.ts
// but should be moved here for standardization

export const CreateDailyMealCategoryWithPriceSchema = z
	.object({
		category_id: UUID,
		price: z.number().int().min(0),
		start_date: Timestamp,
	})
	.openapi('CreateDailyMealCategoryWithPrice');

export type CreateDailyMealCategoryWithPriceInput = z.infer<typeof CreateDailyMealCategoryWithPriceSchema>;

export const AddPriceToDailyMealCategorySchema = z
	.object({
		price: z.number().int().min(0),
		valid_from: Timestamp,
	})
	.openapi('AddPriceToDailyMealCategory');

export type AddPriceToDailyMealCategoryInput = z.infer<typeof AddPriceToDailyMealCategorySchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealCategoryWithPrice', CreateDailyMealCategoryWithPriceSchema);
	registry.register('AddPriceToDailyMealCategory', AddPriceToDailyMealCategorySchema);
}
