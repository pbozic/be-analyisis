import type { Booking } from './Booking.js';
import type { ReservationModule } from './ReservationModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingCourseTime = {
	booking_course_time_id: string;
	reservation_module_id: string;
	booking_id: string;
	start_time: Date;
	end_time: Date;
	created_at: Date;
	updated_at: Date;
	booking: Booking;
	reservation_module: ReservationModule;
};
