import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { ScheduleRefSchema } from '../schedule/schedule.dto.js';
import { EmployeeRefSchema } from '../employee/employee.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ScheduleEmployeeBaseSchema = z
	.object({
		schedule_employee_id: UUID,
		schedule_id: UUID,
		employee_id: UUID,
	})
	.openapi({
		title: 'ScheduleEmployeeBase',
		description: 'Base schedule employee schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ScheduleEmployeeRefSchema = z
	.object({
		schedule_employee_id: UUID,
		schedule_id: UUID,
		employee_id: UUID,
	})
	.openapi({
		title: 'ScheduleEmployeeRef',
		description: 'Minimal schedule employee reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateScheduleEmployeeRequestSchema = z
	.object({
		schedule_id: UUID,
		employee_id: UUID,
	})
	.openapi({
		title: 'CreateScheduleEmployeeRequest',
		description: 'Request schema for creating a new schedule employee',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const ScheduleEmployeeResponseSchema = ScheduleEmployeeBaseSchema.extend({
	schedule: ScheduleRefSchema.optional(),
	employee: EmployeeRefSchema.optional(),
}).openapi({
	title: 'ScheduleEmployeeResponse',
	description: 'Complete schedule employee response with related entities',
});

// ===== EXPORTED TYPES =====
export type ScheduleEmployeeBase = z.infer<typeof ScheduleEmployeeBaseSchema>;
export type ScheduleEmployeeRef = z.infer<typeof ScheduleEmployeeRefSchema>;
export type CreateScheduleEmployeeRequest = z.infer<typeof CreateScheduleEmployeeRequestSchema>;
export type ScheduleEmployeeResponse = z.infer<typeof ScheduleEmployeeResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleEmployeeBase', ScheduleEmployeeBaseSchema);
	registry.register('ScheduleEmployeeRef', ScheduleEmployeeRefSchema);
	registry.register('CreateScheduleEmployeeRequest', CreateScheduleEmployeeRequestSchema);
	registry.register('ScheduleEmployeeResponse', ScheduleEmployeeResponseSchema);
}
