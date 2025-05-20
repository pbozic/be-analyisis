import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const payment_intent_logsWhereInputSchema: z.ZodType<Prisma.payment_intent_logsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => payment_intent_logsWhereInputSchema),z.lazy(() => payment_intent_logsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => payment_intent_logsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => payment_intent_logsWhereInputSchema),z.lazy(() => payment_intent_logsWhereInputSchema).array() ]).optional(),
  payment_intent_logs_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stripe_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default payment_intent_logsWhereInputSchema;
