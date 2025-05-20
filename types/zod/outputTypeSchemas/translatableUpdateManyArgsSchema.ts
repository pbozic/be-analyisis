import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableUpdateManyMutationInputSchema } from '../inputTypeSchemas/translatableUpdateManyMutationInputSchema'
import { translatableUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/translatableUncheckedUpdateManyInputSchema'
import { translatableWhereInputSchema } from '../inputTypeSchemas/translatableWhereInputSchema'

export const translatableUpdateManyArgsSchema: z.ZodType<Prisma.translatableUpdateManyArgs> = z.object({
  data: z.union([ translatableUpdateManyMutationInputSchema,translatableUncheckedUpdateManyInputSchema ]),
  where: translatableWhereInputSchema.optional(),
}).strict() ;

export default translatableUpdateManyArgsSchema;
