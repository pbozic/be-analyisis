import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereInputSchema } from './driver_history_locationsWhereInputSchema';

export const Driver_history_locationsListRelationFilterSchema: z.ZodType<Prisma.Driver_history_locationsListRelationFilter> = z.object({
  every: z.lazy(() => driver_history_locationsWhereInputSchema).optional(),
  some: z.lazy(() => driver_history_locationsWhereInputSchema).optional(),
  none: z.lazy(() => driver_history_locationsWhereInputSchema).optional()
}).strict();

export default Driver_history_locationsListRelationFilterSchema;
