import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { scoring_pointsOrderByWithRelationInputSchema } from './scoring_pointsOrderByWithRelationInputSchema';

export const late_eventsOrderByWithRelationInputSchema: z.ZodType<Prisma.late_eventsOrderByWithRelationInput> = z.object({
  late_events_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxi_order_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scoring_points_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  seconds: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  businesses: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
  scoring_points: z.lazy(() => scoring_pointsOrderByWithRelationInputSchema).optional()
}).strict();

export default late_eventsOrderByWithRelationInputSchema;
