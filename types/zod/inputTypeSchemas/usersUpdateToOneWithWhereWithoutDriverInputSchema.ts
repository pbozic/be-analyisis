import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutDriverInputSchema } from './usersUpdateWithoutDriverInputSchema';
import { usersUncheckedUpdateWithoutDriverInputSchema } from './usersUncheckedUpdateWithoutDriverInputSchema';

export const usersUpdateToOneWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutDriverInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutDriverInputSchema;
