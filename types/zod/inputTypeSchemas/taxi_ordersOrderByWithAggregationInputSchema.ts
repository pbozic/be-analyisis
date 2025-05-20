import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { taxi_ordersCountOrderByAggregateInputSchema } from './taxi_ordersCountOrderByAggregateInputSchema';
import { taxi_ordersAvgOrderByAggregateInputSchema } from './taxi_ordersAvgOrderByAggregateInputSchema';
import { taxi_ordersMaxOrderByAggregateInputSchema } from './taxi_ordersMaxOrderByAggregateInputSchema';
import { taxi_ordersMinOrderByAggregateInputSchema } from './taxi_ordersMinOrderByAggregateInputSchema';
import { taxi_ordersSumOrderByAggregateInputSchema } from './taxi_ordersSumOrderByAggregateInputSchema';

export const taxi_ordersOrderByWithAggregationInputSchema: z.ZodType<Prisma.taxi_ordersOrderByWithAggregationInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  business_users_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  business_clients_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  vehicle_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  route: z.lazy(() => SortOrderSchema).optional(),
  pickup_location: z.lazy(() => SortOrderSchema).optional(),
  delivery_location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  payment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  estimates: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timeline: z.lazy(() => SortOrderSchema).optional(),
  preferences: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  last_sent_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  telephone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  first_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cancellation_reason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  find_drivers_attempts: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_scheduled: z.lazy(() => SortOrderSchema).optional(),
  parent_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  subtype: z.lazy(() => SortOrderSchema).optional(),
  flags: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cargo_preferences: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customer_note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_user_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  creating_user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  allow_credits_usage: z.lazy(() => SortOrderSchema).optional(),
  order_number: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => taxi_ordersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => taxi_ordersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => taxi_ordersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => taxi_ordersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => taxi_ordersSumOrderByAggregateInputSchema).optional()
}).strict();

export default taxi_ordersOrderByWithAggregationInputSchema;
