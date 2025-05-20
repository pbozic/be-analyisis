import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumVEHICLE_CLASSWithAggregatesFilterSchema } from './EnumVEHICLE_CLASSWithAggregatesFilterSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CATEGORYWithAggregatesFilterSchema } from './EnumVEHICLE_CATEGORYWithAggregatesFilterSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const vehicle_specificationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.vehicle_specificationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => vehicle_specificationsScalarWhereWithAggregatesInputSchema),z.lazy(() => vehicle_specificationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => vehicle_specificationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => vehicle_specificationsScalarWhereWithAggregatesInputSchema),z.lazy(() => vehicle_specificationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  vehicle_specification_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  class: z.union([ z.lazy(() => EnumVEHICLE_CLASSWithAggregatesFilterSchema),z.lazy(() => VEHICLE_CLASSSchema) ]).optional(),
  category: z.union([ z.lazy(() => EnumVEHICLE_CATEGORYWithAggregatesFilterSchema),z.lazy(() => VEHICLE_CATEGORYSchema) ]).optional(),
  people: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  start_cost: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  per_kilometre: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  per_minute: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default vehicle_specificationsScalarWhereWithAggregatesInputSchema;
