import { z } from 'zod';
import { BOOKING_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { addValideBookingSchema } from '../../lib/bookingHelpers';
import type { ReservationModule } from './ReservationModule.js';
import type { Location } from './Location.js';
import type { Employee } from './Employee.js';
import type { Service } from './Service.js';
import type { Customer } from './Customer.js';
import type { BookingHistoryLog } from './BookingHistoryLog.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { BookingCourseTime } from './BookingCourseTime.js';
import type { BookingCourseParticipant } from './BookingCourseParticipant.js';
import { UpdateCustomerSchema } from './Customer';
import { ReservationModuleResponseBaseSchema } from './ReservationModule';
import { LocationResponseBaseSchema } from './Location';
import { EmployeeResponseBaseSchema } from './Employee';
import { ServiceResponseBaseSchema } from './Service';
import { CustomerResponseBaseSchema } from './Customer';
import { BookingHistoryLogResponseBaseSchema } from './BookingHistoryLog';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { BookingCourseTimeResponseBaseSchema } from './BookingCourseTime';
import { BookingCourseParticipantResponseBaseSchema } from './BookingCourseParticipant';

extendZodWithOpenApi(z);

// --- SCHEMAS ---
export const ListBookingsParamsSchema = z
	.object({
		reservation_module_id: z.string().min(1, 'reservation_module_id is required'),
		status: z.array(z.nativeEnum(BOOKING_STATUS)).optional().nullable(),
		from: z.coerce.date().optional().nullable(),
		to: z.coerce.date().optional().nullable(),
		location_id: z.string().min(1).optional().nullable(),
		employee_id: z.string().min(1).optional().nullable(),
		limit: z.number().int().positive().optional().nullable(),
		offset: z.number().int().min(0).optional().nullable(),
	})
	.openapi('ListBookingsParams');

export const FindBookingSlotsSchema = z
	.object({
		serviceIds: z.array(z.string().min(1, 'serviceId cannot be empty')).min(1, 'Provide at least one serviceId'),
		locationId: z.string().min(1).optional(),
		employeeId: z.string().min(1).optional(),
		reservationModuleId: z.string().min(1, 'reservationModuleId is required'),
		date: z.coerce.date(), // accepts string | number | Date → coerces to Date
		returnFirst: z.boolean().optional().default(false),
	})
	.openapi('FindBookingSlots');

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
	course: z.boolean().optional().default(false),
	people_allowed: z.number().min(1).optional().default(1),
	people_booked: z.number().min(0).optional().default(0),
});

export const CreateBookingSchema = CreateBookingBaseSchema.superRefine((data, ctx) => {
	addValideBookingSchema(data, ctx);
}).openapi('CreateBooking');

export const CreateBookingCourseSchema = CreateBookingBaseSchema.omit({ service_ids: true })
	.extend({
		service_id: z.string().uuid(),
		course_time: z.array(
			z.object({
				start_time: z.string().datetime(),
				end_time: z.string().datetime(),
			})
		),
	})
	.openapi('CreateBookingCourse');

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
	course: z.boolean().optional().default(false),
	people_allowed: z.number().min(1).optional().default(1),
	people_booked: z.number().min(0).optional().default(0),
});

export const UpdateBookingSchema = UpdateBookingBaseSchema.superRefine((data, ctx) => {
	addValideBookingSchema(data, ctx);
}).openapi('UpdateBooking');

