// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { Reservation } from './Reservation.js';

export type TableReservationsModule = {
	id: string;
	food_drinks_id: string;
	food_drinks_module: FoodDrinksModule;
	reservations: Reservation[];
};
