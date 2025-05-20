import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesUpdateManyMutationInputSchema } from '../inputTypeSchemas/categoriesUpdateManyMutationInputSchema'
import { categoriesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/categoriesUncheckedUpdateManyInputSchema'
import { categoriesWhereInputSchema } from '../inputTypeSchemas/categoriesWhereInputSchema'

export const categoriesUpdateManyArgsSchema: z.ZodType<Prisma.categoriesUpdateManyArgs> = z.object({
  data: z.union([ categoriesUpdateManyMutationInputSchema,categoriesUncheckedUpdateManyInputSchema ]),
  where: categoriesWhereInputSchema.optional(),
}).strict() ;

export default categoriesUpdateManyArgsSchema;
