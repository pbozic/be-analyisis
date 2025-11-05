import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { BookingRefSchema } from '../booking/booking.dto.js';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const BookingCourseTimeBaseSchema = z
	.object({
		booking_course_time_id: UUID,
		reservation_module_id: UUID,
		booking_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'BookingCourseTimeBase',
		description: 'Base booking course time schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const BookingCourseTimeRefSchema = z
	.object({
		booking_course_time_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'BookingCourseTimeRef',
		description: 'Minimal booking course time reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateBookingCourseTimeRequestSchema = z
	.object({
		reservation_module_id: UUID,
		booking_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'CreateBookingCourseTimeRequest',
		description: 'Request schema for creating a new booking course time',
	});

export const UpdateBookingCourseTimeRequestSchema = z
	.object({
		booking_course_time_id: UUID,
		reservation_module_id: UUID,
		booking_id: UUID,
		start_time: Timestamp.optional(),
		end_time: Timestamp.optional(),
	})
	.openapi({
		title: 'UpdateBookingCourseTimeRequest',
		description: 'Request schema for updating an existing booking course time',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const BookingCourseTimeResponseSchema = BookingCourseTimeBaseSchema.extend({
	booking: BookingRefSchema.optional(),
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'BookingCourseTimeResponse',
	description: 'Complete booking course time response with related entities',
});

// ===== EXPORTED TYPES =====
export type BookingCourseTimeBase = z.infer<typeof BookingCourseTimeBaseSchema>;
export type BookingCourseTimeRef = z.infer<typeof BookingCourseTimeRefSchema>;
export type CreateBookingCourseTimeRequest = z.infer<typeof CreateBookingCourseTimeRequestSchema>;
export type UpdateBookingCourseTimeRequest = z.infer<typeof UpdateBookingCourseTimeRequestSchema>;
export type BookingCourseTimeResponse = z.infer<typeof BookingCourseTimeResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BookingCourseTimeBase', BookingCourseTimeBaseSchema);
	registry.register('BookingCourseTimeRef', BookingCourseTimeRefSchema);
	registry.register('CreateBookingCourseTimeRequest', CreateBookingCourseTimeRequestSchema);
	registry.register('UpdateBookingCourseTimeRequest', UpdateBookingCourseTimeRequestSchema);
	registry.register('BookingCourseTimeResponse', BookingCourseTimeResponseSchema);
}
