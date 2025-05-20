import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';

export const driver_activity_logsOrderByWithRelationInputSchema: z.ZodType<Prisma.driver_activity_logsOrderByWithRelationInput> = z.object({
  driver_activity_log_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  activity_type: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  ended_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timeout_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lockout_until: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional()
}).strict();

export default driver_activity_logsOrderByWithRelationInputSchema;
