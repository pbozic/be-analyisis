import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableCreateManyInputSchema } from '../inputTypeSchemas/reviewableCreateManyInputSchema'

export const reviewableCreateManyAndReturnArgsSchema: z.ZodType<Prisma.reviewableCreateManyAndReturnArgs> = z.object({
  data: z.union([ reviewableCreateManyInputSchema,reviewableCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default reviewableCreateManyAndReturnArgsSchema;
