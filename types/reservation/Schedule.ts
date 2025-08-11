// --- ENUMS ---
import { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';
import { z } from 'zod';

import type {
	booking_slots,
	schedule,
	schedule_employee,
	schedule_slot,
	schedule_slot_exceptions,
} from '../../prisma/schemas/interfaces';

export const CreateScheduleSchema = z.object({
	location_id: z.string().uuid(),
	name: z.string(),
	color: z.string().optional(),
	start_date: z.string().datetime(),
	end_date: z.string().datetime(),
	employee_ids: z.array(z.string().uuid()).optional(),
});

export const CreateScheduleEmployeeSchema = z.object({
	schedule_id: z.string().uuid(),
	employee_id: z.string().uuid(),
});

export const CreateScheduleSlotSchema = z.object({
	schedule_id: z.string().uuid(),
	schedule_employee_id: z.string().uuid(),
	employee_id: z.string().uuid(),
	date: z.string().datetime(),
	start_time: z.string().datetime(),
	end_time: z.string().datetime(),
});

export const CreateScheduleSlotExceptionSchema = z.object({
	schedule_slot_id: z.string().uuid(),
	date: z.string().datetime(),
	start_time: z.string().datetime(),
	end_time: z.string().datetime(),
	reason: z.string().optional(),
	type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
});

export const CreateBookingSlotSchema = z.object({
	schedule_slot_id: z.string().uuid(),
	start_time: z.string().datetime(),
	end_time: z.string().datetime(),
});

export const CreateBookingSlotSchemaWithId = CreateBookingSlotSchema.extend({
	booking_slot_id: z.string().uuid().optional(),
});

export const CreateBookingSlotSchemaWithBookingId = CreateBookingSlotSchema.extend({
	booking_slot_id: z.string().uuid(),
});

export const CreateOrUpdateBookingSlotSchema = z.object({
	bookingSlots: z.object({
		newOrChanged: z.array(CreateBookingSlotSchemaWithId),
		removed: z.array(CreateBookingSlotSchemaWithBookingId),
	}),
});

export const CreateExceptionsSchemaWithId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: z.string().uuid().optional(),
});

export const CreateExceptionsSchemaWithExceptionId = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_exception_id: z.string().uuid(),
});

export const CreateOrUpdateExceptionsSchema = z.object({
	exceptions: z.object({
		changes: z.array(CreateExceptionsSchemaWithId),
		removed: z.array(CreateExceptionsSchemaWithExceptionId),
	}),
});

export const CreateOrUpdateExceptionsAndBookingsSchema = z.object({
	exceptions: z.object({
		changes: z.array(CreateExceptionsSchemaWithId),
		removed: z.array(CreateExceptionsSchemaWithExceptionId),
	}),
	bookingSlots: z.object({
		newOrChanged: z.array(CreateBookingSlotSchemaWithId),
		removed: z.array(CreateBookingSlotSchemaWithBookingId),
	}),
});

export const CreateExceptionNoIds = CreateScheduleSlotExceptionSchema.extend({
	schedule_slot_id: z.string().uuid().optional(),
});

export const CreateScheduleSlotWithExceptionsSchema = z.object({
	schedule: CreateScheduleSlotSchema,
	exceptions: z.array(CreateExceptionNoIds),
});

export const CreateBookingSlotNoIds = CreateBookingSlotSchema.extend({
	schedule_slot_id: z.string().uuid().optional(),
});

export const CreateScheduleSlotWithBookingSlotsSchema = z.object({
	schedule: CreateScheduleSlotSchema,
	bookingSlots: z.array(CreateBookingSlotNoIds),
});

export const GetSchedulesWithSlotsSchema = z.object({
	schedule_id: z.string().uuid(),
	startDate: z.string().datetime(),
	endDate: z.string().datetime(),
});

export const UpdateScheduleSchema = CreateScheduleSchema.partial();
export const UpdateScheduleEmployeeSchema = CreateScheduleEmployeeSchema.partial();
export const UpdateScheduleSlotSchema = CreateScheduleSlotSchema.partial();
export const UpdateScheduleSlotExceptionSchema = CreateScheduleSlotExceptionSchema.partial();
export const UpdateCreateBookingSlotSchema = CreateBookingSlotSchema.partial();

export const UpdateScheduleSlotWithBookingSlotsSchema = z.object({
	schedule: UpdateScheduleSlotSchema,
	bookingSlots: z.object({
		newOrChanged: z.array(CreateBookingSlotSchemaWithId),
		removed: z.array(CreateBookingSlotSchemaWithBookingId),
	}),
});

export const CreateScheduleSlotWithExceptionsAndBookingSlotsSchema = z.object({
	schedule: CreateScheduleSlotSchema,
	exceptions: z.array(CreateExceptionNoIds),
	bookingSlots: z.array(CreateBookingSlotNoIds),
});

export const UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema = z.object({
	schedule: UpdateScheduleSlotSchema,
	exceptions: z.object({
		changes: z.array(CreateExceptionsSchemaWithId),
		removed: z.array(CreateExceptionsSchemaWithExceptionId),
	}),
	bookingSlots: z.object({
		newOrChanged: z.array(CreateBookingSlotSchemaWithId),
		removed: z.array(CreateBookingSlotSchemaWithBookingId),
	}),
});

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

export type Schedule = schedule;
export type ScheduleWithoutEmployees = Omit<schedule, 'schedule_employees'>;

export type ScheduleEmployee = schedule_employee;

export type ScheduleSlot = schedule_slot;

export type ScheduleSlotException = schedule_slot_exceptions;

export type BookingSlot = booking_slots;
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
