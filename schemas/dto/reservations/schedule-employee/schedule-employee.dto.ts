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
		schedule: ScheduleRefSchema.nullable().optional(),
		employee: EmployeeRefSchema.nullable().optional(),
	})
	.openapi({
		title: 'ScheduleEmployeeRef',
		description: 'Minimal schedule employee reference with nested schedule and employee details',
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

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getScheduleEmployeesByScheduleId and getEmployeesByScheduleIdWithSlots
export const ScheduleEmployeeDAOResponseSchema = ScheduleEmployeeBaseSchema.extend({
	schedule: ScheduleRefSchema.optional(),
	employee: z
		.object({
			employee_id: UUID,
			reservation_module_id: UUID,
			first_name: z.string().nullable().optional(),
			last_name: z.string().nullable().optional(),
			email: z.string().nullable().optional(),
			business_users_id: UUID.nullable().optional(),
			business_user: z
				.object({
					business_users_id: UUID,
					business_id: UUID,
					user_id: UUID,
					users: z
						.object({
							first_name: z.string().nullable().optional(),
							last_name: z.string().nullable().optional(),
							user_id: UUID,
						})
						.nullable()
						.optional(),
				})
				.nullable()
				.optional(),
		})
		.nullable()
		.optional(),
}).openapi({
	title: 'ScheduleEmployeeDAOResponse',
	description: 'Schedule employee response from DAO with full employee information',
});

// DAO response for getEmployeesByScheduleIdWithSlots (with schedule slots)
export const ScheduleEmployeeWithSlotsDAOResponseSchema = ScheduleEmployeeDAOResponseSchema.extend({
	schedule_slots: z
		.array(
			z.object({
				schedule_slot_id: UUID,
				schedule_slot_exceptions: z.array(z.unknown()).optional(),
				booking_slots: z.array(z.unknown()).optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'ScheduleEmployeeWithSlotsDAOResponse',
	description: 'Schedule employee response from DAO with schedule slots',
});

// ===== EXPORTED TYPES =====
export type ScheduleEmployeeBase = z.infer<typeof ScheduleEmployeeBaseSchema>;
export type ScheduleEmployeeRef = z.infer<typeof ScheduleEmployeeRefSchema>;
export type CreateScheduleEmployeeRequest = z.infer<typeof CreateScheduleEmployeeRequestSchema>;
export type ScheduleEmployeeResponse = z.infer<typeof ScheduleEmployeeResponseSchema>;
export type ScheduleEmployeeDAOResponse = z.infer<typeof ScheduleEmployeeDAOResponseSchema>;
export type ScheduleEmployeeWithSlotsDAOResponse = z.infer<typeof ScheduleEmployeeWithSlotsDAOResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ScheduleEmployeeBase', ScheduleEmployeeBaseSchema);
	registry.register('ScheduleEmployeeRef', ScheduleEmployeeRefSchema);
	registry.register('CreateScheduleEmployeeRequest', CreateScheduleEmployeeRequestSchema);
	registry.register('ScheduleEmployeeResponse', ScheduleEmployeeResponseSchema);
	registry.register('ScheduleEmployeeDAO', ScheduleEmployeeDAOResponseSchema);
	registry.register('ScheduleEmployeeWithSlotsDAO', ScheduleEmployeeWithSlotsDAOResponseSchema);
}
