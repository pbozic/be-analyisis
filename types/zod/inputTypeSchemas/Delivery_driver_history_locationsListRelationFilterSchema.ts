import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereInputSchema } from './delivery_driver_history_locationsWhereInputSchema';

export const Delivery_driver_history_locationsListRelationFilterSchema: z.ZodType<Prisma.Delivery_driver_history_locationsListRelationFilter> = z.object({
  every: z.lazy(() => delivery_driver_history_locationsWhereInputSchema).optional(),
  some: z.lazy(() => delivery_driver_history_locationsWhereInputSchema).optional(),
  none: z.lazy(() => delivery_driver_history_locationsWhereInputSchema).optional()
}).strict();

export default Delivery_driver_history_locationsListRelationFilterSchema;
