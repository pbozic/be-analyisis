import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutParent_userInputSchema } from './usersCreateWithoutParent_userInputSchema';
import { usersUncheckedCreateWithoutParent_userInputSchema } from './usersUncheckedCreateWithoutParent_userInputSchema';
import { usersCreateOrConnectWithoutParent_userInputSchema } from './usersCreateOrConnectWithoutParent_userInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutParent_userInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutParent_userInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutParent_userInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutParent_userInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutParent_userInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutParent_userInputSchema;
