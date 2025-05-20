import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"

export const delivery_driver_history_locationsSelectSchema: z.ZodType<Prisma.delivery_driver_history_locationsSelect> = z.object({
  delivery_driver_history_location_id: z.boolean().optional(),
  delivery_driver_id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  status: z.boolean().optional(),
  location: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
}).strict()

export default delivery_driver_history_locationsSelectSchema;
