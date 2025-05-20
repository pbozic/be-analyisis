import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const Taxi_ordersListRelationFilterSchema: z.ZodType<Prisma.Taxi_ordersListRelationFilter> = z.object({
  every: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  some: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
  none: z.lazy(() => taxi_ordersWhereInputSchema).optional()
}).strict();

export default Taxi_ordersListRelationFilterSchema;
