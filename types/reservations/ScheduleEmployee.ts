// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ScheduleSlot } from './ScheduleSlot.js';
import type { Schedule } from './Schedule.js';
import type { Employee } from './Employee.js';
import { ScheduleResponseBaseSchema } from './Schedule';
import { EmployeeResponseBaseSchema } from './Employee';
import { ScheduleSlotResponseBaseSchema } from './ScheduleSlot';

extendZodWithOpenApi(z);

export const CreateScheduleEmployeeSchema = z
	.object({
		schedule_employee_id: z.string().uuid(),
		schedule_id: z.string().uuid(),
		employee_id: z.string().uuid(),
	})
	.openapi('CreateScheduleEmployee');

export type CreateScheduleEmployeeInput = z.infer<typeof CreateScheduleEmployeeSchema>;

export const UpdateScheduleEmployeeSchema = CreateScheduleEmployeeSchema.partial().openapi('UpdateScheduleEmployee');
export type UpdateScheduleEmployeeInput = z.infer<typeof UpdateScheduleEmployeeSchema>;

export const ScheduleEmployeeResponseBaseSchema = z
	.object({
		schedule_employee_id: z.string(),
		schedule_id: z.string(),
		employee_id: z.string(),
	})
	.openapi('ScheduleEmployeeResponseBase');

export const ScheduleEmployeeResponseSchema = ScheduleEmployeeResponseBaseSchema.extend({
	schedule: ScheduleResponseBaseSchema,
	employee: EmployeeResponseBaseSchema,
	schedule_slots: z.array(ScheduleSlotResponseBaseSchema),
}).openapi('ScheduleEmployeeResponse');

export type ScheduleEmployeeBase = z.infer<typeof ScheduleEmployeeResponseBaseSchema>;
export type ScheduleEmployeeResponse = z.infer<typeof ScheduleEmployeeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateScheduleEmployee', CreateScheduleEmployeeSchema);
	registry.register('UpdateScheduleEmployee', UpdateScheduleEmployeeSchema);
	registry.register('ScheduleEmployeeResponseBase', ScheduleEmployeeResponseBaseSchema);
	registry.register('ScheduleEmployeeResponse', ScheduleEmployeeResponseSchema);
}

export type ScheduleEmployee = {
	schedule_employee_id: string;
	schedule_id: string;
	employee_id: string;
	schedule?: Schedule;
	employee?: Employee;
	schedule_slots?: ScheduleSlot[];
};
