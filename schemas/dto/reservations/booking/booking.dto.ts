import { z } from 'zod';
import { BOOKING_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { CustomerRefSchema, CustomerDetailSchema } from '../customer/customer.dto.js';
import { EmployeeRefSchema, EmployeeLightSchema } from '../employee/employee.dto.js';
import { LocationRefSchema } from '../location/location.dto.js';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { ServiceRefSchema, ServiceWithCategorySchema } from '../service/service.dto.js';
import { BookingHistoryLogRefSchema } from '../booking-history-log/booking-history-log.dto.js';
import { BookingCourseTimeRefSchema } from '../booking-course-time/booking-course-time.dto.js';
import { BookingCourseParticipantRefSchema } from '../booking-course-participant/booking-course-participant.dto.js';

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
		description: 'Minimal booking reference for embedding',
	});

// ===== WITH RELATIONS SCHEMA (extends RefSchema with selected relations from DAO) =====
export const BookingWithRelationsSchema = BookingRefSchema.extend({
	customer: CustomerDetailSchema.nullable().optional(),
	location: LocationRefSchema.nullable().optional(),
	employee: EmployeeLightSchema.nullable().optional(),
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
}).openapi({
	title: 'BookingWithRelations',
	description: 'Booking reference with related entities from DAO',
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

// ===== SINGLE BOOKING REQUEST SCHEMA =====
// Used for individual booking creation within a group (created from array)
export const CreateBookingSingleRequestSchema = CreateBookingRequestSchema.omit({ service_ids: true })
	.extend({
		service_id: UUID,
		parent_booking_id: UUID.optional(),
	})
	.openapi({
		title: 'CreateBookingSingleRequest',
		description:
			'Request schema for creating a single booking (with service_id instead of service_ids, used for group bookings)',
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
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	parent_booking: z
		.lazy(() => BookingRefSchema)
		.nullable()
		.optional(),
	child_bookings: z.array(z.lazy(() => BookingRefSchema)).optional(),
}).openapi({
	title: 'BookingResponse',
	description: 'Complete booking response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// These schemas represent what DAO functions return (with included relations)
export const BookingDAOResponseSchema = BookingBaseSchema.extend({
	customer: CustomerDetailSchema.nullable().optional(),
	location: LocationRefSchema.nullable().optional(),
	employee: EmployeeLightSchema.nullable().optional(),
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	booking_history_log: z.array(BookingHistoryLogRefSchema).optional(),
	history: z.array(BookingHistoryLogRefSchema).optional(),
}).openapi({
	title: 'BookingDAOResponse',
	description: 'Booking response from DAO functions with selected relations and history',
});

export const BookingWithChildrenDAOResponseSchema = BookingDAOResponseSchema.extend({
	child_bookings: z
		.array(
			BookingBaseSchema.extend({
				customer: CustomerDetailSchema.nullable().optional(),
				location: LocationRefSchema.nullable().optional(),
				service: z
					.lazy(() => ServiceRefSchema)
					.nullable()
					.optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'BookingWithChildrenDAOResponse',
	description: 'Booking response from DAO with child bookings included',
});

// DAO response for getBookingsByEmployeeIdsLocationAndDates
export const BookingWithEmployeeLocationServiceAndCustomerDAOResponseSchema = BookingBaseSchema.extend({
	employee: EmployeeLightSchema.nullable().optional(),
	location: LocationRefSchema.nullable().optional(),
	service: z
		.lazy(() => ServiceWithCategorySchema)
		.nullable()
		.optional(),
	customer: CustomerDetailSchema.nullable().optional(),
	child_bookings: z.array(BookingRefSchema).optional(),
}).openapi({
	title: 'BookingWithEmployeeLocationServiceAndCustomerDAOResponse',
	description: 'Booking response with employee, location, service (with category), customer and child bookings',
});

// DAO response for getBookingByIdWithChildren (deep nested structure)
export const BookingWithDeepChildrenDAOResponseSchema = BookingBaseSchema.extend({
	customer: CustomerDetailSchema.nullable().optional(),
	location: LocationRefSchema.nullable().optional(),
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
	employee: EmployeeLightSchema.nullable().optional(),
	child_bookings: z
		.array(
			BookingBaseSchema.extend({
				customer: CustomerDetailSchema.nullable().optional(),
				location: LocationRefSchema.nullable().optional(),
				service: z
					.lazy(() => ServiceRefSchema)
					.nullable()
					.optional(),
				employee: EmployeeLightSchema.nullable().optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'BookingWithDeepChildrenDAOResponse',
	description: 'Booking response with deep nested child bookings including full employee details with business_user',
});

// DAO response for getBookingCourseById
export const BookingCourseDAOResponseSchema = BookingBaseSchema.extend({
	booking_course_time: z.array(BookingCourseTimeRefSchema).optional(),
	booking_course_attendees: z
		.array(
			BookingCourseParticipantRefSchema.extend({
				customer: CustomerDetailSchema.nullable().optional(),
			})
		)
		.optional(),
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
	location: LocationRefSchema.nullable().optional(),
	employee: EmployeeLightSchema.nullable().optional(),
}).openapi({
	title: 'BookingCourseDAOResponse',
	description: 'Course booking response with course times, attendees and related entities',
});

// DAO response for getBookingCourses
export const BookingCoursesDAOResponseSchema = BookingBaseSchema.extend({
	booking_course_time: z.array(BookingCourseTimeRefSchema).optional(),
	location: LocationRefSchema.nullable().optional(),
	service: z
		.lazy(() => ServiceRefSchema)
		.nullable()
		.optional(),
	employee: EmployeeLightSchema.nullable().optional(),
}).openapi({
	title: 'BookingCoursesDAOResponse',
	description: 'Course booking response with course times and related entities',
});

// DAO response for getBookingsForAnalytics
export const BookingForAnalyticsDAOResponseSchema = BookingBaseSchema.extend({
	customer: CustomerDetailSchema.nullable().optional(),
}).openapi({
	title: 'BookingForAnalyticsDAOResponse',
	description: 'Booking response for analytics with customer',
});

// DAO response for getBookingCoursesByReservationModuleId (similar to getBookingCourses)
export const BookingCoursesByModuleDAOResponseSchema = BookingCoursesDAOResponseSchema.openapi({
	title: 'BookingCoursesByModuleDAOResponse',
	description: 'Course bookings by module response with course times and related entities',
});

// ===== BOOKING ANALYTICS SCHEMAS =====

export const BookingAnalyticsCardSchema = z
	.object({
		noShows: z.number().openapi({ description: 'Number of no-show bookings' }),
		cancels: z.number().openapi({ description: 'Number of cancelled bookings' }),
		totalPrice: z.number().openapi({ description: 'Total price from bookings in cents' }),
		newCustomers: z.number().openapi({ description: 'Number of unique new customers' }),
		newCustomersBookings: z.number().openapi({ description: 'Total bookings from new customers' }),
		bookingsCount: z.number().openapi({ description: 'Total number of bookings' }),
	})
	.openapi({
		title: 'BookingAnalyticsCard',
		description: 'Analytics data for a booking statistics card',
	});

export type BookingAnalyticsCard = z.infer<typeof BookingAnalyticsCardSchema>;

export const DailyBookingStatsSchema = z
	.object({
		date: z.string().openapi({ example: '2025-11-01T00:00:00Z', description: 'Start of period' }),
		endDate: z.string().openapi({ example: '2025-11-02T00:00:00Z', description: 'End of period' }),
		bookingsCount: z.number().openapi({ description: 'Number of bookings in period' }),
		totalPrice: z.number().openapi({ description: 'Total price from bookings' }),
	})
	.openapi({
		title: 'DailyBookingStats',
		description: 'Daily aggregated booking statistics',
	});

export type DailyBookingStats = z.infer<typeof DailyBookingStatsSchema>;

export const BookingsAnalyticsResponseSchema = z
	.object({
		cards: BookingAnalyticsCardSchema,
		cardsPrev: BookingAnalyticsCardSchema,
		sortedBookings: z.array(DailyBookingStatsSchema),
	})
	.openapi({
		title: 'BookingsAnalyticsResponse',
		description: 'Complete booking analytics with current and previous period comparison',
	});

export type BookingsAnalyticsResponse = z.infer<typeof BookingsAnalyticsResponseSchema>;

// ===== BOOKING GROUP OPERATION SCHEMAS =====

export const BookingGroupResponseSchema = z
	.object({
		parent: BookingResponseSchema,
		children: z.array(BookingResponseSchema),
		all: z.array(BookingResponseSchema),
	})
	.openapi({
		title: 'BookingGroupResponse',
		description: 'Parent booking with all child bookings after group creation',
	});

export type BookingGroupResponse = z.infer<typeof BookingGroupResponseSchema>;

export const BookingGroupUpdateResultSchema = z
	.object({
		parent: BookingResponseSchema.optional(),
		children: z.array(BookingResponseSchema),
		all: z.array(BookingResponseSchema),
	})
	.openapi({
		title: 'BookingGroupUpdateResult',
		description: 'Update result for a single booking group',
	});

export type BookingGroupUpdateResult = z.infer<typeof BookingGroupUpdateResultSchema>;

export const MultipleBookingGroupUpdateResponseSchema = z
	.object({
		result: z.array(BookingGroupUpdateResultSchema),
	})
	.openapi({
		title: 'MultipleBookingGroupUpdateResponse',
		description: 'Update results for multiple booking groups',
	});

export type MultipleBookingGroupUpdateResponse = z.infer<typeof MultipleBookingGroupUpdateResponseSchema>;

export const BookingGroupStartUpdateResponseSchema = z
	.object({
		booking: BookingResponseSchema,
		firstBookingData: BookingResponseSchema.optional(),
		updatedBookings: z.array(BookingResponseSchema).optional(),
	})
	.openapi({
		title: 'BookingGroupStartUpdateResponse',
		description: 'Updated bookings after group start time change',
	});

export type BookingGroupStartUpdateResponse = z.infer<typeof BookingGroupStartUpdateResponseSchema>;

export const UpdateBookingGroupResponseSchema = z
	.object({
		result: z.array(BookingGroupUpdateResultSchema),
		deleted: z.array(BookingResponseSchema),
	})
	.openapi({
		title: 'UpdateBookingGroupResponse',
		description: 'Result of updating multiple booking groups with deletions',
	});

export type UpdateBookingGroupResponse = z.infer<typeof UpdateBookingGroupResponseSchema>;

// ===== BOOKING WITH EMPLOYEES AND SLOTS SCHEMA =====

export const EmployeeWithSlotsSchema = EmployeeLightSchema.extend({
	booking_slots: z.array(BookingResponseSchema).optional(),
	schedule_slot_exceptions: z.array(BookingResponseSchema).optional(),
}).openapi({
	title: 'EmployeeWithSlots',
	description: 'Employee with business user and booking slots/exceptions',
});

export type EmployeeWithSlots = z.infer<typeof EmployeeWithSlotsSchema>;

export const BookingsAndEmployeesWithSlotsResponseSchema = z
	.object({
		bookings: z.array(BookingResponseSchema),
		employees: z.array(EmployeeWithSlotsSchema),
	})
	.openapi({
		title: 'BookingsAndEmployeesWithSlotsResponse',
		description: 'Bookings for location and employees with booking/schedule slots and exceptions',
	});

export type BookingsAndEmployeesWithSlotsResponse = z.infer<typeof BookingsAndEmployeesWithSlotsResponseSchema>;

// ===== EXPORTED TYPES =====
export type BookingBase = z.infer<typeof BookingBaseSchema>;

/**
 * BookingBasePrismaResult - represents raw Prisma booking result with Date objects
 * Use this type for mappers that receive direct Prisma query results
 */
export type BookingBasePrismaResult = Omit<
	BookingBase,
	'created_at' | 'updated_at' | 'start_time' | 'end_time' | 'deleted_at'
> & {
	created_at: Date;
	updated_at: Date;
	start_time: Date | null;
	end_time: Date | null;
	deleted_at: Date | null;
};

export type BookingRef = z.infer<typeof BookingRefSchema>;
export type BookingWithRelations = z.infer<typeof BookingWithRelationsSchema>;
export type CreateBookingRequest = z.infer<typeof CreateBookingRequestSchema>;
export type CreateBookingSingleRequest = z.infer<typeof CreateBookingSingleRequestSchema>;
export type UpdateBookingRequest = z.infer<typeof UpdateBookingRequestSchema>;
export type DeleteBookingRequest = z.infer<typeof DeleteBookingRequestSchema>;
export type BookingResponse = z.infer<typeof BookingResponseSchema>;
export type BookingDAOResponse = z.infer<typeof BookingDAOResponseSchema>;
export type BookingWithChildrenDAOResponse = z.infer<typeof BookingWithChildrenDAOResponseSchema>;
export type BookingWithEmployeeLocationServiceAndCustomerDAOResponse = z.infer<
	typeof BookingWithEmployeeLocationServiceAndCustomerDAOResponseSchema
>;
export type BookingWithDeepChildrenDAOResponse = z.infer<typeof BookingWithDeepChildrenDAOResponseSchema>;
export type BookingCourseDAOResponse = z.infer<typeof BookingCourseDAOResponseSchema>;
export type BookingCoursesDAOResponse = z.infer<typeof BookingCoursesDAOResponseSchema>;
export type BookingForAnalyticsDAOResponse = z.infer<typeof BookingForAnalyticsDAOResponseSchema>;
export type BookingCoursesByModuleDAOResponse = z.infer<typeof BookingCoursesByModuleDAOResponseSchema>;

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
	// Register request schemas
	registry.register('CreateBooking', CreateBookingRequestSchema);
	registry.register('CreateSingleBooking', CreateBookingSingleRequestSchema);
	registry.register('UpdateBooking', UpdateBookingRequestSchema);
	registry.register('DeleteBooking', DeleteBookingRequestSchema);
	registry.register('ListBookingsParams', ListBookingsParamsSchema);
	registry.register('CreateMultipleBooking', CreateMultipleBookingsRequestSchema);
	registry.register('CreateCourseBooking', CreateBookingCourseRequestSchema);
	registry.register('UpdateCourseBooking', UpdateBookingCourseRequestSchema);
	registry.register('UpdateMultipleBooking', UpdateMultipleBookingsRequestSchema);
	registry.register('FindBookingSlots', FindBookingSlotsSchema);
	registry.register('BookingsAnalytics', BookingsAnalyticsSchema);
	registry.register('AllBookingsForLocationAndEmployees', AllBookingsForLocationAndEmployeesSchema);

	// Register response schemas
	registry.register('BookingRef', BookingRefSchema);
	registry.register('BookingWithRelations', BookingWithRelationsSchema);
	registry.register('Booking', BookingResponseSchema);

	// Register DAO response schemas
	registry.register('BookingDAO', BookingDAOResponseSchema);
	registry.register('BookingWithChildrenDAO', BookingWithChildrenDAOResponseSchema);
	registry.register(
		'BookingWithEmployeeLocationServiceAndCustomerDAO',
		BookingWithEmployeeLocationServiceAndCustomerDAOResponseSchema
	);
	registry.register('BookingWithDeepChildrenDAO', BookingWithDeepChildrenDAOResponseSchema);
	registry.register('BookingCourseDAO', BookingCourseDAOResponseSchema);
	registry.register('BookingCoursesDAO', BookingCoursesDAOResponseSchema);
	registry.register('BookingForAnalyticsDAO', BookingForAnalyticsDAOResponseSchema);
	registry.register('BookingCoursesByModuleDAO', BookingCoursesByModuleDAOResponseSchema);

	// Register analytics schemas
	registry.register('BookingAnalyticsCard', BookingAnalyticsCardSchema);
	registry.register('DailyBookingStats', DailyBookingStatsSchema);
	registry.register('BookingsAnalyticsResponse', BookingsAnalyticsResponseSchema);

	// Register booking group operation schemas
	registry.register('BookingGroupResponse', BookingGroupResponseSchema);
	registry.register('BookingGroupUpdateResult', BookingGroupUpdateResultSchema);
	registry.register('MultipleBookingGroupUpdateResponse', MultipleBookingGroupUpdateResponseSchema);
	registry.register('BookingGroupStartUpdateResponse', BookingGroupStartUpdateResponseSchema);
	registry.register('UpdateBookingGroupResponse', UpdateBookingGroupResponseSchema);

	// Register employee with slots and combined response schemas
	registry.register('EmployeeWithSlots', EmployeeWithSlotsSchema);
	registry.register('BookingsAndEmployeesWithSlots', BookingsAndEmployeesWithSlotsResponseSchema);
}
