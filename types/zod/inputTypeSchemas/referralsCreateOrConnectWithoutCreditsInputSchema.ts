import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsCreateWithoutCreditsInputSchema } from './referralsCreateWithoutCreditsInputSchema';
import { referralsUncheckedCreateWithoutCreditsInputSchema } from './referralsUncheckedCreateWithoutCreditsInputSchema';

export const referralsCreateOrConnectWithoutCreditsInputSchema: z.ZodType<Prisma.referralsCreateOrConnectWithoutCreditsInput> = z.object({
  where: z.lazy(() => referralsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => referralsCreateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedCreateWithoutCreditsInputSchema) ]),
}).strict();

export default referralsCreateOrConnectWithoutCreditsInputSchema;
