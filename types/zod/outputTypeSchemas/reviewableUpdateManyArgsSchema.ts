import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableUpdateManyMutationInputSchema } from '../inputTypeSchemas/reviewableUpdateManyMutationInputSchema'
import { reviewableUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/reviewableUncheckedUpdateManyInputSchema'
import { reviewableWhereInputSchema } from '../inputTypeSchemas/reviewableWhereInputSchema'

export const reviewableUpdateManyArgsSchema: z.ZodType<Prisma.reviewableUpdateManyArgs> = z.object({
  data: z.union([ reviewableUpdateManyMutationInputSchema,reviewableUncheckedUpdateManyInputSchema ]),
  where: reviewableWhereInputSchema.optional(),
}).strict() ;

export default reviewableUpdateManyArgsSchema;
