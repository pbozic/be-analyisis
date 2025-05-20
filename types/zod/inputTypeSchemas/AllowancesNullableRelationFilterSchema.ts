import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';

export const AllowancesNullableRelationFilterSchema: z.ZodType<Prisma.AllowancesNullableRelationFilter> = z.object({
  is: z.lazy(() => allowancesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => allowancesWhereInputSchema).optional().nullable()
}).strict();

export default AllowancesNullableRelationFilterSchema;
