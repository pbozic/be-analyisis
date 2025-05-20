import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';

export const NestedEnumTRANSACTION_TYPEFilterSchema: z.ZodType<Prisma.NestedEnumTRANSACTION_TYPEFilter> = z.object({
  equals: z.lazy(() => TRANSACTION_TYPESchema).optional(),
  in: z.lazy(() => TRANSACTION_TYPESchema).array().optional(),
  notIn: z.lazy(() => TRANSACTION_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => TRANSACTION_TYPESchema),z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumTRANSACTION_TYPEFilterSchema;
