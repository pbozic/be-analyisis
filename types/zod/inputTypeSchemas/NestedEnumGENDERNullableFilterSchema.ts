import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';

export const NestedEnumGENDERNullableFilterSchema: z.ZodType<Prisma.NestedEnumGENDERNullableFilter> = z.object({
  equals: z.lazy(() => GENDERSchema).optional().nullable(),
  in: z.lazy(() => GENDERSchema).array().optional().nullable(),
  notIn: z.lazy(() => GENDERSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => GENDERSchema),z.lazy(() => NestedEnumGENDERNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumGENDERNullableFilterSchema;
