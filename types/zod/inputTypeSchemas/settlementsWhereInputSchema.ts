import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MunicipalitiesRelationFilterSchema } from './MunicipalitiesRelationFilterSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { Weather_dataListRelationFilterSchema } from './Weather_dataListRelationFilterSchema';

export const settlementsWhereInputSchema: z.ZodType<Prisma.settlementsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => settlementsWhereInputSchema),z.lazy(() => settlementsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => settlementsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => settlementsWhereInputSchema),z.lazy(() => settlementsWhereInputSchema).array() ]).optional(),
  settlement_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  eid_naselje: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  feature_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  geojson: z.lazy(() => JsonFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  municipality: z.union([ z.lazy(() => MunicipalitiesRelationFilterSchema),z.lazy(() => municipalitiesWhereInputSchema) ]).optional(),
  weather_data: z.lazy(() => Weather_dataListRelationFilterSchema).optional()
}).strict();

export default settlementsWhereInputSchema;
