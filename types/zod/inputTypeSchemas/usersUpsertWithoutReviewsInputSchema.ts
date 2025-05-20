import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutReviewsInputSchema } from './usersUpdateWithoutReviewsInputSchema';
import { usersUncheckedUpdateWithoutReviewsInputSchema } from './usersUncheckedUpdateWithoutReviewsInputSchema';
import { usersCreateWithoutReviewsInputSchema } from './usersCreateWithoutReviewsInputSchema';
import { usersUncheckedCreateWithoutReviewsInputSchema } from './usersUncheckedCreateWithoutReviewsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.usersUpsertWithoutReviewsInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutReviewsInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutReviewsInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutReviewsInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutReviewsInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutReviewsInputSchema;
