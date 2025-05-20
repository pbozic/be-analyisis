import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';
import { reviewableUpdateWithoutBusinessInputSchema } from './reviewableUpdateWithoutBusinessInputSchema';
import { reviewableUncheckedUpdateWithoutBusinessInputSchema } from './reviewableUncheckedUpdateWithoutBusinessInputSchema';

export const reviewableUpdateToOneWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableUpdateToOneWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => reviewableWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => reviewableUpdateWithoutBusinessInputSchema),
				z.lazy(() => reviewableUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default reviewableUpdateToOneWithWhereWithoutBusinessInputSchema;