export const BookingCourseTimeSchema = z
	.object({
		reservation_module_id: z.string().uuid(),
		booking_id: z.string().uuid(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
	})
	.openapi('BookingCourseTime');

export const UpdateBookingCourseTimeSchema = z
	.object({
		booking_course_time_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
		booking_id: z.string().uuid(),
		start_time: z.string().datetime().optional(),
		end_time: z.string().datetime().optional(),
	})
	.openapi('UpdateBookingCourseTime');

export const UpdateBookingCourseSchema = UpdateBookingBaseSchema.extend({
	course_time_added: z.array(
		z.object({
			start_time: z.string().datetime(),
			end_time: z.string().datetime(),
		})
	),
	course_time_removed: z.array(
		z.object({
			booking_course_time_id: z.string().uuid(),
			start_time: z.string().datetime(),
			end_time: z.string().datetime(),
		})
	),
	course_time_changed: z.array(
		z.object({
			booking_course_time_id: z.string().uuid(),
			start_time: z.string().datetime(),
			end_time: z.string().datetime(),
		})
	),
}).openapi('UpdateBookingCourse');

export const DeleteBookingCourseTimeSchema = z
	.object({
		booking_course_time_id: z.string().uuid(),
		booking_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
	})
	.openapi('DeleteBookingCourseTime');

export const DeleteBookingSchema = z.object({ booking_id: z.string().uuid() }).openapi('DeleteBooking');

export const CreateBookingHistoryLogSchema = z
	.object({
		booking_id: z.string().uuid(),
		status: z.nativeEnum(BOOKING_STATUS),
		comment: z.string().optional(),
		type: z.string().optional(),
		title: z.string().optional(),
		description: z.string().optional(),
		user_id: z.string().uuid().optional(),
	})
	.openapi('CreateBookingHistoryLog');

export const AllBookingsForLocationAndEmployeesSchema = z
	.object({
		startDate: z.string().datetime(),
		endDate: z.string().datetime(),
		locationId: z.string().uuid(),
		employeeIds: z.array(z.string().uuid()),
	})
	.openapi('AllBookingsForLocationAndEmployees');

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
	})
	.openapi('CreateMultipleBookings');

export const UpdateMultipleBookingsSchema = z
	.object({
		customer: UpdateCustomerSchema,
		bookings: z.array(UpdateBookingBaseSchema),
		deletedBookings: z.array(UpdateBookingBaseSchema),
	})
	.openapi('UpdateMultipleBookings');

export const BookingsAnalyticsSchema = z
	.object({
		from: z.coerce.date().optional().nullable(),
		to: z.coerce.date().optional().nullable(),
		location_id: z.string().min(1).optional().nullable(),
		prevFrom: z.coerce.date().optional().nullable(),
		prevTo: z.coerce.date().optional().nullable(),
		type: z.enum(['day', 'week', 'month', 'year']).optional().default('day'),
	})
	.openapi('BookingsAnalytics');

export const CreateCourseParticipantSchema = z
	.object({
		customer_id: z.string().uuid().optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: z.string().uuid(),
		booking_id: z.string().uuid().optional(),
	})
	.superRefine((data, ctx) => {
		addValideBookingSchema(data, ctx);
	})
	.openapi('CreateCourseParticipant');

export const UpdateCourseParticipantSchema = z
	.object({
		customer_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
		booking_id: z.string().uuid(),
	})
	.openapi('UpdateCourseParticipant');
// --- TYPES ---

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

export type CreateBookingCourseInput = z.infer<typeof CreateBookingCourseSchema>;
export type UpdateBookingCourseInput = z.infer<typeof UpdateBookingCourseSchema>;
export type CreateCourseParticipantInput = z.infer<typeof CreateCourseParticipantSchema>;
export type UpdateCourseParticipantInput = z.infer<typeof UpdateCourseParticipantSchema>;
export type BookingCourseTimeInput = z.infer<typeof BookingCourseTimeSchema>;
export type UpdateBookingCourseTimeInput = z.infer<typeof UpdateBookingCourseTimeSchema>;
export type DeleteBookingCourseTimeInput = z.infer<typeof DeleteBookingCourseTimeSchema>;

export const BookingResponseBaseSchema = z
	.object({
		booking_id: z.string().uuid(),
		customer_id: z.string().uuid().nullable().optional(),
		reservation_module_id: z.string().uuid(),
		location_id: z.string().uuid().nullable().optional(),
		status: z.nativeEnum(BOOKING_STATUS),
		service_id: z.string().uuid(),
		comment: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		price_cents: z.number().nullable().optional(),
		discount_percent: z.number().nullable().optional(),
		discount_amount: z.number().nullable().optional(),
		start_time: z.string().datetime().nullable().optional(),
		end_time: z.string().datetime().nullable().optional(),
		deleted_at: z.string().datetime().nullable().optional(),
		employee_id: z.string().uuid().nullable().optional(),
		parent_booking_id: z.string().uuid().nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
		course: z.boolean(),
		people_allowed: z.number().nullable().optional(),
		people_booked: z.number().nullable().optional(),
	})
	.openapi('BookingResponseBase');

