import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';

export const NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema: z.ZodType<Prisma.NestedEnumDELIVERY_ORDER_STATUSNullableFilter> = z.object({
  equals: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional().nullable(),
  in: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  notIn: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema;
