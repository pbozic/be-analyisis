import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateWithoutUsersInputSchema } from './order_lobby_usersCreateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedCreateWithoutUsersInputSchema } from './order_lobby_usersUncheckedCreateWithoutUsersInputSchema';
import { order_lobby_usersCreateOrConnectWithoutUsersInputSchema } from './order_lobby_usersCreateOrConnectWithoutUsersInputSchema';
import { order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema } from './order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema';
import { order_lobby_usersCreateManyUsersInputEnvelopeSchema } from './order_lobby_usersCreateManyUsersInputEnvelopeSchema';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema } from './order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema';
import { order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema } from './order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema';
import { order_lobby_usersScalarWhereInputSchema } from './order_lobby_usersScalarWhereInputSchema';

export const order_lobby_usersUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema),z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema).array(),z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => order_lobby_usersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => order_lobby_usersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => order_lobby_usersCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => order_lobby_usersScalarWhereInputSchema),z.lazy(() => order_lobby_usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default order_lobby_usersUpdateManyWithoutUsersNestedInputSchema;
