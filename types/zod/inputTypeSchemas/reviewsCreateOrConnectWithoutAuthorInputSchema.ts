import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsCreateWithoutAuthorInputSchema } from './reviewsCreateWithoutAuthorInputSchema';
import { reviewsUncheckedCreateWithoutAuthorInputSchema } from './reviewsUncheckedCreateWithoutAuthorInputSchema';

export const reviewsCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsCreateOrConnectWithoutAuthorInput> =
	z
		.object({
			where: z.lazy(() => reviewsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => reviewsCreateWithoutAuthorInputSchema),
				z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema),
			]),
		})
		.strict();

export default reviewsCreateOrConnectWithoutAuthorInputSchema;
