import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const referralsCreateManyReferrerInputSchema: z.ZodType<Prisma.referralsCreateManyReferrerInput> = z.object({
  referral_id: z.string().uuid().optional(),
  referral_code: z.string(),
  referred_user_id: z.string(),
  conditions_met: z.boolean().optional(),
  reward_claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default referralsCreateManyReferrerInputSchema;
