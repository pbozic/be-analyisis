import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';

export const NestedEnumLOST_FOUND_STATUSFilterSchema: z.ZodType<Prisma.NestedEnumLOST_FOUND_STATUSFilter> = z.object({
  equals: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
  in: z.lazy(() => LOST_FOUND_STATUSSchema).array().optional(),
  notIn: z.lazy(() => LOST_FOUND_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => LOST_FOUND_STATUSSchema),z.lazy(() => NestedEnumLOST_FOUND_STATUSFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLOST_FOUND_STATUSFilterSchema;
