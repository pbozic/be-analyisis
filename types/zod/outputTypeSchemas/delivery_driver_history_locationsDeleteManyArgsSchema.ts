import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereInputSchema'

export const delivery_driver_history_locationsDeleteManyArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsDeleteManyArgs> = z.object({
  where: delivery_driver_history_locationsWhereInputSchema.optional(),
}).strict() ;

export default delivery_driver_history_locationsDeleteManyArgsSchema;
