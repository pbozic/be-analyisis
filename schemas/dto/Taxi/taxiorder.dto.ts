import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { DriverBaseSchema } from '../Drivers/driver.dto.ts';
import type { DriverBase } from '../Drivers/driver.dto.ts';
import type { VehicleBase } from '../Vehicles/vehicle.dto';

extendZodWithOpenApi(z);

// -----------------------
// Small helper schemas
// -----------------------
export const CoordinatesSchema = z
	.object({
		latitude: z.number().openapi({ example: 46.056946 }),
		longitude: z.number().openapi({ example: 14.505751 }),
	})
	.openapi('TaxiCoordinates');

export const LocationSchema = z
	.object({
		address: z.string().optional().openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana' }),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi('TaxiLocation');

export const FileUploadSchema = z
	.object({
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
		mime_type: z.string().openapi({ example: 'image/png' }),
	})
	.openapi('TaxiFileUpload');

// -----------------------
// Generic small request schemas
// -----------------------
export const IdOnlySchema = z
	.object({ order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('TaxiOrderId');

export const IdAndStatusSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		status: z.string().openapi({ example: 'TAXI_CANCELED' }),
		cancellation_reason: z
			.union([z.string(), z.array(z.object({ value: z.string() }))])
			.optional()
			.openapi({ example: 'User canceled due to schedule change' }),
	})
	.openapi('TaxiIdAndStatus');

export const IdAndDriverSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		driver_id: z.string().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('TaxiIdAndDriver');

// -----------------------
// Create / Dispatch order schemas
// -----------------------
// The taxi create order payload is complex; we capture the common fields used by the controller
export const TaxiPreferencesSchema = z
	.object({
		vehicle_class: z.string().optional().openapi({ example: 'VAN' }),
		vehicle_category: z.string().optional().openapi({ example: 'STANDARD' }),
		adults: z.number().int().optional().openapi({ example: 1 }),
		children_under_140: z.number().int().optional().openapi({ example: 0 }),
		departure_date: z.string().datetime().optional().nullable(),
		departure_time: z.string().optional(),
		repeat_ride: z.array(z.any()).optional(),
		repeat_duration: z.array(z.any()).optional(),
		ride_requirements: z.any().optional(),
		// allow other preference fields through
	})
	.passthrough()
	.openapi('TaxiPreferences');

export const TaxiPaymentSchema = z
	.object({
		type: z.string().openapi({ example: 'CARD' }),
		price: z.number().optional().openapi({ example: 12.5 }),
		payment_method_id: z.string().optional().openapi({ example: 'pm_1J...' }),
		subtype: z.string().optional().openapi({ example: 'BUSINESS' }),
		extras: z.any().optional(),
		// allow provider-specific fields
	})
	.passthrough()
	.openapi('TaxiPayment');

export const CreateTaxiOrderSchema = z
	.object({
		// lightweight set of fields controller reads directly
		user_id: z.string().uuid().optional(),
		first_name: z.string().optional(),
		last_name: z.string().optional(),
		telephone: z.string().optional(),
		return_url: z.string().url().optional(),
		type: z.string().optional(),
		subtype: z.string().optional(),
		preferences: TaxiPreferencesSchema.optional(),
		pickup_location: LocationSchema.optional(),
		delivery_location: LocationSchema.optional(),
		route: z.array(LocationSchema).optional(),
		payment: TaxiPaymentSchema.optional(),
		business_user: z.any().optional(),
		business_client: z.any().optional(),
		cargo_preferences: z.any().optional(),
		flags: z.any().optional(),
		is_scheduled: z.boolean().optional(),
		estimates: z.any().optional(),
		// allow additional order fields without strict typing
	})
	.passthrough()
	.openapi('CreateTaxiOrder');

export const CreateDispatchOrderSchema = CreateTaxiOrderSchema.openapi('CreateDispatchOrder');

// -----------------------
// Preferences update
// -----------------------
export const UpdateTaxiOrderPreferencesSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		vehicle_category: z.string().optional(),
		vehicle_class: z.string().optional(),
		ride_requirements: z.any().optional(),
	})
	.openapi('UpdateTaxiOrderPreferences');

// -----------------------
// Route / location / timeline / payment
// -----------------------
export const UpdateRouteSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		route: z
			.array(LocationSchema)
			.openapi({ example: [{ address: 'A', coordinates: { latitude: 46, longitude: 14 } }] }),
	})
	.openapi('UpdateTaxiOrderRoute');

export const UpdatePickupLocationSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		pickup_location: LocationSchema,
	})
	.openapi('UpdateTaxiOrderPickupLocation');

export const UpdateDeliveryLocationSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		delivery_location: LocationSchema,
	})
	.openapi('UpdateTaxiOrderDeliveryLocation');

export const UpdateCompleteRouteSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		route: z.array(LocationSchema),
	})
	.openapi('UpdateTaxiOrderCompleteRoute');

export const UpdateTimelineSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		timeline: z
			.array(z.any())
			.openapi({ example: [{ status: 'ORDER_PHOTO', location: { timestamp: new Date().toISOString() } }] }),
	})
	.openapi('UpdateTaxiOrderTimeline');

