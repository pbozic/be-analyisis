import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_driver_history_locationsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_driver_history_locationsOrderByRelationAggregateInputSchema;
