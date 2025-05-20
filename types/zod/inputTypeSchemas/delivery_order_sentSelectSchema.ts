import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const delivery_order_sentSelectSchema: z.ZodType<Prisma.delivery_order_sentSelect> = z.object({
  delivery_order_sent_id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  accepted: z.boolean().optional(),
  location: z.boolean().optional(),
  timeline: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  delivery_driver_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default delivery_order_sentSelectSchema;
