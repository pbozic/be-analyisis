import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema';

export const order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema: z.ZodType<Prisma.order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInput> = z.object({
  where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema) ]),
}).strict();

export default order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema;