const baseBookingWithRelations = BookingResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema,
	location: LocationResponseBaseSchema.nullable().optional(),
	employee: EmployeeResponseBaseSchema.nullable().optional(),
	service: ServiceResponseBaseSchema.nullable().optional(),
	customer: CustomerResponseBaseSchema.nullable().optional(),
	booking_history_log: z.array(BookingHistoryLogResponseBaseSchema),
	reviewable: ReviewableResponseSchema.nullable().optional(),
	booking_course_time: z.array(BookingCourseTimeResponseBaseSchema),
	booking_course_participant: z.array(BookingCourseParticipantResponseBaseSchema),
});

type BookingRes = z.infer<typeof baseBookingWithRelations> & {
	child_bookings: BookingRes[];
};

export const BookingResponseSchema: z.ZodType<BookingRes> = baseBookingWithRelations
	.extend({
		parent_booking: z
			.lazy(() => BookingResponseSchema)
			.nullable()
			.optional(),
		child_bookings: z.array(z.lazy(() => BookingResponseSchema)),
	})
	.openapi('BookingResponse');

export type BookingBase = z.infer<typeof BookingResponseBaseSchema>;
export type BookingResponse = z.infer<typeof BookingResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBooking', CreateBookingSchema);
	registry.register('UpdateBooking', UpdateBookingSchema);
	registry.register('BookingResponseBase', BookingResponseBaseSchema);
	registry.register('BookingResponse', BookingResponseSchema);

	registry.register('CreateMultipleBookings', CreateMultipleBookingsSchema);
	registry.register('UpdateMultipleBookings', UpdateMultipleBookingsSchema);

	registry.register('CreateBookingCourse', CreateBookingCourseSchema);
	registry.register('UpdateBookingCourse', UpdateBookingCourseSchema);

	registry.register('CreateBookingHistoryLog', CreateBookingHistoryLogSchema);
	registry.register('FindBookingSlots', FindBookingSlotsSchema);
	registry.register('ListBookingsParams', ListBookingsParamsSchema);
	registry.register('BookingsAnalytics', BookingsAnalyticsSchema);
	registry.register('AllBookingsForLocationAndEmployees', AllBookingsForLocationAndEmployeesSchema);

	registry.register('CreateCourseParticipant', CreateCourseParticipantSchema);
	registry.register('UpdateCourseParticipant', UpdateCourseParticipantSchema);
	registry.register('BookingCourseTime', BookingCourseTimeSchema);
	registry.register('UpdateBookingCourseTime', UpdateBookingCourseTimeSchema);
	registry.register('DeleteBookingCourseTime', DeleteBookingCourseTimeSchema);

	registry.register('DeleteBooking', DeleteBookingSchema);
}

export type Booking = {
	booking_id: string;
	customer_id?: string | null;
	reservation_module_id: string;
	location_id?: string | null;
	status: BOOKING_STATUS;
	service_id: string;
	comment?: string | null;
	created_at: Date;
	updated_at: Date;
	price_cents?: number | null;
	discount_percent?: number | null;
	discount_amount?: number | null;
	start_time?: Date | null;
	end_time?: Date | null;
	deleted_at?: Date | null;
	employee_id?: string | null;
	parent_booking_id?: string | null;
	parent_booking?: Booking | null;
	child_bookings?: Booking[];
	reservation_module?: ReservationModule;
	location?: Location | null;
	employee?: Employee | null;
	service?: Service | null;
	customer?: Customer | null;
	booking_history_log?: BookingHistoryLog[];
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	course: boolean;
	people_allowed?: number | null;
	people_booked?: number | null;
	booking_course_time?: BookingCourseTime[];
	booking_course_participant?: BookingCourseParticipant[];
};
