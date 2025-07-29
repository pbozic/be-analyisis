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

export const UpdateScheduleSchema = CreateScheduleSchema.partial();
export const UpdateScheduleEmployeeSchema = CreateScheduleEmployeeSchema.partial();
export const UpdateScheduleSlotSchema = CreateScheduleSlotSchema.partial();

export type CreateScheduleInput = z.infer<typeof CreateScheduleSchema>;
export type CreateScheduleEmployeeInput = z.infer<typeof CreateScheduleEmployeeSchema>;
export type CreateScheduleSlotInput = z.infer<typeof CreateScheduleSlotSchema>;

export type CreateScheduleSlotExceptionInput = z.infer<typeof CreateScheduleSlotExceptionSchema>;
export type CreateBookingSlotInput = z.infer<typeof CreateBookingSlotSchema>;

export type Schedule = schedule;
export type ScheduleWithoutEmployees = Omit<schedule, 'schedule_employees'>;

export type ScheduleEmployee = schedule_employee;

export type ScheduleSlot = schedule_slot;

export type ScheduleSlotException = schedule_slot_exceptions;

export type BookingSlot = booking_slots;

export type UpdateScheduleInput = z.infer<typeof UpdateScheduleSchema>;
export type UpdateScheduleEmployeeInput = z.infer<typeof UpdateScheduleEmployeeSchema>;
export type UpdateScheduleSlotInput = z.infer<typeof UpdateScheduleSlotSchema>;
