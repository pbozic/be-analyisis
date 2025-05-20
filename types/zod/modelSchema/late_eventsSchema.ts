import { z } from 'zod';
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { scoring_pointsWithRelationsSchema } from './scoring_pointsSchema'
import type { scoring_pointsWithRelations } from './scoring_pointsSchema'

/////////////////////////////////////////
// LATE EVENTS SCHEMA
/////////////////////////////////////////

export const late_eventsSchema = z.object({
  late_events_id: z.string().uuid(),
  business_id: z.string(),
  user_id: z.string(),
  delivery_order_id: z.string().nullable(),
  taxi_order_id: z.string().nullable(),
  scoring_points_id: z.string().nullable(),
  seconds: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type late_events = z.infer<typeof late_eventsSchema>

/////////////////////////////////////////
// LATE EVENTS RELATION SCHEMA
/////////////////////////////////////////

export type late_eventsRelations = {
  users?: usersWithRelations | null;
  businesses: businessWithRelations;
  delivery_orders?: delivery_ordersWithRelations | null;
  taxi_orders?: taxi_ordersWithRelations | null;
  scoring_points?: scoring_pointsWithRelations | null;
};

export type late_eventsWithRelations = z.infer<typeof late_eventsSchema> & late_eventsRelations

export const late_eventsWithRelationsSchema: z.ZodType<late_eventsWithRelations> = late_eventsSchema.merge(z.object({
  users: z.lazy(() => usersWithRelationsSchema).nullable(),
  businesses: z.lazy(() => businessWithRelationsSchema),
  delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
  taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
  scoring_points: z.lazy(() => scoring_pointsWithRelationsSchema).nullable(),
}))

export default late_eventsSchema;
