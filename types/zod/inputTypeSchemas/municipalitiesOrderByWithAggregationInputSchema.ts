import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { municipalitiesCountOrderByAggregateInputSchema } from './municipalitiesCountOrderByAggregateInputSchema';
import { municipalitiesMaxOrderByAggregateInputSchema } from './municipalitiesMaxOrderByAggregateInputSchema';
import { municipalitiesMinOrderByAggregateInputSchema } from './municipalitiesMinOrderByAggregateInputSchema';

export const municipalitiesOrderByWithAggregationInputSchema: z.ZodType<Prisma.municipalitiesOrderByWithAggregationInput> = z.object({
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  geojson: z.lazy(() => SortOrderSchema).optional(),
  requires_license: z.lazy(() => SortOrderSchema).optional(),
  gis_sifra: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  eid_obcina: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  feature_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => municipalitiesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => municipalitiesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => municipalitiesMinOrderByAggregateInputSchema).optional()
}).strict();

export default municipalitiesOrderByWithAggregationInputSchema;
