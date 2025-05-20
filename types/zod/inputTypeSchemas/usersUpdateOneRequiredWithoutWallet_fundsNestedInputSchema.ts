import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutWallet_fundsInputSchema } from './usersCreateWithoutWallet_fundsInputSchema';
import { usersUncheckedCreateWithoutWallet_fundsInputSchema } from './usersUncheckedCreateWithoutWallet_fundsInputSchema';
import { usersCreateOrConnectWithoutWallet_fundsInputSchema } from './usersCreateOrConnectWithoutWallet_fundsInputSchema';
import { usersUpsertWithoutWallet_fundsInputSchema } from './usersUpsertWithoutWallet_fundsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutWallet_fundsInputSchema } from './usersUpdateToOneWithWhereWithoutWallet_fundsInputSchema';
import { usersUpdateWithoutWallet_fundsInputSchema } from './usersUpdateWithoutWallet_fundsInputSchema';
import { usersUncheckedUpdateWithoutWallet_fundsInputSchema } from './usersUncheckedUpdateWithoutWallet_fundsInputSchema';

export const usersUpdateOneRequiredWithoutWallet_fundsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutWallet_fundsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutWallet_fundsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutWallet_fundsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutWallet_fundsInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutWallet_fundsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutWallet_fundsInputSchema),
					z.lazy(() => usersUpdateWithoutWallet_fundsInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutWallet_fundsInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutWallet_fundsNestedInputSchema;
