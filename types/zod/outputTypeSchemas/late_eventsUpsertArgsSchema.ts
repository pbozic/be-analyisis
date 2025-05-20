import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsIncludeSchema } from '../inputTypeSchemas/late_eventsIncludeSchema'
import { late_eventsWhereUniqueInputSchema } from '../inputTypeSchemas/late_eventsWhereUniqueInputSchema'
import { late_eventsCreateInputSchema } from '../inputTypeSchemas/late_eventsCreateInputSchema'
import { late_eventsUncheckedCreateInputSchema } from '../inputTypeSchemas/late_eventsUncheckedCreateInputSchema'
import { late_eventsUpdateInputSchema } from '../inputTypeSchemas/late_eventsUpdateInputSchema'
import { late_eventsUncheckedUpdateInputSchema } from '../inputTypeSchemas/late_eventsUncheckedUpdateInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { scoring_pointsArgsSchema } from "../outputTypeSchemas/scoring_pointsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const late_eventsUpsertArgsSchema: z.ZodType<Prisma.late_eventsUpsertArgs> = z.object({
  select: late_eventsSelectSchema.optional(),
  include: late_eventsIncludeSchema.optional(),
  where: late_eventsWhereUniqueInputSchema,
  create: z.union([ late_eventsCreateInputSchema,late_eventsUncheckedCreateInputSchema ]),
  update: z.union([ late_eventsUpdateInputSchema,late_eventsUncheckedUpdateInputSchema ]),
}).strict() ;

export default late_eventsUpsertArgsSchema;
