// --- ENUMS ---
import { z } from 'zod';

import type { employee } from '../../prisma/schemas/interfaces';

export const CreateEmployeeSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required'),
		last_name: z.string().min(1, 'Last name is required'),
		email: z.string().email('Invalid email address'),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		password: z.string().min(6, 'Password must be at least 6 characters long'),
		confirm_password: z.string().min(6, 'Confirm password must be at least 6 characters long'),
		date_of_birth: z.string().datetime().optional(),
		//TODO: add roles when system ready
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'], // this targets the confirm_password field
		message: 'Passwords do not match',
	});
export const UpdateEmployeeSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required'),
		last_name: z.string().min(1, 'Last name is required'),
		email: z.string().email('Invalid email address'),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		password: z.string().min(6, 'Password must be at least 6 characters long').optional(),
		confirm_password: z.string().min(6, 'Confirm password must be at least 6 characters long').optional(),
		date_of_birth: z.string().datetime().optional(),
		//TODO: add roles when system ready
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'], // this targets the confirm_password field
		message: 'Passwords do not match',
	});

export const DeleteEmployeeSchema = z.object({ employee_id: z.string().uuid() });

export type CreateEmployeeInput = z.infer<typeof CreateEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof UpdateEmployeeSchema>;

export type Employee = employee;
