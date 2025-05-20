import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const late_eventsCountOrderByAggregateInputSchema: z.ZodType<Prisma.late_eventsCountOrderByAggregateInput> = z.object({
  late_events_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.lazy(() => SortOrderSchema).optional(),
  taxi_order_id: z.lazy(() => SortOrderSchema).optional(),
  scoring_points_id: z.lazy(() => SortOrderSchema).optional(),
  seconds: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default late_eventsCountOrderByAggregateInputSchema;
