import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema';

export const order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInput> = z.object({
  where: z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema) ]),
}).strict();

export default order_lobby_usersUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema;
