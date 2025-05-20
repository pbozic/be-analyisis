import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { wallet_fundsOrderByRelationAggregateInputSchema } from './wallet_fundsOrderByRelationAggregateInputSchema';

export const referralsOrderByWithRelationInputSchema: z.ZodType<Prisma.referralsOrderByWithRelationInput> = z
	.object({
		referral_id: z.lazy(() => SortOrderSchema).optional(),
		referral_code: z.lazy(() => SortOrderSchema).optional(),
		referrer_user_id: z.lazy(() => SortOrderSchema).optional(),
		referred_user_id: z.lazy(() => SortOrderSchema).optional(),
		conditions_met: z.lazy(() => SortOrderSchema).optional(),
		reward_claimed: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		referrer: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		referred: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		credits: z.lazy(() => wallet_fundsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default referralsOrderByWithRelationInputSchema;
