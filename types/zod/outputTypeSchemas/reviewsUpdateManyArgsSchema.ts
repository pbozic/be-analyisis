import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsUpdateManyMutationInputSchema } from '../inputTypeSchemas/reviewsUpdateManyMutationInputSchema'
import { reviewsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/reviewsUncheckedUpdateManyInputSchema'
import { reviewsWhereInputSchema } from '../inputTypeSchemas/reviewsWhereInputSchema'

export const reviewsUpdateManyArgsSchema: z.ZodType<Prisma.reviewsUpdateManyArgs> = z.object({
  data: z.union([ reviewsUpdateManyMutationInputSchema,reviewsUncheckedUpdateManyInputSchema ]),
  where: reviewsWhereInputSchema.optional(),
}).strict() ;

export default reviewsUpdateManyArgsSchema;
