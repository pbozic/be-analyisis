import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NestedEnumDELIVERY_ORDER_STATUSFilterSchema } from './NestedEnumDELIVERY_ORDER_STATUSFilterSchema';

export const EnumDELIVERY_ORDER_STATUSFilterSchema: z.ZodType<Prisma.EnumDELIVERY_ORDER_STATUSFilter> = z.object({
  equals: z.lazy(() => DELIVERY_ORDER_STATUSSchema).optional(),
  in: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional(),
  notIn: z.lazy(() => DELIVERY_ORDER_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => DELIVERY_ORDER_STATUSSchema),z.lazy(() => NestedEnumDELIVERY_ORDER_STATUSFilterSchema) ]).optional(),
}).strict();

export default EnumDELIVERY_ORDER_STATUSFilterSchema;
