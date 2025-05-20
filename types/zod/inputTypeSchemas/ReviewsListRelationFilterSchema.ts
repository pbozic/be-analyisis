import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereInputSchema } from './reviewsWhereInputSchema';

export const ReviewsListRelationFilterSchema: z.ZodType<Prisma.ReviewsListRelationFilter> = z.object({
  every: z.lazy(() => reviewsWhereInputSchema).optional(),
  some: z.lazy(() => reviewsWhereInputSchema).optional(),
  none: z.lazy(() => reviewsWhereInputSchema).optional()
}).strict();

export default ReviewsListRelationFilterSchema;
