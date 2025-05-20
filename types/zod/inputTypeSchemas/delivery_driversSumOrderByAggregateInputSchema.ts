import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_driversSumOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_driversSumOrderByAggregateInput> = z.object({
  partner_cash_balance: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_driversSumOrderByAggregateInputSchema;
