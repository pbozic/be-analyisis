import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allergensWhereInputSchema } from './allergensWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const allergensWhereUniqueInputSchema: z.ZodType<Prisma.allergensWhereUniqueInput> = z.union([
  z.object({
    allergen_id: z.string().uuid(),
    code: z.number().int()
  }),
  z.object({
    allergen_id: z.string().uuid(),
  }),
  z.object({
    code: z.number().int(),
  }),
])
.and(z.object({
  allergen_id: z.string().uuid().optional(),
  code: z.number().int().optional(),
  AND: z.union([ z.lazy(() => allergensWhereInputSchema),z.lazy(() => allergensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => allergensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => allergensWhereInputSchema),z.lazy(() => allergensWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default allergensWhereUniqueInputSchema;
