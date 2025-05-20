import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const scoring_pointsMinOrderByAggregateInputSchema: z.ZodType<Prisma.scoring_pointsMinOrderByAggregateInput> = z.object({
  scoring_points_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.lazy(() => SortOrderSchema).optional(),
  taxi_order_id: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  isPenalty: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default scoring_pointsMinOrderByAggregateInputSchema;
