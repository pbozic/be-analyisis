import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableCreateManyInputSchema } from '../inputTypeSchemas/reviewableCreateManyInputSchema'

export const reviewableCreateManyArgsSchema: z.ZodType<Prisma.reviewableCreateManyArgs> = z.object({
  data: z.union([ reviewableCreateManyInputSchema,reviewableCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default reviewableCreateManyArgsSchema;
