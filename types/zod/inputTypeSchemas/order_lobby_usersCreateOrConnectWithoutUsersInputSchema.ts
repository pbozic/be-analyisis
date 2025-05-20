import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersCreateWithoutUsersInputSchema } from './order_lobby_usersCreateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedCreateWithoutUsersInputSchema } from './order_lobby_usersUncheckedCreateWithoutUsersInputSchema';

export const order_lobby_usersCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default order_lobby_usersCreateOrConnectWithoutUsersInputSchema;
