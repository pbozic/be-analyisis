import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsUpdateManyMutationInputSchema } from '../inputTypeSchemas/driver_activity_logsUpdateManyMutationInputSchema'
import { driver_activity_logsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/driver_activity_logsUncheckedUpdateManyInputSchema'
import { driver_activity_logsWhereInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereInputSchema'

export const driver_activity_logsUpdateManyArgsSchema: z.ZodType<Prisma.driver_activity_logsUpdateManyArgs> = z.object({
  data: z.union([ driver_activity_logsUpdateManyMutationInputSchema,driver_activity_logsUncheckedUpdateManyInputSchema ]),
  where: driver_activity_logsWhereInputSchema.optional(),
}).strict() ;

export default driver_activity_logsUpdateManyArgsSchema;
