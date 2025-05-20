import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema } from './NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema';

export const NestedEnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional().nullable(),
  in: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  notIn: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema).optional()
}).strict();

export default NestedEnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema;
