import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Scoring Points Request Schemas
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
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateScoringPoints', CreateScoringPointsSchema);
	registry.register('UpdateScoringPoints', UpdateScoringPointsSchema);
}
