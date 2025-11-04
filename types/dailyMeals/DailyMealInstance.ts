import { DAILY_MEAL_INSTANCE_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { DailyMealSubscriptionCustomer } from './DailyMealSubscriptionCustomer.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { DailyMealSubscriptionCustomerResponseSchema } from './DailyMealSubscriptionCustomer';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { DailyMealCategoryPriceResponseSchema } from './DailyMealCategoryPrice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDailyMealInstanceSchema = z
	.object({
		id: z.string().uuid(),
		subscription_id: z.string().uuid(),
		subscription_customer_id: z.string().uuid(),
		menu_category_id: z.string().uuid(),
		status: z.nativeEnum(DAILY_MEAL_INSTANCE_STATUS),
		intended_date: z.unknown(),
		delivery_date: z.unknown(),
		daily_meal_category_price_id: z.string().uuid(),
	})
	.openapi('CreateDailyMealInstance');

export type CreateDailyMealInstanceInput = z.infer<typeof CreateDailyMealInstanceSchema>;

export const UpdateDailyMealInstanceSchema = CreateDailyMealInstanceSchema.partial().openapi('UpdateDailyMealInstance');
export type UpdateDailyMealInstanceInput = z.infer<typeof UpdateDailyMealInstanceSchema>;

export const DailyMealInstanceResponseSchema = z
	.object({
		id: z.string(),
		subscription_id: z.string(),
		subscription_customer_id: z.string(),
		menu_category_id: z.string(),
		status: z.nativeEnum(DAILY_MEAL_INSTANCE_STATUS),
		intended_date: z.string().datetime(),
		delivery_date: z.string().datetime(),
		daily_meal_category_price_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		subscription: DailyMealSubscriptionResponseSchema,
		customer: DailyMealSubscriptionCustomerResponseSchema,
		menu_category: MenuCategoryResponseSchema,
		daily_meal_category_price: DailyMealCategoryPriceResponseSchema,
	})
	.openapi('DailyMealInstanceResponse');

export type DailyMealInstanceResponse = z.infer<typeof DailyMealInstanceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealInstance', CreateDailyMealInstanceSchema);
	registry.register('UpdateDailyMealInstance', UpdateDailyMealInstanceSchema);
	registry.register('DailyMealInstanceResponse', DailyMealInstanceResponseSchema);
}

export type DailyMealInstance = {
	id: string;
	subscription_id: string;
	subscription_customer_id: string;
	menu_category_id: string;
	status: DAILY_MEAL_INSTANCE_STATUS;
	intended_date: Date;
	delivery_date: Date;
	daily_meal_category_price_id: string;
	created_at: Date;
	updated_at: Date;
	subscription?: DailyMealSubscription;
	customer?: DailyMealSubscriptionCustomer;
	menu_category?: MenuCategory;
	daily_meal_category_price?: DailyMealCategoryPrice;
};
