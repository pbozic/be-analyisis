import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ScheduleSlotRefSchema } from '../schedule-slot/schedule-slot.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const BookingSlotBaseSchema = z
	.object({
		booking_slot_id: UUID,
		schedule_slot_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'BookingSlotBase',
		description: 'Base booking slot schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const BookingSlotRefSchema = z
	.object({
		booking_slot_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'BookingSlotRef',
		description: 'Minimal booking slot reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateBookingSlotRequestSchema = z
	.object({
		schedule_slot_id: UUID,
		start_time: Timestamp.openapi({ example: '2025-11-05T09:00:00Z', description: 'Booking slot start time' }),
		end_time: Timestamp.openapi({ example: '2025-11-05T10:00:00Z', description: 'Booking slot end time' }),
	})
	.openapi({
		title: 'CreateBookingSlotRequest',
		description: 'Request schema for creating a new booking slot',
	});

export const UpdateBookingSlotRequestSchema = CreateBookingSlotRequestSchema.partial().openapi({
	title: 'UpdateBookingSlotRequest',
	description: 'Request schema for updating an existing booking slot',
});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const BookingSlotResponseSchema = BookingSlotBaseSchema.extend({
	schedule_slot: ScheduleSlotRefSchema.optional(),
}).openapi({
	title: 'BookingSlotResponse',
	description: 'Complete booking slot response with related entities',
});

// ===== EXPORTED TYPES =====
export type BookingSlotBase = z.infer<typeof BookingSlotBaseSchema>;
export type BookingSlotRef = z.infer<typeof BookingSlotRefSchema>;
export type CreateBookingSlotRequest = z.infer<typeof CreateBookingSlotRequestSchema>;
export type UpdateBookingSlotRequest = z.infer<typeof UpdateBookingSlotRequestSchema>;
export type BookingSlotResponse = z.infer<typeof BookingSlotResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BookingSlotBase', BookingSlotBaseSchema);
	registry.register('BookingSlotRef', BookingSlotRefSchema);
	registry.register('CreateBookingSlotRequest', CreateBookingSlotRequestSchema);
	registry.register('UpdateBookingSlotRequest', UpdateBookingSlotRequestSchema);
	registry.register('BookingSlotResponse', BookingSlotResponseSchema);
}
