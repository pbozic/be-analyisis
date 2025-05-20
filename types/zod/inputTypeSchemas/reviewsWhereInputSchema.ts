import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ReviewableRelationFilterSchema } from './ReviewableRelationFilterSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const reviewsWhereInputSchema: z.ZodType<Prisma.reviewsWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => reviewsWhereInputSchema), z.lazy(() => reviewsWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => reviewsWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => reviewsWhereInputSchema), z.lazy(() => reviewsWhereInputSchema).array()]).optional(),
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
		reviewable: z
			.union([z.lazy(() => ReviewableRelationFilterSchema), z.lazy(() => reviewableWhereInputSchema)])
			.optional(),
		author: z.union([z.lazy(() => UsersRelationFilterSchema), z.lazy(() => usersWhereInputSchema)]).optional(),
	})
	.strict();

export default reviewsWhereInputSchema;