export const UpdatePaymentSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		payment: TaxiPaymentSchema,
	})
	.openapi('UpdateTaxiOrderPayment');

// -----------------------
// File upload schema (signature/photo) — controller expects path param + body.file
// -----------------------
export const TaxiFileBodySchema = z
	.object({
		file: FileUploadSchema,
	})
	.openapi('TaxiFileBody');

// -----------------------
// Pagination / filters
// -----------------------
export const TaxiPaginationSchema = z
	.object({
		where: z.any().optional(),
		orderBy: z.any().optional(),
		page: z.number().int().optional().default(1),
		take: z.number().int().optional().default(8),
	})
	.openapi('TaxiPagination');

// -----------------------
// Transfer price calculation
// -----------------------
export const TransferPriceRequestSchema = z
	.object({
		pickup_location: LocationSchema.optional(),
		delivery_location: LocationSchema.optional(),
		departure_time: z.string().optional(),
		route: z.array(LocationSchema).optional(),
		vehicle_category: z.string().optional(),
	})
	.openapi('TaxiTransferPriceRequest');

// -----------------------
// Types and register
// -----------------------
export type CreateTaxiOrder = z.infer<typeof CreateTaxiOrderSchema>;
export type CreateDispatchOrder = z.infer<typeof CreateDispatchOrderSchema>;
export type UpdateTaxiOrderPreferences = z.infer<typeof UpdateTaxiOrderPreferencesSchema>;
export type UpdateTaxiOrderRoute = z.infer<typeof UpdateRouteSchema>;

// =======================
// Responses
// =======================

export const DriverRefSchema = z.object({ driver_id: UUID }).openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

export const TaxiOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		type: z.string().nullable().optional(),
		subtype: z.string().nullable().optional(),
		status: z.string(),
		is_scheduled: z.boolean().optional(),
		order_number: z.number().int().optional(),
		route: z.unknown().nullable().optional(),
		pickup_location: z.unknown().nullable().optional(),
		delivery_location: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		payment: z.unknown().nullable().optional(),
		timeline: z.array(z.unknown()).optional().default([]),
		cancellation_reason: z.string().nullable().optional(),
		last_sent_at: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TaxiOrderBase');
export type TaxiOrderBase = z.infer<typeof TaxiOrderBaseSchema>;

export const TaxiOrderRefSchema = z
	.object({
		order_id: UUID,
		label: z.string().default('taxi_order'),
	})
	.openapi('TaxiOrderRef');
export type TaxiOrderRef = z.infer<typeof TaxiOrderRefSchema>;

export const TaxiOrderDetailSchema = TaxiOrderBaseSchema.extend({
	user: BasicUserDataSchema.nullable().optional(),
	driver: DriverBaseSchema.nullable().optional(),
	vehicle: VehicleBaseSchema.nullable().optional(),
	grouped_orders: z.array(TaxiOrderRefSchema).optional(),
}).openapi('TaxiOrderDetail');
export type TaxiOrderDetail = z.infer<typeof TaxiOrderDetailSchema>;

// ===============
// Mappers
// ===============
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
	return TaxiOrderRefSchema.parse({ order_id: r.order_id, label: 'taxi_order' });
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

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxiCoordinates', CoordinatesSchema);
	registry.register('TaxiLocation', LocationSchema);
	registry.register('TaxiFileUpload', FileUploadSchema);

	registry.register('TaxiOrderId', IdOnlySchema);
	registry.register('TaxiIdAndStatus', IdAndStatusSchema);
	registry.register('TaxiIdAndDriver', IdAndDriverSchema);

	registry.register('CreateTaxiOrder', CreateTaxiOrderSchema);
	registry.register('CreateDispatchOrder', CreateDispatchOrderSchema);
	registry.register('UpdateTaxiOrderPreferences', UpdateTaxiOrderPreferencesSchema);

	registry.register('UpdateTaxiOrderRoute', UpdateRouteSchema);
	registry.register('UpdateTaxiOrderPickupLocation', UpdatePickupLocationSchema);
	registry.register('UpdateTaxiOrderDeliveryLocation', UpdateDeliveryLocationSchema);
	registry.register('UpdateTaxiOrderCompleteRoute', UpdateCompleteRouteSchema);
	registry.register('UpdateTaxiOrderTimeline', UpdateTimelineSchema);
	registry.register('UpdateTaxiOrderPayment', UpdatePaymentSchema);

	registry.register('TaxiFileBody', TaxiFileBodySchema);
	registry.register('TaxiPagination', TaxiPaginationSchema);
	registry.register('TaxiTransferPriceRequest', TransferPriceRequestSchema);

	registry.register('DriverRef', DriverRefSchema);
	registry.register('TaxiOrderBase', TaxiOrderBaseSchema);
	registry.register('TaxiOrderRef', TaxiOrderRefSchema);
	registry.register('TaxiOrderDetail', TaxiOrderDetailSchema);
}
