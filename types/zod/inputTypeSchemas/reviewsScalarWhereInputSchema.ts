import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const reviewsScalarWhereInputSchema: z.ZodType<Prisma.reviewsScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => reviewsScalarWhereInputSchema), z.lazy(() => reviewsScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => reviewsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => reviewsScalarWhereInputSchema), z.lazy(() => reviewsScalarWhereInputSchema).array()])
			.optional(),
		review_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		reviewable_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		author_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		rating: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		comment: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		feedback: z.lazy(() => JsonNullableFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default reviewsScalarWhereInputSchema;
