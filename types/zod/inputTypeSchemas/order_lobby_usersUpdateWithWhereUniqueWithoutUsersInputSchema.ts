import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithoutUsersInputSchema } from './order_lobby_usersUpdateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedUpdateWithoutUsersInputSchema } from './order_lobby_usersUncheckedUpdateWithoutUsersInputSchema';

export const order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => order_lobby_usersUpdateWithoutUsersInputSchema),z.lazy(() => order_lobby_usersUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default order_lobby_usersUpdateWithWhereUniqueWithoutUsersInputSchema;
