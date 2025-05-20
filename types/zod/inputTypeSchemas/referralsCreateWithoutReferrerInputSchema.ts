import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutReferralInputSchema } from './usersCreateNestedOneWithoutReferralInputSchema';
import { wallet_fundsCreateNestedManyWithoutReferralInputSchema } from './wallet_fundsCreateNestedManyWithoutReferralInputSchema';

export const referralsCreateWithoutReferrerInputSchema: z.ZodType<Prisma.referralsCreateWithoutReferrerInput> = z
	.object({
		referral_id: z.string().uuid().optional(),
		referral_code: z.string(),
		conditions_met: z.boolean().optional(),
		reward_claimed: z.boolean().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		referred: z.lazy(() => usersCreateNestedOneWithoutReferralInputSchema),
		credits: z.lazy(() => wallet_fundsCreateNestedManyWithoutReferralInputSchema).optional(),
	})
	.strict();

export default referralsCreateWithoutReferrerInputSchema;
