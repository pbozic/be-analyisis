import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealInstance } from './DailyMealInstance.js';
import type { DailyMealCategory } from './DailyMealCategory.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { DailyMealInstanceResponseSchema } from './DailyMealInstance';
import { DailyMealCategoryResponseSchema } from './DailyMealCategory';
import { DailyMealCategoryPriceResponseSchema } from './DailyMealCategoryPrice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealSubscriptionCustomer = {
	id: string;
	subscription_id: string;
	daily_meal_category_id: string;
	daily_meal_category_price_id: string;
	first_name: string;
	last_name: string;
	telephone: string;
	restaurant_comment?: string | null;
	created_at: Date;
	updated_at: Date;
	subscription: DailyMealSubscription;
	daily_meal_instances: DailyMealInstance[];
	daily_meal_categories?: DailyMealCategory | null;
	daily_meal_category_price: DailyMealCategoryPrice;
};

export const CreateDailyMealSubscriptionCustomerSchema = z
	.object({
		id: z.string().uuid(),
		subscription_id: z.string().uuid(),
		daily_meal_category_id: z.string().uuid(),
		daily_meal_category_price_id: z.string().uuid(),
		first_name: z.string(),
		last_name: z.string(),
		telephone: z.string(),
		restaurant_comment: z.string().nullable().optional(),
	})
	.openapi('CreateDailyMealSubscriptionCustomer');

export type CreateDailyMealSubscriptionCustomerInput = z.infer<typeof CreateDailyMealSubscriptionCustomerSchema>;

export const UpdateDailyMealSubscriptionCustomerSchema = CreateDailyMealSubscriptionCustomerSchema.partial().openapi(
	'UpdateDailyMealSubscriptionCustomer'
);
export type UpdateDailyMealSubscriptionCustomerInput = z.infer<typeof UpdateDailyMealSubscriptionCustomerSchema>;

export const DailyMealSubscriptionCustomerResponseSchema = z
	.object({
		id: z.string(),
		subscription_id: z.string(),
		daily_meal_category_id: z.string(),
		daily_meal_category_price_id: z.string(),
		first_name: z.string(),
		last_name: z.string(),
		telephone: z.string(),
		restaurant_comment: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		subscription: DailyMealSubscriptionResponseSchema,
		daily_meal_instances: z.array(DailyMealInstanceResponseSchema),
		daily_meal_categories: DailyMealCategoryResponseSchema.nullable().optional(),
		daily_meal_category_price: DailyMealCategoryPriceResponseSchema,
	})
	.openapi('DailyMealSubscriptionCustomerResponse');

export type DailyMealSubscriptionCustomerResponse = z.infer<typeof DailyMealSubscriptionCustomerResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealSubscriptionCustomer', CreateDailyMealSubscriptionCustomerSchema);
	registry.register('UpdateDailyMealSubscriptionCustomer', UpdateDailyMealSubscriptionCustomerSchema);
	registry.register('DailyMealSubscriptionCustomerResponse', DailyMealSubscriptionCustomerResponseSchema);
}
