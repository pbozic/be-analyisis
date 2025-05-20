import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutChild_userInputSchema } from './group_usersCreateWithoutChild_userInputSchema';
import { group_usersUncheckedCreateWithoutChild_userInputSchema } from './group_usersUncheckedCreateWithoutChild_userInputSchema';
import { group_usersCreateOrConnectWithoutChild_userInputSchema } from './group_usersCreateOrConnectWithoutChild_userInputSchema';
import { group_usersUpsertWithoutChild_userInputSchema } from './group_usersUpsertWithoutChild_userInputSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersUpdateToOneWithWhereWithoutChild_userInputSchema } from './group_usersUpdateToOneWithWhereWithoutChild_userInputSchema';
import { group_usersUpdateWithoutChild_userInputSchema } from './group_usersUpdateWithoutChild_userInputSchema';
import { group_usersUncheckedUpdateWithoutChild_userInputSchema } from './group_usersUncheckedUpdateWithoutChild_userInputSchema';

export const group_usersUncheckedUpdateOneWithoutChild_userNestedInputSchema: z.ZodType<Prisma.group_usersUncheckedUpdateOneWithoutChild_userNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => group_usersCreateWithoutChild_userInputSchema),
					z.lazy(() => group_usersUncheckedCreateWithoutChild_userInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => group_usersCreateOrConnectWithoutChild_userInputSchema).optional(),
			upsert: z.lazy(() => group_usersUpsertWithoutChild_userInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => group_usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => group_usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => group_usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => group_usersUpdateToOneWithWhereWithoutChild_userInputSchema),
					z.lazy(() => group_usersUpdateWithoutChild_userInputSchema),
					z.lazy(() => group_usersUncheckedUpdateWithoutChild_userInputSchema),
				])
				.optional(),
		})
		.strict();

export default group_usersUncheckedUpdateOneWithoutChild_userNestedInputSchema;
