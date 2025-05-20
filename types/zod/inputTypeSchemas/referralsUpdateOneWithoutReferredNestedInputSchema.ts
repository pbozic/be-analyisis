import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutReferredInputSchema } from './referralsCreateWithoutReferredInputSchema';
import { referralsUncheckedCreateWithoutReferredInputSchema } from './referralsUncheckedCreateWithoutReferredInputSchema';
import { referralsCreateOrConnectWithoutReferredInputSchema } from './referralsCreateOrConnectWithoutReferredInputSchema';
import { referralsUpsertWithoutReferredInputSchema } from './referralsUpsertWithoutReferredInputSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsUpdateToOneWithWhereWithoutReferredInputSchema } from './referralsUpdateToOneWithWhereWithoutReferredInputSchema';
import { referralsUpdateWithoutReferredInputSchema } from './referralsUpdateWithoutReferredInputSchema';
import { referralsUncheckedUpdateWithoutReferredInputSchema } from './referralsUncheckedUpdateWithoutReferredInputSchema';

export const referralsUpdateOneWithoutReferredNestedInputSchema: z.ZodType<Prisma.referralsUpdateOneWithoutReferredNestedInput> = z.object({
  create: z.union([ z.lazy(() => referralsCreateWithoutReferredInputSchema),z.lazy(() => referralsUncheckedCreateWithoutReferredInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => referralsCreateOrConnectWithoutReferredInputSchema).optional(),
  upsert: z.lazy(() => referralsUpsertWithoutReferredInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => referralsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => referralsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => referralsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => referralsUpdateToOneWithWhereWithoutReferredInputSchema),z.lazy(() => referralsUpdateWithoutReferredInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutReferredInputSchema) ]).optional(),
}).strict();

export default referralsUpdateOneWithoutReferredNestedInputSchema;
