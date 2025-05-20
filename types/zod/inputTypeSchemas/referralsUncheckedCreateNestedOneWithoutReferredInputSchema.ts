import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutReferredInputSchema } from './referralsCreateWithoutReferredInputSchema';
import { referralsUncheckedCreateWithoutReferredInputSchema } from './referralsUncheckedCreateWithoutReferredInputSchema';
import { referralsCreateOrConnectWithoutReferredInputSchema } from './referralsCreateOrConnectWithoutReferredInputSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';

export const referralsUncheckedCreateNestedOneWithoutReferredInputSchema: z.ZodType<Prisma.referralsUncheckedCreateNestedOneWithoutReferredInput> = z.object({
  create: z.union([ z.lazy(() => referralsCreateWithoutReferredInputSchema),z.lazy(() => referralsUncheckedCreateWithoutReferredInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => referralsCreateOrConnectWithoutReferredInputSchema).optional(),
  connect: z.lazy(() => referralsWhereUniqueInputSchema).optional()
}).strict();

export default referralsUncheckedCreateNestedOneWithoutReferredInputSchema;
