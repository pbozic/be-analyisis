import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const lost_itemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.lost_itemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default lost_itemsOrderByRelationAggregateInputSchema;
