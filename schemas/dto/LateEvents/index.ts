import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === LateEvents DTOs (Response) ===
export {
	LateEventsBaseSchema,
	LateEventsRefSchema,
	OrderRefSchema,
	DriverRefSchema,
	ScoringPointsRefSchema,
	LateEventsResponseSchema,
	LateEventsListResponseSchema,
	type LateEventsBase,
	type LateEventsRef,
	type OrderRef,
	type DriverRef,
	type ScoringPointsRef,
	type LateEventsResponse,
	type LateEventsListResponse,
	registerSchemas as registerLateEventsSchemas,
} from './lateEvents.dto.js';

// === LateEvents Validators (Request Body, Query, Params) ===
export {
	CreateLateEventsSchema,
	UpdateLateEventsSchema,
	GetLateEventsByBusinessQuerySchema,
	GetLateEventByIdQuerySchema,
	DeleteLateEventsSchema,
	BulkCreateLateEventsSchema,
	type CreateLateEvents,
	type UpdateLateEvents,
	type GetLateEventsByBusinessQuery,
	type GetLateEventByIdQuery,
	type DeleteLateEvents,
	type BulkCreateLateEvents,
	registerSchemas as registerLateEventsValidatorSchemas,
} from './lateEvents.validators.js';

// === LateEvents Mappers ===
export * from './late-events.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerLateEventsSchemas(registry);
	registerLateEventsValidatorSchemas(registry);
}
