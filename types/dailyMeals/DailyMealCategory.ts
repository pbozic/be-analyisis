import { z } from 'zod';

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

export type DailyMealCategoryPrice = {
	daily_meal_category_prices_id: string;
	daily_meal_category_id: string;
	price: number;
	valid_from: string;
	created_at: string;
};

export type DailyMealCategory = {
	daily_meal_category_id: string;
	business_id: string;
	category_id: string;
	created_at: string;
	start_date: string;
	category?: {
		categories_id: string;
		name: string;
		description?: string | null;
		type: string;
	};
	daily_meal_category_prices?: DailyMealCategoryPrice[];
};
