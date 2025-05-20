import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutUsersInputSchema } from './business_usersUpdateWithoutUsersInputSchema';
import { business_usersUncheckedUpdateWithoutUsersInputSchema } from './business_usersUncheckedUpdateWithoutUsersInputSchema';
import { business_usersCreateWithoutUsersInputSchema } from './business_usersCreateWithoutUsersInputSchema';
import { business_usersUncheckedCreateWithoutUsersInputSchema } from './business_usersUncheckedCreateWithoutUsersInputSchema';

export const business_usersUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.business_usersUpsertWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => business_usersUpdateWithoutUsersInputSchema),
				z.lazy(() => business_usersUncheckedUpdateWithoutUsersInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutUsersInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default business_usersUpsertWithWhereUniqueWithoutUsersInputSchema;
