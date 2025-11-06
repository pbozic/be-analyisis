import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../../primitives';
import { LocationRefSchema } from '../location/location.dto.js';
import { ScheduleEmployeeRefSchema } from '../schedule-employee/schedule-employee.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ScheduleBaseSchema = z
	.object({
		schedule_id: UUID,
		location_id: UUID,
		name: z.string().openapi({ example: 'November 2025 Schedule' }),
		color: z.string().nullable().optional().openapi({ example: '#10B981' }),
		start_date: Timestamp,
		end_date: Timestamp,
	})
	.openapi({
		title: 'ScheduleBase',
		description: 'Base schedule schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ScheduleRefSchema = z
	.object({
		schedule_id: UUID,
		name: z.string().openapi({ example: 'November 2025 Schedule' }),
		start_date: Timestamp,
		end_date: Timestamp,
	})
	.openapi({
		title: 'ScheduleRef',
		description: 'Minimal schedule reference for embedding in other entities',
	});

// ===== DETAIL SCHEMA (full schedule with full relations as returned by DAO) =====
export const ScheduleDetailSchema = ScheduleBaseSchema.extend({
	location: LocationRefSchema.nullable().optional(),
}).openapi({
	title: 'ScheduleDetail',
	description: 'Full schedule details returned from DAO functions with location',
});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateScheduleRequestSchema = z
	.object({
		location_id: UUID,
		name: z.string().min(1, 'Name is required').openapi({ example: 'November 2025 Schedule' }),
		color: z.string().optional().openapi({ example: '#10B981' }),
		start_date: Timestamp,
		end_date: Timestamp,
		employee_ids: z
			.array(UUID)
			.optional()
			.openapi({
				example: ['b9a8f8a2-9f5a-4a2a-9e6c-0f3b6b5f0b34'],
				description: 'Employee IDs to assign to this schedule',
			}),
	})
	.openapi({
		title: 'CreateScheduleRequest',
		description: 'Request schema for creating a new schedule',
	});

export const UpdateScheduleRequestSchema = CreateScheduleRequestSchema.partial().openapi({
	title: 'UpdateScheduleRequest',
	description: 'Request schema for updating an existing schedule',
});

// ===== SCHEDULE EMPLOYEE SCHEMAS =====
export const CreateScheduleEmployeeSchema = z
	.object({
		schedule_id: UUID,
		employee_id: UUID,
	})
	.openapi({
		title: 'CreateScheduleEmployee',
		description: 'Request schema for creating a schedule employee assignment',
	});

export const UpdateScheduleEmployeeSchema = CreateScheduleEmployeeSchema.partial().openapi({
	title: 'UpdateScheduleEmployee',
	description: 'Request schema for updating a schedule employee assignment',
});

// ===== SCHEDULE SLOT SCHEMAS =====
export const CreateScheduleSlotSchema = z
	.object({
		schedule_id: UUID,
		schedule_employee_id: UUID,
		employee_id: UUID,
		date: Timestamp,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'CreateScheduleSlot',
		description: 'Request schema for creating a schedule slot',
	});

export const UpdateScheduleSlotSchema = CreateScheduleSlotSchema.partial().openapi({
	title: 'UpdateScheduleSlot',
	description: 'Request schema for updating a schedule slot',
});

// ===== SCHEDULE SLOT EXCEPTION SCHEMAS =====
export const CreateScheduleSlotExceptionSchema = z
	.object({
		schedule_slot_id: UUID,
		date: Timestamp,
		start_time: Timestamp,
		end_time: Timestamp,
		reason: z.string().optional(),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
	})
	.openapi({
		title: 'CreateScheduleSlotException',
		description: 'Request schema for creating a schedule slot exception',
	});

export const UpdateScheduleSlotExceptionSchema = CreateScheduleSlotExceptionSchema.partial().openapi({
	title: 'UpdateScheduleSlotException',
	description: 'Request schema for updating a schedule slot exception',
});

// ===== BOOKING SLOT SCHEMAS =====
export const CreateBookingSlotSchema = z
	.object({
		schedule_slot_id: UUID,
		start_time: Timestamp,
		end_time: Timestamp,
	})
	.openapi({
		title: 'CreateBookingSlot',
		description: 'Request schema for creating a booking slot',
	});

export const UpdateBookingSlotSchema = CreateBookingSlotSchema.partial().openapi({
	title: 'UpdateBookingSlot',
	description: 'Request schema for updating a booking slot',
});

export const CreateBookingSlotSchemaWithId = CreateBookingSlotSchema.extend({
	booking_slot_id: UUID.optional(),
}).openapi({
	title: 'CreateBookingSlotWithId',
	description: 'Booking slot schema with optional ID for new or changed slots',
});

export const CreateBookingSlotSchemaWithBookingId = CreateBookingSlotSchema.extend({
	booking_slot_id: UUID,
}).openapi({
	title: 'CreateBookingSlotWithBookingId',
	description: 'Booking slot schema with required ID for removal',
});

export const CreateOrUpdateBookingSlotSchema = z
	.object({
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi({
		title: 'CreateOrUpdateBookingSlot',
		description: 'Request schema for creating or updating booking slots',
	});

// ===== EXCEPTION SCHEMAS WITH IDS =====
export const CreateExceptionsSchemaWithId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: UUID.optional(),
}).openapi({
	title: 'CreateExceptionsWithId',
	description: 'Exception schema with optional ID for new or changed exceptions',
});

export const CreateExceptionsSchemaWithExceptionId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: UUID,
}).openapi({
	title: 'CreateExceptionsWithExceptionId',
	description: 'Exception schema with required ID for removal',
});

