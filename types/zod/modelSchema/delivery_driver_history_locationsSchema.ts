import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { DELIVERY_ORDER_STATUSSchema } from '../inputTypeSchemas/DELIVERY_ORDER_STATUSSchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema';
import type { delivery_driversWithRelations } from './delivery_driversSchema';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';

/////////////////////////////////////////
// DELIVERY DRIVER HISTORY LOCATIONS SCHEMA
/////////////////////////////////////////

export const delivery_driver_history_locationsSchema = z.object({
	status: DELIVERY_ORDER_STATUSSchema.nullable(),
	delivery_driver_history_location_id: z.string().uuid(),
	delivery_driver_id: z.string(),
	order_id: z.string().nullable(),
	location: JsonValueSchema.nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type delivery_driver_history_locations = z.infer<typeof delivery_driver_history_locationsSchema>;

/////////////////////////////////////////
// DELIVERY DRIVER HISTORY LOCATIONS RELATION SCHEMA
/////////////////////////////////////////

export type delivery_driver_history_locationsRelations = {
	delivery_driver?: delivery_driversWithRelations | null;
	order?: delivery_ordersWithRelations | null;
};

export type delivery_driver_history_locationsWithRelations = Omit<
	z.infer<typeof delivery_driver_history_locationsSchema>,
	'location'
> & {
	location?: JsonValueType | null;
} & delivery_driver_history_locationsRelations;

export const delivery_driver_history_locationsWithRelationsSchema: z.ZodType<delivery_driver_history_locationsWithRelations> =
	delivery_driver_history_locationsSchema.merge(
		z.object({
			delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
			order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
		})
	);

export default delivery_driver_history_locationsSchema;
