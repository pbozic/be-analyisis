import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenTypeSchema } from './TokenTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTokenTypeFilterSchema } from './NestedEnumTokenTypeFilterSchema';

export const NestedEnumTokenTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTokenTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TokenTypeSchema).optional(),
  in: z.lazy(() => TokenTypeSchema).array().optional(),
  notIn: z.lazy(() => TokenTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => NestedEnumTokenTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional()
}).strict();

export default NestedEnumTokenTypeWithAggregatesFilterSchema;
