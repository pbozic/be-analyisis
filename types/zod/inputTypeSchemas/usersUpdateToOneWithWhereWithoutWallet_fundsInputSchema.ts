import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutWallet_fundsInputSchema } from './usersUpdateWithoutWallet_fundsInputSchema';
import { usersUncheckedUpdateWithoutWallet_fundsInputSchema } from './usersUncheckedUpdateWithoutWallet_fundsInputSchema';

export const usersUpdateToOneWithWhereWithoutWallet_fundsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutWallet_fundsInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutWallet_fundsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutWallet_fundsInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutWallet_fundsInputSchema;
