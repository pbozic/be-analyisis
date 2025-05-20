import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_fundsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_fundsMaxOrderByAggregateInput> = z.object({
  wallet_funds_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  referral_id: z.lazy(() => SortOrderSchema).optional(),
  charge_id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  reserved_order: z.lazy(() => SortOrderSchema).optional(),
  reserved_daily_meals_subscription: z.lazy(() => SortOrderSchema).optional(),
  reserved_business: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wallet_fundsMaxOrderByAggregateInputSchema;
