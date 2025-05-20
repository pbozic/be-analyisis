import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutReferrals_madeInputSchema } from './usersCreateNestedOneWithoutReferrals_madeInputSchema';
import { usersCreateNestedOneWithoutReferralInputSchema } from './usersCreateNestedOneWithoutReferralInputSchema';
import { wallet_fundsCreateNestedManyWithoutReferralInputSchema } from './wallet_fundsCreateNestedManyWithoutReferralInputSchema';

export const referralsCreateInputSchema: z.ZodType<Prisma.referralsCreateInput> = z.object({
  referral_id: z.string().uuid().optional(),
  referral_code: z.string(),
  conditions_met: z.boolean().optional(),
  reward_claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  referrer: z.lazy(() => usersCreateNestedOneWithoutReferrals_madeInputSchema),
  referred: z.lazy(() => usersCreateNestedOneWithoutReferralInputSchema),
  credits: z.lazy(() => wallet_fundsCreateNestedManyWithoutReferralInputSchema).optional()
}).strict();

export default referralsCreateInputSchema;
