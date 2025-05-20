import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/flagsUpdateManyMutationInputSchema'
import { flagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/flagsUncheckedUpdateManyInputSchema'
import { flagsWhereInputSchema } from '../inputTypeSchemas/flagsWhereInputSchema'

export const flagsUpdateManyArgsSchema: z.ZodType<Prisma.flagsUpdateManyArgs> = z.object({
  data: z.union([ flagsUpdateManyMutationInputSchema,flagsUncheckedUpdateManyInputSchema ]),
  where: flagsWhereInputSchema.optional(),
}).strict() ;

export default flagsUpdateManyArgsSchema;
