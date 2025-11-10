import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/user.js';
import { StoreBaseSchema } from '../Stores/store.dto.js';
import { FoodDrinksBaseSchema } from '../FoodDrinks/food-drinks.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMAS =====

// LateEvents Base Schema - scalars only, no relations
export const LateEventsBaseSchema = z
	.object({
		late_events_id: UUID,
		stores_id: UUID.nullable(),
		food_drinks_id: UUID.nullable(),
		driver_id: UUID,
		business_id: UUID.nullable(), // From DAO connects to business
		delivery_order_id: UUID.nullable(),
		taxi_order_id: UUID.nullable(),
		scoring_points_id: UUID.nullable(),
		seconds: z.number().int().nonnegative().describe('Delay in seconds'),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'LateEventsBase',
		description: 'Base late events schema with scalar fields only',
	});

export type LateEventsBase = z.infer<typeof LateEventsBaseSchema>;

// ===== REF SCHEMAS =====

// LateEvents Ref Schema - minimal identity for embedding elsewhere
export const LateEventsRefSchema = z
	.object({
		late_events_id: UUID,
		seconds: z.number().int().nonnegative(),
		delivery_order_id: UUID.nullable(),
		taxi_order_id: UUID.nullable(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'LateEventsRef',
		description: 'Minimal late events reference for embedding in other responses',
	});

export type LateEventsRef = z.infer<typeof LateEventsRefSchema>;

// Order Reference Schema - for taxi and delivery orders
export const OrderRefSchema = z
	.object({
		order_id: UUID,
		status: z.string(),
		created_at: Timestamp,
		user_id: UUID,
	})
	.openapi({
		title: 'OrderRef',
		description: 'Minimal order reference for late events',
	});

export type OrderRef = z.infer<typeof OrderRefSchema>;

// Driver Reference Schema - minimal driver info for late events
export const DriverRefSchema = z
	.object({
		driver_id: UUID,
		user_id: UUID.nullable(),
		online: z.boolean().nullable(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'DriverRef',
		description: 'Minimal driver reference for late events',
	});

export type DriverRef = z.infer<typeof DriverRefSchema>;

// ScoringPoints Reference Schema - minimal scoring points info
export const ScoringPointsRefSchema = z
	.object({
		scoring_points_id: UUID,
		points: z.number().int(),
		isPenalty: z.boolean(),
		reason: z.string(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'ScoringPointsRef',
		description: 'Minimal scoring points reference for late events',
	});

export type ScoringPointsRef = z.infer<typeof ScoringPointsRefSchema>;

// ===== RESPONSE SCHEMAS =====

// LateEvents Response Schema - Base with embedded refs
export const LateEventsResponseSchema = LateEventsBaseSchema.extend({
	user: UserRefSchema.optional(),
	stores_module: StoreBaseSchema.optional(),
	food_drinks_module: FoodDrinksBaseSchema.optional(),
	driver: DriverRefSchema.optional(),
	delivery_order: OrderRefSchema.optional(),
	taxi_order: OrderRefSchema.optional(),
	scoring_points: ScoringPointsRefSchema.optional(),
}).openapi({
	title: 'LateEventsResponse',
	description: 'Complete late events response with related entities',
});

export type LateEventsResponse = z.infer<typeof LateEventsResponseSchema>;

// ===== REQUEST SCHEMAS =====

// Create LateEvents Schema - for createLateEvent function
export const CreateLateEventsSchema = z
	.object({
		driver_id: UUID.nullable().optional(),
		delivery_order_id: UUID.nullable().optional(),
		taxi_order_id: UUID.nullable().optional(),
		seconds: z.number().int().nonnegative().describe('Delay in seconds'),
		stores_id: UUID.nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		scoring_points_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'CreateLateEvents',
		description: 'Schema for creating new late events entry',
	});

export type CreateLateEvents = z.infer<typeof CreateLateEventsSchema>;

// Update LateEvents Schema - for updateLateEvent function
export const UpdateLateEventsSchema = z
	.object({
		late_events_id: UUID,
		data: z
			.object({
				seconds: z.number().int().nonnegative().optional(),
				stores_id: UUID.nullable().optional(),
				food_drinks_id: UUID.nullable().optional(),
				scoring_points_id: UUID.nullable().optional(),
			})
			.openapi({
				title: 'UpdateLateEventsData',
				description: 'Fields that can be updated in late events',
			}),
	})
	.openapi({
		title: 'UpdateLateEvents',
		description: 'Schema for updating late events entry',
	});

export type UpdateLateEvents = z.infer<typeof UpdateLateEventsSchema>;

// ===== QUERY SCHEMAS =====

// Get Late Events by Business Query - for getLateEventsByBusinessId function
export const GetLateEventsByBusinessQuerySchema = z
	.object({
		business_id: UUID,
	})
	.openapi({
		title: 'GetLateEventsByBusinessQuery',
		description: 'Query parameters for getting late events by business ID',
	});

export type GetLateEventsByBusinessQuery = z.infer<typeof GetLateEventsByBusinessQuerySchema>;

// Get Late Event by ID Query - for getLateEventById function
export const GetLateEventByIdQuerySchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi({
		title: 'GetLateEventByIdQuery',
		description: 'Query parameters for getting late event by ID',
	});

export type GetLateEventByIdQuery = z.infer<typeof GetLateEventByIdQuerySchema>;

// Delete Late Event Schema - for deleteLateEvent function
export const DeleteLateEventsSchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi({
		title: 'DeleteLateEvents',
		description: 'Schema for deleting late events entry',
	});

export type DeleteLateEvents = z.infer<typeof DeleteLateEventsSchema>;

// ===== LIST RESPONSE SCHEMAS =====

// LateEvents List Response - for paginated/bulk endpoints
export const LateEventsListResponseSchema = z
	.object({
		data: z.array(LateEventsResponseSchema),
		total: z.number().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	})
	.openapi({
		title: 'LateEventsList',
		description: 'Paginated list of late events entries',
	});

export type LateEventsListResponse = z.infer<typeof LateEventsListResponseSchema>;

// ===== STATISTICS SCHEMAS =====

// Late Events Statistics - aggregate data for reporting
export const LateEventsStatsSchema = z
	.object({
		total_events: z.number().int().nonnegative(),
		avg_delay_seconds: z.number().nonnegative(),
		max_delay_seconds: z.number().int().nonnegative(),
		events_by_service: z.record(z.enum(['TAXI', 'DELIVERY']), z.number().int().nonnegative()),
		events_by_business: z.record(z.string(), z.number().int().nonnegative()),
		period_start: Timestamp,
		period_end: Timestamp,
	})
	.openapi({
		title: 'LateEventsStats',
		description: 'Aggregated statistics for late events',
	});

export type LateEventsStats = z.infer<typeof LateEventsStatsSchema>;

// ===== BULK OPERATIONS =====

// Bulk Create Late Events - for creating multiple late events at once
export const BulkCreateLateEventsSchema = z
	.object({
		events: z.array(CreateLateEventsSchema).min(1).max(100),
	})
	.openapi({
		title: 'BulkCreateLateEvents',
		description: 'Schema for bulk creating late events (max 100 per request)',
	});

export type BulkCreateLateEvents = z.infer<typeof BulkCreateLateEventsSchema>;

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('LateEventsBase', LateEventsBaseSchema);
	registry.register('LateEventsRef', LateEventsRefSchema);

	// Register utility ref schemas
	registry.register('OrderRef', OrderRefSchema);
	registry.register('DriverRef', DriverRefSchema);
	registry.register('ScoringPointsRef', ScoringPointsRefSchema);

	// Register request schemas
	registry.register('CreateLateEvents', CreateLateEventsSchema);
	registry.register('UpdateLateEvents', UpdateLateEventsSchema);
	registry.register('DeleteLateEvents', DeleteLateEventsSchema);
	registry.register('BulkCreateLateEvents', BulkCreateLateEventsSchema);

	// Register query schemas
	registry.register('GetLateEventsByBusinessQuery', GetLateEventsByBusinessQuerySchema);
	registry.register('GetLateEventByIdQuery', GetLateEventByIdQuerySchema);

	// Register response schemas
	registry.register('LateEvents', LateEventsResponseSchema);
	registry.register('LateEventsList', LateEventsListResponseSchema);
	registry.register('LateEventsStats', LateEventsStatsSchema);

	// Register main response
	registry.register('LateEventsResponse', LateEventsResponseSchema);
}
