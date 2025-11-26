import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { BasicUserDataSchema } from '../User/user.js';
import { TaxiOrderRefSchema } from '../TaxiOrders/taxiOrder.dto.js';
import { DeliveryOrderRefSchema } from '../DeliveryOrders/deliveryOrder.dto.js';

extendZodWithOpenApi(z);

// =======================
// Scoring Points DTOs
// =======================

export const LateEventRefSchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi('LateEventRef');
export type LateEventRef = z.infer<typeof LateEventRefSchema>;

const ScoringPointsBaseObjectSchema = z.object({
	scoring_points_id: UUID,
	user_id: UUID.nullable().optional(),
	stores_module_id: UUID.nullable().optional(),
	food_drinks_module_id: UUID.nullable().optional(),
	delivery_order_id: UUID.nullable().optional(),
	taxi_order_id: UUID.nullable().optional(),
	driver_id: UUID.nullable().optional(),
	points: z.number().int(),
	isPenalty: z.boolean(),
	reason: z.string().nullable().optional(),
	created_at: Timestamp.optional(),
	updated_at: Timestamp.optional(),
});

export const ScoringPointsBaseSchema = ScoringPointsBaseObjectSchema.refine(
	(obj) => {
		const keys = ['stores_module_id', 'food_drinks_module_id', 'delivery_order_id', 'taxi_order_id', 'driver_id'];
		const present = keys.filter(
			(k) => obj[k as keyof typeof obj] !== undefined && obj[k as keyof typeof obj] !== null
		);
		return present.length === 1;
	},
	{
		message:
			'Exactly one of stores_module_id, food_drinks_module_id, delivery_order_id, taxi_order_id or driver_id must be provided',
	}
).openapi('ScoringPointsBase');
export type ScoringPointsBase = z.infer<typeof ScoringPointsBaseSchema>;

export const ScoringPointsDetailSchema = ScoringPointsBaseObjectSchema.extend({
	user: z
		.lazy(() => BasicUserDataSchema)
		.nullable()
		.optional(),
	delivery_order: z
		.lazy(() => DeliveryOrderRefSchema)
		.nullable()
		.optional(),
	taxi_order: z
		.lazy(() => TaxiOrderRefSchema)
		.nullable()
		.optional(),
	late_events: z.array(LateEventRefSchema).optional().default([]),
})
	.refine(
		(obj) => {
			const keys = [
				'stores_module_id',
				'food_drinks_module_id',
				'delivery_order_id',
				'taxi_order_id',
				'driver_id',
			];
			const present = keys.filter(
				(k) => obj[k as keyof typeof obj] !== undefined && obj[k as keyof typeof obj] !== null
			);
			return present.length === 1;
		},
		{
			message:
				'Exactly one of stores_module_id, food_drinks_module_id, delivery_order_id, taxi_order_id or driver_id must be provided',
		}
	)
	.openapi('ScoringPointsDetail');
export type ScoringPointsDetail = z.infer<typeof ScoringPointsDetailSchema>;

// Request schemas moved to scoringPoints.validators.ts

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LateEventRef', LateEventRefSchema);
	registry.register('ScoringPointsBase', ScoringPointsBaseSchema);
	registry.register('ScoringPointsDetail', ScoringPointsDetailSchema);
}
