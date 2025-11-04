// --- ENUMS ---
import { z } from 'zod';
import { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ScheduleSlot } from './ScheduleSlot.js';
import type { Location } from './Location.js';
import type { ScheduleEmployee } from './ScheduleEmployee.js';
import { LocationResponseSchema } from './Location';
import { ScheduleEmployeeResponseSchema } from './ScheduleEmployee';
import { ScheduleSlotResponseSchema } from './ScheduleSlot';

extendZodWithOpenApi(z);

export const CreateScheduleSchema = z
	.object({
		location_id: z.string().uuid(),
		name: z.string(),
		color: z.string().optional(),
		start_date: z.string().datetime(),
		end_date: z.string().datetime(),
		employee_ids: z.array(z.string().uuid()).optional(),
	})
	.openapi('CreateSchedule');

export const CreateScheduleEmployeeSchema = z
	.object({
		schedule_id: z.string().uuid(),
		employee_id: z.string().uuid(),
	})
	.openapi('CreateScheduleEmployee');

export const CreateScheduleSlotSchema = z
	.object({
		schedule_id: z.string().uuid(),
		schedule_employee_id: z.string().uuid(),
		employee_id: z.string().uuid(),
		date: z.string().datetime(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
	})
	.openapi('CreateScheduleSlot');

export const CreateScheduleSlotExceptionSchema = z
	.object({
		schedule_slot_id: z.string().uuid(),
		date: z.string().datetime(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
		reason: z.string().optional(),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
	})
	.openapi('CreateScheduleSlotException');

export const CreateBookingSlotSchema = z
	.object({
		schedule_slot_id: z.string().uuid(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
	})
	.openapi('CreateBookingSlot');

export const CreateBookingSlotSchemaWithId = CreateBookingSlotSchema.extend({
	booking_slot_id: z.string().uuid().optional(),
}).openapi('CreateBookingSlotWithId');

export const CreateBookingSlotSchemaWithBookingId = CreateBookingSlotSchema.extend({
	booking_slot_id: z.string().uuid(),
}).openapi('CreateBookingSlotWithBookingId');

export const CreateOrUpdateBookingSlotSchema = z
	.object({
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi('CreateOrUpdateBookingSlot');

export const CreateExceptionsSchemaWithId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: z.string().uuid().optional(),
}).openapi('CreateExceptionsWithId');

export const CreateExceptionsSchemaWithExceptionId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: z.string().uuid(),
}).openapi('CreateExceptionsWithExceptionId');

export const CreateOrUpdateExceptionsSchema = z
	.object({
		exceptions: z.object({
			changes: z.array(CreateExceptionsSchemaWithId),
			removed: z.array(CreateExceptionsSchemaWithExceptionId),
		}),
	})
	.openapi('CreateOrUpdateExceptions');

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
	.openapi('CreateOrUpdateExceptionsAndBookings');

export const CreateExceptionNoIds = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_id: z.string().uuid().optional(),
}).openapi('CreateExceptionNoIds');

export const CreateScheduleSlotWithExceptionsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
	})
	.openapi('CreateScheduleSlotWithExceptions');

export const CreateBookingSlotNoIds = CreateBookingSlotSchema.extend({
	schedule_slot_id: z.string().uuid().optional(),
}).openapi('CreateBookingSlotNoIds');

export const CreateScheduleSlotWithBookingSlotsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		bookingSlots: z.array(CreateBookingSlotNoIds),
	})
	.openapi('CreateScheduleSlotWithBookingSlots');

export const GetSchedulesWithSlotsSchema = z
	.object({
		schedule_id: z.string().uuid(),
		startDate: z.string().datetime(),
		endDate: z.string().datetime(),
	})
	.openapi('GetSchedulesWithSlots');

export const UpdateScheduleSchema = CreateScheduleSchema.partial();
export const UpdateScheduleEmployeeSchema = CreateScheduleEmployeeSchema.partial();
export const UpdateScheduleSlotSchema = CreateScheduleSlotSchema.partial();
export const UpdateScheduleSlotExceptionSchema = CreateScheduleSlotExceptionSchema.partial();
export const UpdateCreateBookingSlotSchema = CreateBookingSlotSchema.partial();

