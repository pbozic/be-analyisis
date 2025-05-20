import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsIncludeSchema } from '../inputTypeSchemas/scoring_pointsIncludeSchema'
import { scoring_pointsWhereUniqueInputSchema } from '../inputTypeSchemas/scoring_pointsWhereUniqueInputSchema'
import { scoring_pointsCreateInputSchema } from '../inputTypeSchemas/scoring_pointsCreateInputSchema'
import { scoring_pointsUncheckedCreateInputSchema } from '../inputTypeSchemas/scoring_pointsUncheckedCreateInputSchema'
import { scoring_pointsUpdateInputSchema } from '../inputTypeSchemas/scoring_pointsUpdateInputSchema'
import { scoring_pointsUncheckedUpdateInputSchema } from '../inputTypeSchemas/scoring_pointsUncheckedUpdateInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { late_eventsFindManyArgsSchema } from "../outputTypeSchemas/late_eventsFindManyArgsSchema"
import { Scoring_pointsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Scoring_pointsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const scoring_pointsSelectSchema: z.ZodType<Prisma.scoring_pointsSelect> = z.object({
  scoring_points_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  delivery_order_id: z.boolean().optional(),
  taxi_order_id: z.boolean().optional(),
  points: z.boolean().optional(),
  isPenalty: z.boolean().optional(),
  reason: z.boolean().optional(),
  expiration_date: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  delivery_orders: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
  late_events: z.union([z.boolean(),z.lazy(() => late_eventsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Scoring_pointsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const scoring_pointsUpsertArgsSchema: z.ZodType<Prisma.scoring_pointsUpsertArgs> = z.object({
  select: scoring_pointsSelectSchema.optional(),
  include: scoring_pointsIncludeSchema.optional(),
  where: scoring_pointsWhereUniqueInputSchema,
  create: z.union([ scoring_pointsCreateInputSchema,scoring_pointsUncheckedCreateInputSchema ]),
  update: z.union([ scoring_pointsUpdateInputSchema,scoring_pointsUncheckedUpdateInputSchema ]),
}).strict() ;

export default scoring_pointsUpsertArgsSchema;
