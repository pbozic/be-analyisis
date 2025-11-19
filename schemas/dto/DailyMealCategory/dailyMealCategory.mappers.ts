import { z } from 'zod';

import { DailyMealCategoryPriceBaseSchema, DailyMealCategoryDetailSchema } from './dailyMealCategory.js';
import type { DailyMealCategoryPriceBase, DailyMealCategoryDetail } from './dailyMealCategory.js';
import type { DailyMealCategoryWithPricesPrisma } from '../../../prisma/includes/dailyMealCategory.js';
import { CategoryRefSchema } from '../Category/category.dto.js';
// =======================
// Mappers from daily-meal-category.dto.ts
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
// Mappers from dailyMealCategory.mappers.ts (legacy)
// =======================
function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toDailyMealCategoryResponse(row: DailyMealCategoryWithPricesPrisma | any): DailyMealCategoryDetail {
	const r = row as any;

	return DailyMealCategoryDetailSchema.parse({
		daily_meal_category_id: r.daily_meal_category_id,
		daily_meals_id: r.daily_meals_id,
		category_id: r.category_id,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		start_date: toIso(r.start_date) ?? new Date().toISOString(),
		active: !!r.active,
		category: r.category ?? null,
		daily_meals_module: r.daily_meals_module ?? null,
		menu_categories: r.menu_categories ?? [],
		daily_meal_subscription_customers: r.daily_meal_subscription_customers ?? [],
		daily_meal_category_prices_id: r.daily_meal_category_prices_id ?? null,
		daily_meal_category_prices: (r.daily_meal_category_prices || []).map((p: any) => ({
			daily_meal_category_price_id: p.daily_meal_category_price_id,
			daily_meal_category_id: p.daily_meal_category_id,
			price: p.price,
			valid_from: toIso(p.valid_from) ?? new Date().toISOString(),
			created_at: toIso(p.created_at) ?? new Date().toISOString(),
		})),
	});
}

export function toDailyMealCategoryList(rows: (DailyMealCategoryWithPricesPrisma | any)[]): DailyMealCategoryDetail[] {
	return (rows || []).map((r) => toDailyMealCategoryResponse(r));
}

export default { toDailyMealCategoryResponse, toDailyMealCategoryList };
