import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';

export const NestedEnumCOMPANY_ROLEFilterSchema: z.ZodType<Prisma.NestedEnumCOMPANY_ROLEFilter> = z.object({
  equals: z.lazy(() => COMPANY_ROLESchema).optional(),
  in: z.lazy(() => COMPANY_ROLESchema).array().optional(),
  notIn: z.lazy(() => COMPANY_ROLESchema).array().optional(),
  not: z.union([ z.lazy(() => COMPANY_ROLESchema),z.lazy(() => NestedEnumCOMPANY_ROLEFilterSchema) ]).optional(),
}).strict();

export default NestedEnumCOMPANY_ROLEFilterSchema;
