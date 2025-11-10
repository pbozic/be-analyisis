import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { BusinessRefSchema } from '../common/Business.dto.ts';
import { OrderRefSchema } from '../common/Order.dto.ts';

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

// =======================
// Requests
// =======================
export const CreateScoringPointsSchema = z
	.object({
		stores_id: UUID.optional(),
		food_drinks_id: UUID.optional(),
		driver_id: UUID.optional(),
		user_id: UUID.optional(),
		delivery_order_id: UUID.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		points: z.number().int(),
		isPenalty: z.boolean(),
		reason: z.string().nullable().optional(),
	})
	.openapi('CreateScoringPoints');
export type CreateScoringPoints = z.infer<typeof CreateScoringPointsSchema>;

export const UpdateScoringPointsSchema = z
	.object({
		scoring_points_id: UUID,
		data: z
			.object({
				points: z.number().int().optional(),
				isPenalty: z.boolean().optional(),
				reason: z.string().nullable().optional(),
			})
			.optional(),
	})
	.openapi('UpdateScoringPoints');
export type UpdateScoringPoints = z.infer<typeof UpdateScoringPointsSchema>;

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LateEventRef', LateEventRefSchema);
	registry.register('ScoringPointsBase', ScoringPointsBaseSchema);
	registry.register('ScoringPointsDetail', ScoringPointsDetailSchema);
	registry.register('CreateScoringPoints', CreateScoringPointsSchema);
	registry.register('UpdateScoringPoints', UpdateScoringPointsSchema);
}
