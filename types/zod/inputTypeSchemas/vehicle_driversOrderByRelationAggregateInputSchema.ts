import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const vehicle_driversOrderByRelationAggregateInputSchema: z.ZodType<Prisma.vehicle_driversOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default vehicle_driversOrderByRelationAggregateInputSchema;
