import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, Email } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { ScheduleSlotRefSchema } from '../schedule-slot/schedule-slot.dto.js';
import { ScheduleEmployeeRefSchema } from '../schedule-employee/schedule-employee.dto.js';
import { ScheduleDetailSchema } from '../schedule/schedule.dto.js';
import { BusinessUserDetailSchema, BusinessUserLightSchema } from '../../Business/index.js';
import { BookingSlotBaseSchema } from '../booking-slot/booking-slot.dto.js';
import { ScheduleSlotExceptionBaseSchema } from '../schedule-slot-exception/schedule-slot-exception.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const EmployeeBaseSchema = z
	.object({
		employee_id: UUID,
		reservation_module_id: UUID,
		first_name: z.string().nullable().optional().openapi({ example: 'Jane' }),
		last_name: z.string().nullable().optional().openapi({ example: 'Smith' }),
		email: Email.nullable().optional(),
		telephone: z.string().nullable().optional().openapi({ example: '+38640987654' }),
		telephone_code: z.string().nullable().optional().openapi({ example: '+386' }),
		business_users_id: UUID.nullable().optional(),
		created_at: Timestamp,
		deleted_at: Timestamp.nullable().optional(),
	})
	.openapi({
		title: 'EmployeeBase',
		description: 'Base employee schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const EmployeeRefSchema = z
	.object({
		employee_id: UUID,
		first_name: z.string().nullable().optional().openapi({ example: 'Jane' }),
		last_name: z.string().nullable().optional().openapi({ example: 'Smith' }),
		email: Email.nullable().optional(),
		business_users_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'EmployeeRef',
		description: 'Minimal employee reference for embedding in other entities',
	});

// ===== WITH RELATIONS SCHEMA (extends RefSchema with selected relations) =====
export const EmployeeWithBusinessUserSchema = EmployeeRefSchema.extend({
	business_user: BusinessUserDetailSchema.nullable().optional(),
}).openapi({
	title: 'EmployeeWithBusinessUser',
	description: 'Employee reference with business user information',
});

// ===== DETAIL SCHEMA (full employee info for DAO returns) =====
export const EmployeeDetailSchema = EmployeeBaseSchema.extend({
	business_user: BusinessUserDetailSchema.nullable().optional(),
}).openapi({
	title: 'EmployeeDetail',
	description: 'Full employee details returned from DAO functions with business user information',
});

// ===== LIGHT SCHEMA (for includes with limited business_user select) =====
export const EmployeeLightSchema = EmployeeBaseSchema.extend({
	business_user: BusinessUserLightSchema.nullable().optional(),
}).openapi({
	title: 'EmployeeLight',
	description: 'Employee with lightweight business_user (limited select fields from Prisma include)',
});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateEmployeeRequestSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required').openapi({ example: 'Jane' }),
		last_name: z.string().min(1, 'Last name is required').openapi({ example: 'Smith' }),
		email: Email,
		telephone: z.string().openapi({ example: '+38640987654' }),
		telephone_code: z.string().openapi({ example: '+386' }),
		telephone_number: z.string().openapi({ example: '40987654' }),
		password: z
			.string()
			.min(6, 'Password must be at least 6 characters long')
			.openapi({ example: 'SecurePass123!', description: 'Minimum 6 characters' }),
		confirm_password: z
			.string()
			.min(6, 'Confirm password must be at least 6 characters long')
			.openapi({ example: 'SecurePass123!' }),
		reservation_module_id: UUID,
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'],
		message: 'Passwords do not match',
	})
	.openapi({
		title: 'CreateEmployeeRequest',
		description: 'Request schema for creating a new employee',
	});

export const UpdateEmployeeRequestSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required').optional().openapi({ example: 'Jane' }),
		last_name: z.string().min(1, 'Last name is required').optional().openapi({ example: 'Smith' }),
		email: Email.optional(),
		telephone: z.string().optional().openapi({ example: '+38640987654' }),
		telephone_code: z.string().optional().openapi({ example: '+386' }),
		telephone_number: z.string().optional().openapi({ example: '40987654' }),
	})
	.openapi({
		title: 'UpdateEmployeeRequest',
		description: 'Request schema for updating an existing employee',
	});

export const DeleteEmployeeRequestSchema = z
	.object({
		employee_id: UUID,
	})
	.openapi({
		title: 'DeleteEmployeeRequest',
		description: 'Request schema for deleting an employee',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const EmployeeResponseSchema = EmployeeBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'EmployeeResponse',
	description: 'Complete employee response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getEmployeesByReservationModuleId
export const EmployeeDAOResponseSchema = EmployeeBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
	business_user: BusinessUserDetailSchema.nullable().optional(),
}).openapi({
	title: 'EmployeeDAOResponse',
	description: 'Employee response from DAO with reservation module and business user',
});

