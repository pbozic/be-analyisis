import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereInputSchema } from './flag_historyWhereInputSchema';

export const Flag_historyListRelationFilterSchema: z.ZodType<Prisma.Flag_historyListRelationFilter> = z.object({
  every: z.lazy(() => flag_historyWhereInputSchema).optional(),
  some: z.lazy(() => flag_historyWhereInputSchema).optional(),
  none: z.lazy(() => flag_historyWhereInputSchema).optional()
}).strict();

export default Flag_historyListRelationFilterSchema;
