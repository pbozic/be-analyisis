import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const flag_historyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.flag_historyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default flag_historyOrderByRelationAggregateInputSchema;
