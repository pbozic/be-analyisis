import { TaxiOrderRefSchema, TaxiOrderDetailSchema } from './taxiorder.dto.js';
import type { TaxiOrderRef, TaxiOrderDetail } from './taxiorder.dto.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import type { VehicleBase } from '../Vehicles/vehicle.dto.js';
import { DriverBaseSchema, type DriverBase } from '../Driver/index.js';

type PrismaTaxiOrder = {
	order_id: string;
	user_id?: string | null;
	driver_id?: string | null;
	vehicle_id?: string | null;
	type?: string | null;
	subtype?: string | null;
	status: string;
	is_scheduled?: boolean;
	order_number?: number;
	route?: unknown | null;
	pickup_location?: unknown | null;
	delivery_location?: unknown | null;
	estimates?: unknown | null;
	payment?: unknown | null;
	timeline?: unknown[];
	cancellation_reason?: string | null;
	last_sent_at?: string | Date | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	grouped_orders?: Array<{ order_id: string }>;
	user?: unknown;
	driver?: { driver_id: string } | null;
	vehicle?: unknown | null;
};

export function toTaxiOrderRef(row: unknown): TaxiOrderRef {
	const r = row as { order_id: string };
	return TaxiOrderRefSchema.parse({ order_id: r.order_id });
}

// Local mapper to VehicleBase (normalize timestamps if present)
type VehicleLike = Partial<VehicleBase> & {
	vehicle_id?: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: unknown;
	category?: unknown;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	business_premise_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

function toVehicleBase(row: unknown | null | undefined) {
	if (!row) return null;
	const v = row as VehicleLike;
	return VehicleBaseSchema.parse({
		vehicle_id: v.vehicle_id as string,
		transport_module_id: v.transport_module_id ?? null,
		active: v.active ?? null,
		class: v.class as VehicleBase['class'],
		category: v.category as VehicleBase['category'],
		make: v.make ?? null,
		model: v.model ?? null,
		color: v.color ?? null,
		license_plate: v.license_plate ?? null,
		business_premise_id: v.business_premise_id ?? null,
		created_at: v.created_at ? new Date(v.created_at as string | Date).toISOString() : undefined,
		updated_at: v.updated_at ? new Date(v.updated_at as string | Date).toISOString() : undefined,
	});
}

// Local mapper to DriverBase (normalize timestamps if present)
type DriverLike = Partial<DriverBase> & {
	driver_id?: string;
	user_id?: string;
	last_ping_at?: string | Date | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
};

function toDriverBase(row: unknown | null | undefined) {
	if (!row) return null;
	const d = row as DriverLike & Record<string, unknown>;
	return DriverBaseSchema.parse({
		driver_id: d.driver_id as string,
		user_id: d.user_id as string,
		online: d.online as boolean | undefined,
		on_order: d.on_order as boolean | undefined,
		last_ping_at: d.last_ping_at ? new Date(d.last_ping_at as string | Date).toISOString() : undefined,
		location: (d.location as Record<string, unknown> | null | undefined) ?? null,
		ride_requirements: (d.ride_requirements as Record<string, unknown> | null | undefined) ?? null,
		handles_taxi_orders: d.handles_taxi_orders as boolean | undefined,
		handles_transfer_orders: d.handles_transfer_orders as boolean | undefined,
		handles_delivery_orders: d.handles_delivery_orders as boolean | undefined,
		taxi_orders_toggled: d.taxi_orders_toggled as boolean | undefined,
		transfer_orders_toggled: d.transfer_orders_toggled as boolean | undefined,
		delivery_orders_toggled: d.delivery_orders_toggled as boolean | undefined,
		business_id: (d.business_id as string | null | undefined) ?? null,
		transport_module_id: (d.transport_module_id as string | null | undefined) ?? null,
		daily_meal_business_id: (d.daily_meal_business_id as string | null | undefined) ?? null,
		last_used_vehicle_id: (d.last_used_vehicle_id as string | null | undefined) ?? null,
		created_at: d.created_at ? new Date(d.created_at as string | Date).toISOString() : undefined,
		updated_at: d.updated_at ? new Date(d.updated_at as string | Date).toISOString() : undefined,
	});
}

export function toTaxiOrderDetail(row: unknown): TaxiOrderDetail {
	const r = row as PrismaTaxiOrder;
	const grouped = Array.isArray(r.grouped_orders) ? r.grouped_orders.map((o) => toTaxiOrderRef(o)) : undefined;
	const vehicleBase = r.vehicle ? toVehicleBase(r.vehicle) : null;
	const driverBase = r.driver ? toDriverBase(r.driver) : null;
	return TaxiOrderDetailSchema.parse({
		order_id: r.order_id,
		user_id: r.user_id ?? null,
		driver_id: r.driver_id ?? null,
		vehicle_id: r.vehicle_id ?? null,
		type: r.type ?? null,
		subtype: r.subtype ?? null,
		status: r.status,
		is_scheduled: r.is_scheduled ?? undefined,
		order_number: r.order_number ?? undefined,
		route: r.route ?? null,
		pickup_location: r.pickup_location ?? null,
		delivery_location: r.delivery_location ?? null,
		estimates: r.estimates ?? null,
		payment: r.payment ?? null,
		timeline: r.timeline ?? [],
		cancellation_reason: r.cancellation_reason ?? null,
		last_sent_at: r.last_sent_at ? new Date(r.last_sent_at as string | Date).toISOString() : null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: (r as { user?: unknown } | undefined)?.user ?? null,
		driver: driverBase,
		vehicle: vehicleBase,
		grouped_orders: grouped,
	});
}
