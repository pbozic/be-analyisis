import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsUpdateManyMutationInputSchema'
import { delivery_driver_history_locationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsUncheckedUpdateManyInputSchema'
import { delivery_driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereInputSchema'

export const delivery_driver_history_locationsUpdateManyArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpdateManyArgs> = z.object({
  data: z.union([ delivery_driver_history_locationsUpdateManyMutationInputSchema,delivery_driver_history_locationsUncheckedUpdateManyInputSchema ]),
  where: delivery_driver_history_locationsWhereInputSchema.optional(),
}).strict() ;

export default delivery_driver_history_locationsUpdateManyArgsSchema;
