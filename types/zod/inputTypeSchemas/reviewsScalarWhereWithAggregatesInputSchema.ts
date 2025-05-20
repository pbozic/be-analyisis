import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const reviewsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.reviewsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => reviewsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => reviewsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => reviewsScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => reviewsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => reviewsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		review_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		reviewable_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		author_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		rating: z
			.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
			.optional()
			.nullable(),
		comment: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		feedback: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default reviewsScalarWhereWithAggregatesInputSchema;
