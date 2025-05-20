import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesWhereUniqueInputSchema } from './user_rolesWhereUniqueInputSchema';
import { user_rolesUpdateWithoutUserInputSchema } from './user_rolesUpdateWithoutUserInputSchema';
import { user_rolesUncheckedUpdateWithoutUserInputSchema } from './user_rolesUncheckedUpdateWithoutUserInputSchema';
import { user_rolesCreateWithoutUserInputSchema } from './user_rolesCreateWithoutUserInputSchema';
import { user_rolesUncheckedCreateWithoutUserInputSchema } from './user_rolesUncheckedCreateWithoutUserInputSchema';

export const user_rolesUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => user_rolesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => user_rolesUpdateWithoutUserInputSchema),
				z.lazy(() => user_rolesUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => user_rolesCreateWithoutUserInputSchema),
				z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default user_rolesUpsertWithWhereUniqueWithoutUserInputSchema;
