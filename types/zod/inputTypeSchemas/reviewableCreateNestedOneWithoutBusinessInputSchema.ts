import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableCreateWithoutBusinessInputSchema } from './reviewableCreateWithoutBusinessInputSchema';
import { reviewableUncheckedCreateWithoutBusinessInputSchema } from './reviewableUncheckedCreateWithoutBusinessInputSchema';
import { reviewableCreateOrConnectWithoutBusinessInputSchema } from './reviewableCreateOrConnectWithoutBusinessInputSchema';
import { reviewableWhereUniqueInputSchema } from './reviewableWhereUniqueInputSchema';

export const reviewableCreateNestedOneWithoutBusinessInputSchema: z.ZodType<Prisma.reviewableCreateNestedOneWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reviewableCreateWithoutBusinessInputSchema),
					z.lazy(() => reviewableUncheckedCreateWithoutBusinessInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => reviewableCreateOrConnectWithoutBusinessInputSchema).optional(),
			connect: z.lazy(() => reviewableWhereUniqueInputSchema).optional(),
		})
		.strict();

export default reviewableCreateNestedOneWithoutBusinessInputSchema;
