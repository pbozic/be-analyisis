// --- ENUMS ---
import { BOOKING_STATUS } from '@prisma/client';
import { z } from 'zod';

import type { booking, booking_history_log } from '../../prisma/schemas/interfaces';

// --- SCHEMAS ---

export const CreateBookingSchema = z.object({
	customer_id: z.string().uuid(),
	reservation_module_id: z.string().uuid(),
	location_id: z.string().uuid().optional(),
	status: z.nativeEnum(BOOKING_STATUS),
	service_id: z.string().uuid(),
	comment: z.string().optional(),
	price_cents: z.number().int().optional(),
	start_time: z.string().datetime().optional(),
	end_time: z.string().datetime().optional(),
	assigned_employee_id: z.string().uuid().optional(),
	parent__booking_id: z.string().uuid().optional(),
});

export const UpdateBookingSchema = CreateBookingSchema.partial();
export const DeleteBookingSchema = z.object({ booking_id: z.string().uuid() });

export const CreateBookingHistoryLogSchema = z.object({
	booking_id: z.string().uuid(),
	status: z.nativeEnum(BOOKING_STATUS),
	comment: z.string().optional(),
	type: z.string().optional(),
	title: z.string().optional(),
	description: z.string().optional(),
	user_id: z.string().uuid().optional(),
});

// --- TYPES ---

export type Booking = booking;
export type BookingHistoryLog = booking_history_log;

export type CreateBookingInput = z.infer<typeof CreateBookingSchema>;
export type UpdateBookingInput = z.infer<typeof UpdateBookingSchema>;
export type CreateBookingHistoryLogInput = z.infer<typeof CreateBookingHistoryLogSchema>;
