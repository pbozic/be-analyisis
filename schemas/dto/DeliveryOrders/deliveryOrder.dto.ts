import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DELIVERY_ORDER_STATUS, MODULE } from '@prisma/client';

import { Timestamp, UUID } from '../../primitives.js';
import { LineItemDetailSchema } from '../LineItems/index.js';
import { UserBaseSchema } from '../User/index.js';
import { DriverBaseSchema } from '../Driver/driver.dto.js';
import { BusinessResponseSchema } from '../Business/business.js';

extendZodWithOpenApi(z);

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const DeliveryOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID,
		business_id: UUID.optional(),
		module_id: UUID,
		module_type: z.nativeEnum(MODULE),
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		route: z.array(z.any()),
		pickup_location: z.record(z.any()),
		delivery_location: z.record(z.any()).nullable().optional(),
		payment: z.record(z.any()).nullable().optional(),
		estimates: z.record(z.any()).nullable().optional(),
		details: z.record(z.any()).nullable().optional(),
		courier_instructions: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		rejection_reason: z.string().nullable().optional(),
		scheduled_at: Timestamp.nullable().optional(),
		timeline: z.array(z.record(z.any())).default([]),
		last_sent_at: Timestamp.nullable().optional(),
		payment_intent_id: z.string().nullable().optional(),
		find_drivers_attempts: z.number().nullable().default(0),
		is_daily_meal: z.boolean().default(false),
		allow_credits_usage: z.boolean().default(false),
		order_number: z.number().default(0),
		business_local_location_id: UUID.nullable().optional(),
		stores_id: UUID.nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		file_id: UUID.nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
	})
	.openapi('DeliveryOrderBase');

export type DeliveryOrderBase = z.infer<typeof DeliveryOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const DeliveryOrderRefSchema = z
	.object({
		order_id: UUID,
		order_number: z.number(),
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		created_at: Timestamp,
	})
	.openapi('DeliveryOrderRef');

export type DeliveryOrderRef = z.infer<typeof DeliveryOrderRefSchema>;

// ===============
// Detail Schema (extends Base with relations)
// ===============
export const DeliveryOrderDetailSchema = DeliveryOrderBaseSchema.extend({
	user: z
		.lazy(() => UserBaseSchema)
		.nullable()
		.optional(),
	business: z
		.lazy(() => BusinessResponseSchema)
		.nullable()
		.optional(),
	driver: z
		.lazy(() => DriverBaseSchema)
		.nullable()
		.optional(),
	items: z.array(z.lazy(() => LineItemDetailSchema)).optional(),
}).openapi('DeliveryOrderDetail');

export type DeliveryOrderDetail = z.infer<typeof DeliveryOrderDetailSchema>;
export const UpdateDeliveryOrderSchema = DeliveryOrderBaseSchema.partial()
	.omit({
		order_id: true,
		created_at: true,
	})
	.openapi('UpdateDeliveryOrder');

export type UpdateDeliveryOrder = z.infer<typeof UpdateDeliveryOrderSchema>;
// ===============
// Registry
// ===============
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register delivery order schemas
	registry.register('DeliveryOrderBase', DeliveryOrderBaseSchema);
	registry.register('DeliveryOrderRef', DeliveryOrderRefSchema);
	registry.register('DeliveryOrderDetail', DeliveryOrderDetailSchema);
}
