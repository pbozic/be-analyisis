import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesCreateManyInputSchema } from '../inputTypeSchemas/categoriesCreateManyInputSchema'

export const categoriesCreateManyArgsSchema: z.ZodType<Prisma.categoriesCreateManyArgs> = z.object({
  data: z.union([ categoriesCreateManyInputSchema,categoriesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default categoriesCreateManyArgsSchema;
