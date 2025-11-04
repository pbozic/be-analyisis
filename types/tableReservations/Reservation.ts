import { RESERVATION_STATUS } from '@prisma/client';

import type { User } from '../users/User.js';
import type { TableReservationsModule } from './TableReservationsModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	table_reservations: TableReservationsModule;
};
