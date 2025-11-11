import { DailyMealCategoryResponseSchema } from '../../../types/dailyMeals/DailyMealCategory';
import type { DailyMealCategoryResponse } from '../../../types/dailyMeals/DailyMealCategory';
import type { DailyMealCategoryWithPricesPrisma } from '../../../prisma/includes/dailyMealCategory.js';

function toIso(d: unknown) {
    return d ? new Date(d as any).toISOString() : undefined;
}

export function toDailyMealCategoryResponse(row: DailyMealCategoryWithPricesPrisma | any): DailyMealCategoryResponse {
    const r = row as any;

    return DailyMealCategoryResponseSchema.parse({
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
        daily_meal_category_prices: (r.daily_meal_category_prices || []).map((p: any) => ({
            daily_meal_category_price_id: p.daily_meal_category_price_id,
            daily_meal_category_id: p.daily_meal_category_id,
            price: p.price,
            valid_from: toIso(p.valid_from) ?? new Date().toISOString(),
            created_at: toIso(p.created_at) ?? new Date().toISOString(),
        })),
    });
}

export function toDailyMealCategoryList(rows: (DailyMealCategoryWithPricesPrisma | any)[]): DailyMealCategoryResponse[] {
    return (rows || []).map((r) => toDailyMealCategoryResponse(r));
}

export default { toDailyMealCategoryResponse, toDailyMealCategoryList };
