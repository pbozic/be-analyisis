import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema';
import type { delivery_driversWithRelations } from './delivery_driversSchema';
import { driversWithRelationsSchema } from './driversSchema';
import type { driversWithRelations } from './driversSchema';

/////////////////////////////////////////
// DELIVERY ORDER SENT SCHEMA
/////////////////////////////////////////

export const delivery_order_sentSchema = z.object({
	delivery_order_sent_id: z.string().uuid(),
	order_id: z.string(),
	accepted: z.boolean(),
	location: JsonValueSchema,
	timeline: JsonValueSchema,
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	delivery_driver_id: z.string().nullable(),
	driver_id: z.string().nullable(),
});

export type delivery_order_sent = z.infer<typeof delivery_order_sentSchema>;

/////////////////////////////////////////
// DELIVERY ORDER SENT RELATION SCHEMA
/////////////////////////////////////////

export type delivery_order_sentRelations = {
	order?: delivery_ordersWithRelations | null;
	delivery_driver?: delivery_driversWithRelations | null;
	driver?: driversWithRelations | null;
};

export type delivery_order_sentWithRelations = z.infer<typeof delivery_order_sentSchema> & delivery_order_sentRelations;

export const delivery_order_sentWithRelationsSchema: z.ZodType<delivery_order_sentWithRelations> =
	delivery_order_sentSchema.merge(
		z.object({
			order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
			delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
			driver: z.lazy(() => driversWithRelationsSchema).nullable(),
		})
	);

export default delivery_order_sentSchema;
