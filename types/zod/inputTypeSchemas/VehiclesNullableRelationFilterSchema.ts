import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const VehiclesNullableRelationFilterSchema: z.ZodType<Prisma.VehiclesNullableRelationFilter> = z.object({
  is: z.lazy(() => vehiclesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => vehiclesWhereInputSchema).optional().nullable()
}).strict();

export default VehiclesNullableRelationFilterSchema;
