import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const wallet_transfer_historyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.wallet_transfer_historyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => wallet_transfer_historyScalarWhereWithAggregatesInputSchema),z.lazy(() => wallet_transfer_historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => wallet_transfer_historyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => wallet_transfer_historyScalarWhereWithAggregatesInputSchema),z.lazy(() => wallet_transfer_historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  wallet_transfer_history_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  success: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default wallet_transfer_historyScalarWhereWithAggregatesInputSchema;
