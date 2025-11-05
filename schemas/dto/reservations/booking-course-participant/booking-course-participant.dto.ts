import { z } from 'zod';
import { BOOKING_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { CustomerRefSchema } from '../customer/customer.dto.js';
import { BookingRefSchema } from '../booking/booking.dto.js';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const BookingCourseParticipantBaseSchema = z
	.object({
		booking_course_participant_id: UUID,
		reservation_module_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		booking_id: UUID,
		customer_id: UUID,
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'BookingCourseParticipantBase',
		description: 'Base booking course participant schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const BookingCourseParticipantRefSchema = z
	.object({
		booking_course_participant_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		customer_id: UUID,
	})
	.openapi({
		title: 'BookingCourseParticipantRef',
		description: 'Minimal booking course participant reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateBookingCourseParticipantRequestSchema = z
	.object({
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: UUID,
		booking_id: UUID.optional(),
	})
	.openapi({
		title: 'CreateBookingCourseParticipantRequest',
		description: 'Request schema for creating a new booking course participant',
	});

export const UpdateBookingCourseParticipantRequestSchema = z
	.object({
		customer_id: UUID,
		reservation_module_id: UUID,
		booking_id: UUID,
	})
	.openapi({
		title: 'UpdateBookingCourseParticipantRequest',
		description: 'Request schema for updating an existing booking course participant',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const BookingCourseParticipantResponseSchema = BookingCourseParticipantBaseSchema.extend({
	customer: CustomerRefSchema.optional(),
	booking: BookingRefSchema.optional(),
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'BookingCourseParticipantResponse',
	description: 'Complete booking course participant response with related entities',
});

// ===== EXPORTED TYPES =====
export type BookingCourseParticipantBase = z.infer<typeof BookingCourseParticipantBaseSchema>;
export type BookingCourseParticipantRef = z.infer<typeof BookingCourseParticipantRefSchema>;
export type CreateBookingCourseParticipantRequest = z.infer<typeof CreateBookingCourseParticipantRequestSchema>;
export type UpdateBookingCourseParticipantRequest = z.infer<typeof UpdateBookingCourseParticipantRequestSchema>;
export type BookingCourseParticipantResponse = z.infer<typeof BookingCourseParticipantResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BookingCourseParticipantBase', BookingCourseParticipantBaseSchema);
	registry.register('BookingCourseParticipantRef', BookingCourseParticipantRefSchema);
	registry.register('CreateBookingCourseParticipantRequest', CreateBookingCourseParticipantRequestSchema);
	registry.register('UpdateBookingCourseParticipantRequest', UpdateBookingCourseParticipantRequestSchema);
	registry.register('BookingCourseParticipantResponse', BookingCourseParticipantResponseSchema);
}
