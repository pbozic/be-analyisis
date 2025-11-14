import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const DeliveryDriverBaseSchema = z
	.object({
		delivery_driver_id: UUID,
		user_id: UUID,
		online: z.boolean().optional(),
		on_order: z.boolean().optional(),
		delivers_daily_meals: z.boolean().optional(),
		working_hours: z.record(z.any()).nullable().optional(),
		business_id: UUID.nullable().optional(),
		location: z.record(z.any()).nullable().optional(),
		delivery_timeline: z.record(z.any()).nullable().optional(),
		last_ping_at: Timestamp.nullable().optional(),
		on_daily_meals: z.boolean().optional(),
		is_inactive: z.boolean().optional(),
		scheduled_meals_route: z.record(z.any()).nullable().optional(),
		regions: z.record(z.any()).nullable().optional(),
		partner_cash_balance: z.number().optional(),
		daily_meal_business_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DeliveryDriverBase');

export type DeliveryDriverBase = z.infer<typeof DeliveryDriverBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const DeliveryDriverRefSchema = z
	.object({
		delivery_driver_id: UUID,
		user_id: UUID,
		online: z.boolean().optional(),
		on_order: z.boolean().optional(),
	})
	.openapi('DeliveryDriverRef');

export type DeliveryDriverRef = z.infer<typeof DeliveryDriverRefSchema>;

// ===============
// Detail Schema (extends Base with basic relations)
// ===============
export const DeliveryDriverDetailSchema = DeliveryDriverBaseSchema.extend({
	// Simple object representations without complex type dependencies
	user: z.record(z.any()).nullable().optional(),
	vehicles: z.array(z.record(z.any())).optional().default([]),
	business: z.record(z.any()).nullable().optional(),
	daily_meal_business: z.record(z.any()).nullable().optional(),
}).openapi('DeliveryDriverDetail');

export type DeliveryDriverDetail = z.infer<typeof DeliveryDriverDetailSchema>;

// ===============
// OpenAPI Registration
// ===============
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DeliveryDriverBase', DeliveryDriverBaseSchema);
	registry.register('DeliveryDriverRef', DeliveryDriverRefSchema);
	registry.register('DeliveryDriverDetail', DeliveryDriverDetailSchema);
}
