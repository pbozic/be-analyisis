import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { vehiclesOrderByRelationAggregateInputSchema } from './vehiclesOrderByRelationAggregateInputSchema';
import { delivery_ordersOrderByRelationAggregateInputSchema } from './delivery_ordersOrderByRelationAggregateInputSchema';
import { delivery_order_sentOrderByRelationAggregateInputSchema } from './delivery_order_sentOrderByRelationAggregateInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { delivery_driver_history_locationsOrderByRelationAggregateInputSchema } from './delivery_driver_history_locationsOrderByRelationAggregateInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const delivery_driversOrderByWithRelationInputSchema: z.ZodType<Prisma.delivery_driversOrderByWithRelationInput> = z.object({
  delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
  online: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  on_order: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivers_daily_meals: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  working_hours: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_ping_at: z.lazy(() => SortOrderSchema).optional(),
  on_daily_meals: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_inactive: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scheduled_meals_route: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  regions: z.lazy(() => SortOrderSchema).optional(),
  partner_cash_balance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  daily_meal_business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  vehicles: z.lazy(() => vehiclesOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => delivery_ordersOrderByRelationAggregateInputSchema).optional(),
  received_orders: z.lazy(() => delivery_order_sentOrderByRelationAggregateInputSchema).optional(),
  documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsOrderByRelationAggregateInputSchema).optional(),
  daily_meal_business: z.lazy(() => businessOrderByWithRelationInputSchema).optional()
}).strict();

export default delivery_driversOrderByWithRelationInputSchema;
