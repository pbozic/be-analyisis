import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersCreateWithoutUsersInputSchema } from './business_usersCreateWithoutUsersInputSchema';
import { business_usersUncheckedCreateWithoutUsersInputSchema } from './business_usersUncheckedCreateWithoutUsersInputSchema';

export const business_usersCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.business_usersCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutUsersInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default business_usersCreateOrConnectWithoutUsersInputSchema;
