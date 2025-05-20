import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithoutUsersInputSchema } from './user_addressUpdateWithoutUsersInputSchema';
import { user_addressUncheckedUpdateWithoutUsersInputSchema } from './user_addressUncheckedUpdateWithoutUsersInputSchema';
import { user_addressCreateWithoutUsersInputSchema } from './user_addressCreateWithoutUsersInputSchema';
import { user_addressUncheckedCreateWithoutUsersInputSchema } from './user_addressUncheckedCreateWithoutUsersInputSchema';

export const user_addressUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.user_addressUpsertWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => user_addressWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => user_addressUpdateWithoutUsersInputSchema),
				z.lazy(() => user_addressUncheckedUpdateWithoutUsersInputSchema),
			]),
			create: z.union([
				z.lazy(() => user_addressCreateWithoutUsersInputSchema),
				z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default user_addressUpsertWithWhereUniqueWithoutUsersInputSchema;
