import type { DailyMealSubscriptionWithIncludesPrisma } from '../../../prisma/includes/dailyMealSubscriptions.js';
import { DailyMealSubscriptionDetail, DailyMealSubscriptionDetailSchema } from '../DailyMeal/dailymeal.dto.js';
import { toUserResponse } from '../User/user.mappers.ts';
import { toDriverDetail } from '../Driver/driver.mappers.ts';
import { toAddressResponse } from '../Address/address.mappers.ts';
import { toPaymentResponse } from '../Payments/payments.mappers.ts';
import { DailyMealSubscriptionBase, DailyMealSubscriptionBaseSchema } from './dailymealSubscription.dto.ts';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toDailyMealSubscriptionBase(row: DailyMealSubscriptionWithIncludesPrisma): DailyMealSubscriptionBase {
	return DailyMealSubscriptionBaseSchema.parse({
		id: row.id,
		user_id: row.user_id,
		daily_meals_id: row.daily_meals_id,
		delivery_address_id: row.delivery_address_id,
		driver_id: row.driver_id,
		start_date: toIso(row.start_date) ?? new Date().toISOString(),
		end_date: row.end_date ? toIso(row.end_date) : null,
		type: row.type,
		status: row.status,
		courier_comment: row.courier_comment ?? null,
		created_at: toIso(row.created_at) ?? new Date().toISOString(),
		updated_at: toIso(row.updated_at) ?? new Date().toISOString(),
	});
}

export function toDailyMealSubscriptionResponse(
	row: DailyMealSubscriptionWithIncludesPrisma | any
): DailyMealSubscriptionDetail {
	const r = row as any;

	const user = r.user ? toUserResponse(r.user) : null;
	const driver = r.driver ? toDriverDetail(r.driver) : null;
	const delivery_address = r.delivery_address ? toAddressResponse(r.delivery_address) : null;
	const payment = r.payment ? toPaymentResponse(r.payment) : null;
	// For arrays (customers, days, weekdays, instances, promo_analytics) keep raw until dedicated DTOs exist.
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
		user,
		driver,
		delivery_address,
		daily_meals_module: r.daily_meals_module ?? null,
		customers: r.customers ?? [],
		days: r.days ?? [],
		weekdays: r.weekdays ?? [],
		daily_meal_instances: r.daily_meal_instances ?? [],
		payment,
		promo_analytics: r.promo_analytics ?? [],
	});
}

export function toDailyMealSubscriptionList(
	rows: (DailyMealSubscriptionWithIncludesPrisma | any)[]
): DailyMealSubscriptionDetail[] {
	return (rows || []).map((r) => toDailyMealSubscriptionResponse(r));
}

export default { toDailyMealSubscriptionBase, toDailyMealSubscriptionResponse, toDailyMealSubscriptionList };
