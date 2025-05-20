import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumVEHICLE_CLASSFilterSchema } from './EnumVEHICLE_CLASSFilterSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CATEGORYFilterSchema } from './EnumVEHICLE_CATEGORYFilterSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { VehiclesNullableRelationFilterSchema } from './VehiclesNullableRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehicle_specificationsWhereInputSchema: z.ZodType<Prisma.vehicle_specificationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => vehicle_specificationsWhereInputSchema),z.lazy(() => vehicle_specificationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => vehicle_specificationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => vehicle_specificationsWhereInputSchema),z.lazy(() => vehicle_specificationsWhereInputSchema).array() ]).optional(),
  vehicle_specification_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  class: z.union([ z.lazy(() => EnumVEHICLE_CLASSFilterSchema),z.lazy(() => VEHICLE_CLASSSchema) ]).optional(),
  category: z.union([ z.lazy(() => EnumVEHICLE_CATEGORYFilterSchema),z.lazy(() => VEHICLE_CATEGORYSchema) ]).optional(),
  people: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  start_cost: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  per_kilometre: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  per_minute: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  vehicle: z.union([ z.lazy(() => VehiclesNullableRelationFilterSchema),z.lazy(() => vehiclesWhereInputSchema) ]).optional().nullable(),
}).strict();

export default vehicle_specificationsWhereInputSchema;
