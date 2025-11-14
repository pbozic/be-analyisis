import { DeliveryDriverDetailSchema, DeliveryDriverRefSchema } from './deliveryDriver.dto.js';
import type { DeliveryDriverDetail, DeliveryDriverRef } from './deliveryDriver.dto.js';

// ===============
// Mappers
// ===============
type PrismaDeliveryDriver = {
	delivery_driver_id: string;
	user_id: string;
	online?: boolean;
	on_order?: boolean;
	delivers_daily_meals?: boolean;
	working_hours?: Record<string, unknown> | null;
	business_id?: string | null;
	location?: Record<string, unknown> | null;
	delivery_timeline?: Record<string, unknown> | null;
	last_ping_at?: string | Date | null;
	on_daily_meals?: boolean;
	is_inactive?: boolean;
	scheduled_meals_route?: Record<string, unknown> | null;
	regions?: Record<string, unknown> | null;
	partner_cash_balance?: number;
	daily_meal_business_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	vehicles?: Array<unknown>;
	business?: unknown | null;
	daily_meal_business?: unknown | null;
};

export function toDeliveryDriverDetail(row: unknown): DeliveryDriverDetail {
	const r = row as PrismaDeliveryDriver;

	return DeliveryDriverDetailSchema.parse({
		delivery_driver_id: r.delivery_driver_id,
		user_id: r.user_id,
		online: r.online ?? undefined,
		on_order: r.on_order ?? undefined,
		delivers_daily_meals: r.delivers_daily_meals ?? undefined,
		working_hours: r.working_hours ?? null,
		business_id: r.business_id ?? null,
		location: r.location ?? null,
		delivery_timeline: r.delivery_timeline ?? null,
		last_ping_at: r.last_ping_at ? new Date(r.last_ping_at as string | Date).toISOString() : undefined,
		on_daily_meals: r.on_daily_meals ?? undefined,
		is_inactive: r.is_inactive ?? undefined,
		scheduled_meals_route: r.scheduled_meals_route ?? null,
		regions: r.regions ?? null,
		partner_cash_balance: r.partner_cash_balance ?? undefined,
		daily_meal_business_id: r.daily_meal_business_id ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		vehicles: Array.isArray(r.vehicles) ? (r.vehicles as Array<Record<string, unknown>>) : [],
		user: r.user ? (r.user as Record<string, unknown>) : null,
		business: r.business ? (r.business as Record<string, unknown>) : null,
		daily_meal_business: r.daily_meal_business ? (r.daily_meal_business as Record<string, unknown>) : null,
	});
}

export function toDeliveryDriverRef(row: unknown): DeliveryDriverRef {
	const r = row as PrismaDeliveryDriver;
	return DeliveryDriverRefSchema.parse({
		delivery_driver_id: r.delivery_driver_id,
		user_id: r.user_id,
		online: r.online ?? undefined,
		on_order: r.on_order ?? undefined,
	});
}
