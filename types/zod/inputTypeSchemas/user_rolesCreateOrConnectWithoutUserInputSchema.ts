import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesWhereUniqueInputSchema } from './user_rolesWhereUniqueInputSchema';
import { user_rolesCreateWithoutUserInputSchema } from './user_rolesCreateWithoutUserInputSchema';
import { user_rolesUncheckedCreateWithoutUserInputSchema } from './user_rolesUncheckedCreateWithoutUserInputSchema';

export const user_rolesCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.user_rolesCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => user_rolesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => user_rolesCreateWithoutUserInputSchema),
				z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default user_rolesCreateOrConnectWithoutUserInputSchema;
