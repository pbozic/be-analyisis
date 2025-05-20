import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema } from './order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema } from './order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersScalarWhereInputSchema } from './order_lobby_usersScalarWhereInputSchema';

export const order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesNestedInputSchema: z.ZodType<Prisma.order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => order_lobby_usersCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersCreateWithoutOrder_lobbiesInputSchema).array(),z.lazy(() => order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => order_lobby_usersWhereUniqueInputSchema),z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => order_lobby_usersScalarWhereInputSchema),z.lazy(() => order_lobby_usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesNestedInputSchema;
