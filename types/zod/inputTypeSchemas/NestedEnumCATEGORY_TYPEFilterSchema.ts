import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';

export const NestedEnumCATEGORY_TYPEFilterSchema: z.ZodType<Prisma.NestedEnumCATEGORY_TYPEFilter> = z.object({
  equals: z.lazy(() => CATEGORY_TYPESchema).optional(),
  in: z.lazy(() => CATEGORY_TYPESchema).array().optional(),
  notIn: z.lazy(() => CATEGORY_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => CATEGORY_TYPESchema),z.lazy(() => NestedEnumCATEGORY_TYPEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumCATEGORY_TYPEFilterSchema;
