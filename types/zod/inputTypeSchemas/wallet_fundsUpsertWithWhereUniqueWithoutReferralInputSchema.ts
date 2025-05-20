import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsUpdateWithoutReferralInputSchema } from './wallet_fundsUpdateWithoutReferralInputSchema';
import { wallet_fundsUncheckedUpdateWithoutReferralInputSchema } from './wallet_fundsUncheckedUpdateWithoutReferralInputSchema';
import { wallet_fundsCreateWithoutReferralInputSchema } from './wallet_fundsCreateWithoutReferralInputSchema';
import { wallet_fundsUncheckedCreateWithoutReferralInputSchema } from './wallet_fundsUncheckedCreateWithoutReferralInputSchema';

export const wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema: z.ZodType<Prisma.wallet_fundsUpsertWithWhereUniqueWithoutReferralInput> = z.object({
  where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => wallet_fundsUpdateWithoutReferralInputSchema),z.lazy(() => wallet_fundsUncheckedUpdateWithoutReferralInputSchema) ]),
  create: z.union([ z.lazy(() => wallet_fundsCreateWithoutReferralInputSchema),z.lazy(() => wallet_fundsUncheckedCreateWithoutReferralInputSchema) ]),
}).strict();

export default wallet_fundsUpsertWithWhereUniqueWithoutReferralInputSchema;
