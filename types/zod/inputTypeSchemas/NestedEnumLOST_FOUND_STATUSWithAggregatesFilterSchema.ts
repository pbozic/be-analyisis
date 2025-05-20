import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLOST_FOUND_STATUSFilterSchema } from './NestedEnumLOST_FOUND_STATUSFilterSchema';

export const NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLOST_FOUND_STATUSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
  in: z.lazy(() => LOST_FOUND_STATUSSchema).array().optional(),
  notIn: z.lazy(() => LOST_FOUND_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => LOST_FOUND_STATUSSchema),z.lazy(() => NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLOST_FOUND_STATUSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLOST_FOUND_STATUSFilterSchema).optional()
}).strict();

export default NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema;
