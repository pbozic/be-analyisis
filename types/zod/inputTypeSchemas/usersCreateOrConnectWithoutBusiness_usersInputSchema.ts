import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutBusiness_usersInputSchema } from './usersCreateWithoutBusiness_usersInputSchema';
import { usersUncheckedCreateWithoutBusiness_usersInputSchema } from './usersUncheckedCreateWithoutBusiness_usersInputSchema';

export const usersCreateOrConnectWithoutBusiness_usersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutBusiness_usersInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutBusiness_usersInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutBusiness_usersInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutBusiness_usersInputSchema;
