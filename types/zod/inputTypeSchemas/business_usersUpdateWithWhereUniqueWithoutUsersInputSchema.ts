import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithoutUsersInputSchema } from './business_usersUpdateWithoutUsersInputSchema';
import { business_usersUncheckedUpdateWithoutUsersInputSchema } from './business_usersUncheckedUpdateWithoutUsersInputSchema';

export const business_usersUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.business_usersUpdateWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => business_usersUpdateWithoutUsersInputSchema),
				z.lazy(() => business_usersUncheckedUpdateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default business_usersUpdateWithWhereUniqueWithoutUsersInputSchema;
