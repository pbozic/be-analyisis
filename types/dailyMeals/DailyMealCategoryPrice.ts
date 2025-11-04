import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealCategory } from './DailyMealCategory.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealInstance } from './DailyMealInstance.js';
import type { DailyMealSubscriptionCustomer } from './DailyMealSubscriptionCustomer.js';
import { DailyMealCategoryResponseSchema } from './DailyMealCategory';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { DailyMealInstanceResponseSchema } from './DailyMealInstance';
import { DailyMealSubscriptionCustomerResponseSchema } from './DailyMealSubscriptionCustomer';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDailyMealCategoryPriceSchema = z
	.object({
		daily_meal_category_prices_id: z.string().uuid(),
		daily_meal_category_id: z.string().uuid(),
		price: z.number(),
		valid_from: z.unknown(),
	})
	.openapi('CreateDailyMealCategoryPrice');

export type CreateDailyMealCategoryPriceInput = z.infer<typeof CreateDailyMealCategoryPriceSchema>;

export const UpdateDailyMealCategoryPriceSchema =
	CreateDailyMealCategoryPriceSchema.partial().openapi('UpdateDailyMealCategoryPrice');
export type UpdateDailyMealCategoryPriceInput = z.infer<typeof UpdateDailyMealCategoryPriceSchema>;

export const DailyMealCategoryPriceResponseSchema = z
	.object({
		daily_meal_category_prices_id: z.string(),
		daily_meal_category_id: z.string(),
		price: z.number(),
		valid_from: z.string().datetime(),
		created_at: z.string().datetime(),
		daily_meal_category: DailyMealCategoryResponseSchema,
		menu_categories: z.array(MenuCategoryResponseSchema),
		daily_meal_instances: z.array(DailyMealInstanceResponseSchema),
		daily_meal_subscription_customers: z.array(DailyMealSubscriptionCustomerResponseSchema),
	})
	.openapi('DailyMealCategoryPriceResponse');

export type DailyMealCategoryPriceResponse = z.infer<typeof DailyMealCategoryPriceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealCategoryPrice', CreateDailyMealCategoryPriceSchema);
	registry.register('UpdateDailyMealCategoryPrice', UpdateDailyMealCategoryPriceSchema);
	registry.register('DailyMealCategoryPriceResponse', DailyMealCategoryPriceResponseSchema);
}

export type DailyMealCategoryPrice = {
	daily_meal_category_prices_id: string;
	daily_meal_category_id: string;
	price: number;
	valid_from: Date;
	created_at: Date;
	daily_meal_category?: DailyMealCategory;
	menu_categories?: MenuCategory[];
	daily_meal_instances?: DailyMealInstance[];
	daily_meal_subscription_customers?: DailyMealSubscriptionCustomer[];
};
