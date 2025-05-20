import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensCreateManyInputSchema } from '../inputTypeSchemas/allergensCreateManyInputSchema'

export const allergensCreateManyAndReturnArgsSchema: z.ZodType<Prisma.allergensCreateManyAndReturnArgs> = z.object({
  data: z.union([ allergensCreateManyInputSchema,allergensCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default allergensCreateManyAndReturnArgsSchema;
