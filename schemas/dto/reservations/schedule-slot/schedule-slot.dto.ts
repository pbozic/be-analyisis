import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { ScheduleRefSchema } from '../schedule/schedule.dto.js';

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
	schedule: ScheduleRefSchema.optional(),
	employee: EmployeeRefSchema.optional(),
}).openapi({
	title: 'ScheduleSlotResponse',
	description: 'Complete schedule slot response with related entities',
});

// ===== EXPORTED TYPES =====
export type ScheduleSlotBase = z.infer<typeof ScheduleSlotBaseSchema>;
export type ScheduleSlotRef = z.infer<typeof ScheduleSlotRefSchema>;
export type CreateScheduleSlotRequest = z.infer<typeof CreateScheduleSlotRequestSchema>;
export type UpdateScheduleSlotRequest = z.infer<typeof UpdateScheduleSlotRequestSchema>;
export type ScheduleSlotResponse = z.infer<typeof ScheduleSlotResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleSlotBase', ScheduleSlotBaseSchema);
	registry.register('ScheduleSlotRef', ScheduleSlotRefSchema);
	registry.register('CreateScheduleSlotRequest', CreateScheduleSlotRequestSchema);
	registry.register('UpdateScheduleSlotRequest', UpdateScheduleSlotRequestSchema);
	registry.register('ScheduleSlotResponse', ScheduleSlotResponseSchema);
}
