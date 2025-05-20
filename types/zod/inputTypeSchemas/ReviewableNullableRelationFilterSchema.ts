import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';

export const ReviewableNullableRelationFilterSchema: z.ZodType<Prisma.ReviewableNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => reviewableWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => reviewableWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default ReviewableNullableRelationFilterSchema;
