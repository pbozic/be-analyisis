import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driver_municipalitiesOrderByRelationAggregateInputSchema } from './driver_municipalitiesOrderByRelationAggregateInputSchema';
import { settlementsOrderByRelationAggregateInputSchema } from './settlementsOrderByRelationAggregateInputSchema';
import { weather_dataOrderByRelationAggregateInputSchema } from './weather_dataOrderByRelationAggregateInputSchema';

export const municipalitiesOrderByWithRelationInputSchema: z.ZodType<Prisma.municipalitiesOrderByWithRelationInput> = z.object({
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  geojson: z.lazy(() => SortOrderSchema).optional(),
  requires_license: z.lazy(() => SortOrderSchema).optional(),
  gis_sifra: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  eid_obcina: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  feature_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  driver_municipalities: z.lazy(() => driver_municipalitiesOrderByRelationAggregateInputSchema).optional(),
  settlements: z.lazy(() => settlementsOrderByRelationAggregateInputSchema).optional(),
  weather_data: z.lazy(() => weather_dataOrderByRelationAggregateInputSchema).optional()
}).strict();

export default municipalitiesOrderByWithRelationInputSchema;
