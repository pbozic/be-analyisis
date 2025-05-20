import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsWhereInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereInputSchema'

export const driver_activity_settingsDeleteManyArgsSchema: z.ZodType<Prisma.driver_activity_settingsDeleteManyArgs> = z.object({
  where: driver_activity_settingsWhereInputSchema.optional(),
}).strict() ;

export default driver_activity_settingsDeleteManyArgsSchema;
