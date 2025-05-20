import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const Delivery_driversNullableRelationFilterSchema: z.ZodType<Prisma.Delivery_driversNullableRelationFilter> = z.object({
  is: z.lazy(() => delivery_driversWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => delivery_driversWhereInputSchema).optional().nullable()
}).strict();

export default Delivery_driversNullableRelationFilterSchema;
