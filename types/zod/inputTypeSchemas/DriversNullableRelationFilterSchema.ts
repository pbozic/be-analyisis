import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const DriversNullableRelationFilterSchema: z.ZodType<Prisma.DriversNullableRelationFilter> = z.object({
  is: z.lazy(() => driversWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => driversWhereInputSchema).optional().nullable()
}).strict();

export default DriversNullableRelationFilterSchema;
