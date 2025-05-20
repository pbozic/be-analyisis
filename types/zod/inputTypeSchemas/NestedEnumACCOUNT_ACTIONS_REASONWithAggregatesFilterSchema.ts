import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumACCOUNT_ACTIONS_REASONFilterSchema } from './NestedEnumACCOUNT_ACTIONS_REASONFilterSchema';

export const NestedEnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumACCOUNT_ACTIONS_REASONWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).optional(),
  in: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).array().optional(),
  notIn: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).array().optional(),
  not: z.union([ z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),z.lazy(() => NestedEnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumACCOUNT_ACTIONS_REASONFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumACCOUNT_ACTIONS_REASONFilterSchema).optional()
}).strict();

export default NestedEnumACCOUNT_ACTIONS_REASONWithAggregatesFilterSchema;
