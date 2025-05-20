import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackWhereInputSchema } from './cashbackWhereInputSchema';

export const CashbackListRelationFilterSchema: z.ZodType<Prisma.CashbackListRelationFilter> = z.object({
  every: z.lazy(() => cashbackWhereInputSchema).optional(),
  some: z.lazy(() => cashbackWhereInputSchema).optional(),
  none: z.lazy(() => cashbackWhereInputSchema).optional()
}).strict();

export default CashbackListRelationFilterSchema;
