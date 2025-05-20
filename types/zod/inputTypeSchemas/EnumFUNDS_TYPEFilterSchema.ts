import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { NestedEnumFUNDS_TYPEFilterSchema } from './NestedEnumFUNDS_TYPEFilterSchema';

export const EnumFUNDS_TYPEFilterSchema: z.ZodType<Prisma.EnumFUNDS_TYPEFilter> = z.object({
  equals: z.lazy(() => FUNDS_TYPESchema).optional(),
  in: z.lazy(() => FUNDS_TYPESchema).array().optional(),
  notIn: z.lazy(() => FUNDS_TYPESchema).array().optional(),
  not: z.union([ z.lazy(() => FUNDS_TYPESchema),z.lazy(() => NestedEnumFUNDS_TYPEFilterSchema) ]).optional(),
}).strict();

export default EnumFUNDS_TYPEFilterSchema;
