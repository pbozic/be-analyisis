import { BOOKING_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Booking } from '../reservations/Booking.js';
import type { Booking } from './Booking.js';
import { UserResponseSchema } from '../users/User';
import { BookingResponseSchema } from './Booking';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingHistoryLog = {
	booking_history_id: string;
	booking_id: string;
	status: BOOKING_STATUS;
	comment?: string | null;
	type?: string | null;
	title?: string | null;
	description?: string | null;
	created_at: Date;
	updated_at: Date;
	user_id?: string | null;
	user?: User | null;
	booking: Booking;
};

export const CreateBookingHistoryLogSchema = z
	.object({
		booking_history_id: z.string().uuid(),
		booking_id: z.string().uuid(),
		status: z.nativeEnum(BOOKING_STATUS),
		comment: z.string().nullable().optional(),
		type: z.string().nullable().optional(),
		title: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		user_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateBookingHistoryLog');

export type CreateBookingHistoryLogInput = z.infer<typeof CreateBookingHistoryLogSchema>;

export const UpdateBookingHistoryLogSchema = CreateBookingHistoryLogSchema.partial().openapi('UpdateBookingHistoryLog');
export type UpdateBookingHistoryLogInput = z.infer<typeof UpdateBookingHistoryLogSchema>;

export const BookingHistoryLogResponseSchema = z
	.object({
		booking_history_id: z.string(),
		booking_id: z.string(),
		status: z.nativeEnum(BOOKING_STATUS),
		comment: z.string().nullable().optional(),
		type: z.string().nullable().optional(),
		title: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user_id: z.string().nullable().optional(),
		user: UserResponseSchema.nullable().optional(),
		booking: BookingResponseSchema,
	})
	.openapi('BookingHistoryLogResponse');

export type BookingHistoryLogResponse = z.infer<typeof BookingHistoryLogResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBookingHistoryLog', CreateBookingHistoryLogSchema);
	registry.register('UpdateBookingHistoryLog', UpdateBookingHistoryLogSchema);
	registry.register('BookingHistoryLogResponse', BookingHistoryLogResponseSchema);
}
