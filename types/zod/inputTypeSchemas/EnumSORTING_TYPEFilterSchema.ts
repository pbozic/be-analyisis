import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { NestedEnumSORTING_TYPEFilterSchema } from './NestedEnumSORTING_TYPEFilterSchema';

export const EnumSORTING_TYPEFilterSchema: z.ZodType<Prisma.EnumSORTING_TYPEFilter> = z.object({
  equals: z.lazy(() => SORTING_TYPESchema).optional(),
  in: z.lazy(() => SORTING_TYPESchema).array().optional(),
  notIn: z.lazy(() => SORTING_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => SORTING_TYPESchema),z.lazy(() => NestedEnumSORTING_TYPEFilterSchema) ]).optional(),
}).strict();

export default EnumSORTING_TYPEFilterSchema;
