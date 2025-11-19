import { z } from 'zod';
import { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ScheduleSlotRefSchema } from '../schedule-slot/schedule-slot.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ScheduleSlotExceptionBaseSchema = z
	.object({
		schedule_slot_exception_id: UUID,
		schedule_slot_id: UUID,
		date: Timestamp,
		start_time: Timestamp,
		end_time: Timestamp,
		reason: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'Sick leave', description: 'Reason for the exception' }),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE).openapi({ example: 'vacation' }),
	})
	.openapi({
		title: 'ScheduleSlotExceptionBase',
		description: 'Base schedule slot exception schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ScheduleSlotExceptionRefSchema = z
	.object({
		schedule_slot_exception_id: UUID,
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'ScheduleSlotExceptionRef',
		description: 'Minimal schedule slot exception reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateScheduleSlotExceptionRequestSchema = z
	.object({
		schedule_slot_id: UUID,
		date: Timestamp.openapi({ example: '2025-11-05' }),
		start_time: Timestamp.openapi({ example: '2025-11-05T09:00:00Z' }),
		end_time: Timestamp.openapi({ example: '2025-11-05T12:00:00Z' }),
		reason: z.string().optional().openapi({ example: 'Sick leave' }),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE).openapi({
			example: 'vacation',
			description: 'Exception type: vacation, location_closed, other, health, break',
		}),
	})
	.openapi({
		title: 'CreateScheduleSlotExceptionRequest',
		description: 'Request schema for creating a new schedule slot exception',
	});

export const UpdateScheduleSlotExceptionRequestSchema = CreateScheduleSlotExceptionRequestSchema.partial().openapi({
	title: 'UpdateScheduleSlotExceptionRequest',
	description: 'Request schema for updating an existing schedule slot exception',
});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ScheduleSlotExceptionResponseSchema = ScheduleSlotExceptionBaseSchema.extend({
	schedule_slot: z.lazy(() => ScheduleSlotRefSchema).optional(),
}).openapi({
	title: 'ScheduleSlotExceptionResponse',
	description: 'Complete schedule slot exception response with related entities',
});

// ===== COMPLEX OPERATION SCHEMAS (imported from booking-slot for complex operations) =====
import { CreateBookingSlotRequestSchema } from '../booking-slot/booking-slot.dto.js';

// Extended schemas for complex operations that allow optional IDs
export const ScheduleSlotExceptionWithOptionalIdsSchema = CreateScheduleSlotExceptionRequestSchema.extend({
	schedule_slot_id: UUID.optional(),
	schedule_slot_exception_id: UUID.optional(),
}).openapi({
	title: 'ScheduleSlotExceptionWithOptionalIds',
	description: 'Schedule slot exception schema with optional IDs for update/create operations',
});

export const BookingSlotWithOptionalIdsSchema = CreateBookingSlotRequestSchema.extend({
	schedule_slot_id: UUID.optional(),
	booking_slot_id: UUID.optional(),
}).openapi({
	title: 'BookingSlotWithOptionalIds',
	description: 'Booking slot schema with optional IDs for update/create operations',
});

// Schemas for batch exception operations
export const CreateOrUpdateExceptionsRequestSchema = z
	.object({
		exceptions: z.object({
			changes: z.array(ScheduleSlotExceptionWithOptionalIdsSchema),
			removed: z.array(
				z.object({
					schedule_slot_exception_id: UUID,
				})
			),
		}),
	})
	.openapi({
		title: 'CreateOrUpdateExceptionsRequest',
		description: 'Request schema for creating or updating exceptions',
	});

export const CreateOrUpdateExceptionsAndBookingsRequestSchema = z
	.object({
		exceptions: z.object({
			changes: z.array(ScheduleSlotExceptionWithOptionalIdsSchema),
			removed: z.array(
				z.object({
					schedule_slot_exception_id: UUID,
				})
			),
		}),
		bookingSlots: z.object({
			newOrChanged: z.array(BookingSlotWithOptionalIdsSchema),
			removed: z.array(
				z.object({
					booking_slot_id: UUID,
				})
			),
		}),
	})
	.openapi({
		title: 'CreateOrUpdateExceptionsAndBookingsRequest',
		description: 'Request schema for creating or updating exceptions and booking slots',
	});

// ===== EXPORTED TYPES =====
export type ScheduleSlotExceptionBase = z.infer<typeof ScheduleSlotExceptionBaseSchema>;
export type ScheduleSlotExceptionRef = z.infer<typeof ScheduleSlotExceptionRefSchema>;
export type CreateScheduleSlotExceptionRequest = z.infer<typeof CreateScheduleSlotExceptionRequestSchema>;
export type UpdateScheduleSlotExceptionRequest = z.infer<typeof UpdateScheduleSlotExceptionRequestSchema>;
export type ScheduleSlotExceptionResponse = z.infer<typeof ScheduleSlotExceptionResponseSchema>;
export type ScheduleSlotExceptionWithOptionalIds = z.infer<typeof ScheduleSlotExceptionWithOptionalIdsSchema>;
export type BookingSlotWithOptionalIds = z.infer<typeof BookingSlotWithOptionalIdsSchema>;
export type CreateOrUpdateExceptionsRequest = z.infer<typeof CreateOrUpdateExceptionsRequestSchema>;
export type CreateOrUpdateExceptionsAndBookingsRequest = z.infer<
	typeof CreateOrUpdateExceptionsAndBookingsRequestSchema
>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleSlotExceptionBase', ScheduleSlotExceptionBaseSchema);
	registry.register('ScheduleSlotExceptionRef', ScheduleSlotExceptionRefSchema);
	registry.register('CreateScheduleSlotExceptionRequest', CreateScheduleSlotExceptionRequestSchema);
	registry.register('UpdateScheduleSlotExceptionRequest', UpdateScheduleSlotExceptionRequestSchema);
	registry.register('ScheduleSlotExceptionResponse', ScheduleSlotExceptionResponseSchema);
	registry.register('ScheduleSlotExceptionWithOptionalIds', ScheduleSlotExceptionWithOptionalIdsSchema);
	registry.register('BookingSlotWithOptionalIds', BookingSlotWithOptionalIdsSchema);
	registry.register('CreateOrUpdateExceptionsRequest', CreateOrUpdateExceptionsRequestSchema);
	registry.register('CreateOrUpdateExceptionsAndBookingsRequest', CreateOrUpdateExceptionsAndBookingsRequestSchema);
}
