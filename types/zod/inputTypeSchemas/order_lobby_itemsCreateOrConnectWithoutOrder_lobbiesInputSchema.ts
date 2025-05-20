import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsWhereUniqueInputSchema } from './order_lobby_itemsWhereUniqueInputSchema';
import { order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema';

export const order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInput> = z.object({
  where: z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema) ]),
}).strict();

export default order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema;
