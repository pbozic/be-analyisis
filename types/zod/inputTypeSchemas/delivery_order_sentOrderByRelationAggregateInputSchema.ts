import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_order_sentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.delivery_order_sentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_order_sentOrderByRelationAggregateInputSchema;
