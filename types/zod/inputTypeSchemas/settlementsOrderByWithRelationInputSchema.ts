import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { municipalitiesOrderByWithRelationInputSchema } from './municipalitiesOrderByWithRelationInputSchema';
import { weather_dataOrderByRelationAggregateInputSchema } from './weather_dataOrderByRelationAggregateInputSchema';

export const settlementsOrderByWithRelationInputSchema: z.ZodType<Prisma.settlementsOrderByWithRelationInput> = z.object({
  settlement_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  eid_naselje: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  feature_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geojson: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => municipalitiesOrderByWithRelationInputSchema).optional(),
  weather_data: z.lazy(() => weather_dataOrderByRelationAggregateInputSchema).optional()
}).strict();

export default settlementsOrderByWithRelationInputSchema;
