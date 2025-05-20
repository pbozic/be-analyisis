import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const flag_historyScalarWhereInputSchema: z.ZodType<Prisma.flag_historyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => flag_historyScalarWhereInputSchema),z.lazy(() => flag_historyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => flag_historyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => flag_historyScalarWhereInputSchema),z.lazy(() => flag_historyScalarWhereInputSchema).array() ]).optional(),
  flag_history_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  flag_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default flag_historyScalarWhereInputSchema;
