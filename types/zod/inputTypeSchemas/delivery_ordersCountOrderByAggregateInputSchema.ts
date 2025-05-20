import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_ordersCountOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_ordersCountOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  route: z.lazy(() => SortOrderSchema).optional(),
  pickup_location: z.lazy(() => SortOrderSchema).optional(),
  delivery_location: z.lazy(() => SortOrderSchema).optional(),
  payment: z.lazy(() => SortOrderSchema).optional(),
  estimates: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => SortOrderSchema).optional(),
  details: z.lazy(() => SortOrderSchema).optional(),
  courier_instructions: z.lazy(() => SortOrderSchema).optional(),
  restaurant_message: z.lazy(() => SortOrderSchema).optional(),
  scheduled: z.lazy(() => SortOrderSchema).optional(),
  timeline: z.lazy(() => SortOrderSchema).optional(),
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
  flags: z.lazy(() => SortOrderSchema).optional(),
  allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
  order_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_ordersCountOrderByAggregateInputSchema;
