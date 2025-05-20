import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersUpdateWithoutParent_userInputSchema } from './group_usersUpdateWithoutParent_userInputSchema';
import { group_usersUncheckedUpdateWithoutParent_userInputSchema } from './group_usersUncheckedUpdateWithoutParent_userInputSchema';
import { group_usersCreateWithoutParent_userInputSchema } from './group_usersCreateWithoutParent_userInputSchema';
import { group_usersUncheckedCreateWithoutParent_userInputSchema } from './group_usersUncheckedCreateWithoutParent_userInputSchema';

export const group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUpsertWithWhereUniqueWithoutParent_userInput> =
	z
		.object({
			where: z.lazy(() => group_usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => group_usersUpdateWithoutParent_userInputSchema),
				z.lazy(() => group_usersUncheckedUpdateWithoutParent_userInputSchema),
			]),
			create: z.union([
				z.lazy(() => group_usersCreateWithoutParent_userInputSchema),
				z.lazy(() => group_usersUncheckedCreateWithoutParent_userInputSchema),
			]),
		})
		.strict();

export default group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema;
