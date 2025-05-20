import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { referralsUpdateWithoutCreditsInputSchema } from './referralsUpdateWithoutCreditsInputSchema';
import { referralsUncheckedUpdateWithoutCreditsInputSchema } from './referralsUncheckedUpdateWithoutCreditsInputSchema';

export const referralsUpdateToOneWithWhereWithoutCreditsInputSchema: z.ZodType<Prisma.referralsUpdateToOneWithWhereWithoutCreditsInput> = z.object({
  where: z.lazy(() => referralsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => referralsUpdateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutCreditsInputSchema) ]),
}).strict();

export default referralsUpdateToOneWithWhereWithoutCreditsInputSchema;
