import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_favorite_businessesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.user_favorite_businessesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default user_favorite_businessesOrderByRelationAggregateInputSchema;
