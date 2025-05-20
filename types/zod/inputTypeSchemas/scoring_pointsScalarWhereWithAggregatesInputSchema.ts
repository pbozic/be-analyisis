import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumSCORING_POINTS_REASONWithAggregatesFilterSchema } from './EnumSCORING_POINTS_REASONWithAggregatesFilterSchema';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const scoring_pointsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.scoring_pointsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => scoring_pointsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => scoring_pointsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => scoring_pointsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => scoring_pointsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => scoring_pointsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			scoring_points_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			delivery_order_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			taxi_order_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			points: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			isPenalty: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			reason: z
				.union([
					z.lazy(() => EnumSCORING_POINTS_REASONWithAggregatesFilterSchema),
					z.lazy(() => SCORING_POINTS_REASONSchema),
				])
				.optional(),
			expiration_date: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default scoring_pointsScalarWhereWithAggregatesInputSchema;
