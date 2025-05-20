import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const flag_historyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.flag_historyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => flag_historyScalarWhereWithAggregatesInputSchema),z.lazy(() => flag_historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => flag_historyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => flag_historyScalarWhereWithAggregatesInputSchema),z.lazy(() => flag_historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  flag_history_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  flag_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default flag_historyScalarWhereWithAggregatesInputSchema;
