import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { wallet_fundsFindManyArgsSchema } from '../outputTypeSchemas/wallet_fundsFindManyArgsSchema';
import { ReferralsCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReferralsCountOutputTypeArgsSchema';

export const referralsSelectSchema: z.ZodType<Prisma.referralsSelect> = z
	.object({
		referral_id: z.boolean().optional(),
		referral_code: z.boolean().optional(),
		referrer_user_id: z.boolean().optional(),
		referred_user_id: z.boolean().optional(),
		conditions_met: z.boolean().optional(),
		reward_claimed: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		referrer: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		referred: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		credits: z.union([z.boolean(), z.lazy(() => wallet_fundsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ReferralsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default referralsSelectSchema;
