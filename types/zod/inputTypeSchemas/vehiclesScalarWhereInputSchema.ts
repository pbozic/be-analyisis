import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumVEHICLE_CLASSNullableFilterSchema } from './EnumVEHICLE_CLASSNullableFilterSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CATEGORYNullableFilterSchema } from './EnumVEHICLE_CATEGORYNullableFilterSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const vehiclesScalarWhereInputSchema: z.ZodType<Prisma.vehiclesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => vehiclesScalarWhereInputSchema),z.lazy(() => vehiclesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => vehiclesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => vehiclesScalarWhereInputSchema),z.lazy(() => vehiclesScalarWhereInputSchema).array() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  class: z.union([ z.lazy(() => EnumVEHICLE_CLASSNullableFilterSchema),z.lazy(() => VEHICLE_CLASSSchema) ]).optional().nullable(),
  category: z.union([ z.lazy(() => EnumVEHICLE_CATEGORYNullableFilterSchema),z.lazy(() => VEHICLE_CATEGORYSchema) ]).optional().nullable(),
  make: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  model: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  license_plate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  vehicle_specification_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default vehiclesScalarWhereInputSchema;
