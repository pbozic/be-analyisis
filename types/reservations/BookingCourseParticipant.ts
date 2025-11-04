import { BOOKING_STATUS } from '@prisma/client';

import type { Customer } from './Customer.js';
import type { Booking } from './Booking.js';
import type { ReservationModule } from './ReservationModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingCourseParticipant = {
	booking_course_participant_id: string;
	reservation_module_id: string;
	status: BOOKING_STATUS;
	booking_id: string;
	customer_id: string;
	created_at: string;
	updated_at: string;
	customer: Customer;
	booking: Booking;
	reservation_module: ReservationModule;
};
