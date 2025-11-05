import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BookingSlot } from './BookingSlot.js';
import type { Schedule } from './Schedule.js';
import type { ScheduleEmployee } from './ScheduleEmployee.js';
import type { Employee } from './Employee.js';
import type { ScheduleSlotException } from './ScheduleSlotException.js';
import { BookingSlotResponseBaseSchema } from './BookingSlot';
import { ScheduleResponseBaseSchema } from './Schedule';
import { ScheduleEmployeeResponseBaseSchema } from './ScheduleEmployee';
import { EmployeeResponseBaseSchema } from './Employee';
import { ScheduleSlotExceptionResponseBaseSchema } from './ScheduleSlotException';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateScheduleSlotSchema = z
	.object({
		schedule_slot_id: z.string().uuid(),
		schedule_id: z.string().uuid(),
		schedule_employee_id: z.string().uuid(),
		employee_id: z.string().uuid(),
		date: z.unknown(),
		start_time: z.unknown(),
		end_time: z.unknown(),
	})
	.openapi('CreateScheduleSlot');

export type CreateScheduleSlotInput = z.infer<typeof CreateScheduleSlotSchema>;

export const UpdateScheduleSlotSchema = CreateScheduleSlotSchema.partial().openapi('UpdateScheduleSlot');
export type UpdateScheduleSlotInput = z.infer<typeof UpdateScheduleSlotSchema>;

export const ScheduleSlotResponseBaseSchema = z
	.object({
		schedule_slot_id: z.string(),
		schedule_id: z.string(),
		schedule_employee_id: z.string(),
		employee_id: z.string(),
		date: z.string().datetime(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
	})
	.openapi('ScheduleSlotResponseBase');

export const ScheduleSlotResponseSchema = ScheduleSlotResponseBaseSchema.extend({
	booking_slots: z.array(BookingSlotResponseBaseSchema),
	schedule: ScheduleResponseBaseSchema,
	schedule_employee: ScheduleEmployeeResponseBaseSchema,
	employee: EmployeeResponseBaseSchema,
	schedule_slot_exceptions: z.array(ScheduleSlotExceptionResponseBaseSchema),
}).openapi('ScheduleSlotResponse');

export type ScheduleSlotBase = z.infer<typeof ScheduleSlotResponseBaseSchema>;
export type ScheduleSlotResponse = z.infer<typeof ScheduleSlotResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateScheduleSlot', CreateScheduleSlotSchema);
	registry.register('UpdateScheduleSlot', UpdateScheduleSlotSchema);
	registry.register('ScheduleSlotResponseBase', ScheduleSlotResponseBaseSchema);
	registry.register('ScheduleSlotResponse', ScheduleSlotResponseSchema);
}

export type ScheduleSlot = {
	schedule_slot_id: string;
	schedule_id: string;
	schedule_employee_id: string;
	employee_id: string;
	date: Date;
	start_time: Date;
	end_time: Date;
	booking_slots?: BookingSlot[];
	schedule?: Schedule;
	schedule_employee?: ScheduleEmployee;
	employee?: Employee;
	schedule_slot_exceptions?: ScheduleSlotException[];
};
