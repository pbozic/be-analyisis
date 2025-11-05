// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from './ReservationModule.js';
import type { Booking } from './Booking.js';
import type { User } from '../users/User.js';
import type { BookingCourseParticipant } from './BookingCourseParticipant.js';
import { ReservationModuleResponseBaseSchema } from './ReservationModule';
import { BookingResponseBaseSchema } from './Booking';
import { UserResponseBaseSchema } from '../users/User';
import { BookingCourseParticipantResponseBaseSchema } from './BookingCourseParticipant';

extendZodWithOpenApi(z);

export const CreateCustomerSchema = z
	.object({
		first_name: z.string(),
		last_name: z.string(),
		email: z.string().email().optional(),
		telephone: z.string().optional(),
		user_id: z.string().uuid().optional(),
		customer_id: z.string().uuid().optional(),
	})
	.openapi('CreateCustomer');

export const UpdateCustomerSchema = CreateCustomerSchema.partial().openapi('UpdateCustomer');
export const DeleteCustomerSchema = z.object({ customer_id: z.string().uuid() });

export type CreateCustomerInput = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof UpdateCustomerSchema>;

export const CustomerResponseBaseSchema = z
	.object({
		customer_id: z.string(),
		reservation_module_id: z.string(),
		first_name: z.string(),
		last_name: z.string(),
		email: z.string().nullable().optional(),
		telephone: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		code: z.string(),
		user_id: z.string().nullable().optional(),
	})
	.openapi('CustomerResponseBase');

export const CustomerResponseSchema = CustomerResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema,
	bookings: z.array(BookingResponseBaseSchema),
	user: UserResponseBaseSchema.nullable().optional(),
	booking_course_participants: z.array(BookingCourseParticipantResponseBaseSchema),
}).openapi('CustomerResponse');

export type CustomerBase = z.infer<typeof CustomerResponseBaseSchema>;
export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCustomer', CreateCustomerSchema);
	registry.register('UpdateCustomer', UpdateCustomerSchema);
	registry.register('CustomerResponseBase', CustomerResponseBaseSchema);
	registry.register('CustomerResponse', CustomerResponseSchema);
}

export type Customer = {
	customer_id: string;
	reservation_module_id: string;
	first_name: string;
	last_name: string;
	email?: string | null;
	telephone?: string | null;
	created_at: Date;
	updated_at: Date;
	code: string;
	reservation_module?: ReservationModule;
	bookings?: Booking[];
	user_id?: string | null;
	user?: User | null;
	booking_course_participants?: BookingCourseParticipant[];
};
