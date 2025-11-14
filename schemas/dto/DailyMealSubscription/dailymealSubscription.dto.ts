import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Base Schemas =====
// Note: DailyMealSubscription response schemas are defined in types/dailymeal/DailyMealSubscription.ts
// This file provides base schemas that can be used if needed

// DailyMealSubscription Base Schema - scalars only, no relations
export const DailyMealSubscriptionBaseSchema = z
	.object({
		id: UUID,
		user_id: UUID,
		business_id: UUID,
		delivery_address_id: UUID,
		type: z.string(),
		start_date: Timestamp,
		end_date: Timestamp.nullable().optional(),
		status: z.string(),
		courier_comment: z.string().nullable().optional(),
		delivery_driver_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealSubscriptionBase');

export type DailyMealSubscriptionBase = z.infer<typeof DailyMealSubscriptionBaseSchema>;

// DailyMealSubscription Ref Schema - minimal identity for embedding
export const DailyMealSubscriptionRefSchema = z
	.object({
		id: UUID,
		user_id: UUID,
		business_id: UUID,
		status: z.string(),
		start_date: Timestamp,
	})
	.openapi('DailyMealSubscriptionRef');

export type DailyMealSubscriptionRef = z.infer<typeof DailyMealSubscriptionRefSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealSubscriptionBase', DailyMealSubscriptionBaseSchema);
	registry.register('DailyMealSubscriptionRef', DailyMealSubscriptionRefSchema);
}
