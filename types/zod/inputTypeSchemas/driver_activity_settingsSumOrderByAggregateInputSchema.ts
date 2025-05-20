import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_activity_settingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.driver_activity_settingsSumOrderByAggregateInput> = z.object({
  first_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
  second_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
  online_timeout: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default driver_activity_settingsSumOrderByAggregateInputSchema;
