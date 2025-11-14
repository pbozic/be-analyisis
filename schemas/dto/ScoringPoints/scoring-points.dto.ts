import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { BasicUserDataSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.ts';
import { OrderRefSchema } from '../DeliveryOrders/deliveryOrder.dto.js';

extendZodWithOpenApi(z);

// =======================
// Scoring Points DTOs
// =======================

export type ScoringPointsOrderRef = z.infer<typeof OrderRefSchema>;

export const LateEventRefSchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi('LateEventRef');
export type LateEventRef = z.infer<typeof LateEventRefSchema>;

export const ScoringPointsBaseSchema = z
	.object({
		scoring_points_id: UUID,
		business_id: UUID,
		user_id: UUID.nullable().optional(),
		delivery_order_id: UUID.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		points: z.number().int(),
		isPenalty: z.boolean(),
		reason: z.string().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('ScoringPointsBase');
export type ScoringPointsBase = z.infer<typeof ScoringPointsBaseSchema>;

export const ScoringPointsDetailSchema = ScoringPointsBaseSchema.extend({
	user: BasicUserDataSchema.nullable().optional(),
	business: BusinessRefSchema.optional(),
	delivery_order: OrderRefSchema.nullable().optional(),
	taxi_order: OrderRefSchema.nullable().optional(),
	late_events: z.array(LateEventRefSchema).optional().default([]),
}).openapi('ScoringPointsDetail');
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
