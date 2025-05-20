import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';

export const SettlementsNullableRelationFilterSchema: z.ZodType<Prisma.SettlementsNullableRelationFilter> = z.object({
  is: z.lazy(() => settlementsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => settlementsWhereInputSchema).optional().nullable()
}).strict();

export default SettlementsNullableRelationFilterSchema;
