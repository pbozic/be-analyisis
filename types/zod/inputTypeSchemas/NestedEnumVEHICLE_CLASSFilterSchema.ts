import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';

export const NestedEnumVEHICLE_CLASSFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CLASSFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CLASSSchema).optional(),
  in: z.lazy(() => VEHICLE_CLASSSchema).array().optional(),
  notIn: z.lazy(() => VEHICLE_CLASSSchema).array().optional(),
  not: z.union([ z.lazy(() => VEHICLE_CLASSSchema),z.lazy(() => NestedEnumVEHICLE_CLASSFilterSchema) ]).optional(),
}).strict();

export default NestedEnumVEHICLE_CLASSFilterSchema;
