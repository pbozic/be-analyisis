import { BOOKING_STATUS } from '@prisma/client';
import { z } from 'zod';

import { addValideBookingSchema } from '../../lib/bookingHelpers';
import type { booking, booking_history_log } from '../../prisma/schemas/interfaces';
import { UpdateCustomerSchema } from './Customer';

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
export const CreateBookingBaseSchema = z.object({
	customer_id: z.string().uuid().optional(),
	first_name: z.string().min(1, 'First name is required').optional(),
	last_name: z.string().min(1, 'Last name is required').optional(),
	email: z.string().email('Invalid email address').optional(),
	telephone: z.string().optional(),
	telephone_code: z.string().optional(),
	telephone_number: z.string().optional(),
	reservation_module_id: z.string().uuid(),
	location_id: z.string().uuid().optional(),
	service_ids: z.array(z.string().uuid()).min(1, 'At least one service ID is required'),
	comment: z.string().optional(),
	start_time: z.string().datetime().optional(),
	end_time: z.string().datetime().optional(),
	employee_id: z.string().uuid().optional(),
	discount_percent: z.number().int().min(0).optional(),
	discount_amount: z.number().int().min(0).optional(),
	price_cents: z.number().int().min(0).optional(),
});

export const CreateBookingSchema = CreateBookingBaseSchema.superRefine((data, ctx) => {
	addValideBookingSchema(data, ctx);
});

export const UpdateBookingBaseSchema = z.object({
	booking_id: z.string().uuid().optional(),
	customer_id: z.string().uuid().optional(),
	first_name: z.string().min(1, 'First name is required').optional(),
	last_name: z.string().min(1, 'Last name is required').optional(),
	email: z.string().email('Invalid email address').optional(),
	telephone: z.string().optional(),
	telephone_code: z.string().optional(),
	telephone_number: z.string().optional(),
	reservation_module_id: z.string().uuid().optional(),
	location_id: z.string().uuid().optional(),
	service_id: z.string().uuid().optional(),
	comment: z.string().optional(),
	start_time: z.string().datetime().optional(),
	end_time: z.string().datetime().optional(),
	employee_id: z.string().uuid().optional(),
	parent_booking_id: z.string().uuid().optional().nullable(),
	status: z.nativeEnum(BOOKING_STATUS).optional(),
	discount_percent: z.number().int().min(0).optional().nullable(),
	discount_amount: z.number().int().min(0).optional().nullable(),
	keepTimeGaps: z.boolean().optional(),
	price_cents: z.number().int().min(0).optional(),
});

export const UpdateBookingSchema = UpdateBookingBaseSchema.superRefine((data, ctx) => {
	addValideBookingSchema(data, ctx);
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

export const AllBookingsForLocationAndEmployeesSchema = z.object({
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
	locationId: z.string().uuid(),
	employeeIds: z.array(z.string().uuid()),
});

export const CreateMultipleBookingsSchema = CreateBookingBaseSchema.omit({ service_ids: true })
	.extend({
		bookings: z.array(
			z.object({
				service_id: z.string().uuid(),
				start_time: z.string().datetime(),
				end_time: z.string().datetime(),
				price_cents: z.number().int().min(0).optional(),
				discount_percent: z.number().int().min(0).max(100).optional(),
				discount_amount: z.number().int().min(0).optional(),
				comment: z.string().optional(),
				location_id: z.string().uuid(),
				employee_id: z.string().uuid(),
			})
		),
	})
	.superRefine((data, ctx) => {
		addValideBookingSchema(data, ctx);
	});

export const UpdateMultipleBookingsSchema = z.object({
	customer: UpdateCustomerSchema,
	bookings: z.array(UpdateBookingBaseSchema),
	deletedBookings: z.array(UpdateBookingBaseSchema),
});

export const BookingsAnalyticsSchema = z.object({
	from: z.coerce.date().optional().nullable(),
	to: z.coerce.date().optional().nullable(),
	location_id: z.string().min(1).optional().nullable(),
	prevFrom: z.coerce.date().optional().nullable(),
	prevTo: z.coerce.date().optional().nullable(),
	type: z.enum(['day', 'week', 'month', 'year']).optional().default('day'),
});

// --- TYPES ---

export type Booking = booking;
export type BookingHistoryLog = booking_history_log;

export type CreateBookingInput = z.infer<typeof CreateBookingSchema>;
export type CreateMultipleBookingsInput = z.infer<typeof CreateMultipleBookingsSchema>;
export type CreateBookingSingleInput = Omit<CreateBookingInput, 'service_ids'> & {
	service_id: string;
	parent_booking_id?: string;
};
export type UpdateBookingInput = z.infer<typeof UpdateBookingSchema>;
export type UpdateMultipleBookingsInput = z.infer<typeof UpdateMultipleBookingsSchema>;
export type CreateBookingHistoryLogInput = z.infer<typeof CreateBookingHistoryLogSchema>;
export type FindBookingSlotsInput = z.infer<typeof FindBookingSlotsSchema>;
export type DeleteBookingInput = z.infer<typeof DeleteBookingSchema>;
export type ListBookingsParams = z.infer<typeof ListBookingsParamsSchema>;
export type BookingsAnalyticsParams = z.infer<typeof BookingsAnalyticsSchema>;
export type AllBookingsForLocationAndEmployeesParams = z.infer<typeof AllBookingsForLocationAndEmployeesSchema>;
