import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { daily_meals_subscriptionsCountOrderByAggregateInputSchema } from './daily_meals_subscriptionsCountOrderByAggregateInputSchema';
import { daily_meals_subscriptionsAvgOrderByAggregateInputSchema } from './daily_meals_subscriptionsAvgOrderByAggregateInputSchema';
import { daily_meals_subscriptionsMaxOrderByAggregateInputSchema } from './daily_meals_subscriptionsMaxOrderByAggregateInputSchema';
import { daily_meals_subscriptionsMinOrderByAggregateInputSchema } from './daily_meals_subscriptionsMinOrderByAggregateInputSchema';
import { daily_meals_subscriptionsSumOrderByAggregateInputSchema } from './daily_meals_subscriptionsSumOrderByAggregateInputSchema';

export const daily_meals_subscriptionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsOrderByWithAggregationInput> = z.object({
  daily_meals_subscriptions_id: z.lazy(() => SortOrderSchema).optional(),
  grouped_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  menu_id: z.lazy(() => SortOrderSchema).optional(),
  address_id: z.lazy(() => SortOrderSchema).optional(),
  menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  order_created: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  restaurant_comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  courier_comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => daily_meals_subscriptionsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => daily_meals_subscriptionsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => daily_meals_subscriptionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => daily_meals_subscriptionsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => daily_meals_subscriptionsSumOrderByAggregateInputSchema).optional()
}).strict();

export default daily_meals_subscriptionsOrderByWithAggregationInputSchema;
