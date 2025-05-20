import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const taxi_order_sentSelectSchema: z.ZodType<Prisma.taxi_order_sentSelect> = z.object({
  taxi_order_sent_id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  accepted: z.boolean().optional(),
  location: z.boolean().optional(),
  timeline: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  rejected: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default taxi_order_sentSelectSchema;
