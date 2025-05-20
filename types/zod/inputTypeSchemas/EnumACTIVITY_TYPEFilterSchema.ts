import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { NestedEnumACTIVITY_TYPEFilterSchema } from './NestedEnumACTIVITY_TYPEFilterSchema';

export const EnumACTIVITY_TYPEFilterSchema: z.ZodType<Prisma.EnumACTIVITY_TYPEFilter> = z.object({
  equals: z.lazy(() => ACTIVITY_TYPESchema).optional(),
  in: z.lazy(() => ACTIVITY_TYPESchema).array().optional(),
  notIn: z.lazy(() => ACTIVITY_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ACTIVITY_TYPESchema),z.lazy(() => NestedEnumACTIVITY_TYPEFilterSchema) ]).optional(),
}).strict();

export default EnumACTIVITY_TYPEFilterSchema;
