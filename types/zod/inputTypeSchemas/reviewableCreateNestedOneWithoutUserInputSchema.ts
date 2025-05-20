import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutUserInputSchema } from './reviewableCreateWithoutUserInputSchema';
import { reviewableUncheckedCreateWithoutUserInputSchema } from './reviewableUncheckedCreateWithoutUserInputSchema';
import { reviewableCreateOrConnectWithoutUserInputSchema } from './reviewableCreateOrConnectWithoutUserInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';

export const reviewableCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.reviewableCreateNestedOneWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reviewableCreateWithoutUserInputSchema),
					z.lazy(() => reviewableUncheckedCreateWithoutUserInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutUserInputSchema).optional(),
			connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional(),
		})
		.strict();

export default reviewableCreateNestedOneWithoutUserInputSchema;
