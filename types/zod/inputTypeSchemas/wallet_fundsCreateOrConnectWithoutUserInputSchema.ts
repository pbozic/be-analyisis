import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsCreateWithoutUserInputSchema } from './wallet_fundsCreateWithoutUserInputSchema';
import { wallet_fundsUncheckedCreateWithoutUserInputSchema } from './wallet_fundsUncheckedCreateWithoutUserInputSchema';

export const wallet_fundsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => wallet_fundsCreateWithoutUserInputSchema),
				z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default wallet_fundsCreateOrConnectWithoutUserInputSchema;
