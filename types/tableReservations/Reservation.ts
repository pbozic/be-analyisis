import { RESERVATION_STATUS } from '@prisma/client';

import type { User } from '../users/User.js';
import type { TableReservationsModule } from './TableReservationsModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Reservation = {
	reservation_id: string;
	seats: number;
	date: Date;
	time: string;
	datetime: Date;
	created_at: Date;
	updated_at: Date;
	user_id: string;
	user: User;
	status: RESERVATION_STATUS;
	table?: number | null;
	table_reservation_id: string;
	table_reservations: TableReservationsModule;
};
