import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutReferrerInputSchema } from './referralsCreateWithoutReferrerInputSchema';
import { referralsUncheckedCreateWithoutReferrerInputSchema } from './referralsUncheckedCreateWithoutReferrerInputSchema';
import { referralsCreateOrConnectWithoutReferrerInputSchema } from './referralsCreateOrConnectWithoutReferrerInputSchema';
import { referralsCreateManyReferrerInputEnvelopeSchema } from './referralsCreateManyReferrerInputEnvelopeSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';

export const referralsCreateNestedManyWithoutReferrerInputSchema: z.ZodType<Prisma.referralsCreateNestedManyWithoutReferrerInput> = z.object({
  create: z.union([ z.lazy(() => referralsCreateWithoutReferrerInputSchema),z.lazy(() => referralsCreateWithoutReferrerInputSchema).array(),z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema),z.lazy(() => referralsUncheckedCreateWithoutReferrerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => referralsCreateOrConnectWithoutReferrerInputSchema),z.lazy(() => referralsCreateOrConnectWithoutReferrerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => referralsCreateManyReferrerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => referralsWhereUniqueInputSchema),z.lazy(() => referralsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default referralsCreateNestedManyWithoutReferrerInputSchema;
