import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { menu_categoriesOrderByWithRelationInputSchema } from './menu_categoriesOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { menusOrderByWithRelationInputSchema } from './menusOrderByWithRelationInputSchema';
import { addressesOrderByWithRelationInputSchema } from './addressesOrderByWithRelationInputSchema';

export const daily_meals_subscriptionsOrderByWithRelationInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsOrderByWithRelationInput> = z.object({
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
  menu_category: z.lazy(() => menu_categoriesOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
  menu: z.lazy(() => menusOrderByWithRelationInputSchema).optional(),
  address: z.lazy(() => addressesOrderByWithRelationInputSchema).optional()
}).strict();

export default daily_meals_subscriptionsOrderByWithRelationInputSchema;
