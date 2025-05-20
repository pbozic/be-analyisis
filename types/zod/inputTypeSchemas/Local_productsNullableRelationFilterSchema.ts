import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';

export const Local_productsNullableRelationFilterSchema: z.ZodType<Prisma.Local_productsNullableRelationFilter> = z.object({
  is: z.lazy(() => local_productsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => local_productsWhereInputSchema).optional().nullable()
}).strict();

export default Local_productsNullableRelationFilterSchema;
