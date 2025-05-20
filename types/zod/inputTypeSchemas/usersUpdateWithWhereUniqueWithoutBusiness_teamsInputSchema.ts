import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithoutBusiness_teamsInputSchema } from './usersUpdateWithoutBusiness_teamsInputSchema';
import { usersUncheckedUpdateWithoutBusiness_teamsInputSchema } from './usersUncheckedUpdateWithoutBusiness_teamsInputSchema';

export const usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutBusiness_teamsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => usersUpdateWithoutBusiness_teamsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutBusiness_teamsInputSchema),
			]),
		})
		.strict();

export default usersUpdateWithWhereUniqueWithoutBusiness_teamsInputSchema;