export const UpdateScheduleSlotWithBookingSlotsSchema = z
	.object({
		schedule: UpdateScheduleSlotSchema,
		bookingSlots: z.object({
			newOrChanged: z.array(CreateBookingSlotSchemaWithId),
			removed: z.array(CreateBookingSlotSchemaWithBookingId),
		}),
	})
	.openapi('UpdateScheduleSlotWithBookingSlots');

export const CreateScheduleSlotWithExceptionsAndBookingSlotsSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
	})
	.openapi('CreateScheduleSlotWithExceptionsAndBookingSlots');

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
	.openapi('UpdateScheduleSlotWithBookingSlotsAndExceptions');

export const CreateMultipleSchedulesSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
		dates: z.array(z.string().datetime()),
	})
	.openapi('CreateMultipleSchedules');

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
		dates: z.array(z.string().datetime()),
		update: z.boolean(),
	})
	.openapi('UpdateMultipleSchedules');

export const OverwriteMultipleSchedulesSchema = z
	.object({
		schedule: CreateScheduleSlotSchema,
		exceptions: z.array(CreateExceptionNoIds),
		bookingSlots: z.array(CreateBookingSlotNoIds),
		dates: z.array(z.string().datetime()),
		ids: z.array(z.string().uuid()),
	})
	.openapi('OverwriteMultipleSchedules');

