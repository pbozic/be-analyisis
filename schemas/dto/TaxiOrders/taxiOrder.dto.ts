import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { TAXI_ORDER_STATUS, ORDER_TYPE, ORDER_SUBTYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { DriverBaseSchema } from '../Driver/index.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import { BusinessBaseSchema } from '../Business/business.js';
import { BusinessUserResponseSchema } from '../BusinessUser/businessUser.js';
import { UserWithParentUserResponseSchema } from '../User/user.js';

extendZodWithOpenApi(z);

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const TaxiOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID,
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		business_users_id: UUID.nullable().optional(),
		business_clients_id: UUID.nullable().optional(),
		status: z.nativeEnum(TAXI_ORDER_STATUS),
		type: z.nativeEnum(ORDER_TYPE).default('TAXI'),
		subtype: z.nativeEnum(ORDER_SUBTYPE).default('CREATED_BY_USER'),
		pickup_location: z.record(z.any()),
		delivery_location: z.record(z.any()).nullable().optional(),
		route: z.array(z.any()),
		payment: z.record(z.any()).nullable().optional(),
		estimates: z.record(z.any()).nullable().optional(),
		preferences: z.record(z.any()).nullable().optional(),
		timeline: z.array(z.record(z.any())).default([]),
		cancellation_reason: z.string().nullable().optional(),
		last_sent_at: Timestamp.nullable().optional(),
		parent_order_id: UUID.nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		telephone: z.string().nullable().optional(),
		creating_user_id: UUID.nullable().optional(),
		is_scheduled: z.boolean().default(false),
		cargo_preferences: z.record(z.any()).nullable().optional(),
		allow_credits_usage: z.boolean().default(false),
		find_drivers_attempts: z.number().nullable().default(0),
		parent_user_type: z.string().nullable().default(''),
		customer_note: z.string().nullable().optional(),
		order_number: z.number().default(0),
	})
	.openapi('TaxiOrderBase');

export type TaxiOrderBase = z.infer<typeof TaxiOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const TaxiOrderRefSchema = z
	.object({
		order_id: UUID,
		status: z.nativeEnum(TAXI_ORDER_STATUS),
		type: z.nativeEnum(ORDER_TYPE),
		pickup_location: z.record(z.any()),
		delivery_location: z.record(z.any()).nullable().optional(),
		created_at: Timestamp,
	})
	.openapi('TaxiOrderRef');

export type TaxiOrderRef = z.infer<typeof TaxiOrderRefSchema>;

// ===============
// Detail Schema (extends Base with relations)
// ===============
export const TaxiOrderDetailSchema = TaxiOrderBaseSchema.extend({
	user: z
		.lazy(() => UserWithParentUserResponseSchema)
		.nullable()
		.optional(),
	driver: z
		.lazy(() => DriverBaseSchema)
		.nullable()
		.optional(),
	vehicle: z
		.lazy(() => VehicleBaseSchema)
		.nullable()
		.optional(),
	business: z
		.lazy(() => BusinessBaseSchema)
		.nullable()
		.optional(),
	business_users: z
		.lazy(() => BusinessUserResponseSchema)
		.nullable()
		.optional(),
	grouped_orders: z.array(TaxiOrderBaseSchema).optional().default([]),
}).openapi('TaxiOrderDetail');

export type TaxiOrderDetail = z.infer<typeof TaxiOrderDetailSchema>;

export const ActiveTaxiOrdersResponseSchema = z
	.object({
		active_orders: z.array(TaxiOrderDetailSchema),
		pending_orders: z.array(TaxiOrderDetailSchema),
	})
	.openapi('ActiveTaxiOrdersResponse');
export type ActiveTaxiOrdersResponse = z.infer<typeof ActiveTaxiOrdersResponseSchema>;

// ===============
// OpenAPI Registration
// ===============
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxiOrderBase', TaxiOrderBaseSchema);
	registry.register('TaxiOrderRef', TaxiOrderRefSchema);
	registry.register('TaxiOrderDetail', TaxiOrderDetailSchema);

	// Responses
	registry.register('ActiveTaxiOrdersResponse', ActiveTaxiOrdersResponseSchema);
}
