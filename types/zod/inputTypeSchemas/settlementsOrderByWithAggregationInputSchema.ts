import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { settlementsCountOrderByAggregateInputSchema } from './settlementsCountOrderByAggregateInputSchema';
import { settlementsMaxOrderByAggregateInputSchema } from './settlementsMaxOrderByAggregateInputSchema';
import { settlementsMinOrderByAggregateInputSchema } from './settlementsMinOrderByAggregateInputSchema';

export const settlementsOrderByWithAggregationInputSchema: z.ZodType<Prisma.settlementsOrderByWithAggregationInput> = z.object({
  settlement_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  eid_naselje: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  feature_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geojson: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => settlementsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => settlementsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => settlementsMinOrderByAggregateInputSchema).optional()
}).strict();

export default settlementsOrderByWithAggregationInputSchema;
