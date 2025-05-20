import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithoutUserInputSchema } from './wallet_fundsUpdateWithoutUserInputSchema';
import { wallet_fundsUncheckedUpdateWithoutUserInputSchema } from './wallet_fundsUncheckedUpdateWithoutUserInputSchema';
import { wallet_fundsCreateWithoutUserInputSchema } from './wallet_fundsCreateWithoutUserInputSchema';
import { wallet_fundsUncheckedCreateWithoutUserInputSchema } from './wallet_fundsUncheckedCreateWithoutUserInputSchema';

export const wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => wallet_fundsUpdateWithoutUserInputSchema),
				z.lazy(() => wallet_fundsUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => wallet_fundsCreateWithoutUserInputSchema),
				z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default wallet_fundsUpsertWithWhereUniqueWithoutUserInputSchema;
