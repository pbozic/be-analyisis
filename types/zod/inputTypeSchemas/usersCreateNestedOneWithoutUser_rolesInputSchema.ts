import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUser_rolesInputSchema } from './usersCreateWithoutUser_rolesInputSchema';
import { usersUncheckedCreateWithoutUser_rolesInputSchema } from './usersUncheckedCreateWithoutUser_rolesInputSchema';
import { usersCreateOrConnectWithoutUser_rolesInputSchema } from './usersCreateOrConnectWithoutUser_rolesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutUser_rolesInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutUser_rolesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutUser_rolesInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutUser_rolesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUser_rolesInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutUser_rolesInputSchema;
