import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/driver_activity_settingsUpdateManyMutationInputSchema'
import { driver_activity_settingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/driver_activity_settingsUncheckedUpdateManyInputSchema'
import { driver_activity_settingsWhereInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereInputSchema'

export const driver_activity_settingsUpdateManyArgsSchema: z.ZodType<Prisma.driver_activity_settingsUpdateManyArgs> = z.object({
  data: z.union([ driver_activity_settingsUpdateManyMutationInputSchema,driver_activity_settingsUncheckedUpdateManyInputSchema ]),
  where: driver_activity_settingsWhereInputSchema.optional(),
}).strict() ;

export default driver_activity_settingsUpdateManyArgsSchema;
