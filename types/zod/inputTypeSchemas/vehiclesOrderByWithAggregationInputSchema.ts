import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { vehiclesCountOrderByAggregateInputSchema } from './vehiclesCountOrderByAggregateInputSchema';
import { vehiclesMaxOrderByAggregateInputSchema } from './vehiclesMaxOrderByAggregateInputSchema';
import { vehiclesMinOrderByAggregateInputSchema } from './vehiclesMinOrderByAggregateInputSchema';

export const vehiclesOrderByWithAggregationInputSchema: z.ZodType<Prisma.vehiclesOrderByWithAggregationInput> = z.object({
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  class: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  make: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  license_plate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  vehicle_specification_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => vehiclesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => vehiclesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => vehiclesMinOrderByAggregateInputSchema).optional()
}).strict();

export default vehiclesOrderByWithAggregationInputSchema;
