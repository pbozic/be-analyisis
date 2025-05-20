import { z } from 'zod';
import { user_addressWithRelationsSchema } from './user_addressSchema';
import type { user_addressWithRelations } from './user_addressSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { business_usersWithRelationsSchema } from './business_usersSchema';
import type { business_usersWithRelations } from './business_usersSchema';
import { daily_meals_subscriptionsWithRelationsSchema } from './daily_meals_subscriptionsSchema';
import type { daily_meals_subscriptionsWithRelations } from './daily_meals_subscriptionsSchema';

/////////////////////////////////////////
// ADDRESSES SCHEMA
/////////////////////////////////////////

export const addressesSchema = z.object({
	address_id: z.string().uuid(),
	address: z.string(),
	latitude: z.string(),
	longitude: z.string(),
	street: z.string().nullable(),
	house_number: z.string().nullable(),
	city: z.string().nullable(),
	country: z.string().nullable(),
	postal: z.string().nullable(),
});

export type addresses = z.infer<typeof addressesSchema>;

/////////////////////////////////////////
// ADDRESSES RELATION SCHEMA
/////////////////////////////////////////

export type addressesRelations = {
	users: user_addressWithRelations[];
	businesses: businessWithRelations[];
	businesses_delivery_address: businessWithRelations[];
	business_users: business_usersWithRelations[];
	daily_meals_subscriptions: daily_meals_subscriptionsWithRelations[];
};

export type addressesWithRelations = z.infer<typeof addressesSchema> & addressesRelations;

export const addressesWithRelationsSchema: z.ZodType<addressesWithRelations> = addressesSchema.merge(
	z.object({
		users: z.lazy(() => user_addressWithRelationsSchema).array(),
		businesses: z.lazy(() => businessWithRelationsSchema).array(),
		businesses_delivery_address: z.lazy(() => businessWithRelationsSchema).array(),
		business_users: z.lazy(() => business_usersWithRelationsSchema).array(),
		daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsWithRelationsSchema).array(),
	})
);

export default addressesSchema;
