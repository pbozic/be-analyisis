import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const late_eventsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.late_eventsAvgOrderByAggregateInput> = z.object({
  seconds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default late_eventsAvgOrderByAggregateInputSchema;
