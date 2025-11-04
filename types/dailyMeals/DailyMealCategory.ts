import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Category } from '../menus/Category.js';
import type { DailyMealsModule } from './DailyMealsModule.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealSubscriptionCustomer } from './DailyMealSubscriptionCustomer.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';
import { CategoryResponseSchema } from '../menus/Category';
import { DailyMealsModuleResponseSchema } from './DailyMealsModule';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { DailyMealSubscriptionCustomerResponseSchema } from './DailyMealSubscriptionCustomer';
import { DailyMealCategoryPriceResponseSchema } from './DailyMealCategoryPrice';

extendZodWithOpenApi(z);

// =======================
// DailyMealCategory Zod Schemas
// =======================

// For creating a DMC with price
export const CreateDailyMealCategoryWithPriceSchema = z.object({
	category_id: z.string().uuid(),
	price: z.number().int().min(0),
	start_date: z.string().datetime(),
});

// For adding a new price to an existing DMC
export const AddPriceToDailyMealCategorySchema = z.object({
	price: z.number().int().min(0),
	valid_from: z.string().datetime(),
});

// =======================
// Inferred Types from Schemas
// =======================

export type CreateDailyMealCategoryWithPriceInput = z.infer<typeof CreateDailyMealCategoryWithPriceSchema>;
export type AddPriceToDailyMealCategoryInput = z.infer<typeof AddPriceToDailyMealCategorySchema>;

// =======================
// Full DMC Types (from DB + schemas)
// =======================

export type DailyMealCategory = {
	daily_meal_category_id: string;
	daily_meals_id: string;
	category_id: string;
	created_at: Date;
	start_date: Date;
	active: boolean;
	category: Category;
	daily_meals_module: DailyMealsModule;
	menu_categories: MenuCategory[];
	daily_meal_subscription_customers: DailyMealSubscriptionCustomer[];
	daily_meal_category_prices: DailyMealCategoryPrice[];
};

export const CreateDailyMealCategorySchema = z
	.object({
		daily_meal_category_id: z.string().uuid(),
		daily_meals_id: z.string().uuid(),
		category_id: z.string().uuid(),
		start_date: z.unknown(),
		active: z.boolean(),
	})
	.openapi('CreateDailyMealCategory');

export type CreateDailyMealCategoryInput = z.infer<typeof CreateDailyMealCategorySchema>;

export const UpdateDailyMealCategorySchema = CreateDailyMealCategorySchema.partial().openapi('UpdateDailyMealCategory');
export type UpdateDailyMealCategoryInput = z.infer<typeof UpdateDailyMealCategorySchema>;

export const DailyMealCategoryResponseSchema = z
	.object({
		daily_meal_category_id: z.string(),
		daily_meals_id: z.string(),
		category_id: z.string(),
		created_at: z.string().datetime(),
		start_date: z.string().datetime(),
		active: z.boolean(),
		category: CategoryResponseSchema,
		daily_meals_module: DailyMealsModuleResponseSchema,
		menu_categories: z.array(MenuCategoryResponseSchema),
		daily_meal_subscription_customers: z.array(DailyMealSubscriptionCustomerResponseSchema),
		daily_meal_category_prices: z.array(DailyMealCategoryPriceResponseSchema),
	})
	.openapi('DailyMealCategoryResponse');

export type DailyMealCategoryResponse = z.infer<typeof DailyMealCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealCategory', CreateDailyMealCategorySchema);
	registry.register('UpdateDailyMealCategory', UpdateDailyMealCategorySchema);
	registry.register('DailyMealCategoryResponse', DailyMealCategoryResponseSchema);
}
