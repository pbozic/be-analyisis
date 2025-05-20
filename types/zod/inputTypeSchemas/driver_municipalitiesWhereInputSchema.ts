import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DriversRelationFilterSchema } from './DriversRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { MunicipalitiesRelationFilterSchema } from './MunicipalitiesRelationFilterSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const driver_municipalitiesWhereInputSchema: z.ZodType<Prisma.driver_municipalitiesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => driver_municipalitiesWhereInputSchema),z.lazy(() => driver_municipalitiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_municipalitiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_municipalitiesWhereInputSchema),z.lazy(() => driver_municipalitiesWhereInputSchema).array() ]).optional(),
  driver_municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  drivers: z.union([ z.lazy(() => DriversRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional(),
  municipalities: z.union([ z.lazy(() => MunicipalitiesRelationFilterSchema),z.lazy(() => municipalitiesWhereInputSchema) ]).optional(),
}).strict();

export default driver_municipalitiesWhereInputSchema;
