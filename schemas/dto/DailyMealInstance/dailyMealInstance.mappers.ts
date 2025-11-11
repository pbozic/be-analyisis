import { DailyMealInstanceResponseSchema } from './dailyMealInstance.dto.js';
import type { DailyMealInstanceResponse } from './dailyMealInstance.dto.js';
import type { DailyMealInstanceWithIncludesPrisma } from '../../../prisma/includes/dailyMealInstance.js';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toDailyMealInstanceResponse(row: DailyMealInstanceWithIncludesPrisma | any): DailyMealInstanceResponse {
	const r = row as any;

	return DailyMealInstanceResponseSchema.parse({
		id: r.id,
		subscription_id: r.subscription_id,
		subscription_customer_id: r.subscription_customer_id,
		menu_category_id: r.menu_category_id,
		status: r.status,
		intended_date: toIso(r.intended_date) ?? new Date().toISOString(),
		delivery_date: toIso(r.delivery_date) ?? new Date().toISOString(),
		daily_meal_category_price_id: r.daily_meal_category_price_id,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		subscription: r.subscription ?? null,
		customer: r.customer ?? null,
		menu_category: r.menu_category ?? null,
		daily_meal_category_price: r.daily_meal_category_price ?? null,
	});
}

export function toDailyMealInstanceList(
	rows: (DailyMealInstanceWithIncludesPrisma | any)[]
): DailyMealInstanceResponse[] {
	return (rows || []).map((r) => toDailyMealInstanceResponse(r));
}

export default { toDailyMealInstanceResponse, toDailyMealInstanceList };
