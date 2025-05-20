import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRESERVATION_STATUSFilterSchema } from './NestedEnumRESERVATION_STATUSFilterSchema';

export const NestedEnumRESERVATION_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRESERVATION_STATUSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RESERVATION_STATUSSchema).optional(),
  in: z.lazy(() => RESERVATION_STATUSSchema).array().optional(),
  notIn: z.lazy(() => RESERVATION_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => RESERVATION_STATUSSchema),z.lazy(() => NestedEnumRESERVATION_STATUSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRESERVATION_STATUSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRESERVATION_STATUSFilterSchema).optional()
}).strict();

export default NestedEnumRESERVATION_STATUSWithAggregatesFilterSchema;
