import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"

export const delivery_driver_history_locationsIncludeSchema: z.ZodType<Prisma.delivery_driver_history_locationsInclude> = z.object({
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  order: z.union([z.boolean(),z.lazy(() => delivery_ordersArgsSchema)]).optional(),
}).strict()

export default delivery_driver_history_locationsIncludeSchema;
