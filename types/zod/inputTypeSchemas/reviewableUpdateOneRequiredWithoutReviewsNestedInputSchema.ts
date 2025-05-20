import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutReviewsInputSchema } from './reviewableCreateWithoutReviewsInputSchema';
import { reviewableUncheckedCreateWithoutReviewsInputSchema } from './reviewableUncheckedCreateWithoutReviewsInputSchema';
import { reviewableCreateOrConnectWithoutReviewsInputSchema } from './reviewableCreateOrConnectWithoutReviewsInputSchema';
import { reviewableUpsertWithoutReviewsInputSchema } from './reviewableUpsertWithoutReviewsInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableUpdateToOneWithWhereWithoutReviewsInputSchema } from './reviewableUpdateToOneWithWhereWithoutReviewsInputSchema';
import { reviewableUpdateWithoutReviewsInputSchema } from './reviewableUpdateWithoutReviewsInputSchema';
import { reviewableUncheckedUpdateWithoutReviewsInputSchema } from './reviewableUncheckedUpdateWithoutReviewsInputSchema';

export const reviewableUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.reviewableUpdateOneRequiredWithoutReviewsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reviewableCreateWithoutReviewsInputSchema),
					z.lazy(() => reviewableUncheckedCreateWithoutReviewsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutReviewsInputSchema).optional(),
			upsert: z.lazy(() => reviewableUpsertWithoutReviewsInputSchema).optional(),
			connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => reviewableUpdateToOneWithWhereWithoutReviewsInputSchema),
					z.lazy(() => reviewableUpdateWithoutReviewsInputSchema),
					z.lazy(() => reviewableUncheckedUpdateWithoutReviewsInputSchema),
				])
				.optional(),
		})
		.strict();

export default reviewableUpdateOneRequiredWithoutReviewsNestedInputSchema;
