import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { NestedEnumORDER_TYPEFilterSchema } from './NestedEnumORDER_TYPEFilterSchema';

export const EnumORDER_TYPEFilterSchema: z.ZodType<Prisma.EnumORDER_TYPEFilter> = z.object({
  equals: z.lazy(() => ORDER_TYPESchema).optional(),
  in: z.lazy(() => ORDER_TYPESchema).array().optional(),
  notIn: z.lazy(() => ORDER_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ORDER_TYPESchema),z.lazy(() => NestedEnumORDER_TYPEFilterSchema) ]).optional(),
}).strict();

export default EnumORDER_TYPEFilterSchema;
