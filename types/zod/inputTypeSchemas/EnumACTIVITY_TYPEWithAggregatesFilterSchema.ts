import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { NestedEnumACTIVITY_TYPEWithAggregatesFilterSchema } from './NestedEnumACTIVITY_TYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumACTIVITY_TYPEFilterSchema } from './NestedEnumACTIVITY_TYPEFilterSchema';

export const EnumACTIVITY_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumACTIVITY_TYPEWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ACTIVITY_TYPESchema).optional(),
  in: z.lazy(() => ACTIVITY_TYPESchema).array().optional(),
  notIn: z.lazy(() => ACTIVITY_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => ACTIVITY_TYPESchema),z.lazy(() => NestedEnumACTIVITY_TYPEWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumACTIVITY_TYPEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumACTIVITY_TYPEFilterSchema).optional()
}).strict();

export default EnumACTIVITY_TYPEWithAggregatesFilterSchema;
