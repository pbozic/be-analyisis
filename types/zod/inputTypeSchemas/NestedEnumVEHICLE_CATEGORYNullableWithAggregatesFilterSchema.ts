import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumVEHICLE_CATEGORYNullableFilterSchema } from './NestedEnumVEHICLE_CATEGORYNullableFilterSchema';

export const NestedEnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CATEGORYNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CATEGORYSchema).optional().nullable(),
  in: z.lazy(() => VEHICLE_CATEGORYSchema).array().optional().nullable(),
  notIn: z.lazy(() => VEHICLE_CATEGORYSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => VEHICLE_CATEGORYSchema),z.lazy(() => NestedEnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVEHICLE_CATEGORYNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVEHICLE_CATEGORYNullableFilterSchema).optional()
}).strict();

export default NestedEnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema;
