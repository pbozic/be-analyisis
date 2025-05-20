import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutUser_rolesInputSchema } from './usersUpdateWithoutUser_rolesInputSchema';
import { usersUncheckedUpdateWithoutUser_rolesInputSchema } from './usersUncheckedUpdateWithoutUser_rolesInputSchema';

export const usersUpdateToOneWithWhereWithoutUser_rolesInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutUser_rolesInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutUser_rolesInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutUser_rolesInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutUser_rolesInputSchema;
