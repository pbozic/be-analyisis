import { BOOKING_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Customer } from './Customer.js';
import type { Booking } from './Booking.js';
import type { ReservationModule } from './ReservationModule.js';
import { CustomerResponseBaseSchema } from './Customer';
import { BookingResponseBaseSchema } from './Booking';
import { ReservationModuleResponseBaseSchema } from './ReservationModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBookingCourseParticipantSchema = z
	.object({
		booking_course_participant_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
		status: z.nativeEnum(BOOKING_STATUS),
		booking_id: z.string().uuid(),
		customer_id: z.string().uuid(),
	})
	.openapi('CreateBookingCourseParticipant');

export type CreateBookingCourseParticipantInput = z.infer<typeof CreateBookingCourseParticipantSchema>;

export const UpdateBookingCourseParticipantSchema = CreateBookingCourseParticipantSchema.partial().openapi(
	'UpdateBookingCourseParticipant'
);
export type UpdateBookingCourseParticipantInput = z.infer<typeof UpdateBookingCourseParticipantSchema>;

export const BookingCourseParticipantResponseBaseSchema = z
	.object({
		booking_course_participant_id: z.string(),
		reservation_module_id: z.string(),
		status: z.nativeEnum(BOOKING_STATUS),
		booking_id: z.string(),
		customer_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('BookingCourseParticipantResponseBase');

export const BookingCourseParticipantResponseSchema = BookingCourseParticipantResponseBaseSchema.extend({
	customer: CustomerResponseBaseSchema,
	booking: BookingResponseBaseSchema,
	reservation_module: ReservationModuleResponseBaseSchema,
}).openapi('BookingCourseParticipantResponse');

export type BookingCourseParticipantBase = z.infer<typeof BookingCourseParticipantResponseBaseSchema>;
export type BookingCourseParticipantResponse = z.infer<typeof BookingCourseParticipantResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBookingCourseParticipant', CreateBookingCourseParticipantSchema);
	registry.register('UpdateBookingCourseParticipant', UpdateBookingCourseParticipantSchema);
	registry.register('BookingCourseParticipantResponseBase', BookingCourseParticipantResponseBaseSchema);
	registry.register('BookingCourseParticipantResponse', BookingCourseParticipantResponseSchema);
}

export type BookingCourseParticipant = {
	booking_course_participant_id: string;
	reservation_module_id: string;
	status: BOOKING_STATUS;
	booking_id: string;
	customer_id: string;
	created_at: Date;
	updated_at: Date;
	customer?: Customer;
	booking?: Booking;
	reservation_module?: ReservationModule;
};
