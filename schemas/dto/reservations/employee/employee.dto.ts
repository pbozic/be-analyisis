import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, Email } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

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
	})
	.openapi({
		title: 'EmployeeRef',
		description: 'Minimal employee reference for embedding in other entities',
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

// ===== EXPORTED TYPES =====
export type EmployeeBase = z.infer<typeof EmployeeBaseSchema>;
export type EmployeeRef = z.infer<typeof EmployeeRefSchema>;
export type CreateEmployeeRequest = z.infer<typeof CreateEmployeeRequestSchema>;
export type UpdateEmployeeRequest = z.infer<typeof UpdateEmployeeRequestSchema>;
export type DeleteEmployeeRequest = z.infer<typeof DeleteEmployeeRequestSchema>;
export type EmployeeResponse = z.infer<typeof EmployeeResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('EmployeeBase', EmployeeBaseSchema);
	registry.register('EmployeeRef', EmployeeRefSchema);
	registry.register('CreateEmployeeRequest', CreateEmployeeRequestSchema);
	registry.register('UpdateEmployeeRequest', UpdateEmployeeRequestSchema);
	registry.register('DeleteEmployeeRequest', DeleteEmployeeRequestSchema);
	registry.register('EmployeeResponse', EmployeeResponseSchema);
}
