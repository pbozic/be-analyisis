import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutUser_rolesInputSchema } from './usersCreateWithoutUser_rolesInputSchema';
import { usersUncheckedCreateWithoutUser_rolesInputSchema } from './usersUncheckedCreateWithoutUser_rolesInputSchema';

export const usersCreateOrConnectWithoutUser_rolesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutUser_rolesInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutUser_rolesInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutUser_rolesInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutUser_rolesInputSchema;
