import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutChild_usersInputSchema } from './usersCreateWithoutChild_usersInputSchema';
import { usersUncheckedCreateWithoutChild_usersInputSchema } from './usersUncheckedCreateWithoutChild_usersInputSchema';

export const usersCreateOrConnectWithoutChild_usersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutChild_usersInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutChild_usersInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutChild_usersInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutChild_usersInputSchema;
