import { DailyMealCategoryPriceBaseSchema, DailyMealCategoryDetailSchema } from './dailyMealCategory.js';
import type { DailyMealCategoryPriceBase, DailyMealCategoryDetail } from './dailyMealCategory.js';
import type { DailyMealCategoryWithPricesPrisma } from '../../../prisma/includes/dailyMealCategory.js';
import { CategoryBase, CategoryBaseSchema } from '../Category/category.dto.js';

// =======================
// Mappers from daily-meal-category.dto.ts
// =======================
type PrismaDailyMealCategoryPrice = {
	id?: string;
	daily_meal_category_id: string;
	price: number;
	valid_from: string | Date;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

export function toDailyMealCategoryPriceBase(row: unknown): DailyMealCategoryPriceBase {
	const r = row as PrismaDailyMealCategoryPrice;
	console.log('Price in toDailyMealCategoryPriceBase:', r);
	return DailyMealCategoryPriceBaseSchema.parse({
		id: r.id ?? undefined,
		daily_meal_category_id: r.daily_meal_category_id,
		price: r.price,
		valid_from: r.valid_from ? new Date(r.valid_from as string | Date).toISOString() : new Date().toISOString(),
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

type PrismaDailyMealCategory = {
	daily_meal_category_id: string;
	daily_meals_id: string;
	category_id: string;
	start_date: string | Date;
	active?: boolean | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	category?: CategoryBase | null;
	daily_meal_category_prices?: PrismaDailyMealCategoryPrice[];
};

export function toDailyMealCategoryDetail(row: unknown): DailyMealCategoryDetail {
	const r = row as PrismaDailyMealCategory;
	const prices = Array.isArray(r.daily_meal_category_prices)
		? r.daily_meal_category_prices.map((p: unknown) => toDailyMealCategoryPriceBase(p))
		: [];
	console.log('Category in toDailyMealCategoryDetail:', r.category);
	const category = r.category
		? {
				categories_id: r.category.categories_id,
				name: r.category.name ?? undefined,
				dessription: r.category.description ?? undefined,
				tag: r.category.tag ?? undefined,
				category_type: r.category.category_type ?? undefined,
				icon_file_id: r.category.icon_file_id ?? undefined,
				translatable_id: r.category.translatable_id ?? undefined,
				parent_categories_id: r.category.parent_categories_id ?? undefined,
				created_at: r.category.created_at
					? new Date(r.category.created_at as string | Date).toISOString()
					: new Date().toISOString(),
				updated_at: r.category.updated_at
					? new Date(r.category.updated_at as string | Date).toISOString()
					: undefined,
			}
		: undefined;
	return DailyMealCategoryDetailSchema.parse({
		daily_meal_category_id: r.daily_meal_category_id,
		daily_meals_id: r.daily_meals_id,
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

	const cat = {
		...r.category,
		created_at: toIso(r.category.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.category.updated_at) ?? new Date().toISOString(),
		deleted_at: r.category.deleted_at ? toIso(r.category.deleted_at) : null,
	};

	return DailyMealCategoryDetailSchema.parse({
		daily_meal_category_id: r.daily_meal_category_id,
		daily_meals_id: r.daily_meals_id,
		category_id: r.category_id,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		start_date: toIso(r.start_date) ?? new Date().toISOString(),
		active: !!r.active,
		category: cat ? CategoryBaseSchema.parse(cat) : undefined,
		daily_meals_module: r.daily_meals_module ?? null,
		menu_categories: Array.isArray(r.menu_categories)
			? r.menu_categories.map((mc: any) => ({ menu_categories_id: mc.menu_categories_id, name: mc.name }))
			: [],
		daily_meal_subscription_customers: Array.isArray(r.daily_meal_subscription_customers)
			? r.daily_meal_subscription_customers.map((c: any) => ({
					id: c.id ?? c.daily_meal_subscription_customers_id,
				}))
			: [],
		id: r.id ?? null,
		daily_meal_category_prices: (r.daily_meal_category_prices || []).map((p: any) => ({
			id: p.id,
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
