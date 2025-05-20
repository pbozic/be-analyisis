import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersScalarWhereInputSchema } from './order_lobby_usersScalarWhereInputSchema';
import { order_lobby_usersUpdateManyMutationInputSchema } from './order_lobby_usersUpdateManyMutationInputSchema';
import { order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesInputSchema';

export const order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInput> = z.object({
  where: z.lazy(() => order_lobby_usersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => order_lobby_usersUpdateManyMutationInputSchema),z.lazy(() => order_lobby_usersUncheckedUpdateManyWithoutOrder_lobbiesInputSchema) ]),
}).strict();

export default order_lobby_usersUpdateManyWithWhereWithoutOrder_lobbiesInputSchema;
