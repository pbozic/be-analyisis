import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { SUBSCRIPTION_STATUS, SUBSCRIPTION_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Base Schemas =====
// Note: DailyMeal response DTOs may be defined in types/dailyMeals/ files
// This file is a placeholder for response DTOs if they need to be moved here

// DailyMealSubscription Base Schema - scalars only, no relations
export const DailyMealSubscriptionBaseSchema = z
	.object({
		id: UUID,
		user_id: UUID,
		daily_meals_id: UUID,
		delivery_address_id: UUID,
		driver_id: UUID.nullable().optional(),
		type: z.nativeEnum(SUBSCRIPTION_TYPE),
		start_date: Timestamp,
		end_date: Timestamp.nullable().optional(),
		status: z.nativeEnum(SUBSCRIPTION_STATUS),
		courier_comment: z.string().nullable().optional(),
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

// DailyMealSubscription Detail Schema - extends Base with relations
export const DailyMealSubscriptionDetailSchema = DailyMealSubscriptionBaseSchema.extend({
	user: z.record(z.any()).nullable().optional(),
	business: z.record(z.any()).nullable().optional(),
	delivery_address: z.record(z.any()).nullable().optional(),
	customers: z.array(z.any()).optional().default([]),
	days: z.array(z.any()).optional().default([]),
	weekdays: z.array(z.any()).optional().default([]),
	daily_meal_instances: z.array(z.any()).optional().default([]),
	payment: z.any().nullable().optional(),
}).openapi('DailyMealSubscriptionDetail');

export type DailyMealSubscriptionDetail = z.infer<typeof DailyMealSubscriptionDetailSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealSubscriptionBase', DailyMealSubscriptionBaseSchema);
	registry.register('DailyMealSubscriptionRef', DailyMealSubscriptionRefSchema);
	registry.register('DailyMealSubscriptionDetail', DailyMealSubscriptionDetailSchema);
}
