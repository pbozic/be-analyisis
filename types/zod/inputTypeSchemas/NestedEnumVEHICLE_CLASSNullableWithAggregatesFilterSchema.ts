import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumVEHICLE_CLASSNullableFilterSchema } from './NestedEnumVEHICLE_CLASSNullableFilterSchema';

export const NestedEnumVEHICLE_CLASSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CLASSNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CLASSSchema).optional().nullable(),
  in: z.lazy(() => VEHICLE_CLASSSchema).array().optional().nullable(),
  notIn: z.lazy(() => VEHICLE_CLASSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => VEHICLE_CLASSSchema),z.lazy(() => NestedEnumVEHICLE_CLASSNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVEHICLE_CLASSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVEHICLE_CLASSNullableFilterSchema).optional()
}).strict();

export default NestedEnumVEHICLE_CLASSNullableWithAggregatesFilterSchema;
