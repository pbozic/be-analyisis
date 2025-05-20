import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutReviewsInputSchema } from './usersUpdateWithoutReviewsInputSchema';
import { usersUncheckedUpdateWithoutReviewsInputSchema } from './usersUncheckedUpdateWithoutReviewsInputSchema';

export const usersUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutReviewsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutReviewsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutReviewsInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutReviewsInputSchema;
