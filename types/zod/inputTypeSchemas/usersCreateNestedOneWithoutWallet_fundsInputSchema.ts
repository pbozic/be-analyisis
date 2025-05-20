import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutWallet_fundsInputSchema } from './usersCreateWithoutWallet_fundsInputSchema';
import { usersUncheckedCreateWithoutWallet_fundsInputSchema } from './usersUncheckedCreateWithoutWallet_fundsInputSchema';
import { usersCreateOrConnectWithoutWallet_fundsInputSchema } from './usersCreateOrConnectWithoutWallet_fundsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutWallet_fundsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutWallet_fundsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutWallet_fundsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutWallet_fundsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutWallet_fundsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutWallet_fundsInputSchema;
