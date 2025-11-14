import type { DailyMealSubscriptionWithIncludesPrisma } from '../../../prisma/includes/dailyMealSubscriptions.js';
import { DailyMealSubscriptionDetail, DailyMealSubscriptionDetailSchema } from '../DailyMeal/dailymeal.dto.js';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toDailyMealSubscriptionResponse(
	row: DailyMealSubscriptionWithIncludesPrisma | any
): DailyMealSubscriptionDetail {
	const r = row as any;

	return DailyMealSubscriptionDetailSchema.parse({
		id: r.id,
		user_id: r.user_id,
		daily_meals_id: r.daily_meals_id,
		delivery_address_id: r.delivery_address_id,
		driver_id: r.driver_id ?? null,
		start_date: toIso(r.start_date) ?? new Date().toISOString(),
		end_date: r.end_date ? toIso(r.end_date) : null,
		type: r.type,
		status: r.status,
		courier_comment: r.courier_comment ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		user: r.user ?? null,
		driver: r.driver ?? null,
		delivery_address: r.delivery_address ?? null,
		daily_meals_module: r.daily_meals_module ?? null,
		customers: r.customers ?? [],
		days: r.days ?? [],
		weekdays: r.weekdays ?? [],
		daily_meal_instances: r.daily_meal_instances ?? [],
		payment: r.payment ?? null,
		promo_analytics: r.promo_analytics ?? [],
	});
}

export function toDailyMealSubscriptionList(
	rows: (DailyMealSubscriptionWithIncludesPrisma | any)[]
): DailyMealSubscriptionDetail[] {
	return (rows || []).map((r) => toDailyMealSubscriptionResponse(r));
}

export default { toDailyMealSubscriptionResponse, toDailyMealSubscriptionList };
