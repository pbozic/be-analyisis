import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const account_actionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.account_actionsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default account_actionsOrderByRelationAggregateInputSchema;
