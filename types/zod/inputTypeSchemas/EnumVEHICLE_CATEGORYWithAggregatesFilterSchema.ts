import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { NestedEnumVEHICLE_CATEGORYWithAggregatesFilterSchema } from './NestedEnumVEHICLE_CATEGORYWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumVEHICLE_CATEGORYFilterSchema } from './NestedEnumVEHICLE_CATEGORYFilterSchema';

export const EnumVEHICLE_CATEGORYWithAggregatesFilterSchema: z.ZodType<Prisma.EnumVEHICLE_CATEGORYWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VEHICLE_CATEGORYSchema).optional(),
  in: z.lazy(() => VEHICLE_CATEGORYSchema).array().optional(),
  notIn: z.lazy(() => VEHICLE_CATEGORYSchema).array().optional(),
  not: z.union([ z.lazy(() => VEHICLE_CATEGORYSchema),z.lazy(() => NestedEnumVEHICLE_CATEGORYWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVEHICLE_CATEGORYFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVEHICLE_CATEGORYFilterSchema).optional()
}).strict();

export default EnumVEHICLE_CATEGORYWithAggregatesFilterSchema;
