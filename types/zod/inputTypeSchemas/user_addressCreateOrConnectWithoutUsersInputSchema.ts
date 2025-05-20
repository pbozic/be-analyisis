import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressCreateWithoutUsersInputSchema } from './user_addressCreateWithoutUsersInputSchema';
import { user_addressUncheckedCreateWithoutUsersInputSchema } from './user_addressUncheckedCreateWithoutUsersInputSchema';

export const user_addressCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.user_addressCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => user_addressWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => user_addressCreateWithoutUsersInputSchema),
				z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default user_addressCreateOrConnectWithoutUsersInputSchema;
