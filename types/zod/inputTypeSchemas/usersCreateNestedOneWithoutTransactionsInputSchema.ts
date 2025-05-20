import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutTransactionsInputSchema } from './usersCreateWithoutTransactionsInputSchema';
import { usersUncheckedCreateWithoutTransactionsInputSchema } from './usersUncheckedCreateWithoutTransactionsInputSchema';
import { usersCreateOrConnectWithoutTransactionsInputSchema } from './usersCreateOrConnectWithoutTransactionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutTransactionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutTransactionsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutTransactionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutTransactionsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutTransactionsInputSchema;
