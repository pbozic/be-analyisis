import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithoutReferralInputSchema } from './wallet_fundsUpdateWithoutReferralInputSchema';
import { wallet_fundsUncheckedUpdateWithoutReferralInputSchema } from './wallet_fundsUncheckedUpdateWithoutReferralInputSchema';

export const wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema: z.ZodType<Prisma.wallet_fundsUpdateWithWhereUniqueWithoutReferralInput> = z.object({
  where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => wallet_fundsUpdateWithoutReferralInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateWithoutReferralInputSchema) ]),
}).strict();

export default wallet_fundsUpdateWithWhereUniqueWithoutReferralInputSchema;
