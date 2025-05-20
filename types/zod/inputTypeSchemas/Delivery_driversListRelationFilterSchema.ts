import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const Delivery_driversListRelationFilterSchema: z.ZodType<Prisma.Delivery_driversListRelationFilter> = z.object({
  every: z.lazy(() => delivery_driversWhereInputSchema).optional(),
  some: z.lazy(() => delivery_driversWhereInputSchema).optional(),
  none: z.lazy(() => delivery_driversWhereInputSchema).optional()
}).strict();

export default Delivery_driversListRelationFilterSchema;
