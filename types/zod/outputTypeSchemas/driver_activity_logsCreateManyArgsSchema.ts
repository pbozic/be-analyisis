import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsCreateManyInputSchema } from '../inputTypeSchemas/driver_activity_logsCreateManyInputSchema'

export const driver_activity_logsCreateManyArgsSchema: z.ZodType<Prisma.driver_activity_logsCreateManyArgs> = z.object({
  data: z.union([ driver_activity_logsCreateManyInputSchema,driver_activity_logsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default driver_activity_logsCreateManyArgsSchema;
