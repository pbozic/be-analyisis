import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const municipalitiesCountOrderByAggregateInputSchema: z.ZodType<Prisma.municipalitiesCountOrderByAggregateInput> = z.object({
  municipalities_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  geojson: z.lazy(() => SortOrderSchema).optional(),
  requires_license: z.lazy(() => SortOrderSchema).optional(),
  gis_sifra: z.lazy(() => SortOrderSchema).optional(),
  eid_obcina: z.lazy(() => SortOrderSchema).optional(),
  feature_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default municipalitiesCountOrderByAggregateInputSchema;
