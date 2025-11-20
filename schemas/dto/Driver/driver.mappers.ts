import { DriverDetailSchema, type DriverDetail } from './driver.dto.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import { TransportModuleBase } from '../Transport/transport.dto.js';
import { DailyMealsModule } from '../Business';

// ===============
// Mappers
// ===============
type PrismaDriver = {
	driver_id: string;
	user_id: string;
	online?: boolean;
	on_order?: boolean;
	last_ping_at?: string | Date | null;
	location?: Record<string, unknown> | null;
	ride_requirements?: Record<string, unknown> | null;
	handles_taxi_orders?: boolean;
	handles_transfer_orders?: boolean;
	handles_delivery_orders?: boolean;
	handles_courier_orders?: boolean;
	taxi_orders_toggled?: boolean;
	transfer_orders_toggled?: boolean;
	delivery_orders_toggled?: boolean;
	courier_orders_toggled?: boolean;
	transport_module_id?: string | null;
	transport_module?: TransportModuleBase | null;
	last_used_vehicle_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	user?: unknown;
	vehicles?: Array<unknown>;
	current_vehicle?: unknown | null;
	daily_meals?: DailyMealsModule | null;
};

type VehicleLike = {
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
		class: v.class as (typeof VehicleBaseSchema)['_type']['class'],
		category: v.category as (typeof VehicleBaseSchema)['_type']['category'],
		make: v.make ?? null,
		model: v.model ?? null,
		color: v.color ?? null,
		license_plate: v.license_plate ?? null,
		business_premise_id: v.business_premise_id ?? null,
		created_at: v.created_at ? new Date(v.created_at as string | Date).toISOString() : undefined,
		updated_at: v.updated_at ? new Date(v.updated_at as string | Date).toISOString() : undefined,
	});
}

export function toDriverDetail(row: unknown, user?: unknown): DriverDetail {
	const r = row as PrismaDriver;
	const currentVehicle = r.current_vehicle ? toVehicleBase(r.current_vehicle) : null;
	const vehicles = Array.isArray(r.vehicles) ? r.vehicles.map((v) => toVehicleBase(v)!).filter(Boolean) : [];
	return DriverDetailSchema.parse({
		driver_id: r.driver_id,
		user_id: r.user_id,
		online: r.online ?? undefined,
		on_order: r.on_order ?? undefined,
		last_ping_at: r.last_ping_at ? new Date(r.last_ping_at as string | Date).toISOString() : undefined,
		location: r.location ?? null,
		ride_requirements: r.ride_requirements ?? null,
		handles_taxi_orders: r.handles_taxi_orders ?? undefined,
		handles_transfer_orders: r.handles_transfer_orders ?? undefined,
		handles_delivery_orders: r.handles_delivery_orders ?? undefined,
		handles_courier_orders: r.handles_courier_orders ?? undefined,
		taxi_orders_toggled: r.taxi_orders_toggled ?? undefined,
		transfer_orders_toggled: r.transfer_orders_toggled ?? undefined,
		delivery_orders_toggled: r.delivery_orders_toggled ?? undefined,
		courier_orders_toggled: r.courier_orders_toggled ?? undefined,
		business_id: r.transport_module?.business_id ?? null,
		transport_module_id: r.transport_module_id ?? null,
		last_used_vehicle_id: r.last_used_vehicle_id ?? null,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: user || (r as { user?: unknown }).user,
		current_vehicle: currentVehicle,
		vehicles,
		daily_meals: r.daily_meals ?? undefined,
	});
}
