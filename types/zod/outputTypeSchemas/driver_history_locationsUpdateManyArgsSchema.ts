import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/driver_history_locationsUpdateManyMutationInputSchema'
import { driver_history_locationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/driver_history_locationsUncheckedUpdateManyInputSchema'
import { driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereInputSchema'

export const driver_history_locationsUpdateManyArgsSchema: z.ZodType<Prisma.driver_history_locationsUpdateManyArgs> = z.object({
  data: z.union([ driver_history_locationsUpdateManyMutationInputSchema,driver_history_locationsUncheckedUpdateManyInputSchema ]),
  where: driver_history_locationsWhereInputSchema.optional(),
}).strict() ;

export default driver_history_locationsUpdateManyArgsSchema;
