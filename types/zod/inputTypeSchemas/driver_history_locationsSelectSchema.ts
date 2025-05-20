import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"

export const driver_history_locationsSelectSchema: z.ZodType<Prisma.driver_history_locationsSelect> = z.object({
  driver_history_location_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  taxi_order_id: z.boolean().optional(),
  delivery_order_id: z.boolean().optional(),
  status: z.boolean().optional(),
  location: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  order: z.union([z.boolean(),z.lazy(() => taxi_ordersArgsSchema)]).optional(),
  delivery_order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
}).strict()

export default driver_history_locationsSelectSchema;
