import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const MunicipalitiesRelationFilterSchema: z.ZodType<Prisma.MunicipalitiesRelationFilter> = z.object({
  is: z.lazy(() => municipalitiesWhereInputSchema).optional(),
  isNot: z.lazy(() => municipalitiesWhereInputSchema).optional()
}).strict();

export default MunicipalitiesRelationFilterSchema;
