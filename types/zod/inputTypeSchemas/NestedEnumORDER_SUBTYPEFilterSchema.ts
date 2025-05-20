import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';

export const NestedEnumORDER_SUBTYPEFilterSchema: z.ZodType<Prisma.NestedEnumORDER_SUBTYPEFilter> = z.object({
  equals: z.lazy(() => ORDER_SUBTYPESchema).optional(),
  in: z.lazy(() => ORDER_SUBTYPESchema).array().optional(),
  notIn: z.lazy(() => ORDER_SUBTYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ORDER_SUBTYPESchema),z.lazy(() => NestedEnumORDER_SUBTYPEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumORDER_SUBTYPEFilterSchema;
