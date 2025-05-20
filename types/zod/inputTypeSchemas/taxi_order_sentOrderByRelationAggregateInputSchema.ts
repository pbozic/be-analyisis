import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const taxi_order_sentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.taxi_order_sentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default taxi_order_sentOrderByRelationAggregateInputSchema;
