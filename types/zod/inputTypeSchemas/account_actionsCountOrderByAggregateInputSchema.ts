import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const account_actionsCountOrderByAggregateInputSchema: z.ZodType<Prisma.account_actionsCountOrderByAggregateInput> = z.object({
  account_action_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  action_creator_user_id: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default account_actionsCountOrderByAggregateInputSchema;
