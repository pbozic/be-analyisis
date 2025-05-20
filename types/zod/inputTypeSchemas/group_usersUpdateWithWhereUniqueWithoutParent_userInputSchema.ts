import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersUpdateWithoutParent_userInputSchema } from './group_usersUpdateWithoutParent_userInputSchema';
import { group_usersUncheckedUpdateWithoutParent_userInputSchema } from './group_usersUncheckedUpdateWithoutParent_userInputSchema';

export const group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUpdateWithWhereUniqueWithoutParent_userInput> =
	z
		.object({
			where: z.lazy(() => group_usersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => group_usersUpdateWithoutParent_userInputSchema),
				z.lazy(() => group_usersUncheckedUpdateWithoutParent_userInputSchema),
			]),
		})
		.strict();

export default group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema;
