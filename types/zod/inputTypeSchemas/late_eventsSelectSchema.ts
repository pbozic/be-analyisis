import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { scoring_pointsArgsSchema } from "../outputTypeSchemas/scoring_pointsArgsSchema"

export const late_eventsSelectSchema: z.ZodType<Prisma.late_eventsSelect> = z.object({
  late_events_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  delivery_order_id: z.boolean().optional(),
  taxi_order_id: z.boolean().optional(),
  scoring_points_id: z.boolean().optional(),
  seconds: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  delivery_orders: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
  scoring_points: z.union([z.boolean(),z.lazy(() => scoring_pointsArgsSchema)]).optional(),
}).strict()

export default late_eventsSelectSchema;
