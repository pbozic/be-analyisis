import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { user_addressOrderByRelationAggregateInputSchema } from './user_addressOrderByRelationAggregateInputSchema';
import { businessOrderByRelationAggregateInputSchema } from './businessOrderByRelationAggregateInputSchema';
import { business_usersOrderByRelationAggregateInputSchema } from './business_usersOrderByRelationAggregateInputSchema';
import { daily_meals_subscriptionsOrderByRelationAggregateInputSchema } from './daily_meals_subscriptionsOrderByRelationAggregateInputSchema';

export const addressesOrderByWithRelationInputSchema: z.ZodType<Prisma.addressesOrderByWithRelationInput> = z.object({
  address_id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  street: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  house_number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  users: z.lazy(() => user_addressOrderByRelationAggregateInputSchema).optional(),
  businesses: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional(),
  businesses_delivery_address: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional(),
  business_users: z.lazy(() => business_usersOrderByRelationAggregateInputSchema).optional(),
  daily_meals_subscriptions: z.lazy(() => daily_meals_subscriptionsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default addressesOrderByWithRelationInputSchema;
