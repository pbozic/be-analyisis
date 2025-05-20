import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { referralsUpdateWithoutReferredInputSchema } from './referralsUpdateWithoutReferredInputSchema';
import { referralsUncheckedUpdateWithoutReferredInputSchema } from './referralsUncheckedUpdateWithoutReferredInputSchema';

export const referralsUpdateToOneWithWhereWithoutReferredInputSchema: z.ZodType<Prisma.referralsUpdateToOneWithWhereWithoutReferredInput> = z.object({
  where: z.lazy(() => referralsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => referralsUpdateWithoutReferredInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutReferredInputSchema) ]),
}).strict();

export default referralsUpdateToOneWithWhereWithoutReferredInputSchema;
