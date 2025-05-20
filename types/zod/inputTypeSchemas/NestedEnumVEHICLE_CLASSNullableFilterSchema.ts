import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';

export const NestedEnumVEHICLE_CLASSNullableFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CLASSNullableFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CLASSSchema).optional().nullable(),
  in: z.lazy(() => VEHICLE_CLASSSchema).array().optional().nullable(),
  notIn: z.lazy(() => VEHICLE_CLASSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => VEHICLE_CLASSSchema),z.lazy(() => NestedEnumVEHICLE_CLASSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumVEHICLE_CLASSNullableFilterSchema;
