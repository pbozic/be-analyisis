import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { NestedEnumACCOUNT_ACTIONSFilterSchema } from './NestedEnumACCOUNT_ACTIONSFilterSchema';

export const EnumACCOUNT_ACTIONSFilterSchema: z.ZodType<Prisma.EnumACCOUNT_ACTIONSFilter> = z.object({
  equals: z.lazy(() => ACCOUNT_ACTIONSSchema).optional(),
  in: z.lazy(() => ACCOUNT_ACTIONSSchema).array().optional(),
  notIn: z.lazy(() => ACCOUNT_ACTIONSSchema).array().optional(),
  not: z.union([ z.lazy(() => ACCOUNT_ACTIONSSchema),z.lazy(() => NestedEnumACCOUNT_ACTIONSFilterSchema) ]).optional(),
}).strict();

export default EnumACCOUNT_ACTIONSFilterSchema;
