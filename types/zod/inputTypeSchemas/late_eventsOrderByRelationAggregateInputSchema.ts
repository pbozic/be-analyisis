import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const late_eventsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.late_eventsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default late_eventsOrderByRelationAggregateInputSchema;
