import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';

export const NestedEnumACCOUNT_ACTIONS_REASONFilterSchema: z.ZodType<Prisma.NestedEnumACCOUNT_ACTIONS_REASONFilter> = z.object({
  equals: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).optional(),
  in: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).array().optional(),
  notIn: z.lazy(() => ACCOUNT_ACTIONS_REASONSchema).array().optional(),
  not: z.union([ z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),z.lazy(() => NestedEnumACCOUNT_ACTIONS_REASONFilterSchema) ]).optional(),
}).strict();

export default NestedEnumACCOUNT_ACTIONS_REASONFilterSchema;
