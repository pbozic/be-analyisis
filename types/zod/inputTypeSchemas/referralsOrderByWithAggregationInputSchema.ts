import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { referralsCountOrderByAggregateInputSchema } from './referralsCountOrderByAggregateInputSchema';
import { referralsMaxOrderByAggregateInputSchema } from './referralsMaxOrderByAggregateInputSchema';
import { referralsMinOrderByAggregateInputSchema } from './referralsMinOrderByAggregateInputSchema';

export const referralsOrderByWithAggregationInputSchema: z.ZodType<Prisma.referralsOrderByWithAggregationInput> = z
	.object({
		referral_id: z.lazy(() => SortOrderSchema).optional(),
		referral_code: z.lazy(() => SortOrderSchema).optional(),
		referrer_user_id: z.lazy(() => SortOrderSchema).optional(),
		referred_user_id: z.lazy(() => SortOrderSchema).optional(),
		conditions_met: z.lazy(() => SortOrderSchema).optional(),
		reward_claimed: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => referralsCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => referralsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => referralsMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default referralsOrderByWithAggregationInputSchema;
