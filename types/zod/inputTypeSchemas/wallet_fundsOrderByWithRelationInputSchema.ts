import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { referralsOrderByWithRelationInputSchema } from './referralsOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { transactionsOrderByRelationAggregateInputSchema } from './transactionsOrderByRelationAggregateInputSchema';

export const wallet_fundsOrderByWithRelationInputSchema: z.ZodType<Prisma.wallet_fundsOrderByWithRelationInput> = z.object({
  wallet_funds_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  referral_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  charge_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  reserved_order: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reserved_daily_meals_subscription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reserved_business: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  referral: z.lazy(() => referralsOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  transactions: z.lazy(() => transactionsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default wallet_fundsOrderByWithRelationInputSchema;
