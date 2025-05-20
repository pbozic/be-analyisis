import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithoutUserInputSchema } from './wallet_fundsUpdateWithoutUserInputSchema';
import { wallet_fundsUncheckedUpdateWithoutUserInputSchema } from './wallet_fundsUncheckedUpdateWithoutUserInputSchema';

export const wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => wallet_fundsUpdateWithoutUserInputSchema),
				z.lazy(() => wallet_fundsUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default wallet_fundsUpdateWithWhereUniqueWithoutUserInputSchema;
