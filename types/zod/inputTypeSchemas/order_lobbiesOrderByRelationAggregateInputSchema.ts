import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobbiesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.order_lobbiesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default order_lobbiesOrderByRelationAggregateInputSchema;
