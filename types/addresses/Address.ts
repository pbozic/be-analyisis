import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { UserAddress } from '../users/UserAddress.js';
import type { Business } from '../business/Business.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { Location } from '../reservations/Location.js';
import type { LocalLocation } from '../stores/LocalLocation.js';
import { UserAddressResponseSchema } from '../users/UserAddress';
import { BusinessResponseSchema } from '../business/Business';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { BusinessUserResponseSchema } from '../businessUsers/BusinessUser';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { LocalLocationResponseSchema } from '../stores/LocalLocation';
import { LocationResponseSchema } from '../reservations/Location';

extendZodWithOpenApi(z);

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

export const CreateAddressSchema = z
	.object({
		address_id: z.string().uuid(),
		address: z.string(),
		latitude: z.string(),
		longitude: z.string(),
		street: z.string().nullable().optional(),
		house_number: z.string().nullable().optional(),
		city: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		postal: z.string().nullable().optional(),
	})
	.openapi('CreateAddress');

export type CreateAddressInput = z.infer<typeof CreateAddressSchema>;

export const UpdateAddressSchema = CreateAddressSchema.partial().openapi('UpdateAddress');
export type UpdateAddressInput = z.infer<typeof UpdateAddressSchema>;

export const AddressResponseSchema = z
	.object({
		address_id: z.string(),
		address: z.string(),
		latitude: z.string(),
		longitude: z.string(),
		street: z.string().nullable().optional(),
		house_number: z.string().nullable().optional(),
		city: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		postal: z.string().nullable().optional(),
		users: z.array(UserAddressResponseSchema),
		businesses: z.array(BusinessResponseSchema),
		stores_module: z.array(StoresModuleResponseSchema),
		food_drinks_module: z.array(FoodDrinksModuleResponseSchema),
		business_users: z.array(BusinessUserResponseSchema),
		daily_meal_subscriptions: z.array(DailyMealSubscriptionResponseSchema),
		local_locations: LocalLocationResponseSchema.nullable().optional(),
		locations: z.array(LocationResponseSchema),
	})
	.openapi('AddressResponse');

export type AddressResponse = z.infer<typeof AddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAddress', CreateAddressSchema);
	registry.register('UpdateAddress', UpdateAddressSchema);
	registry.register('AddressResponse', AddressResponseSchema);
}
