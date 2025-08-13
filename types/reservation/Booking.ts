// --- ENUMS ---
import { BOOKING_STATUS } from '@prisma/client';
import { z } from 'zod';

import type { booking, booking_history_log } from '../../prisma/schemas/interfaces';

// --- SCHEMAS ---
export const ListBookingsParamsSchema = z.object({
	reservation_module_id: z.string().min(1, 'reservation_module_id is required'),
	status: z.array(z.nativeEnum(BOOKING_STATUS)).optional().nullable(),
	from: z.coerce.date().optional().nullable(),
	to: z.coerce.date().optional().nullable(),
	location_id: z.string().min(1).optional().nullable(),
	employee_id: z.string().min(1).optional().nullable(),
	limit: z.number().int().positive().optional().nullable(),
	offset: z.number().int().min(0).optional().nullable(),
});

export const FindBookingSlotsSchema = z.object({
	serviceIds: z.array(z.string().min(1, 'serviceId cannot be empty')).min(1, 'Provide at least one serviceId'),
	locationId: z.string().min(1).optional(),
	employeeId: z.string().min(1).optional(),
	reservationModuleId: z.string().min(1, 'reservationModuleId is required'),
	date: z.coerce.date(), // accepts string | number | Date → coerces to Date
	returnFirst: z.boolean().optional().default(false),
});
export const CreateBookingSchema = z
	.object({
		customer_id: z.string().uuid().optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: z.string().uuid(),
		location_id: z.string().uuid().optional(),
		status: z.nativeEnum(BOOKING_STATUS),
		service_id: z.string().uuid(),
		comment: z.string().optional(),
		price_cents: z.number().int().optional(),
		start_time: z.string().datetime().optional(),
		end_time: z.string().datetime().optional(),
		assigned_employee_id: z.string().uuid().optional(),
		parent_booking_id: z.string().uuid().optional(),
	})
	.superRefine((data, ctx) => {
		if (!data.customer_id) {
			if (!data.first_name) {
				ctx.addIssue({
					path: ['first_name'],
					message: 'First name is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.last_name) {
				ctx.addIssue({
					path: ['last_name'],
					message: 'Last name is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.email) {
				ctx.addIssue({
					path: ['email'],
					message: 'Email is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone) {
				ctx.addIssue({
					path: ['telephone'],
					message: 'Telephone is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone_code) {
				ctx.addIssue({
					path: ['telephone_code'],
					message: 'Telephone code is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone_number) {
				ctx.addIssue({
					path: ['telephone_number'],
					message: 'Telephone number is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
		}
	});

export const UpdateBookingSchema = z
	.object({
		booking_id: z.string().uuid(),
		customer_id: z.string().uuid().optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: z.string().uuid().optional(),
		location_id: z.string().uuid().optional(),
		status: z.nativeEnum(BOOKING_STATUS).optional(),
		service_id: z.string().uuid().optional(),
		comment: z.string().optional(),
		price_cents: z.number().int().optional(),
		start_time: z.string().datetime().optional(),
		end_time: z.string().datetime().optional(),
		assigned_employee_id: z.string().uuid().optional(),
		parent_booking_id: z.string().uuid().optional(),
	})
	.superRefine((data, ctx) => {
		if (!data.customer_id) {
			if (!data.first_name) {
				ctx.addIssue({
					path: ['first_name'],
					message: 'First name is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.last_name) {
				ctx.addIssue({
					path: ['last_name'],
					message: 'Last name is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.email) {
				ctx.addIssue({
					path: ['email'],
					message: 'Email is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone) {
				ctx.addIssue({
					path: ['telephone'],
					message: 'Telephone is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone_code) {
				ctx.addIssue({
					path: ['telephone_code'],
					message: 'Telephone code is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.telephone_number) {
				ctx.addIssue({
					path: ['telephone_number'],
					message: 'Telephone number is required when no customer_id is provided',
					code: z.ZodIssueCode.custom,
				});
			}
		}
	});
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
export type FindBookingSlotsInput = z.infer<typeof FindBookingSlotsSchema>;
export type DeleteBookingInput = z.infer<typeof DeleteBookingSchema>;
export type ListBookingsParams = z.infer<typeof ListBookingsParamsSchema>;
