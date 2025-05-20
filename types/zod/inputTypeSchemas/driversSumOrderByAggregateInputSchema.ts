import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driversSumOrderByAggregateInputSchema: z.ZodType<Prisma.driversSumOrderByAggregateInput> = z.object({
  partner_cash_balance: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default driversSumOrderByAggregateInputSchema;