export const CreateOrUpdateExceptionsSchema = z
	.object({
		exceptions: z.object({
			changes: z.array(CreateExceptionsSchemaWithId),
			removed: z.array(CreateExceptionsSchemaWithExceptionId),
		}),
	})
	.openapi({
		title: 'CreateOrUpdateExceptions',
		description: 'Request schema for creating or updating exceptions',
	});

export const CreateOrUpdateExceptionsAndBookingsSchema = z
	.object({
		exceptions: z.object({
			changes: z.array(CreateExceptionsSchemaWithId),
			removed: z.array(CreateExceptionsSchemaWithExceptionId),
		}),
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi({
		title: 'CreateOrUpdateExceptionsAndBookings',
		description: 'Request schema for creating or updating exceptions and booking slots',
	});

// ===== SCHEMAS WITHOUT IDS =====
export const CreateExceptionNoIds = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_id: UUID.optional(),
}).openapi({
	title: 'CreateExceptionNoIds',
	description: 'Exception schema without slot ID for batch creation',
});

export const CreateBookingSlotNoIds = CreateBookingSlotSchema.extend({
	schedule_slot_id: UUID.optional(),
}).openapi({
	title: 'CreateBookingSlotNoIds',
	description: 'Booking slot schema without slot ID for batch creation',
});

// ===== COMPLEX SCHEDULE SLOT CREATION SCHEMAS =====
export const CreateScheduleSlotWithExceptionsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
	})
	.openapi({
		title: 'CreateScheduleSlotWithExceptions',
		description: 'Request schema for creating a schedule slot with exceptions',
	});

export const CreateScheduleSlotWithBookingSlotsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		bookingSlots: z.array(CreateBookingSlotNoIds),
	})
	.openapi({
		title: 'CreateScheduleSlotWithBookingSlots',
		description: 'Request schema for creating a schedule slot with booking slots',
	});

export const CreateScheduleSlotWithExceptionsAndBookingSlotsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
	})
	.openapi({
		title: 'CreateScheduleSlotWithExceptionsAndBookingSlots',
		description: 'Request schema for creating a schedule slot with exceptions and booking slots',
	});

// ===== UPDATE SCHEDULE SLOT SCHEMAS =====
export const UpdateScheduleSlotWithBookingSlotsSchema = z
	.object({
		schedule: UpdateScheduleSlotSchema,
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi({
		title: 'UpdateScheduleSlotWithBookingSlots',
		description: 'Request schema for updating a schedule slot with booking slots',
	});

export const UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema = z
	.object({
		schedule: UpdateScheduleSlotSchema,
		exceptions: z.object({
			changes: z.array(CreateExceptionsSchemaWithId),
			removed: z.array(CreateExceptionsSchemaWithExceptionId),
		}),
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi({
		title: 'UpdateScheduleSlotWithBookingSlotsAndExceptions',
		description: 'Request schema for updating a schedule slot with exceptions and booking slots',
	});

// ===== MULTIPLE SCHEDULES SCHEMAS =====
export const CreateMultipleSchedulesSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
		dates: z.array(Timestamp),
	})
	.openapi({
		title: 'CreateMultipleSchedules',
		description: 'Request schema for creating multiple schedule slots',
	});

export const UpdateMultipleSchedulesSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.object({
			changes: z.array(CreateExceptionsSchemaWithId),
			removed: z.array(CreateExceptionsSchemaWithExceptionId),
		}),
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
		dates: z.array(Timestamp),
		update: z.boolean(),
	})
	.openapi({
		title: 'UpdateMultipleSchedules',
		description: 'Request schema for updating multiple schedule slots',
	});

export const OverwriteMultipleSchedulesSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
		dates: z.array(Timestamp),
		ids: z.array(UUID),
	})
	.openapi({
		title: 'OverwriteMultipleSchedules',
		description: 'Request schema for overwriting multiple schedule slots',
	});

// ===== SCHEDULE WITH EMPLOYEES SCHEMAS =====
export const CreateScheduleWithEmployeesSchema = z
	.object({
		formData: CreateScheduleRequestSchema,
		removed: z.array(UUID),
		added: z.array(UUID),
	})
	.openapi({
		title: 'CreateScheduleWithEmployees',
		description: 'Request schema for creating a schedule with employee assignments',
	});

export const UpdateScheduleWithEmployeesSchema = z
	.object({
		formData: UpdateScheduleRequestSchema,
		removed: z.array(UUID),
		added: z.array(UUID),
	})
	.openapi({
		title: 'UpdateScheduleWithEmployees',
		description: 'Request schema for updating a schedule with employee assignments',
	});

// ===== QUERY SCHEMAS =====
export const GetSchedulesWithSlotsSchema = z
	.object({
		schedule_id: UUID,
		startDate: Timestamp,
		endDate: Timestamp,
	})
	.openapi({
		title: 'GetSchedulesWithSlots',
		description: 'Request schema for getting schedules with slots in a date range',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ScheduleResponseSchema = ScheduleBaseSchema.extend({
	location: LocationRefSchema.optional(),
}).openapi({
	title: 'ScheduleResponse',
	description: 'Complete schedule response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getSchedulesByLocationId and getScheduleById
export const ScheduleDAOResponseSchema = ScheduleBaseSchema.extend({
	location: LocationRefSchema.optional(),
	schedule_employees: z.array(ScheduleEmployeeRefSchema).optional(),
}).openapi({
	title: 'ScheduleDAOResponse',
	description: 'Schedule response from DAO functions with location and employees',
});

// ===== EXPORTED TYPES =====
export type ScheduleBase = z.infer<typeof ScheduleBaseSchema>;
export type ScheduleRef = z.infer<typeof ScheduleRefSchema>;
export type ScheduleDetail = z.infer<typeof ScheduleDetailSchema>;
export type CreateScheduleRequest = z.infer<typeof CreateScheduleRequestSchema>;
export type UpdateScheduleRequest = z.infer<typeof UpdateScheduleRequestSchema>;
export type ScheduleResponse = z.infer<typeof ScheduleResponseSchema>;
export type ScheduleDAOResponse = z.infer<typeof ScheduleDAOResponseSchema>;

export type CreateScheduleEmployee = z.infer<typeof CreateScheduleEmployeeSchema>;
export type UpdateScheduleEmployee = z.infer<typeof UpdateScheduleEmployeeSchema>;

export type CreateScheduleSlot = z.infer<typeof CreateScheduleSlotSchema>;
export type UpdateScheduleSlot = z.infer<typeof UpdateScheduleSlotSchema>;

export type CreateScheduleSlotException = z.infer<typeof CreateScheduleSlotExceptionSchema>;
export type UpdateScheduleSlotException = z.infer<typeof UpdateScheduleSlotExceptionSchema>;

export type CreateBookingSlot = z.infer<typeof CreateBookingSlotSchema>;
export type UpdateBookingSlot = z.infer<typeof UpdateBookingSlotSchema>;
export type CreateBookingSlotWithId = z.infer<typeof CreateBookingSlotSchemaWithId>;
export type CreateBookingSlotWithBookingId = z.infer<typeof CreateBookingSlotSchemaWithBookingId>;
export type CreateOrUpdateBookingSlot = z.infer<typeof CreateOrUpdateBookingSlotSchema>;

export type CreateExceptionsWithId = z.infer<typeof CreateExceptionsSchemaWithId>;
export type CreateExceptionsWithExceptionId = z.infer<typeof CreateExceptionsSchemaWithExceptionId>;
export type CreateOrUpdateExceptions = z.infer<typeof CreateOrUpdateExceptionsSchema>;
export type CreateOrUpdateExceptionsAndBookings = z.infer<typeof CreateOrUpdateExceptionsAndBookingsSchema>;

export type CreateExceptionNoIds = z.infer<typeof CreateExceptionNoIds>;
export type CreateBookingSlotNoIds = z.infer<typeof CreateBookingSlotNoIds>;

export type CreateScheduleSlotWithExceptions = z.infer<typeof CreateScheduleSlotWithExceptionsSchema>;
export type CreateScheduleSlotWithBookingSlots = z.infer<typeof CreateScheduleSlotWithBookingSlotsSchema>;
export type CreateScheduleSlotWithExceptionsAndBookingSlots = z.infer<
	typeof CreateScheduleSlotWithExceptionsAndBookingSlotsSchema
>;

export type UpdateScheduleSlotWithBookingSlots = z.infer<typeof UpdateScheduleSlotWithBookingSlotsSchema>;
export type UpdateScheduleSlotWithBookingSlotsAndExceptions = z.infer<
	typeof UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema
>;

export type CreateMultipleSchedules = z.infer<typeof CreateMultipleSchedulesSchema>;
export type UpdateMultipleSchedules = z.infer<typeof UpdateMultipleSchedulesSchema>;
export type OverwriteMultipleSchedules = z.infer<typeof OverwriteMultipleSchedulesSchema>;

export type CreateScheduleWithEmployees = z.infer<typeof CreateScheduleWithEmployeesSchema>;
export type UpdateScheduleWithEmployees = z.infer<typeof UpdateScheduleWithEmployeesSchema>;

export type GetSchedulesWithSlots = z.infer<typeof GetSchedulesWithSlotsSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleBase', ScheduleBaseSchema);
	registry.register('ScheduleRef', ScheduleRefSchema);
	registry.register('ScheduleDetail', ScheduleDetailSchema);
	registry.register('CreateScheduleRequest', CreateScheduleRequestSchema);
	registry.register('UpdateScheduleRequest', UpdateScheduleRequestSchema);
	registry.register('ScheduleResponse', ScheduleResponseSchema);
	registry.register('ScheduleDAO', ScheduleDAOResponseSchema);

	registry.register('CreateScheduleEmployee', CreateScheduleEmployeeSchema);
	registry.register('UpdateScheduleEmployee', UpdateScheduleEmployeeSchema);

	registry.register('CreateScheduleSlot', CreateScheduleSlotSchema);
	registry.register('UpdateScheduleSlot', UpdateScheduleSlotSchema);

	registry.register('CreateScheduleSlotException', CreateScheduleSlotExceptionSchema);
	registry.register('UpdateScheduleSlotException', UpdateScheduleSlotExceptionSchema);

	registry.register('CreateBookingSlot', CreateBookingSlotSchema);
	registry.register('UpdateBookingSlot', UpdateBookingSlotSchema);
	registry.register('CreateBookingSlotWithId', CreateBookingSlotSchemaWithId);
	registry.register('CreateBookingSlotWithBookingId', CreateBookingSlotSchemaWithBookingId);
	registry.register('CreateOrUpdateBookingSlot', CreateOrUpdateBookingSlotSchema);

	registry.register('CreateExceptionsWithId', CreateExceptionsSchemaWithId);
	registry.register('CreateExceptionsWithExceptionId', CreateExceptionsSchemaWithExceptionId);
	registry.register('CreateOrUpdateExceptions', CreateOrUpdateExceptionsSchema);
	registry.register('CreateOrUpdateExceptionsAndBookings', CreateOrUpdateExceptionsAndBookingsSchema);

	registry.register('CreateExceptionNoIds', CreateExceptionNoIds);
	registry.register('CreateBookingSlotNoIds', CreateBookingSlotNoIds);

	registry.register('CreateScheduleSlotWithExceptions', CreateScheduleSlotWithExceptionsSchema);
	registry.register('CreateScheduleSlotWithBookingSlots', CreateScheduleSlotWithBookingSlotsSchema);
	registry.register(
		'CreateScheduleSlotWithExceptionsAndBookingSlots',
		CreateScheduleSlotWithExceptionsAndBookingSlotsSchema
	);

	registry.register('UpdateScheduleSlotWithBookingSlots', UpdateScheduleSlotWithBookingSlotsSchema);
	registry.register(
		'UpdateScheduleSlotWithBookingSlotsAndExceptions',
		UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema
	);

	registry.register('CreateMultipleSchedules', CreateMultipleSchedulesSchema);
	registry.register('UpdateMultipleSchedules', UpdateMultipleSchedulesSchema);
	registry.register('OverwriteMultipleSchedules', OverwriteMultipleSchedulesSchema);

	registry.register('CreateScheduleWithEmployees', CreateScheduleWithEmployeesSchema);
	registry.register('UpdateScheduleWithEmployees', UpdateScheduleWithEmployeesSchema);

	registry.register('GetSchedulesWithSlots', GetSchedulesWithSlotsSchema);
}
