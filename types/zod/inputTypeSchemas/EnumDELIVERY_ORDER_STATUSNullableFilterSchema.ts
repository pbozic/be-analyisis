import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema } from './NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema';

export const EnumDELIVERY_ORDER_STATUSNullableFilterSchema: z.ZodType<Prisma.EnumDELIVERY_ORDER_STATUSNullableFilter> = z.object({
  equals: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional().nullable(),
  in: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  notIn: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumDELIVERY_ORDER_STATUSNullableFilterSchema;
