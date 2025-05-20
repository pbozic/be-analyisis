import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsUpdateWithoutReferrerInputSchema } from './referralsUpdateWithoutReferrerInputSchema';
import { referralsUncheckedUpdateWithoutReferrerInputSchema } from './referralsUncheckedUpdateWithoutReferrerInputSchema';

export const referralsUpdateWithWhereUniqueWithoutReferrerInputSchema: z.ZodType<Prisma.referralsUpdateWithWhereUniqueWithoutReferrerInput> = z.object({
  where: z.lazy(() => referralsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => referralsUpdateWithoutReferrerInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutReferrerInputSchema) ]),
}).strict();

export default referralsUpdateWithWhereUniqueWithoutReferrerInputSchema;
