import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { ReviewsListRelationFilterSchema } from './ReviewsListRelationFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';

export const reviewableWhereInputSchema: z.ZodType<Prisma.reviewableWhereInput> = z.object({
  AND: z.union([ z.lazy(() => reviewableWhereInputSchema),z.lazy(() => reviewableWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => reviewableWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => reviewableWhereInputSchema),z.lazy(() => reviewableWhereInputSchema).array() ]).optional(),
  reviewable_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  reviews: z.lazy(() => ReviewsListRelationFilterSchema).optional(),
  user: z.lazy(() => UsersListRelationFilterSchema).optional(),
  business: z.lazy(() => BusinessListRelationFilterSchema).optional()
}).strict();

export default reviewableWhereInputSchema;
