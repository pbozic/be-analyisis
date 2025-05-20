import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersUpdateWithoutChild_userInputSchema } from './group_usersUpdateWithoutChild_userInputSchema';
import { group_usersUncheckedUpdateWithoutChild_userInputSchema } from './group_usersUncheckedUpdateWithoutChild_userInputSchema';
import { group_usersCreateWithoutChild_userInputSchema } from './group_usersCreateWithoutChild_userInputSchema';
import { group_usersUncheckedCreateWithoutChild_userInputSchema } from './group_usersUncheckedCreateWithoutChild_userInputSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';

export const group_usersUpsertWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersUpsertWithoutChild_userInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => group_usersUpdateWithoutChild_userInputSchema),
				z.lazy(() => group_usersUncheckedUpdateWithoutChild_userInputSchema),
			]),
			create: z.union([
				z.lazy(() => group_usersCreateWithoutChild_userInputSchema),
				z.lazy(() => group_usersUncheckedCreateWithoutChild_userInputSchema),
			]),
			where: z.lazy(() => group_usersWhereInputSchema).optional(),
		})
		.strict();

export default group_usersUpsertWithoutChild_userInputSchema;
