import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsCreateManyInputSchema } from '../inputTypeSchemas/late_eventsCreateManyInputSchema'

export const late_eventsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.late_eventsCreateManyAndReturnArgs> = z.object({
  data: z.union([ late_eventsCreateManyInputSchema,late_eventsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default late_eventsCreateManyAndReturnArgsSchema;
