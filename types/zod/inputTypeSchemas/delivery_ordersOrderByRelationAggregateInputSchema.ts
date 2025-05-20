import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_ordersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.delivery_ordersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_ordersOrderByRelationAggregateInputSchema;
