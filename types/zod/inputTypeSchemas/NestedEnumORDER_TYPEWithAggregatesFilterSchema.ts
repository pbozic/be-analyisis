import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumORDER_TYPEFilterSchema } from './NestedEnumORDER_TYPEFilterSchema';

export const NestedEnumORDER_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumORDER_TYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ORDER_TYPESchema).optional(),
  in: z.lazy(() => ORDER_TYPESchema).array().optional(),
  notIn: z.lazy(() => ORDER_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ORDER_TYPESchema),z.lazy(() => NestedEnumORDER_TYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumORDER_TYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumORDER_TYPEFilterSchema).optional()
}).strict();

export default NestedEnumORDER_TYPEWithAggregatesFilterSchema;
