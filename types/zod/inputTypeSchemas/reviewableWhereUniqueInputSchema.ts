import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { ReviewsListRelationFilterSchema } from './ReviewsListRelationFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';

export const reviewableWhereUniqueInputSchema: z.ZodType<Prisma.reviewableWhereUniqueInput> = z
	.object({
		reviewable_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				reviewable_id: z.string().uuid().optional(),
				AND: z
					.union([z.lazy(() => reviewableWhereInputSchema), z.lazy(() => reviewableWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => reviewableWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => reviewableWhereInputSchema), z.lazy(() => reviewableWhereInputSchema).array()])
					.optional(),
				reviews: z.lazy(() => ReviewsListRelationFilterSchema).optional(),
				user: z.lazy(() => UsersListRelationFilterSchema).optional(),
				business: z.lazy(() => BusinessListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default reviewableWhereUniqueInputSchema;
