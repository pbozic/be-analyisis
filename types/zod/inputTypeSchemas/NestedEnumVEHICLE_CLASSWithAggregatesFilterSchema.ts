import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumVEHICLE_CLASSFilterSchema } from './NestedEnumVEHICLE_CLASSFilterSchema';

export const NestedEnumVEHICLE_CLASSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CLASSWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CLASSSchema).optional(),
  in: z.lazy(() => VEHICLE_CLASSSchema).array().optional(),
  notIn: z.lazy(() => VEHICLE_CLASSSchema).array().optional(),
  not: z.union([ z.lazy(() => VEHICLE_CLASSSchema),z.lazy(() => NestedEnumVEHICLE_CLASSWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVEHICLE_CLASSFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVEHICLE_CLASSFilterSchema).optional()
}).strict();

export default NestedEnumVEHICLE_CLASSWithAggregatesFilterSchema;
