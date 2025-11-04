import { z } from 'zod';

import type { Category } from '../menus/Category.js';
import type { DailyMealsModule } from './DailyMealsModule.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { DailyMealSubscriptionCustomer } from './DailyMealSubscriptionCustomer.js';
import type { DailyMealCategoryPrice } from './DailyMealCategoryPrice.js';

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
