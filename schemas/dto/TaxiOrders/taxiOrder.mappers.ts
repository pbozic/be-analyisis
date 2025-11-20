import { UserPrisma } from '../../../prisma/includes/user.js';
import { toDriverDetail } from '../Driver/driver.mappers.js';
import { toUserResponse } from '../User/user.mappers.js';
import { toVehicleRef } from '../Vehicles/vehicle.mappers.js';
import { TaxiOrderDetailSchema, TaxiOrderRefSchema } from './taxiOrder.dto.js';
import type { TaxiOrderDetail, TaxiOrderRef } from './taxiOrder.dto.js';

// ===============
// Mappers
// ===============
type PrismaTaxiOrder = {
	order_id: string;
	user_id: string;
	driver_id?: string | null;
	vehicle_id?: string | null;
	business_id?: string | null;
	status: string;
	type?: string;
	subtype?: string | null;
	pickup_location?: Record<string, unknown> | null;
	delivery_location?: Record<string, unknown> | null;
	route?: Record<string, unknown> | null;
	complete_route?: Record<string, unknown> | null;
	distance?: number | null;
	duration?: number | null;
	price?: number | null;
	currency?: string | null;
	payment_method?: string | null;
	payment_status?: string | null;
	special_instructions?: string | null;
	passenger_count?: number | null;
	luggage_count?: number | null;
	scheduled_time?: string | Date | null;
	pickup_time?: string | Date | null;
	arrival_time?: string | Date | null;
	completion_time?: string | Date | null;
	cancellation_reason?: string | null;
	rating?: number | null;
	feedback?: string | null;
	tip_amount?: number | null;
	timeline?: Array<Record<string, unknown>>;
	// metadata?: Record<string, unknown> | null;
	last_sent_at?: string | Date | null;
	parent_order_id?: string | null;
	is_grouped?: boolean;
	group_index?: number | null;
	preferences?: Record<string, unknown> | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: UserPrisma | null;
	driver?: unknown;
	vehicle?: unknown;
	business?: unknown;
	grouped_orders?: Array<unknown>;
	payment?: Record<string, unknown> | null;
	details?: Record<string, unknown> | null;
};

export function toTaxiOrderDetail(row: unknown): TaxiOrderDetail {
	const r = row as PrismaTaxiOrder;

	return TaxiOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id,
		driver_id: r.driver_id ?? null,
		vehicle_id: r.vehicle_id ?? null,
		business_id: r.business_id ?? null,
		status: r.status,
		type: r.type ?? undefined,
		subtype: r.subtype ?? null,
		pickup_location: r.pickup_location ?? null,
		delivery_location: r.delivery_location ?? null,
		route: r.route ?? null,
		complete_route: r.complete_route ?? null,
		distance: r.distance ?? null,
		duration: r.duration ?? null,
		price: r.price ?? null,
		currency: r.currency ?? null,
		payment_method: r.payment_method ?? null,
		payment_status: r.payment_status ?? null,
		special_instructions: r.special_instructions ?? null,
		passenger_count: r.passenger_count ?? null,
		luggage_count: r.luggage_count ?? null,
		scheduled_time: r.scheduled_time ? new Date(r.scheduled_time as string | Date).toISOString() : null,
		pickup_time: r.pickup_time ? new Date(r.pickup_time as string | Date).toISOString() : null,
		arrival_time: r.arrival_time ? new Date(r.arrival_time as string | Date).toISOString() : null,
		completion_time: r.completion_time ? new Date(r.completion_time as string | Date).toISOString() : null,
		cancellation_reason: r.cancellation_reason ?? null,
		rating: r.rating ?? null,
		feedback: r.feedback ?? null,
		tip_amount: r.tip_amount ?? null,
		timeline: r.timeline ?? [],
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		parent_order_id: r.parent_order_id ?? null,
		is_grouped: r.is_grouped ?? undefined,
		group_index: r.group_index ?? null,
		preferences: r.preferences ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: r.user ? toUserResponse(r.user) : null,
		driver: r.driver ? toDriverDetail(r.driver) : null,
		vehicle: r.vehicle ? toVehicleRef(r.vehicle) : null,
		grouped_orders: r.grouped_orders ? r.grouped_orders.map(toTaxiOrderRef) : [],
		payment: r.payment ?? null,
		details: r.details ?? null,
	});
}

export function toTaxiOrderRef(row: unknown): TaxiOrderRef {
	const r = row as PrismaTaxiOrder;
	return TaxiOrderRefSchema.parse({
		order_id: r.order_id,
		status: r.status,
		type: r.type ?? undefined,
		price: r.price ?? null,
		pickup_location: r.pickup_location ?? null,
		delivery_location: r.delivery_location ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
	});
}
