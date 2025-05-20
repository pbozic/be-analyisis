import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const referralsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.referralsMaxOrderByAggregateInput> = z.object({
  referral_id: z.lazy(() => SortOrderSchema).optional(),
  referral_code: z.lazy(() => SortOrderSchema).optional(),
  referrer_user_id: z.lazy(() => SortOrderSchema).optional(),
  referred_user_id: z.lazy(() => SortOrderSchema).optional(),
  conditions_met: z.lazy(() => SortOrderSchema).optional(),
  reward_claimed: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default referralsMaxOrderByAggregateInputSchema;
