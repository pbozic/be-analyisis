import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const NestedEnumCREDIT_STATUSNullableFilterSchema: z.ZodType<Prisma.NestedEnumCREDIT_STATUSNullableFilter> = z.object({
  equals: z.lazy(() => CREDIT_STATUSSchema).optional().nullable(),
  in: z.lazy(() => CREDIT_STATUSSchema).array().optional().nullable(),
  notIn: z.lazy(() => CREDIT_STATUSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => CREDIT_STATUSSchema),z.lazy(() => NestedEnumCREDIT_STATUSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumCREDIT_STATUSNullableFilterSchema;
