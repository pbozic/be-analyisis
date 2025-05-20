import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsIncludeSchema } from '../inputTypeSchemas/delivery_driver_history_locationsIncludeSchema'
import { delivery_driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereUniqueInputSchema'
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const delivery_driver_history_locationsDeleteArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsDeleteArgs> = z.object({
  select: delivery_driver_history_locationsSelectSchema.optional(),
  include: delivery_driver_history_locationsIncludeSchema.optional(),
  where: delivery_driver_history_locationsWhereUniqueInputSchema,
}).strict() ;

export default delivery_driver_history_locationsDeleteArgsSchema;
