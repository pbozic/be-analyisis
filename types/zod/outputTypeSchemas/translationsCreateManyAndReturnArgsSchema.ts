import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsCreateManyInputSchema } from '../inputTypeSchemas/translationsCreateManyInputSchema'

export const translationsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.translationsCreateManyAndReturnArgs> = z.object({
  data: z.union([ translationsCreateManyInputSchema,translationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default translationsCreateManyAndReturnArgsSchema;
