import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const municipalitiesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.municipalitiesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => municipalitiesScalarWhereWithAggregatesInputSchema),z.lazy(() => municipalitiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => municipalitiesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => municipalitiesScalarWhereWithAggregatesInputSchema),z.lazy(() => municipalitiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  municipalities_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  geojson: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  requires_license: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  gis_sifra: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  eid_obcina: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  feature_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default municipalitiesScalarWhereWithAggregatesInputSchema;
