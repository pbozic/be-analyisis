import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const vehicle_specificationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.vehicle_specificationsMaxOrderByAggregateInput> = z.object({
  vehicle_specification_id: z.lazy(() => SortOrderSchema).optional(),
  class: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  people: z.lazy(() => SortOrderSchema).optional(),
  start_cost: z.lazy(() => SortOrderSchema).optional(),
  per_kilometre: z.lazy(() => SortOrderSchema).optional(),
  per_minute: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default vehicle_specificationsMaxOrderByAggregateInputSchema;
