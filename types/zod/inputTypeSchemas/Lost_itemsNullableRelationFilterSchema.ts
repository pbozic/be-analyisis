import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';

export const Lost_itemsNullableRelationFilterSchema: z.ZodType<Prisma.Lost_itemsNullableRelationFilter> = z.object({
  is: z.lazy(() => lost_itemsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => lost_itemsWhereInputSchema).optional().nullable()
}).strict();

export default Lost_itemsNullableRelationFilterSchema;
