import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { NestedEnumCATEGORY_TYPEFilterSchema } from './NestedEnumCATEGORY_TYPEFilterSchema';

export const EnumCATEGORY_TYPEFilterSchema: z.ZodType<Prisma.EnumCATEGORY_TYPEFilter> = z.object({
  equals: z.lazy(() => CATEGORY_TYPESchema).optional(),
  in: z.lazy(() => CATEGORY_TYPESchema).array().optional(),
  notIn: z.lazy(() => CATEGORY_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => CATEGORY_TYPESchema),z.lazy(() => NestedEnumCATEGORY_TYPEFilterSchema) ]).optional(),
}).strict();

export default EnumCATEGORY_TYPEFilterSchema;
