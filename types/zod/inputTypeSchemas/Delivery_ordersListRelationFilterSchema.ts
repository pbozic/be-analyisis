import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const Delivery_ordersListRelationFilterSchema: z.ZodType<Prisma.Delivery_ordersListRelationFilter> = z.object({
  every: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  some: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  none: z.lazy(() => delivery_ordersWhereInputSchema).optional()
}).strict();

export default Delivery_ordersListRelationFilterSchema;
