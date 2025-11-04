// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { User } from '../users/User.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { Booking } from '../reservations/Booking.js';
import type { Review } from './Review.js';
import type { Driver } from '../drivers/Driver.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';

export type Reviewable = {
	reviewable_id: string;
	reviews: Review[];
	user: User[];
	driver: Driver[];
	reservation_module: ReservationModule[];
	reservation_booking: Booking[];
	transport_module: TransportModule[];
	stores_module: StoresModule[];
	food_drinks_module: FoodDrinksModule[];
};
