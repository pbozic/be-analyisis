import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumACCOUNT_ACTIONSFilterSchema } from './NestedEnumACCOUNT_ACTIONSFilterSchema';

export const NestedEnumACCOUNT_ACTIONSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumACCOUNT_ACTIONSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ACCOUNT_ACTIONSSchema).optional(),
  in: z.lazy(() => ACCOUNT_ACTIONSSchema).array().optional(),
  notIn: z.lazy(() => ACCOUNT_ACTIONSSchema).array().optional(),
  not: z.union([ z.lazy(() => ACCOUNT_ACTIONSSchema),z.lazy(() => NestedEnumACCOUNT_ACTIONSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumACCOUNT_ACTIONSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumACCOUNT_ACTIONSFilterSchema).optional()
}).strict();

export default NestedEnumACCOUNT_ACTIONSWithAggregatesFilterSchema;
