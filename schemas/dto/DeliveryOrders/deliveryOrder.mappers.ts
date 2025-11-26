import { MODULE } from '@prisma/client';

import { DeliveryOrderDetailSchema, DeliveryOrderRefSchema } from './deliveryOrder.dto.js';
import type { DeliveryOrderDetail, DeliveryOrderRef } from './deliveryOrder.dto.js';
import { toUserResponse } from '../User/user.mappers.ts';
import { toBusinessMinimalResponse } from '../Business/business.mappers.ts';
import { toDriverDetail } from '../Driver/driver.mappers.ts';
import { toLineItemDetail } from '../LineItems/lineItems.mappers.ts';

// ===============
// Mappers
// ===============
type PrismaDeliveryOrder = {
	order_id: string;
	user_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	driver_id?: string | null;
	vehicle_id?: string | null;
	order_number?: number;
	status: string;
	details?: Record<string, unknown> | null;
	estimates?: Record<string, unknown> | null;
	timeline?: Array<Record<string, unknown>>;
	route?: Array<unknown>;
	delivery_location?: Record<string, unknown> | null;
	pickup_location?: Record<string, unknown> | null;
	scheduled_at?: Date | null;
	payment?: Record<string, unknown> | null;
	payment_intent_id?: string | null;
	is_daily_meal?: boolean;
	courier_instructions?: string | null;
	restaurant_message?: string | null;
	last_sent_at?: string | Date | null;
	find_drivers_attempts?: number | null;
	allow_credits_usage?: boolean;
	business_local_location_id?: string | null;
	file_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	business?: unknown;
	driver?: unknown;
	items?: Array<Record<string, unknown>>;
};

export function toDeliveryOrderDetail(row: unknown): DeliveryOrderDetail {
	const r = row as PrismaDeliveryOrder;

	return DeliveryOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id,
		module_id: r.stores_id || r.food_drinks_id,
		module_type: r.stores_id ? MODULE.STORES : MODULE.FOOD_DRINKS,
		driver_id: r.driver_id ?? null,
		vehicle_id: r.vehicle_id ?? null,
		order_number: r.order_number ?? undefined,
		status: r.status,
		details: r.details ?? null,
		estimates: r.estimates ?? null,
		timeline: r.timeline ?? [],
		route: r.route ?? [],
		delivery_location: r.delivery_location ?? null,
		pickup_location: r.pickup_location ?? null,
		scheduled_at: r.scheduled_at ? new Date(r.scheduled_at as string | Date).toISOString() : null,
		payment: r.payment ?? null,
		payment_intent_id: r.payment_intent_id ?? null,
		is_daily_meal: r.is_daily_meal ?? undefined,
		courier_instructions: r.courier_instructions ?? null,
		restaurant_message: r.restaurant_message ?? null,
		items: Array.isArray(r.items) ? r.items.map((it) => toLineItemDetail(it)) : [],
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		find_drivers_attempts: r.find_drivers_attempts ?? undefined,
		allow_credits_usage: r.allow_credits_usage ?? undefined,
		business_local_location_id: r.business_local_location_id ?? null,
		file_id: r.file_id ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: r.user ? toUserResponse(r.user as any) : null,
		business: r.business ? toBusinessMinimalResponse(r.business as any) : null,
		driver: r.driver ? toDriverDetail(r.driver as any) : null,
	});
}

export function toDeliveryOrderRef(row: unknown): DeliveryOrderRef {
	const r = row as PrismaDeliveryOrder;
	return DeliveryOrderRefSchema.parse({
		order_id: r.order_id,
		order_number: r.order_number ?? undefined,
		status: r.status,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
	});
}
