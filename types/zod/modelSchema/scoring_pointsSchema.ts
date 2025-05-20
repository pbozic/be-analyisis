import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from '../inputTypeSchemas/SCORING_POINTS_REASONSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';
import { late_eventsWithRelationsSchema } from './late_eventsSchema';
import type { late_eventsWithRelations } from './late_eventsSchema';

/////////////////////////////////////////
// SCORING POINTS SCHEMA
/////////////////////////////////////////

export const scoring_pointsSchema = z.object({
	reason: SCORING_POINTS_REASONSchema,
	scoring_points_id: z.string().uuid(),
	business_id: z.string(),
	user_id: z.string().nullable(),
	delivery_order_id: z.string().nullable(),
	taxi_order_id: z.string().nullable(),
	points: z.number().int(),
	isPenalty: z.boolean(),
	expiration_date: z.coerce.date().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type scoring_points = z.infer<typeof scoring_pointsSchema>;

/////////////////////////////////////////
// SCORING POINTS RELATION SCHEMA
/////////////////////////////////////////

export type scoring_pointsRelations = {
	users?: usersWithRelations | null;
	businesses?: businessWithRelations | null;
	delivery_orders?: delivery_ordersWithRelations | null;
	taxi_orders?: taxi_ordersWithRelations | null;
	late_events: late_eventsWithRelations[];
};

export type scoring_pointsWithRelations = z.infer<typeof scoring_pointsSchema> & scoring_pointsRelations;

export const scoring_pointsWithRelationsSchema: z.ZodType<scoring_pointsWithRelations> = scoring_pointsSchema.merge(
	z.object({
		users: z.lazy(() => usersWithRelationsSchema).nullable(),
		businesses: z.lazy(() => businessWithRelationsSchema).nullable(),
		delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
		taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
		late_events: z.lazy(() => late_eventsWithRelationsSchema).array(),
	})
);

export default scoring_pointsSchema;
