import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumORDER_SUBTYPEFilterSchema } from './NestedEnumORDER_SUBTYPEFilterSchema';

export const NestedEnumORDER_SUBTYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumORDER_SUBTYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ORDER_SUBTYPESchema).optional(),
  in: z.lazy(() => ORDER_SUBTYPESchema).array().optional(),
  notIn: z.lazy(() => ORDER_SUBTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ORDER_SUBTYPESchema),z.lazy(() => NestedEnumORDER_SUBTYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumORDER_SUBTYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumORDER_SUBTYPEFilterSchema).optional()
}).strict();

export default NestedEnumORDER_SUBTYPEWithAggregatesFilterSchema;
