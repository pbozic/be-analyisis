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
import { UserAddressResponseBaseSchema } from '../users/UserAddress';
import { BusinessResponseSchema } from '../business/Business';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { BusinessUserResponseBaseSchema } from '../businessUsers/BusinessUser';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { LocalLocationResponseBaseSchema } from '../stores/LocalLocation';
import { LocationResponseBaseSchema } from '../reservations/Location';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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

export const AddressResponseBaseSchema = z
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
	})
	.openapi('AddressResponseBase');

// Adding all relations - circular dependencies are acceptable as requested
// Address → UserAddress → User → ... → Address
// Address → Business → Address
// Address → StoresModule → Business → Address
// Address → FoodDrinksModule → Business → Address
// Address → DailyMealSubscription → User → Address
// Address → BusinessUser → User → UserAddress → Address
// @ts-ignore - Circular dependencies resolved at runtime
export const AddressResponseSchema = AddressResponseBaseSchema.extend({
	users: z.array(UserAddressResponseBaseSchema).optional(),
	businesses: z.array(BusinessResponseSchema).optional(),
	stores_module: z.array(StoresModuleResponseSchema).optional(),
	// @ts-ignore - Circular dependency resolved at runtime
	food_drinks_module: z.array(FoodDrinksModuleResponseSchema).optional(),
	business_users: z.array(BusinessUserResponseBaseSchema).optional(),
	daily_meal_subscriptions: z.array(DailyMealSubscriptionResponseSchema).optional(),
	local_locations: LocalLocationResponseBaseSchema.nullable().optional(),
	locations: z.array(LocationResponseBaseSchema).optional(),
}).openapi('AddressResponse');

export type AddressBase = z.infer<typeof AddressResponseBaseSchema>;
export type AddressResponse = z.infer<typeof AddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAddress', CreateAddressSchema);
	registry.register('UpdateAddress', UpdateAddressSchema);
	registry.register('AddressResponseBase', AddressResponseBaseSchema);
	registry.register('AddressResponse', AddressResponseSchema);
}

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
	users?: UserAddress[];
	businesses?: Business[];
	stores_module?: StoresModule[];
	food_drinks_module?: FoodDrinksModule[];
	business_users?: BusinessUser[];
	daily_meal_subscriptions?: DailyMealSubscription[];
	local_locations?: LocalLocation | null;
	locations?: Location[];
};
