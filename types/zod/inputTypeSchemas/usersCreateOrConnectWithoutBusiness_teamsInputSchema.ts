import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutBusiness_teamsInputSchema } from './usersCreateWithoutBusiness_teamsInputSchema';
import { usersUncheckedCreateWithoutBusiness_teamsInputSchema } from './usersUncheckedCreateWithoutBusiness_teamsInputSchema';

export const usersCreateOrConnectWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutBusiness_teamsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutBusiness_teamsInputSchema;
