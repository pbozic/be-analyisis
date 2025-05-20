import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { addressesCountOrderByAggregateInputSchema } from './addressesCountOrderByAggregateInputSchema';
import { addressesMaxOrderByAggregateInputSchema } from './addressesMaxOrderByAggregateInputSchema';
import { addressesMinOrderByAggregateInputSchema } from './addressesMinOrderByAggregateInputSchema';

export const addressesOrderByWithAggregationInputSchema: z.ZodType<Prisma.addressesOrderByWithAggregationInput> = z.object({
  address_id: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  street: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  house_number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => addressesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => addressesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => addressesMinOrderByAggregateInputSchema).optional()
}).strict();

export default addressesOrderByWithAggregationInputSchema;
