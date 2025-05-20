import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RESERVATION_STATUSSchema } from './RESERVATION_STATUSSchema';
import { NestedEnumRESERVATION_STATUSFilterSchema } from './NestedEnumRESERVATION_STATUSFilterSchema';

export const EnumRESERVATION_STATUSFilterSchema: z.ZodType<Prisma.EnumRESERVATION_STATUSFilter> = z.object({
  equals: z.lazy(() => RESERVATION_STATUSSchema).optional(),
  in: z.lazy(() => RESERVATION_STATUSSchema).array().optional(),
  notIn: z.lazy(() => RESERVATION_STATUSSchema).array().optional(),
  not: z.union([ z.lazy(() => RESERVATION_STATUSSchema),z.lazy(() => NestedEnumRESERVATION_STATUSFilterSchema) ]).optional(),
}).strict();

export default EnumRESERVATION_STATUSFilterSchema;
