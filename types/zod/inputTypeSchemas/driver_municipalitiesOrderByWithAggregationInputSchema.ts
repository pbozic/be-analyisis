import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { driver_municipalitiesCountOrderByAggregateInputSchema } from './driver_municipalitiesCountOrderByAggregateInputSchema';
import { driver_municipalitiesMaxOrderByAggregateInputSchema } from './driver_municipalitiesMaxOrderByAggregateInputSchema';
import { driver_municipalitiesMinOrderByAggregateInputSchema } from './driver_municipalitiesMinOrderByAggregateInputSchema';

export const driver_municipalitiesOrderByWithAggregationInputSchema: z.ZodType<Prisma.driver_municipalitiesOrderByWithAggregationInput> = z.object({
  driver_municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => driver_municipalitiesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => driver_municipalitiesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => driver_municipalitiesMinOrderByAggregateInputSchema).optional()
}).strict();

export default driver_municipalitiesOrderByWithAggregationInputSchema;
