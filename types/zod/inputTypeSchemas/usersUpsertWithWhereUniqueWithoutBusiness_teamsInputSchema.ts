import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithoutBusiness_teamsInputSchema } from './usersUpdateWithoutBusiness_teamsInputSchema';
import { usersUncheckedUpdateWithoutBusiness_teamsInputSchema } from './usersUncheckedUpdateWithoutBusiness_teamsInputSchema';
import { usersCreateWithoutBusiness_teamsInputSchema } from './usersCreateWithoutBusiness_teamsInputSchema';
import { usersUncheckedCreateWithoutBusiness_teamsInputSchema } from './usersUncheckedCreateWithoutBusiness_teamsInputSchema';

export const usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutBusiness_teamsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => usersUpdateWithoutBusiness_teamsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutBusiness_teamsInputSchema),
			]),
			create: z.union([
				z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema),
			]),
		})
		.strict();

export default usersUpsertWithWhereUniqueWithoutBusiness_teamsInputSchema;
