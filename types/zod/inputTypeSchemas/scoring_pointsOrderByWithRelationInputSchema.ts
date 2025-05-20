import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { late_eventsOrderByRelationAggregateInputSchema } from './late_eventsOrderByRelationAggregateInputSchema';

export const scoring_pointsOrderByWithRelationInputSchema: z.ZodType<Prisma.scoring_pointsOrderByWithRelationInput> = z.object({
  scoring_points_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivery_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxi_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  isPenalty: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  expiration_date: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  businesses: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
  late_events: z.lazy(() => late_eventsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default scoring_pointsOrderByWithRelationInputSchema;
