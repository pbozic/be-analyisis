import { z } from 'zod';
import { COMPANY_ROLESchema } from '../inputTypeSchemas/COMPANY_ROLESchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { addressesWithRelationsSchema } from './addressesSchema';
import type { addressesWithRelations } from './addressesSchema';
import { allowancesWithRelationsSchema } from './allowancesSchema';
import type { allowancesWithRelations } from './allowancesSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';

/////////////////////////////////////////
// BUSINESS USERS SCHEMA
/////////////////////////////////////////

export const business_usersSchema = z.object({
	company_role: COMPANY_ROLESchema,
	business_users_id: z.string().uuid(),
	online: z.boolean().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	user_id: z.string(),
	business_id: z.string(),
	operating_address_id: z.string().nullable(),
});

export type business_users = z.infer<typeof business_usersSchema>;

/////////////////////////////////////////
// BUSINESS USERS RELATION SCHEMA
/////////////////////////////////////////

export type business_usersRelations = {
	users?: usersWithRelations | null;
	business?: businessWithRelations | null;
	operating_address?: addressesWithRelations | null;
	allowance?: allowancesWithRelations | null;
	taxi_orders: taxi_ordersWithRelations[];
};

export type business_usersWithRelations = z.infer<typeof business_usersSchema> & business_usersRelations;

export const business_usersWithRelationsSchema: z.ZodType<business_usersWithRelations> = business_usersSchema.merge(
	z.object({
		users: z.lazy(() => usersWithRelationsSchema).nullable(),
		business: z.lazy(() => businessWithRelationsSchema).nullable(),
		operating_address: z.lazy(() => addressesWithRelationsSchema).nullable(),
		allowance: z.lazy(() => allowancesWithRelationsSchema).nullable(),
		taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
	})
);

export default business_usersSchema;
