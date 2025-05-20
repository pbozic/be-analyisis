import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { group_usersCountOrderByAggregateInputSchema } from './group_usersCountOrderByAggregateInputSchema';
import { group_usersMaxOrderByAggregateInputSchema } from './group_usersMaxOrderByAggregateInputSchema';
import { group_usersMinOrderByAggregateInputSchema } from './group_usersMinOrderByAggregateInputSchema';

export const group_usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.group_usersOrderByWithAggregationInput> = z.object({
  group_user_id: z.lazy(() => SortOrderSchema).optional(),
  parent_user_id: z.lazy(() => SortOrderSchema).optional(),
  child_user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => group_usersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => group_usersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => group_usersMinOrderByAggregateInputSchema).optional()
}).strict();

export default group_usersOrderByWithAggregationInputSchema;
