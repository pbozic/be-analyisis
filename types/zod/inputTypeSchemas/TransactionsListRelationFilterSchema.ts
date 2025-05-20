import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';

export const TransactionsListRelationFilterSchema: z.ZodType<Prisma.TransactionsListRelationFilter> = z.object({
  every: z.lazy(() => transactionsWhereInputSchema).optional(),
  some: z.lazy(() => transactionsWhereInputSchema).optional(),
  none: z.lazy(() => transactionsWhereInputSchema).optional()
}).strict();

export default TransactionsListRelationFilterSchema;
