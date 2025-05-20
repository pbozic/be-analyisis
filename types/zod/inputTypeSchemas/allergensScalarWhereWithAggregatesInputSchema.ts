import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const allergensScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.allergensScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => allergensScalarWhereWithAggregatesInputSchema),z.lazy(() => allergensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => allergensScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => allergensScalarWhereWithAggregatesInputSchema),z.lazy(() => allergensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  allergen_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  code: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default allergensScalarWhereWithAggregatesInputSchema;
