import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutUsersInputSchema } from './business_usersCreateWithoutUsersInputSchema';
import { business_usersUncheckedCreateWithoutUsersInputSchema } from './business_usersUncheckedCreateWithoutUsersInputSchema';
import { business_usersCreateOrConnectWithoutUsersInputSchema } from './business_usersCreateOrConnectWithoutUsersInputSchema';
import { business_usersUpsertWithWhereUniqueWithoutUsersInputSchema } from './business_usersUpsertWithWhereUniqueWithoutUsersInputSchema';
import { business_usersCreateManyUsersInputEnvelopeSchema } from './business_usersCreateManyUsersInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithWhereUniqueWithoutUsersInputSchema } from './business_usersUpdateWithWhereUniqueWithoutUsersInputSchema';
import { business_usersUpdateManyWithWhereWithoutUsersInputSchema } from './business_usersUpdateManyWithWhereWithoutUsersInputSchema';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';

export const business_usersUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.business_usersUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => business_usersCreateWithoutUsersInputSchema),z.lazy(() => business_usersCreateWithoutUsersInputSchema).array(),z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => business_usersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => business_usersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => business_usersUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => business_usersUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => business_usersCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => business_usersWhereUniqueInputSchema),z.lazy(() => business_usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => business_usersUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => business_usersUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => business_usersUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => business_usersUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => business_usersScalarWhereInputSchema),z.lazy(() => business_usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default business_usersUncheckedUpdateManyWithoutUsersNestedInputSchema;
