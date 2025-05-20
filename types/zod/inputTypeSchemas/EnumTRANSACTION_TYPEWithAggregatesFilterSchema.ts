import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema } from './NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTRANSACTION_TYPEFilterSchema } from './NestedEnumTRANSACTION_TYPEFilterSchema';

export const EnumTRANSACTION_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTRANSACTION_TYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TRANSACTION_TYPESchema).optional(),
  in: z.lazy(() => TRANSACTION_TYPESchema).array().optional(),
  notIn: z.lazy(() => TRANSACTION_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => TRANSACTION_TYPESchema),z.lazy(() => NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema).optional()
}).strict();

export default EnumTRANSACTION_TYPEWithAggregatesFilterSchema;
