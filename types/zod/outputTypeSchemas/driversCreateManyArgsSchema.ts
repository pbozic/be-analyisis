import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversCreateManyInputSchema } from '../inputTypeSchemas/driversCreateManyInputSchema'

export const driversCreateManyArgsSchema: z.ZodType<Prisma.driversCreateManyArgs> = z.object({
  data: z.union([ driversCreateManyInputSchema,driversCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default driversCreateManyArgsSchema;
