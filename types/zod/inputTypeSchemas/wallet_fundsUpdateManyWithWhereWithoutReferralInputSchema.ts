import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsScalarWhereInputSchema } from './wallet_fundsScalarWhereInputSchema';
import { wallet_fundsUpdateManyMutationInputSchema } from './wallet_fundsUpdateManyMutationInputSchema';
import { wallet_fundsUncheckedUpdateManyWithoutReferralInputSchema } from './wallet_fundsUncheckedUpdateManyWithoutReferralInputSchema';

export const wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema: z.ZodType<Prisma.wallet_fundsUpdateManyWithWhereWithoutReferralInput> =
	z
		.object({
			where: z.lazy(() => wallet_fundsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => wallet_fundsUpdateManyMutationInputSchema),
				z.lazy(() => wallet_fundsUncheckedUpdateManyWithoutReferralInputSchema),
			]),
		})
		.strict();

export default wallet_fundsUpdateManyWithWhereWithoutReferralInputSchema;