export const UpdateScheduleWithEmployeesSchema = z
	.object({
		formData: UpdateScheduleSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('UpdateScheduleWithEmployees');

export const CreateScheduleWithEmployeesSchema = z
	.object({
		formData: CreateScheduleSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('CreateScheduleWithEmployees');

export type CreateScheduleInput = z.infer<typeof CreateScheduleSchema>;
export type CreateScheduleEmployeeInput = z.infer<typeof CreateScheduleEmployeeSchema>;
export type CreateScheduleSlotInput = z.infer<typeof CreateScheduleSlotSchema>;
export type CreateScheduleSlotExceptionInput = z.infer<typeof CreateScheduleSlotExceptionSchema>;
export type CreateBookingSlotInput = z.infer<typeof CreateBookingSlotSchema>;
export type CreateOrUpdateBookingSlotInput = z.infer<typeof CreateOrUpdateBookingSlotSchema>;
export type CreateBookingSlotSchemaWithIdInput = z.infer<typeof CreateBookingSlotSchemaWithId>;
export type CreateBookingSlotSchemaWithBookingIdInput = z.infer<typeof CreateBookingSlotSchemaWithBookingId>;
export type CreateScheduleSlotWithBookingSlotsInput = z.infer<typeof CreateScheduleSlotWithBookingSlotsSchema>;
export type UpdateScheduleSlotWithBookingSlotsInput = z.infer<typeof UpdateScheduleSlotWithBookingSlotsSchema>;

export type CreateOrUpdateExceptionsInput = z.infer<typeof CreateOrUpdateExceptionsSchema>;
export type CreateOrUpdateExceptionsSchemaWithIdInput = z.infer<typeof CreateExceptionsSchemaWithId>;
export type CreateOrUpdateExceptionsSchemaWithExceptionIdInput = z.infer<typeof CreateExceptionsSchemaWithExceptionId>;
export type CreateOrUpdateExceptionsAndBookingsInput = z.infer<typeof CreateOrUpdateExceptionsAndBookingsSchema>;
export type CreateScheduleSlotWithExceptionsInput = z.infer<typeof CreateScheduleSlotWithExceptionsSchema>;
export type CreateScheduleSlotWithExceptionsAndBookingSlotsInput = z.infer<
	typeof CreateScheduleSlotWithExceptionsAndBookingSlotsSchema
>;
export type UpdateScheduleSlotWithBookingSlotsAndExceptionsInput = z.infer<
	typeof UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema
>;
export type GetSchedulesWithSlotsInput = z.infer<typeof GetSchedulesWithSlotsSchema>;

export type CreateMultipleSchedulesInput = z.infer<typeof CreateMultipleSchedulesSchema>;
export type UpdateMultipleSchedulesInput = z.infer<typeof UpdateMultipleSchedulesSchema>;
export type OverwriteMultipleSchedulesInput = z.infer<typeof OverwriteMultipleSchedulesSchema>;

export type UpdateScheduleWithEmployeesInput = z.infer<typeof UpdateScheduleWithEmployeesSchema>;
export type CreateScheduleWithEmployeesInput = z.infer<typeof CreateScheduleWithEmployeesSchema>;

export type ScheduleWithoutEmployees = Omit<Schedule, 'schedule_employees'>;

export type BookingSlotWithoutId = CreateBookingSlotSchemaWithIdInput;
export type BookingSlotWithId = CreateBookingSlotSchemaWithBookingIdInput;
export type CreateScheduleSlotWithBookingSlots = CreateScheduleSlotWithBookingSlotsInput;

export type ExceptionWithoutId = CreateOrUpdateExceptionsSchemaWithIdInput;
export type ExceptionWithId = CreateOrUpdateExceptionsSchemaWithExceptionIdInput;

export type UpdateScheduleInput = z.infer<typeof UpdateScheduleSchema>;
export type UpdateScheduleEmployeeInput = z.infer<typeof UpdateScheduleEmployeeSchema>;
export type UpdateScheduleSlotInput = z.infer<typeof UpdateScheduleSlotSchema>;
export type UpdateScheduleSlotExceptionInput = z.infer<typeof UpdateScheduleSlotExceptionSchema>;
export type UpdateBookingSlotSchemaInput = z.infer<typeof UpdateCreateBookingSlotSchema>;

export const ScheduleResponseSchema = z
	.object({
		schedule_id: z.string(),
		location_id: z.string(),
		name: z.string(),
		color: z.string().nullable().optional(),
		start_date: z.string().datetime(),
		end_date: z.string().datetime(),
		location: LocationResponseSchema,
		schedule_employees: z.array(ScheduleEmployeeResponseSchema),
		schedule_slots: z.array(ScheduleSlotResponseSchema),
	})
	.openapi('ScheduleResponse');

export type ScheduleResponse = z.infer<typeof ScheduleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateSchedule', CreateScheduleSchema);
	registry.register('UpdateSchedule', UpdateScheduleSchema);
	registry.register('ScheduleResponse', ScheduleResponseSchema);

	registry.register('CreateScheduleEmployee', CreateScheduleEmployeeSchema);
	registry.register('UpdateScheduleEmployee', UpdateScheduleEmployeeSchema);

	registry.register('CreateScheduleSlot', CreateScheduleSlotSchema);
	registry.register('UpdateScheduleSlot', UpdateScheduleSlotSchema);

	registry.register('CreateScheduleSlotException', CreateScheduleSlotExceptionSchema);
	registry.register('UpdateScheduleSlotException', UpdateScheduleSlotExceptionSchema);

	registry.register('CreateBookingSlot', CreateBookingSlotSchema);
	registry.register('UpdateBookingSlot', UpdateCreateBookingSlotSchema);

	registry.register('CreateOrUpdateBookingSlot', CreateOrUpdateBookingSlotSchema);
	registry.register('CreateScheduleSlotWithBookingSlots', CreateScheduleSlotWithBookingSlotsSchema);
	registry.register('UpdateScheduleSlotWithBookingSlots', UpdateScheduleSlotWithBookingSlotsSchema);

	registry.register('CreateOrUpdateExceptions', CreateOrUpdateExceptionsSchema);
	registry.register('CreateOrUpdateExceptionsAndBookings', CreateOrUpdateExceptionsAndBookingsSchema);
	registry.register('CreateScheduleSlotWithExceptions', CreateScheduleSlotWithExceptionsSchema);
	registry.register(
		'CreateScheduleSlotWithExceptionsAndBookingSlots',
		CreateScheduleSlotWithExceptionsAndBookingSlotsSchema
	);
	registry.register(
		'UpdateScheduleSlotWithBookingSlotsAndExceptions',
		UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema
	);

	registry.register('GetSchedulesWithSlots', GetSchedulesWithSlotsSchema);

	registry.register('CreateMultipleSchedules', CreateMultipleSchedulesSchema);
	registry.register('UpdateMultipleSchedules', UpdateMultipleSchedulesSchema);
	registry.register('OverwriteMultipleSchedules', OverwriteMultipleSchedulesSchema);

	registry.register('UpdateScheduleWithEmployees', UpdateScheduleWithEmployeesSchema);
	registry.register('CreateScheduleWithEmployees', CreateScheduleWithEmployeesSchema);
}

export type Schedule = {
	schedule_id: string;
	location_id: string;
	name: string;
	color?: string | null;
	start_date: Date;
	end_date: Date;
	location?: Location;
	schedule_employees?: ScheduleEmployee[];
	schedule_slots?: ScheduleSlot[];
};
