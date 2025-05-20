import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutBusiness_usersInputSchema } from './usersUpdateWithoutBusiness_usersInputSchema';
import { usersUncheckedUpdateWithoutBusiness_usersInputSchema } from './usersUncheckedUpdateWithoutBusiness_usersInputSchema';

export const usersUpdateToOneWithWhereWithoutBusiness_usersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutBusiness_usersInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutBusiness_usersInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutBusiness_usersInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutBusiness_usersInputSchema;
