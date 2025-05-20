import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsCreateWithoutBusinessInputSchema } from './business_teamsCreateWithoutBusinessInputSchema';
import { business_teamsUncheckedCreateWithoutBusinessInputSchema } from './business_teamsUncheckedCreateWithoutBusinessInputSchema';
import { business_teamsCreateOrConnectWithoutBusinessInputSchema } from './business_teamsCreateOrConnectWithoutBusinessInputSchema';
import { business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { business_teamsCreateManyBusinessInputEnvelopeSchema } from './business_teamsCreateManyBusinessInputEnvelopeSchema';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { business_teamsUpdateManyWithWhereWithoutBusinessInputSchema } from './business_teamsUpdateManyWithWhereWithoutBusinessInputSchema';
import { business_teamsScalarWhereInputSchema } from './business_teamsScalarWhereInputSchema';

export const business_teamsUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.business_teamsUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => business_teamsCreateWithoutBusinessInputSchema),z.lazy(() => business_teamsCreateWithoutBusinessInputSchema).array(),z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => business_teamsUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_teamsCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => business_teamsCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => business_teamsUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_teamsCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => business_teamsWhereUniqueInputSchema),z.lazy(() => business_teamsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => business_teamsWhereUniqueInputSchema),z.lazy(() => business_teamsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => business_teamsWhereUniqueInputSchema),z.lazy(() => business_teamsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => business_teamsWhereUniqueInputSchema),z.lazy(() => business_teamsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => business_teamsUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => business_teamsUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => business_teamsUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => business_teamsScalarWhereInputSchema),z.lazy(() => business_teamsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default business_teamsUncheckedUpdateManyWithoutBusinessNestedInputSchema;
