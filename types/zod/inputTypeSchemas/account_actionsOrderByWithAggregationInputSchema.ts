import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { account_actionsCountOrderByAggregateInputSchema } from './account_actionsCountOrderByAggregateInputSchema';
import { account_actionsMaxOrderByAggregateInputSchema } from './account_actionsMaxOrderByAggregateInputSchema';
import { account_actionsMinOrderByAggregateInputSchema } from './account_actionsMinOrderByAggregateInputSchema';

export const account_actionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.account_actionsOrderByWithAggregationInput> = z.object({
  account_action_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  action_creator_user_id: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => account_actionsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => account_actionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => account_actionsMinOrderByAggregateInputSchema).optional()
}).strict();

export default account_actionsOrderByWithAggregationInputSchema;
