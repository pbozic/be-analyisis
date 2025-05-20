import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const referralsScalarWhereInputSchema: z.ZodType<Prisma.referralsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => referralsScalarWhereInputSchema),
				z.lazy(() => referralsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => referralsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => referralsScalarWhereInputSchema),
				z.lazy(() => referralsScalarWhereInputSchema).array(),
			])
			.optional(),
		referral_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		referral_code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		referrer_user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		referred_user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		conditions_met: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		reward_claimed: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default referralsScalarWhereInputSchema;
