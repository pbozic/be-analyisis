// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { RESERVATION_STATUS, table_reservations_module } from '@prisma/client';

import type { User } from '../users/User.js';

export type Reservation = {
	reservation_id: string;
	seats: number;
	date: string;
	time: string;
	datetime: string;
	created_at: string;
	updated_at: string;
	user_id: string;
	user: User;
	status: RESERVATION_STATUS;
	table?: number | null;
	table_reservation_id: string;
	table_reservations: table_reservations_module;
};
