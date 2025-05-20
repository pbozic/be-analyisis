import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { reviewsOrderByRelationAggregateInputSchema } from './reviewsOrderByRelationAggregateInputSchema';
import { usersOrderByRelationAggregateInputSchema } from './usersOrderByRelationAggregateInputSchema';
import { businessOrderByRelationAggregateInputSchema } from './businessOrderByRelationAggregateInputSchema';

export const reviewableOrderByWithRelationInputSchema: z.ZodType<Prisma.reviewableOrderByWithRelationInput> = z.object({
  reviewable_id: z.lazy(() => SortOrderSchema).optional(),
  reviews: z.lazy(() => reviewsOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => usersOrderByRelationAggregateInputSchema).optional(),
  business: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional()
}).strict();

export default reviewableOrderByWithRelationInputSchema;
