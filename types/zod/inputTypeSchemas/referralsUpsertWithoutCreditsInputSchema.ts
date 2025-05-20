import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsUpdateWithoutCreditsInputSchema } from './referralsUpdateWithoutCreditsInputSchema';
import { referralsUncheckedUpdateWithoutCreditsInputSchema } from './referralsUncheckedUpdateWithoutCreditsInputSchema';
import { referralsCreateWithoutCreditsInputSchema } from './referralsCreateWithoutCreditsInputSchema';
import { referralsUncheckedCreateWithoutCreditsInputSchema } from './referralsUncheckedCreateWithoutCreditsInputSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';

export const referralsUpsertWithoutCreditsInputSchema: z.ZodType<Prisma.referralsUpsertWithoutCreditsInput> = z.object({
  update: z.union([ z.lazy(() => referralsUpdateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutCreditsInputSchema) ]),
  create: z.union([ z.lazy(() => referralsCreateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedCreateWithoutCreditsInputSchema) ]),
  where: z.lazy(() => referralsWhereInputSchema).optional()
}).strict();

export default referralsUpsertWithoutCreditsInputSchema;
