import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, PhoneNumber } from '../../primitives.js';
import { DailyMealSubscriptionBaseSchema } from '../DailyMeal/dailymeal.dto.js';
import { MenuCategoryRefSchema } from '../Menu/menu.dto.js';
import { DailyMealCategoryPriceRefSchema } from '../DailyMealCategory/dailyMealCategory.js';

extendZodWithOpenApi(z);

// Base: scalars only
export const DailyMealInstanceBaseSchema = z
	.object({
		id: UUID,
		subscription_id: UUID,
		subscription_customer_id: UUID,
		menu_category_id: UUID,
		status: z.string(),
		intended_date: Timestamp,
		delivery_date: Timestamp,
		daily_meal_category_price_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealInstanceBase');

export type DailyMealInstanceBase = z.infer<typeof DailyMealInstanceBaseSchema>;

// Ref: minimal identity
export const DailyMealInstanceRefSchema = z
	.object({
		id: UUID,
		delivery_date: Timestamp.optional(),
	})
	.openapi('DailyMealInstanceRef');

export type DailyMealInstanceRef = z.infer<typeof DailyMealInstanceRefSchema>;

export const DailyMealSubscriptionCustomerRefSchema = z
	.object({
		id: UUID,
		first_name: z.string(),
		last_name: z.string(),
		telephone: PhoneNumber,
	})
	.openapi('DailyMealSubscriptionCustomerRef');

export type DailyMealSubscriptionCustomerRef = z.infer<typeof DailyMealSubscriptionCustomerRefSchema>;

// Response: extends base and embeds other models' Ref schemas
export const DailyMealInstanceResponseSchema = DailyMealInstanceBaseSchema.extend({
	subscription: z
		.lazy(() => DailyMealSubscriptionBaseSchema)
		.nullable()
		.optional(),
	customer: DailyMealSubscriptionCustomerRefSchema.nullable().optional(),
	menu_category: z
		.lazy(() => MenuCategoryRefSchema)
		.nullable()
		.optional(),
	daily_meal_category_price: z
		.lazy(() => DailyMealCategoryPriceRefSchema)
		.nullable()
		.optional(),
}).openapi('DailyMealInstanceResponse');

export type DailyMealInstanceResponse = z.infer<typeof DailyMealInstanceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealInstanceBase', DailyMealInstanceBaseSchema);
	registry.register('DailyMealInstanceRef', DailyMealInstanceRefSchema);
	registry.register('DailyMealInstanceResponse', DailyMealInstanceResponseSchema);
}

export default {
	DailyMealInstanceBaseSchema,
	DailyMealInstanceRefSchema,
	DailyMealInstanceResponseSchema,
};
