import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateWithoutCreditsInputSchema } from './referralsCreateWithoutCreditsInputSchema';
import { referralsUncheckedCreateWithoutCreditsInputSchema } from './referralsUncheckedCreateWithoutCreditsInputSchema';
import { referralsCreateOrConnectWithoutCreditsInputSchema } from './referralsCreateOrConnectWithoutCreditsInputSchema';
import { referralsUpsertWithoutCreditsInputSchema } from './referralsUpsertWithoutCreditsInputSchema';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { referralsWhereUniqueInputSchema } from './referralsWhereUniqueInputSchema';
import { referralsUpdateToOneWithWhereWithoutCreditsInputSchema } from './referralsUpdateToOneWithWhereWithoutCreditsInputSchema';
import { referralsUpdateWithoutCreditsInputSchema } from './referralsUpdateWithoutCreditsInputSchema';
import { referralsUncheckedUpdateWithoutCreditsInputSchema } from './referralsUncheckedUpdateWithoutCreditsInputSchema';

export const referralsUpdateOneWithoutCreditsNestedInputSchema: z.ZodType<Prisma.referralsUpdateOneWithoutCreditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => referralsCreateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedCreateWithoutCreditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => referralsCreateOrConnectWithoutCreditsInputSchema).optional(),
  upsert: z.lazy(() => referralsUpsertWithoutCreditsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => referralsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => referralsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => referralsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => referralsUpdateToOneWithWhereWithoutCreditsInputSchema),z.lazy(() => referralsUpdateWithoutCreditsInputSchema),z.lazy(() => referralsUncheckedUpdateWithoutCreditsInputSchema) ]).optional(),
}).strict();

export default referralsUpdateOneWithoutCreditsNestedInputSchema;
