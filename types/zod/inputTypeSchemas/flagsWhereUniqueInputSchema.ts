import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsWhereInputSchema } from './flagsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Flag_historyListRelationFilterSchema } from './Flag_historyListRelationFilterSchema';

export const flagsWhereUniqueInputSchema: z.ZodType<Prisma.flagsWhereUniqueInput> = z.object({
  flag_id: z.string().uuid()
})
.and(z.object({
  flag_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => flagsWhereInputSchema),z.lazy(() => flagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => flagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => flagsWhereInputSchema),z.lazy(() => flagsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  history: z.lazy(() => Flag_historyListRelationFilterSchema).optional()
}).strict());

export default flagsWhereUniqueInputSchema;
