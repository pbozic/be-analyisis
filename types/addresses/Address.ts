// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { food_drinks_module, local_locations, stores_module } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Busines } from '../business/Busines.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { Location } from '../reservation/Location.js';

export type Address = {
	address_id: string;
	address: string;
	latitude: string;
	longitude: string;
	street?: string | null;
	house_number?: string | null;
	city?: string | null;
	country?: string | null;
	postal?: string | null;
	users: User[];
	businesses: Busines[];
	stores_module: stores_module[];
	food_drinks_module: food_drinks_module[];
	business_users: BusinessUser[];
	daily_meal_subscriptions: DailyMealSubscription[];
	local_locations?: local_locations | null;
	locations: Location[];
};
