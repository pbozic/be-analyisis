import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== LateEvents Validators =====
// Request schemas moved from lateEvents.dto.ts

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
	.openapi('CreateLateEvents');

export type CreateLateEvents = z.infer<typeof CreateLateEventsSchema>;

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
			.openapi('UpdateLateEventsData'),
	})
	.openapi('UpdateLateEvents');

export type UpdateLateEvents = z.infer<typeof UpdateLateEventsSchema>;

export const GetLateEventsByBusinessQuerySchema = z
	.object({
		business_id: UUID,
	})
	.openapi('GetLateEventsByBusinessQuery');

export type GetLateEventsByBusinessQuery = z.infer<typeof GetLateEventsByBusinessQuerySchema>;

export const GetLateEventByIdQuerySchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi('GetLateEventByIdQuery');

export type GetLateEventByIdQuery = z.infer<typeof GetLateEventByIdQuerySchema>;

export const DeleteLateEventsSchema = z
	.object({
		late_events_id: UUID,
	})
	.openapi('DeleteLateEvents');

export type DeleteLateEvents = z.infer<typeof DeleteLateEventsSchema>;

export const BulkCreateLateEventsSchema = z
	.object({
		events: z.array(CreateLateEventsSchema).min(1).max(100),
	})
	.openapi('BulkCreateLateEvents');

export type BulkCreateLateEvents = z.infer<typeof BulkCreateLateEventsSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLateEvents', CreateLateEventsSchema);
	registry.register('UpdateLateEvents', UpdateLateEventsSchema);
	registry.register('DeleteLateEvents', DeleteLateEventsSchema);
	registry.register('BulkCreateLateEvents', BulkCreateLateEventsSchema);
	registry.register('GetLateEventsByBusinessQuery', GetLateEventsByBusinessQuerySchema);
	registry.register('GetLateEventByIdQuery', GetLateEventByIdQuerySchema);
}
