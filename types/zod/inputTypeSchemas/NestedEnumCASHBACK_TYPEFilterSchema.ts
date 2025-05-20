import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';

export const NestedEnumCASHBACK_TYPEFilterSchema: z.ZodType<Prisma.NestedEnumCASHBACK_TYPEFilter> = z.object({
  equals: z.lazy(() => CASHBACK_TYPESchema).optional(),
  in: z.lazy(() => CASHBACK_TYPESchema).array().optional(),
  notIn: z.lazy(() => CASHBACK_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => CASHBACK_TYPESchema),z.lazy(() => NestedEnumCASHBACK_TYPEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumCASHBACK_TYPEFilterSchema;
