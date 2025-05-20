import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';

export const vehicle_specificationsOrderByWithRelationInputSchema: z.ZodType<Prisma.vehicle_specificationsOrderByWithRelationInput> = z.object({
  vehicle_specification_id: z.lazy(() => SortOrderSchema).optional(),
  class: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  people: z.lazy(() => SortOrderSchema).optional(),
  start_cost: z.lazy(() => SortOrderSchema).optional(),
  per_kilometre: z.lazy(() => SortOrderSchema).optional(),
  per_minute: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  vehicle: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional()
}).strict();

export default vehicle_specificationsOrderByWithRelationInputSchema;
