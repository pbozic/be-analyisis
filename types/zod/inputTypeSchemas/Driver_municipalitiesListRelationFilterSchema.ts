import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereInputSchema } from './driver_municipalitiesWhereInputSchema';

export const Driver_municipalitiesListRelationFilterSchema: z.ZodType<Prisma.Driver_municipalitiesListRelationFilter> = z.object({
  every: z.lazy(() => driver_municipalitiesWhereInputSchema).optional(),
  some: z.lazy(() => driver_municipalitiesWhereInputSchema).optional(),
  none: z.lazy(() => driver_municipalitiesWhereInputSchema).optional()
}).strict();

export default Driver_municipalitiesListRelationFilterSchema;
