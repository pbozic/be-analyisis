import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { reviewableUpdateWithoutUserInputSchema } from './reviewableUpdateWithoutUserInputSchema';
import { reviewableUncheckedUpdateWithoutUserInputSchema } from './reviewableUncheckedUpdateWithoutUserInputSchema';

export const reviewableUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.reviewableUpdateToOneWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => reviewableWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => reviewableUpdateWithoutUserInputSchema),
				z.lazy(() => reviewableUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default reviewableUpdateToOneWithWhereWithoutUserInputSchema;
