import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutUser_rolesInputSchema } from './usersUpdateWithoutUser_rolesInputSchema';
import { usersUncheckedUpdateWithoutUser_rolesInputSchema } from './usersUncheckedUpdateWithoutUser_rolesInputSchema';
import { usersCreateWithoutUser_rolesInputSchema } from './usersCreateWithoutUser_rolesInputSchema';
import { usersUncheckedCreateWithoutUser_rolesInputSchema } from './usersUncheckedCreateWithoutUser_rolesInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutUser_rolesInputSchema: z.ZodType<Prisma.usersUpsertWithoutUser_rolesInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutUser_rolesInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutUser_rolesInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutUser_rolesInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutUser_rolesInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutUser_rolesInputSchema;
