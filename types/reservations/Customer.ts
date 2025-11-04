// --- ENUMS ---
import { z } from 'zod';

import type { ReservationModule } from './ReservationModule.js';
import type { Booking } from './Booking.js';
import type { User } from '../users/User.js';
import type { BookingCourseParticipant } from './BookingCourseParticipant.js';

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
	reservation_module: ReservationModule;
	bookings: Booking[];
	user_id?: string | null;
	user?: User | null;
	booking_course_participants: BookingCourseParticipant[];
};
