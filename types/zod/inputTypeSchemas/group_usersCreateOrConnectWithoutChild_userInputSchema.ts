import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersCreateWithoutChild_userInputSchema } from './group_usersCreateWithoutChild_userInputSchema';
import { group_usersUncheckedCreateWithoutChild_userInputSchema } from './group_usersUncheckedCreateWithoutChild_userInputSchema';

export const group_usersCreateOrConnectWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersCreateOrConnectWithoutChild_userInput> =
	z
		.object({
			where: z.lazy(() => group_usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => group_usersCreateWithoutChild_userInputSchema),
				z.lazy(() => group_usersUncheckedCreateWithoutChild_userInputSchema),
			]),
		})
		.strict();

export default group_usersCreateOrConnectWithoutChild_userInputSchema;
