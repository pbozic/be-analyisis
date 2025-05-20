import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsUncheckedCreateNestedManyWithoutReferralInputSchema } from './wallet_fundsUncheckedCreateNestedManyWithoutReferralInputSchema';

export const referralsUncheckedCreateWithoutReferredInputSchema: z.ZodType<Prisma.referralsUncheckedCreateWithoutReferredInput> = z.object({
  referral_id: z.string().uuid().optional(),
  referral_code: z.string(),
  referrer_user_id: z.string(),
  conditions_met: z.boolean().optional(),
  reward_claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  credits: z.lazy(() => wallet_fundsUncheckedCreateNestedManyWithoutReferralInputSchema).optional()
}).strict();

export default referralsUncheckedCreateWithoutReferredInputSchema;
