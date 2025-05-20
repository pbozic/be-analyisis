import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Driver_municipalitiesListRelationFilterSchema } from './Driver_municipalitiesListRelationFilterSchema';
import { SettlementsListRelationFilterSchema } from './SettlementsListRelationFilterSchema';
import { Weather_dataListRelationFilterSchema } from './Weather_dataListRelationFilterSchema';

export const municipalitiesWhereInputSchema: z.ZodType<Prisma.municipalitiesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => municipalitiesWhereInputSchema),z.lazy(() => municipalitiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => municipalitiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => municipalitiesWhereInputSchema),z.lazy(() => municipalitiesWhereInputSchema).array() ]).optional(),
  municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  geojson: z.lazy(() => JsonFilterSchema).optional(),
  requires_license: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gis_sifra: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  eid_obcina: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  feature_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  driver_municipalities: z.lazy(() => Driver_municipalitiesListRelationFilterSchema).optional(),
  settlements: z.lazy(() => SettlementsListRelationFilterSchema).optional(),
  weather_data: z.lazy(() => Weather_dataListRelationFilterSchema).optional()
}).strict();

export default municipalitiesWhereInputSchema;
