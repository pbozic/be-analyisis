// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { drivers, food_drinks_module, reviews, stores_module, transport_module } from '@prisma/client';

import type { User } from '../users/User.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';
import type { Booking } from '../reservation/Booking.js';

export type Reviewable = {
	reviewable_id: string;
	reviews: reviews[];
	user: User[];
	driver: drivers[];
	reservation_module: ReservationModule[];
	reservation_booking: Booking[];
	transport_module: transport_module[];
	stores_module: stores_module[];
	food_drinks_module: food_drinks_module[];
};
