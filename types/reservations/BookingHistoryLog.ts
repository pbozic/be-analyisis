import { BOOKING_STATUS } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Booking } from '../reservations/Booking.js';
import type { Booking } from './Booking.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingHistoryLog = {
	booking_history_id: string;
	booking_id: string;
	status: BOOKING_STATUS;
	comment?: string | null;
	type?: string | null;
	title?: string | null;
	description?: string | null;
	created_at: Date;
	updated_at: Date;
	user_id?: string | null;
	user?: User | null;
	booking: Booking;
};
