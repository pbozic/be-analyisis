import type { UserAddress } from '../users/UserAddress.js';
import type { Business } from '../business/Business.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { Location } from '../reservations/Location.js';
import type { LocalLocation } from '../stores/LocalLocation.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	users: UserAddress[];
	businesses: Business[];
	stores_module: StoresModule[];
	food_drinks_module: FoodDrinksModule[];
	business_users: BusinessUser[];
	daily_meal_subscriptions: DailyMealSubscription[];
	local_locations?: LocalLocation | null;
	locations: Location[];
};