// DAO response for getEmployeeById
export const EmployeeByIdDAOResponseSchema = EmployeeBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
	business_user: BusinessUserDetailSchema.nullable().optional(),
}).openapi({
	title: 'EmployeeByIdDAOResponse',
	description: 'Employee response from getEmployeeById with user information',
});

// DAO response for getEmployeeByIdWithSchedules (includes schedules array)
export const EmployeeByIdWithSchedulesDAOResponseSchema = EmployeeByIdDAOResponseSchema.extend({
	schedules: z
		.array(
			z.object({
				schedule_employee_id: UUID,
				schedule: ScheduleDetailSchema,
			})
		)
		.optional(),
}).openapi({
	title: 'EmployeeByIdWithSchedulesDAOResponse',
	description: 'Employee response from getEmployeeByIdWithSchedules with schedules array',
});

// DAO response for getEmployeesByReservationModuleIdWithSlots
export const EmployeeWithSlotsDAOResponseSchema = EmployeeBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
	schedule_slots: z
		.array(
			ScheduleSlotRefSchema.extend({
				schedule_employee: ScheduleEmployeeRefSchema.optional(),
				schedule_slot_exceptions: z.array(z.object({ start_time: Timestamp })).optional(),
				booking_slots: z.array(z.object({ start_time: Timestamp })).optional(),
				schedule: ScheduleDetailSchema.optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'EmployeeWithSlotsDAOResponse',
	description: 'Employee response with schedule slots and exceptions',
});

// DAO response for getScheduleSlotsByEmployeesIdAndDate
export const EmployeeScheduleSlotsDAOResponseSchema = EmployeeBaseSchema.extend({
	schedule_slots: z
		.array(
			z.object({
				schedule_slot_id: UUID,
				schedule_slot_exceptions: z.array(ScheduleSlotExceptionBaseSchema).optional(),
				booking_slots: z.array(BookingSlotBaseSchema).optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'EmployeeScheduleSlotsDAOResponse',
	description: 'Employee response with schedule slots for date range',
});

// ===== EXPORTED TYPES =====
export type EmployeeBase = z.infer<typeof EmployeeBaseSchema>;
export type EmployeeRef = z.infer<typeof EmployeeRefSchema>;
export type EmployeeWithBusinessUser = z.infer<typeof EmployeeWithBusinessUserSchema>;
export type EmployeeDetail = z.infer<typeof EmployeeDetailSchema>;
export type EmployeeLight = z.infer<typeof EmployeeLightSchema>;
export type CreateEmployeeRequest = z.infer<typeof CreateEmployeeRequestSchema>;
export type UpdateEmployeeRequest = z.infer<typeof UpdateEmployeeRequestSchema>;
export type DeleteEmployeeRequest = z.infer<typeof DeleteEmployeeRequestSchema>;
export type EmployeeResponse = z.infer<typeof EmployeeResponseSchema>;
export type EmployeeDAOResponse = z.infer<typeof EmployeeDAOResponseSchema>;
export type EmployeeByIdDAOResponse = z.infer<typeof EmployeeByIdDAOResponseSchema>;
export type EmployeeByIdWithSchedulesDAOResponse = z.infer<typeof EmployeeByIdWithSchedulesDAOResponseSchema>;
export type EmployeeWithSlotsDAOResponse = z.infer<typeof EmployeeWithSlotsDAOResponseSchema>;
export type EmployeeScheduleSlotsDAOResponse = z.infer<typeof EmployeeScheduleSlotsDAOResponseSchema>;

// ===== NESTED TYPES (extracted from EmployeeScheduleSlotsDAOResponse) =====
export type ScheduleSlotWithBookingsAndExceptions = NonNullable<
	EmployeeScheduleSlotsDAOResponse['schedule_slots']
>[number];

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('EmployeeBase', EmployeeBaseSchema);
	registry.register('EmployeeRef', EmployeeRefSchema);
	registry.register('EmployeeWithBusinessUser', EmployeeWithBusinessUserSchema);
	registry.register('EmployeeDetail', EmployeeDetailSchema);
	registry.register('EmployeeLight', EmployeeLightSchema);
	registry.register('CreateEmployeeRequest', CreateEmployeeRequestSchema);
	registry.register('UpdateEmployeeRequest', UpdateEmployeeRequestSchema);
	registry.register('DeleteEmployeeRequest', DeleteEmployeeRequestSchema);
	registry.register('EmployeeResponse', EmployeeResponseSchema);
	registry.register('EmployeeDAO', EmployeeDAOResponseSchema);
	registry.register('EmployeeByIdDAO', EmployeeByIdDAOResponseSchema);
	registry.register('EmployeeByIdWithSchedulesDAO', EmployeeByIdWithSchedulesDAOResponseSchema);
	registry.register('EmployeeWithSlotsDAO', EmployeeWithSlotsDAOResponseSchema);
	registry.register('EmployeeScheduleSlotsDAO', EmployeeScheduleSlotsDAOResponseSchema);
}
