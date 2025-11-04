// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from './ReservationModule.js';
import type { Booking } from './Booking.js';
import type { User } from '../users/User.js';
import type { BookingCourseParticipant } from './BookingCourseParticipant.js';
import { ReservationModuleResponseSchema } from './ReservationModule';
import { BookingResponseSchema } from './Booking';
import { UserResponseSchema } from '../users/User';
import { BookingCourseParticipantResponseSchema } from './BookingCourseParticipant';

extendZodWithOpenApi(z);

export const CreateCustomerSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email().optional(),
	telephone: z.string().optional(),
	user_id: z.string().uuid().optional(),
	customer_id: z.string().uuid().optional(),
});

export const UpdateCustomerSchema = CreateCustomerSchema.partial();
export const DeleteCustomerSchema = z.object({ customer_id: z.string().uuid() });

export type CreateCustomerInput = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof UpdateCustomerSchema>;

export const CustomerResponseSchema = z
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
		reservation_module: ReservationModuleResponseSchema,
		bookings: z.array(BookingResponseSchema),
		user_id: z.string().nullable().optional(),
		user: UserResponseSchema.nullable().optional(),
		booking_course_participants: z.array(BookingCourseParticipantResponseSchema),
	})
	.openapi('CustomerResponse');

export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCustomer', CreateCustomerSchema);
	registry.register('UpdateCustomer', UpdateCustomerSchema);
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
