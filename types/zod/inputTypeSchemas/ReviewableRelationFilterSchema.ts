import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';

export const ReviewableRelationFilterSchema: z.ZodType<Prisma.ReviewableRelationFilter> = z.object({
  is: z.lazy(() => reviewableWhereInputSchema).optional(),
  isNot: z.lazy(() => reviewableWhereInputSchema).optional()
}).strict();

export default ReviewableRelationFilterSchema;
