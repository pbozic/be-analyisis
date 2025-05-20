import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsIncludeSchema } from '../inputTypeSchemas/driver_history_locationsIncludeSchema'
import { driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereUniqueInputSchema'
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { taxi_ordersArgsSchema } from "../outputTypeSchemas/taxi_ordersArgsSchema"
import { delivery_ordersArgsSchema } from "../outputTypeSchemas/delivery_ordersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const driver_history_locationsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.driver_history_locationsFindUniqueOrThrowArgs> = z.object({
  select: driver_history_locationsSelectSchema.optional(),
  include: driver_history_locationsIncludeSchema.optional(),
  where: driver_history_locationsWhereUniqueInputSchema,
}).strict() ;

export default driver_history_locationsFindUniqueOrThrowArgsSchema;
