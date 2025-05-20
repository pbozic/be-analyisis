import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutChild_usersInputSchema } from './usersCreateWithoutChild_usersInputSchema';
import { usersUncheckedCreateWithoutChild_usersInputSchema } from './usersUncheckedCreateWithoutChild_usersInputSchema';
import { usersCreateOrConnectWithoutChild_usersInputSchema } from './usersCreateOrConnectWithoutChild_usersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutChild_usersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutChild_usersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutChild_usersInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutChild_usersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutChild_usersInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutChild_usersInputSchema;
