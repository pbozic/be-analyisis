import { z } from 'zod';
import { BOOKING_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { CustomerRefSchema } from '../customer/customer.dto.js';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { LocationRefSchema } from '../location/location.dto.js';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { ServiceRefSchema } from '../service/service.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const BookingBaseSchema = z
	.object({
		booking_id: UUID,
		customer_id: UUID.nullable().optional(),
		reservation_module_id: UUID,
		location_id: UUID.nullable().optional(),
		status: z.nativeEnum(BOOKING_STATUS).openapi({ example: 'reserved' }),
		service_id: UUID,
		comment: z.string().nullable().optional().openapi({ example: 'Please prepare the room for 3 people' }),
		created_at: Timestamp,
		updated_at: Timestamp,
		price_cents: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 5000, description: 'Price in cents (50.00 EUR)' }),
		discount_percent: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 10, description: 'Discount percentage (0-100)' }),
		discount_amount: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 500, description: 'Discount amount in cents (5.00 EUR)' }),
		start_time: Timestamp.nullable().optional(),
		end_time: Timestamp.nullable().optional(),
		deleted_at: Timestamp.nullable().optional(),
		employee_id: UUID.nullable().optional(),
		parent_booking_id: UUID.nullable().optional(),
		reviewable_id: UUID.nullable().optional(),
		course: z.boolean().openapi({ example: false, description: 'Whether this is a course booking' }),
		people_allowed: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 5, description: 'Maximum number of people allowed' }),
		people_booked: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 3, description: 'Current number of people booked' }),
	})
	.openapi({
		title: 'BookingBase',
		description: 'Base booking schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const BookingRefSchema = z
	.object({
		booking_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		start_time: Timestamp.nullable().optional(),
		end_time: Timestamp.nullable().optional(),
		price_cents: z.number().int().nullable().optional(),
	})
	.openapi({
		title: 'BookingRef',
		description: 'Minimal booking reference for embedding in other entities',
	});

// ===== QUERY/LIST SCHEMAS =====
export const ListBookingsParamsSchema = z
	.object({
		reservation_module_id: UUID,
		status: z
			.array(z.nativeEnum(BOOKING_STATUS))
			.optional()
			.nullable()
			.openapi({ example: ['reserved', 'cancelled'] }),
		from: z.coerce.date().optional().nullable().openapi({ example: '2025-11-01' }),
		to: z.coerce.date().optional().nullable().openapi({ example: '2025-11-30' }),
		location_id: UUID.optional().nullable(),
		employee_id: UUID.optional().nullable(),
		limit: z.number().int().positive().optional().nullable().openapi({ example: 20 }),
		offset: z.number().int().min(0).optional().nullable().openapi({ example: 0 }),
	})
	.openapi({
		title: 'ListBookingsParams',
		description: 'Query parameters for listing bookings',
	});

export const FindBookingSlotsSchema = z
	.object({
		serviceIds: z
			.array(UUID)
			.min(1, 'Provide at least one serviceId')
			.openapi({ example: ['b9a8f8a2-9f5a-4a2a-9e6c-0f3b6b5f0b34'] }),
		locationId: UUID.optional(),
		employeeId: UUID.optional(),
		reservationModuleId: UUID,
		date: z.coerce.date().openapi({ example: '2025-11-05' }),
		returnFirst: z
			.boolean()
			.optional()
			.default(false)
			.openapi({ example: false, description: 'Return only the first available slot' }),
	})
	.openapi({
		title: 'FindBookingSlots',
		description: 'Request schema for finding available booking slots',
	});

export const BookingsAnalyticsSchema = z
	.object({
		from: z.coerce.date().optional().nullable().openapi({ example: '2025-11-01' }),
		to: z.coerce.date().optional().nullable().openapi({ example: '2025-11-30' }),
		location_id: UUID.optional().nullable(),
		prevFrom: z.coerce
			.date()
			.optional()
			.nullable()
			.openapi({ example: '2025-10-01', description: 'Previous period start date for comparison' }),
		prevTo: z.coerce
			.date()
			.optional()
			.nullable()
			.openapi({ example: '2025-10-31', description: 'Previous period end date for comparison' }),
		type: z
			.enum(['day', 'week', 'month', 'year'])
			.optional()
			.default('day')
			.openapi({ example: 'day', description: 'Aggregation period type' }),
	})
	.openapi({
		title: 'BookingsAnalytics',
		description: 'Query parameters for booking analytics',
	});

export const AllBookingsForLocationAndEmployeesSchema = z
	.object({
		startDate: Timestamp,
		endDate: Timestamp,
		locationId: UUID,
		employeeIds: z.array(UUID),
	})
	.openapi({
		title: 'AllBookingsForLocationAndEmployees',
		description: 'Request schema for fetching all bookings for location and employees',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateBookingRequestSchema = z
	.object({
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional().openapi({ example: 'John' }),
		last_name: z.string().min(1, 'Last name is required').optional().openapi({ example: 'Doe' }),
		email: z.string().email('Invalid email address').optional().openapi({ example: 'john.doe@example.com' }),
		telephone: z.string().optional().openapi({ example: '+38640123456' }),
		telephone_code: z.string().optional().openapi({ example: '+386' }),
		telephone_number: z.string().optional().openapi({ example: '40123456' }),
		reservation_module_id: UUID,
		location_id: UUID.optional(),
		service_ids: z
			.array(UUID)
			.min(1, 'At least one service ID is required')
			.openapi({ example: ['b9a8f8a2-9f5a-4a2a-9e6c-0f3b6b5f0b34'] }),
		comment: z.string().optional().openapi({ example: 'Please prepare the room for 3 people' }),
		start_time: Timestamp.optional(),
		end_time: Timestamp.optional(),
		employee_id: UUID.optional(),
		discount_percent: z.number().int().min(0).max(100).optional().openapi({ example: 10 }),
		discount_amount: z.number().int().min(0).optional().openapi({ example: 500 }),
		price_cents: z.number().int().min(0).optional().openapi({ example: 5000 }),
		course: z.boolean().optional().default(false).openapi({ example: false }),
		people_allowed: z.number().min(1).optional().default(1).openapi({ example: 5 }),
		people_booked: z.number().min(0).optional().default(0).openapi({ example: 0 }),
	})
	.openapi({
		title: 'CreateBookingRequest',
		description: 'Request schema for creating a new booking',
	});

export const UpdateBookingRequestSchema = z
	.object({
		booking_id: UUID.optional(),
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: UUID.optional(),
		location_id: UUID.optional(),
		service_id: UUID.optional(),
		comment: z.string().optional(),
		start_time: Timestamp.optional(),
		end_time: Timestamp.optional(),
		employee_id: UUID.optional(),
		parent_booking_id: UUID.optional().nullable(),
		status: z.nativeEnum(BOOKING_STATUS).optional(),
		discount_percent: z.number().int().min(0).max(100).optional().nullable(),
		discount_amount: z.number().int().min(0).optional().nullable(),
		keepTimeGaps: z.boolean().optional(),
		price_cents: z.number().int().min(0).optional(),
		course: z.boolean().optional().default(false),
		people_allowed: z.number().min(1).optional().default(1),
		people_booked: z.number().min(0).optional().default(0),
	})
	.openapi({
		title: 'UpdateBookingRequest',
		description: 'Request schema for updating an existing booking',
	});

export const DeleteBookingRequestSchema = z
	.object({
		booking_id: UUID,
	})
	.openapi({
		title: 'DeleteBookingRequest',
		description: 'Request schema for deleting a booking',
	});

// ===== COURSE BOOKING SCHEMAS =====
export const CreateBookingCourseRequestSchema = z
	.object({
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: UUID,
		location_id: UUID.optional(),
		service_id: UUID,
		comment: z.string().optional(),
		employee_id: UUID.optional(),
		discount_percent: z.number().int().min(0).max(100).optional(),
		discount_amount: z.number().int().min(0).optional(),
		price_cents: z.number().int().min(0).optional(),
		course: z.boolean().optional().default(false),
		people_allowed: z.number().min(1).optional().default(1),
		people_booked: z.number().min(0).optional().default(0),
		course_time: z.array(
			z.object({
				start_time: Timestamp,
				end_time: Timestamp,
			})
		),
	})
	.openapi({
		title: 'CreateBookingCourseRequest',
		description: 'Request schema for creating a course booking with multiple time slots',
	});

export const UpdateBookingCourseRequestSchema = z
	.object({
		booking_id: UUID.optional(),
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: UUID.optional(),
		location_id: UUID.optional(),
		service_id: UUID.optional(),
		comment: z.string().optional(),
		start_time: Timestamp.optional(),
		end_time: Timestamp.optional(),
		employee_id: UUID.optional(),
		parent_booking_id: UUID.optional().nullable(),
		status: z.nativeEnum(BOOKING_STATUS).optional(),
		discount_percent: z.number().int().min(0).max(100).optional().nullable(),
		discount_amount: z.number().int().min(0).optional().nullable(),
		keepTimeGaps: z.boolean().optional(),
		price_cents: z.number().int().min(0).optional(),
		course: z.boolean().optional().default(false),
		people_allowed: z.number().min(1).optional().default(1),
		people_booked: z.number().min(0).optional().default(0),
		course_time_added: z.array(
			z.object({
				start_time: Timestamp,
				end_time: Timestamp,
			})
		),
		course_time_removed: z.array(
			z.object({
				booking_course_time_id: UUID,
				start_time: Timestamp,
				end_time: Timestamp,
			})
		),
		course_time_changed: z.array(
			z.object({
				booking_course_time_id: UUID,
				start_time: Timestamp,
				end_time: Timestamp,
			})
		),
	})
	.openapi({
		title: 'UpdateBookingCourseRequest',
		description: 'Request schema for updating a course booking',
	});

// ===== MULTIPLE BOOKINGS SCHEMAS =====
export const CreateMultipleBookingsRequestSchema = z
	.object({
		customer_id: UUID.optional(),
		first_name: z.string().min(1, 'First name is required').optional(),
		last_name: z.string().min(1, 'Last name is required').optional(),
		email: z.string().email('Invalid email address').optional(),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		reservation_module_id: UUID,
		comment: z.string().optional(),
		course: z.boolean().optional().default(false),
		people_allowed: z.number().min(1).optional().default(1),
		people_booked: z.number().min(0).optional().default(0),
		bookings: z.array(
			z.object({
				service_id: UUID,
				start_time: Timestamp,
				end_time: Timestamp,
				price_cents: z.number().int().min(0).optional(),
				discount_percent: z.number().int().min(0).max(100).optional(),
				discount_amount: z.number().int().min(0).optional(),
				comment: z.string().optional(),
				location_id: UUID,
				employee_id: UUID,
			})
		),
	})
	.openapi({
		title: 'CreateMultipleBookingsRequest',
		description: 'Request schema for creating multiple bookings at once',
	});

export const UpdateMultipleBookingsRequestSchema = z
	.object({
		customer: z.object({
			customer_id: UUID,
			first_name: z.string().optional(),
			last_name: z.string().optional(),
			email: z.string().email().optional(),
			telephone: z.string().optional(),
		}),
		bookings: z.array(UpdateBookingRequestSchema),
		deletedBookings: z.array(UpdateBookingRequestSchema),
	})
	.openapi({
		title: 'UpdateMultipleBookingsRequest',
		description: 'Request schema for updating multiple bookings at once',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const BookingResponseSchema = BookingBaseSchema.extend({
	customer: CustomerRefSchema.nullable().optional(),
	location: LocationRefSchema.nullable().optional(),
	employee: EmployeeRefSchema.nullable().optional(),
	service: ServiceRefSchema.nullable().optional(),
	reservation_module: ReservationModuleRefSchema.optional(),
	parent_booking: z
		.lazy(() => BookingRefSchema)
		.nullable()
		.optional(),
	child_bookings: z.array(z.lazy(() => BookingRefSchema)).optional(),
}).openapi({
	title: 'BookingResponse',
	description: 'Complete booking response with related entities',
});

// ===== EXPORTED TYPES =====
export type BookingBase = z.infer<typeof BookingBaseSchema>;
export type BookingRef = z.infer<typeof BookingRefSchema>;
export type CreateBookingRequest = z.infer<typeof CreateBookingRequestSchema>;
export type UpdateBookingRequest = z.infer<typeof UpdateBookingRequestSchema>;
export type DeleteBookingRequest = z.infer<typeof DeleteBookingRequestSchema>;
export type BookingResponse = z.infer<typeof BookingResponseSchema>;

// Query/List types
export type ListBookingsParams = z.infer<typeof ListBookingsParamsSchema>;
export type FindBookingSlotsRequest = z.infer<typeof FindBookingSlotsSchema>;
export type BookingsAnalyticsParams = z.infer<typeof BookingsAnalyticsSchema>;
export type AllBookingsForLocationAndEmployeesRequest = z.infer<typeof AllBookingsForLocationAndEmployeesSchema>;

// Course booking types
export type CreateBookingCourseRequest = z.infer<typeof CreateBookingCourseRequestSchema>;
export type UpdateBookingCourseRequest = z.infer<typeof UpdateBookingCourseRequestSchema>;

// Multiple bookings types
export type CreateMultipleBookingsRequest = z.infer<typeof CreateMultipleBookingsRequestSchema>;
export type UpdateMultipleBookingsRequest = z.infer<typeof UpdateMultipleBookingsRequestSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	// Base schemas
	registry.register('BookingBase', BookingBaseSchema);
	registry.register('BookingRef', BookingRefSchema);
	registry.register('BookingResponse', BookingResponseSchema);

	// Query/List schemas
	registry.register('ListBookingsParams', ListBookingsParamsSchema);
	registry.register('FindBookingSlots', FindBookingSlotsSchema);
	registry.register('BookingsAnalytics', BookingsAnalyticsSchema);
	registry.register('AllBookingsForLocationAndEmployees', AllBookingsForLocationAndEmployeesSchema);

	// Single booking CRUD
	registry.register('CreateBookingRequest', CreateBookingRequestSchema);
	registry.register('UpdateBookingRequest', UpdateBookingRequestSchema);
	registry.register('DeleteBookingRequest', DeleteBookingRequestSchema);

	// Course booking schemas
	registry.register('CreateBookingCourseRequest', CreateBookingCourseRequestSchema);
	registry.register('UpdateBookingCourseRequest', UpdateBookingCourseRequestSchema);

	// Multiple bookings schemas
	registry.register('CreateMultipleBookingsRequest', CreateMultipleBookingsRequestSchema);
	registry.register('UpdateMultipleBookingsRequest', UpdateMultipleBookingsRequestSchema);
}
