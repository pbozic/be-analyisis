import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_history_locationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.driver_history_locationsMaxOrderByAggregateInput> = z.object({
  driver_history_location_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  taxi_order_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default driver_history_locationsMaxOrderByAggregateInputSchema;
