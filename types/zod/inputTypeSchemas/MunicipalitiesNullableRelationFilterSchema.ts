import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const MunicipalitiesNullableRelationFilterSchema: z.ZodType<Prisma.MunicipalitiesNullableRelationFilter> = z.object({
  is: z.lazy(() => municipalitiesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => municipalitiesWhereInputSchema).optional().nullable()
}).strict();

export default MunicipalitiesNullableRelationFilterSchema;
