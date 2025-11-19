import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { ScheduleRefSchema } from '../schedule/schedule.dto.js';
import { LocationRefSchema } from '../location/location.dto.js';
import { CreateBookingSlotRequestSchema } from '../booking-slot/booking-slot.dto.js';
import { CreateScheduleSlotExceptionRequestSchema } from '../schedule-slot-exception/schedule-slot-exception.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ScheduleSlotBaseSchema = z
	.object({
		schedule_slot_id: UUID,
		schedule_id: UUID,
		schedule_employee_id: UUID,
		employee_id: UUID,
		date: Timestamp,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'ScheduleSlotBase',
		description: 'Base schedule slot schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ScheduleSlotRefSchema = z
	.object({
		schedule_slot_id: UUID,
		date: Timestamp,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'ScheduleSlotRef',
		description: 'Minimal schedule slot reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateScheduleSlotRequestSchema = z
	.object({
		schedule_id: UUID,
		schedule_employee_id: UUID,
		employee_id: UUID,
		date: Timestamp.openapi({ example: '2025-11-05', description: 'Slot date' }),
		start_time: Timestamp.openapi({ example: '2025-11-05T09:00:00Z', description: 'Slot start time' }),
		end_time: Timestamp.openapi({ example: '2025-11-05T17:00:00Z', description: 'Slot end time' }),
	})
	.openapi({
		title: 'CreateScheduleSlotRequest',
		description: 'Request schema for creating a new schedule slot',
	});

export const UpdateScheduleSlotRequestSchema = CreateScheduleSlotRequestSchema.partial().openapi({
	title: 'UpdateScheduleSlotRequest',
	description: 'Request schema for updating an existing schedule slot',
});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ScheduleSlotResponseSchema = ScheduleSlotBaseSchema.extend({
	schedule: z.lazy(() => ScheduleRefSchema).optional(),
	employee: z.lazy(() => EmployeeRefSchema).optional(),
}).openapi({
	title: 'ScheduleSlotResponse',
	description: 'Complete schedule slot response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getScheduleSlotById
export const ScheduleSlotDAOResponseSchema = ScheduleSlotBaseSchema.extend({
	booking_slots: z.array(z.unknown()).optional(),
	schedule_slot_exceptions: z.array(z.unknown()).optional(),
}).openapi({
	title: 'ScheduleSlotDAOResponse',
	description: 'Schedule slot response from DAO with booking slots and exceptions',
});

// DAO response for getScheduleSlotsByEmployeeIdAndDates
export const ScheduleSlotWithScheduleDAOResponseSchema = ScheduleSlotBaseSchema.extend({
	schedule: z
		.lazy(() =>
			ScheduleRefSchema.extend({
				location: LocationRefSchema.optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'ScheduleSlotWithScheduleDAOResponse',
	description: 'Schedule slot response from DAO with schedule and location details',
});

// ===== HELPER SCHEMAS FOR COMPLEX OPERATIONS =====
// Extended schemas for multi-schedule operations that allow optional fields
export const ScheduleSlotExceptionInputSchema = CreateScheduleSlotExceptionRequestSchema.extend({
	schedule_slot_id: UUID.optional(),
	schedule_slot_exception_id: UUID.optional(),
}).openapi({
	title: 'ScheduleSlotExceptionInput',
	description: 'Extended schedule slot exception schema for multi-schedule operations with optional fields',
});

export const BookingSlotInputSchema = CreateBookingSlotRequestSchema.extend({
	schedule_slot_id: UUID.optional(),
	booking_slot_id: UUID.optional(),
}).openapi({
	title: 'BookingSlotInput',
	description: 'Extended booking slot schema for multi-schedule operations with optional fields',
});

// ===== COMPLEX MULTI-SCHEDULE OPERATIONS =====
export const CreateMultipleSchedulesRequestSchema = z
	.object({
		schedule: CreateScheduleSlotRequestSchema,
		exceptions: z.array(ScheduleSlotExceptionInputSchema),
		bookingSlots: z.array(BookingSlotInputSchema),
		dates: z.array(z.string()),
	})
	.openapi({
		title: 'CreateMultipleSchedulesRequest',
		description: 'Request schema for creating multiple schedules with exceptions and booking slots',
	});

export const OverwriteMultipleSchedulesRequestSchema = z
	.object({
		schedule: CreateScheduleSlotRequestSchema,
		exceptions: z.array(ScheduleSlotExceptionInputSchema),
		bookingSlots: z.array(BookingSlotInputSchema),
		dates: z.array(z.string()),
		ids: z.array(z.string()),
	})
	.openapi({
		title: 'OverwriteMultipleSchedulesRequest',
		description: 'Request schema for overwriting multiple schedules',
	});

export const UpdateMultipleSchedulesRequestSchema = z
	.object({
		schedule: CreateScheduleSlotRequestSchema,
		exceptions: z.array(ScheduleSlotExceptionInputSchema),
		bookingSlots: z.array(BookingSlotInputSchema),
		dates: z.array(z.string()),
		update: z.boolean(),
	})
	.openapi({
		title: 'UpdateMultipleSchedulesRequest',
		description: 'Request schema for updating multiple schedules',
	});

// ===== COMPATIBILITY SCHEMAS FOR LEGACY FUNCTIONS =====
// These schemas match the expected structure of the legacy ScheduleSlotExceptionController functions
export const CreateScheduleSlotWithDataInputSchema = z.object({
	schedule: CreateScheduleSlotRequestSchema,
	exceptions: z.array(ScheduleSlotExceptionInputSchema),
	bookingSlots: z.array(BookingSlotInputSchema),
});

export const UpdateScheduleSlotWithDataInputSchema = z.object({
	schedule: UpdateScheduleSlotRequestSchema,
	exceptions: z.object({
		changes: z.array(
			ScheduleSlotExceptionInputSchema.extend({
				type: z.enum(['vacation', 'location_closed', 'other', 'health', 'break', 'lunch']),
				schedule_slot_id: UUID,
			})
		),
		removed: z.array(
			ScheduleSlotExceptionInputSchema.extend({
				type: z.enum(['vacation', 'location_closed', 'other', 'health', 'break', 'lunch']),
				schedule_slot_exception_id: UUID,
			})
		),
	}),
	bookingSlots: z.object({
		newOrChanged: z.array(BookingSlotInputSchema),
		removed: z.array(
			BookingSlotInputSchema.extend({
				booking_slot_id: UUID,
			})
		),
	}),
});

// ===== EXPORTED TYPES =====
export type ScheduleSlotBase = z.infer<typeof ScheduleSlotBaseSchema>;
export type ScheduleSlotRef = z.infer<typeof ScheduleSlotRefSchema>;
export type CreateScheduleSlotRequest = z.infer<typeof CreateScheduleSlotRequestSchema>;
export type UpdateScheduleSlotRequest = z.infer<typeof UpdateScheduleSlotRequestSchema>;
export type ScheduleSlotResponse = z.infer<typeof ScheduleSlotResponseSchema>;
export type ScheduleSlotDAOResponse = z.infer<typeof ScheduleSlotDAOResponseSchema>;
export type ScheduleSlotWithScheduleDAOResponse = z.infer<typeof ScheduleSlotWithScheduleDAOResponseSchema>;

// Helper types
export type ScheduleSlotExceptionInput = z.infer<typeof ScheduleSlotExceptionInputSchema>;
export type BookingSlotInput = z.infer<typeof BookingSlotInputSchema>;

// Complex operation types
export type CreateMultipleSchedulesRequest = z.infer<typeof CreateMultipleSchedulesRequestSchema>;
export type OverwriteMultipleSchedulesRequest = z.infer<typeof OverwriteMultipleSchedulesRequestSchema>;
export type UpdateMultipleSchedulesRequest = z.infer<typeof UpdateMultipleSchedulesRequestSchema>;

// Compatibility types for legacy functions
export type CreateScheduleSlotWithDataInput = z.infer<typeof CreateScheduleSlotWithDataInputSchema>;
export type UpdateScheduleSlotWithDataInput = z.infer<typeof UpdateScheduleSlotWithDataInputSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleSlotBase', ScheduleSlotBaseSchema);
	registry.register('ScheduleSlotRef', ScheduleSlotRefSchema);
	registry.register('CreateScheduleSlotRequest', CreateScheduleSlotRequestSchema);
	registry.register('UpdateScheduleSlotRequest', UpdateScheduleSlotRequestSchema);
	registry.register('ScheduleSlotResponse', ScheduleSlotResponseSchema);
	registry.register('ScheduleSlotDAO', ScheduleSlotDAOResponseSchema);
	registry.register('ScheduleSlotWithScheduleDAO', ScheduleSlotWithScheduleDAOResponseSchema);

	// Helper schemas
	registry.register('ScheduleSlotExceptionInput', ScheduleSlotExceptionInputSchema);
	registry.register('BookingSlotInput', BookingSlotInputSchema);

	// Complex operations
	registry.register('CreateMultipleSchedulesRequest', CreateMultipleSchedulesRequestSchema);
	registry.register('OverwriteMultipleSchedulesRequest', OverwriteMultipleSchedulesRequestSchema);
	registry.register('UpdateMultipleSchedulesRequest', UpdateMultipleSchedulesRequestSchema);
}
