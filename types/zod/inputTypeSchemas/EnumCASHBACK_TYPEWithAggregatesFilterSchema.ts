import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { NestedEnumCASHBACK_TYPEWithAggregatesFilterSchema } from './NestedEnumCASHBACK_TYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCASHBACK_TYPEFilterSchema } from './NestedEnumCASHBACK_TYPEFilterSchema';

export const EnumCASHBACK_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCASHBACK_TYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CASHBACK_TYPESchema).optional(),
  in: z.lazy(() => CASHBACK_TYPESchema).array().optional(),
  notIn: z.lazy(() => CASHBACK_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => CASHBACK_TYPESchema),z.lazy(() => NestedEnumCASHBACK_TYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCASHBACK_TYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCASHBACK_TYPEFilterSchema).optional()
}).strict();

export default EnumCASHBACK_TYPEWithAggregatesFilterSchema;
