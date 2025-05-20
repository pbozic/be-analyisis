import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumDELIVERY_ORDER_STATUSFilterSchema } from './NestedEnumDELIVERY_ORDER_STATUSFilterSchema';

export const NestedEnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDELIVERY_ORDER_STATUSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional(),
  in: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional(),
  notIn: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSFilterSchema).optional()
}).strict();

export default NestedEnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema;
