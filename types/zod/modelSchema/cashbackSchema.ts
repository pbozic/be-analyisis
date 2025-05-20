import { z } from 'zod';
import { CASHBACK_TYPESchema } from '../inputTypeSchemas/CASHBACK_TYPESchema';
import { CASHBACK_SOURCESchema } from '../inputTypeSchemas/CASHBACK_SOURCESchema';
import { CASHBACK_STATUSSchema } from '../inputTypeSchemas/CASHBACK_STATUSSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';

/////////////////////////////////////////
// CASHBACK SCHEMA
/////////////////////////////////////////

export const cashbackSchema = z.object({
	type: CASHBACK_TYPESchema,
	source: CASHBACK_SOURCESchema,
	status: CASHBACK_STATUSSchema,
	cashback_id: z.string().uuid(),
	user_id: z.string(),
	amount: z.number().int(),
	description: z.string().nullable(),
	earned_at: z.coerce.date(),
	expires_at: z.coerce.date().nullable(),
	converted_at: z.coerce.date().nullable(),
	taxi_order_id: z.string().nullable(),
	delivery_order_id: z.string().nullable(),
});

export type cashback = z.infer<typeof cashbackSchema>;

/////////////////////////////////////////
// CASHBACK RELATION SCHEMA
/////////////////////////////////////////

export type cashbackRelations = {
	user: usersWithRelations;
	taxi_order?: taxi_ordersWithRelations | null;
	delivery_order?: delivery_ordersWithRelations | null;
};

export type cashbackWithRelations = z.infer<typeof cashbackSchema> & cashbackRelations;

export const cashbackWithRelationsSchema: z.ZodType<cashbackWithRelations> = cashbackSchema.merge(
	z.object({
		user: z.lazy(() => usersWithRelationsSchema),
		taxi_order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
		delivery_order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
	})
);

export default cashbackSchema;
