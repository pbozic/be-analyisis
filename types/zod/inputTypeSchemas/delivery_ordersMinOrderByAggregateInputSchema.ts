import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_ordersMinOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_ordersMinOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  last_sent_at: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  payment_intent_id: z.lazy(() => SortOrderSchema).optional(),
  find_drivers_attempts: z.lazy(() => SortOrderSchema).optional(),
  is_daily_meal: z.lazy(() => SortOrderSchema).optional(),
  allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
  order_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_ordersMinOrderByAggregateInputSchema;
