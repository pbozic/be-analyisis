import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsCreateWithoutReferralInputSchema } from './wallet_fundsCreateWithoutReferralInputSchema';
import { wallet_fundsUncheckedCreateWithoutReferralInputSchema } from './wallet_fundsUncheckedCreateWithoutReferralInputSchema';

export const wallet_fundsCreateOrConnectWithoutReferralInputSchema: z.ZodType<Prisma.wallet_fundsCreateOrConnectWithoutReferralInput> = z.object({
  where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => wallet_fundsCreateWithoutReferralInputSchema),z.lazy(() => wallet_fundsUncheckedCreateWithoutReferralInputSchema) ]),
}).strict();

export default wallet_fundsCreateOrConnectWithoutReferralInputSchema;
