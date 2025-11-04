import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Booking } from './Booking.js';
import type { ReservationModule } from './ReservationModule.js';
import { BookingResponseSchema } from './Booking';
import { ReservationModuleResponseSchema } from './ReservationModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBookingCourseTimeSchema = z
	.object({
		booking_course_time_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
		booking_id: z.string().uuid(),
		start_time: z.unknown(),
		end_time: z.unknown(),
	})
	.openapi('CreateBookingCourseTime');

export type CreateBookingCourseTimeInput = z.infer<typeof CreateBookingCourseTimeSchema>;

export const UpdateBookingCourseTimeSchema = CreateBookingCourseTimeSchema.partial().openapi('UpdateBookingCourseTime');
export type UpdateBookingCourseTimeInput = z.infer<typeof UpdateBookingCourseTimeSchema>;

export const BookingCourseTimeResponseSchema = z
	.object({
		booking_course_time_id: z.string(),
		reservation_module_id: z.string(),
		booking_id: z.string(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		booking: BookingResponseSchema,
		reservation_module: ReservationModuleResponseSchema,
	})
	.openapi('BookingCourseTimeResponse');

export type BookingCourseTimeResponse = z.infer<typeof BookingCourseTimeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBookingCourseTime', CreateBookingCourseTimeSchema);
	registry.register('UpdateBookingCourseTime', UpdateBookingCourseTimeSchema);
	registry.register('BookingCourseTimeResponse', BookingCourseTimeResponseSchema);
}

export type BookingCourseTime = {
	booking_course_time_id: string;
	reservation_module_id: string;
	booking_id: string;
	start_time: Date;
	end_time: Date;
	created_at: Date;
	updated_at: Date;
	booking?: Booking;
	reservation_module?: ReservationModule;
};
