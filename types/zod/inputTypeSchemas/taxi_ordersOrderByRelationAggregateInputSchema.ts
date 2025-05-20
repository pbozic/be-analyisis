import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const taxi_ordersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.taxi_ordersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default taxi_ordersOrderByRelationAggregateInputSchema;
