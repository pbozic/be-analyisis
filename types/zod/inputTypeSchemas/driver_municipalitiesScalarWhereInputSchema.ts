import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const driver_municipalitiesScalarWhereInputSchema: z.ZodType<Prisma.driver_municipalitiesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => driver_municipalitiesScalarWhereInputSchema),z.lazy(() => driver_municipalitiesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_municipalitiesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_municipalitiesScalarWhereInputSchema),z.lazy(() => driver_municipalitiesScalarWhereInputSchema).array() ]).optional(),
  driver_municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  municipalities_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default driver_municipalitiesScalarWhereInputSchema;
