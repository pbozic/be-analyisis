import { z } from 'zod';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';

/////////////////////////////////////////
// BUSINESS CLIENTS SCHEMA
/////////////////////////////////////////

export const business_clientsSchema = z.object({
	business_clients_id: z.string().uuid(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	business_id: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	telephone: z.string(),
	telephone_code: z.string(),
	telephone_number: z.string(),
});

export type business_clients = z.infer<typeof business_clientsSchema>;

/////////////////////////////////////////
// BUSINESS CLIENTS RELATION SCHEMA
/////////////////////////////////////////

export type business_clientsRelations = {
	business?: businessWithRelations | null;
	taxi_orders: taxi_ordersWithRelations[];
};

export type business_clientsWithRelations = z.infer<typeof business_clientsSchema> & business_clientsRelations;

export const business_clientsWithRelationsSchema: z.ZodType<business_clientsWithRelations> =
	business_clientsSchema.merge(
		z.object({
			business: z.lazy(() => businessWithRelationsSchema).nullable(),
			taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
		})
	);

export default business_clientsSchema;
