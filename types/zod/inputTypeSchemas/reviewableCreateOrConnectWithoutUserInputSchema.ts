import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';
import { reviewableCreateWithoutUserInputSchema } from './reviewableCreateWithoutUserInputSchema';
import { reviewableUncheckedCreateWithoutUserInputSchema } from './reviewableUncheckedCreateWithoutUserInputSchema';

export const reviewableCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.reviewableCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => reviewableWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => reviewableCreateWithoutUserInputSchema),
				z.lazy(() => reviewableUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default reviewableCreateOrConnectWithoutUserInputSchema;
