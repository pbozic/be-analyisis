import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsWhereInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereInputSchema'

export const driver_activity_logsDeleteManyArgsSchema: z.ZodType<Prisma.driver_activity_logsDeleteManyArgs> = z.object({
  where: driver_activity_logsWhereInputSchema.optional(),
}).strict() ;

export default driver_activity_logsDeleteManyArgsSchema;
