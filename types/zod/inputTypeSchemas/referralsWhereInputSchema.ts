import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Wallet_fundsListRelationFilterSchema } from './Wallet_fundsListRelationFilterSchema';

export const referralsWhereInputSchema: z.ZodType<Prisma.referralsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => referralsWhereInputSchema), z.lazy(() => referralsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => referralsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => referralsWhereInputSchema), z.lazy(() => referralsWhereInputSchema).array()])
			.optional(),
		referral_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		referral_code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		referrer_user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		referred_user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		conditions_met: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		reward_claimed: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		referrer: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
		referred: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
		credits: z.lazy(() => Wallet_fundsListRelationFilterSchema).optional(),
	})
	.strict();

export default referralsWhereInputSchema;
