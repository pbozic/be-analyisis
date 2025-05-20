import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';
import { business_teamsUpdateWithoutUsersInputSchema } from './business_teamsUpdateWithoutUsersInputSchema';
import { business_teamsUncheckedUpdateWithoutUsersInputSchema } from './business_teamsUncheckedUpdateWithoutUsersInputSchema';

export const business_teamsUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsUpdateToOneWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => business_teamsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => business_teamsUpdateWithoutUsersInputSchema),
				z.lazy(() => business_teamsUncheckedUpdateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default business_teamsUpdateToOneWithWhereWithoutUsersInputSchema;
