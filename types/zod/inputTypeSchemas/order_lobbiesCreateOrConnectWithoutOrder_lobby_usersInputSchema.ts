import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema';

export const order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInput> = z.object({
  where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_usersInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema) ]),
}).strict();

export default order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema;
