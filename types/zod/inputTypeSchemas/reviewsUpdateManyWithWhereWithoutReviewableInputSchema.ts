import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsScalarWhereInputSchema } from './reviewsScalarWhereInputSchema';
import { reviewsUpdateManyMutationInputSchema } from './reviewsUpdateManyMutationInputSchema';
import { reviewsUncheckedUpdateManyWithoutReviewableInputSchema } from './reviewsUncheckedUpdateManyWithoutReviewableInputSchema';

export const reviewsUpdateManyWithWhereWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsUpdateManyWithWhereWithoutReviewableInput> =
	z
		.object({
			where: z.lazy(() => reviewsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => reviewsUpdateManyMutationInputSchema),
				z.lazy(() => reviewsUncheckedUpdateManyWithoutReviewableInputSchema),
			]),
		})
		.strict();

export default reviewsUpdateManyWithWhereWithoutReviewableInputSchema;
