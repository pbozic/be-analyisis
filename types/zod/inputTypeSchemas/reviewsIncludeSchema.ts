import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableArgsSchema } from "../outputTypeSchemas/reviewableArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const reviewsIncludeSchema: z.ZodType<Prisma.reviewsInclude> = z.object({
  reviewable: z.union([z.boolean(),z.lazy(() => reviewableArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export default reviewsIncludeSchema;
