import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, PhoneNumber } from '../../primitives.js';
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
		business_id: UUID.nullable().optional(),
		business_users_id: UUID.nullable().optional(),
		business_clients_id: UUID.nullable().optional(),
		status: z.string(),
		type: z.string().optional(),
		subtype: z.string().nullable().optional(),
		pickup_location: z.record(z.any()).nullable().optional(),
		delivery_location: z.record(z.any()).nullable().optional(),
		route: z.record(z.any()).nullable().optional(),
		complete_route: z.record(z.any()).nullable().optional(),
		distance: z.number().nullable().optional(),
		duration: z.number().nullable().optional(),
		price: z.number().nullable().optional(),
		payment: z.record(z.any()).nullable().optional(),
		details: z.record(z.any()).nullable().optional(),
		currency: z.string().nullable().optional(),
		payment_method: z.string().nullable().optional(),
		payment_status: z.string().nullable().optional(),
		special_instructions: z.string().nullable().optional(),
		passenger_count: z.number().nullable().optional(),
		luggage_count: z.number().nullable().optional(),
		scheduled_time: Timestamp.nullable().optional(),
		pickup_time: Timestamp.nullable().optional(),
		arrival_time: Timestamp.nullable().optional(),
		completion_time: Timestamp.nullable().optional(),
		cancellation_reason: z.string().nullable().optional(),
		rating: z.number().nullable().optional(),
		feedback: z.string().nullable().optional(),
		tip_amount: z.number().nullable().optional(),
		timeline: z.array(z.record(z.any())).optional().default([]),
		metadata: z.record(z.any()).nullable().optional(),
		last_sent_at: Timestamp.nullable().optional(),
		parent_order_id: UUID.nullable().optional(),
		is_grouped: z.boolean().optional(),
		group_index: z.number().nullable().optional(),
		preferences: z.record(z.any()).nullable().optional(),
		estimates: z.record(z.any()).nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		telephone: PhoneNumber.nullable().optional(),
		creating_user_id: UUID.nullable().optional(),
		is_scheduled: z.boolean().optional(),
		cargo_preferences: z.record(z.any()).nullable().optional(),
		allow_credits_usage: z.boolean().optional(),
		find_drivers_attempts: z.number().optional(),
		parent_user_type: z.string().nullable().optional(),
	})
	.openapi('TaxiOrderBase');

export type TaxiOrderBase = z.infer<typeof TaxiOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const TaxiOrderRefSchema = z
	.object({
		order_id: UUID,
		status: z.string(),
		type: z.string().optional(),
		price: z.number().nullable().optional(),
		pickup_location: z.record(z.any()).nullable().optional(),
		delivery_location: z.record(z.any()).nullable().optional(),
		created_at: Timestamp.optional(),
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
	driver: DriverBaseSchema.nullable().optional(),
	vehicle: VehicleBaseSchema.nullable().optional(),
	business: BusinessBaseSchema.nullable().optional(),
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
