import { z } from 'zod';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { addressesWithRelationsSchema } from './addressesSchema';
import type { addressesWithRelations } from './addressesSchema';

/////////////////////////////////////////
// USER ADDRESS SCHEMA
/////////////////////////////////////////

export const user_addressSchema = z.object({
	user_id: z.string(),
	address_id: z.string(),
	name: z.string().nullable(),
	icon: z.string().nullable(),
	primary: z.boolean(),
});

export type user_address = z.infer<typeof user_addressSchema>;

/////////////////////////////////////////
// USER ADDRESS RELATION SCHEMA
/////////////////////////////////////////

export type user_addressRelations = {
	users: usersWithRelations;
	address: addressesWithRelations;
};

export type user_addressWithRelations = z.infer<typeof user_addressSchema> & user_addressRelations;

export const user_addressWithRelationsSchema: z.ZodType<user_addressWithRelations> = user_addressSchema.merge(
	z.object({
		users: z.lazy(() => usersWithRelationsSchema),
		address: z.lazy(() => addressesWithRelationsSchema),
	})
);

export default user_addressSchema;
