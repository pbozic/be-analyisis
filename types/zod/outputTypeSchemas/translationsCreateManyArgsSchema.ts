import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsCreateManyInputSchema } from '../inputTypeSchemas/translationsCreateManyInputSchema'

export const translationsCreateManyArgsSchema: z.ZodType<Prisma.translationsCreateManyArgs> = z.object({
  data: z.union([ translationsCreateManyInputSchema,translationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default translationsCreateManyArgsSchema;
