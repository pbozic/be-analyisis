import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_activity_logsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.driver_activity_logsMaxOrderByAggregateInput> = z.object({
  driver_activity_log_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  ended_at: z.lazy(() => SortOrderSchema).optional(),
  timeout_at: z.lazy(() => SortOrderSchema).optional(),
  lockout_until: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default driver_activity_logsMaxOrderByAggregateInputSchema;
