import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const referralsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.referralsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => referralsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => referralsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => referralsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => referralsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => referralsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			referral_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			referral_code: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			referrer_user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			referred_user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			conditions_met: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			reward_claimed: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default referralsScalarWhereWithAggregatesInputSchema;
