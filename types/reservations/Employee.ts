// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from './ReservationModule.js';
import type { ScheduleEmployee } from './ScheduleEmployee.js';
import type { Booking } from './Booking.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { ScheduleSlot } from './ScheduleSlot.js';
import type { ServiceAssignment } from './ServiceAssignment.js';
import { ReservationModuleResponseSchema } from './ReservationModule';
import { ServiceAssignmentResponseSchema } from './ServiceAssignment';
import { ScheduleEmployeeResponseSchema } from './ScheduleEmployee';
import { BookingResponseSchema } from './Booking';
import { BusinessUserResponseSchema } from '../businessUsers/BusinessUser';
import { ScheduleSlotResponseSchema } from './ScheduleSlot';

extendZodWithOpenApi(z);

export const CreateEmployeeSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required'),
		last_name: z.string().min(1, 'Last name is required'),
		email: z.string().email('Invalid email address'),
		telephone: z.string(),
		telephone_code: z.string(),
		telephone_number: z.string(),
		password: z.string().min(6, 'Password must be at least 6 characters long'),
		confirm_password: z.string().min(6, 'Confirm password must be at least 6 characters long'),
		//TODO: add roles when system ready
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'], // this targets the confirm_password field
		message: 'Passwords do not match',
	})
	.openapi('CreateEmployee');

export const UpdateEmployeeSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required'),
		last_name: z.string().min(1, 'Last name is required'),
		email: z.string().email('Invalid email address'),
		telephone: z.string().optional(),
		telephone_code: z.string().optional(),
		telephone_number: z.string().optional(),
		//TODO: add roles when system ready
	})
	.openapi('UpdateEmployee');

export const DeleteEmployeeSchema = z.object({ employee_id: z.string().uuid() });

export type CreateEmployeeInput = z.infer<typeof CreateEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof UpdateEmployeeSchema>;

export const EmployeeResponseSchema = z
	.object({
		employee_id: z.string(),
		reservation_module_id: z.string(),
		reservation_module: ReservationModuleResponseSchema,
		assignments: z.array(ServiceAssignmentResponseSchema),
		schedules: z.array(ScheduleEmployeeResponseSchema),
		bookings: z.array(BookingResponseSchema),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		email: z.string().nullable().optional(),
		telephone: z.string().nullable().optional(),
		telephone_code: z.string().nullable().optional(),
		business_users_id: z.string().nullable().optional(),
		business_user: BusinessUserResponseSchema.nullable().optional(),
		created_at: z.string().datetime(),
		deleted_at: z.string().datetime().nullable().optional(),
		schedule_slots: z.array(ScheduleSlotResponseSchema),
	})
	.openapi('EmployeeResponse');

export type EmployeeResponse = z.infer<typeof EmployeeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateEmployee', CreateEmployeeSchema);
	registry.register('UpdateEmployee', UpdateEmployeeSchema);
	registry.register('EmployeeResponse', EmployeeResponseSchema);
}

export type Employee = {
	employee_id: string;
	reservation_module_id: string;
	reservation_module?: ReservationModule;
	assignments?: ServiceAssignment[];
	schedules?: ScheduleEmployee[];
	bookings?: Booking[];
	first_name?: string | null;
	last_name?: string | null;
	email?: string | null;
	telephone?: string | null;
	telephone_code?: string | null;
	business_users_id?: string | null;
	business_user?: BusinessUser | null;
	created_at: Date;
	deleted_at?: Date | null;
	schedule_slots?: ScheduleSlot[];
};
