import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutScoring_pointsInputSchema } from './usersCreateWithoutScoring_pointsInputSchema';
import { usersUncheckedCreateWithoutScoring_pointsInputSchema } from './usersUncheckedCreateWithoutScoring_pointsInputSchema';
import { usersCreateOrConnectWithoutScoring_pointsInputSchema } from './usersCreateOrConnectWithoutScoring_pointsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutScoring_pointsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutScoring_pointsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutScoring_pointsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutScoring_pointsInputSchema;
