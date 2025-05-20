import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const order_lobbiesUpsertWithoutOrder_lobby_itemsInputSchema: z.ZodType<Prisma.order_lobbiesUpsertWithoutOrder_lobby_itemsInput> = z.object({
  update: z.union([ z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema) ]),
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema) ]),
  where: z.lazy(() => order_lobbiesWhereInputSchema).optional()
}).strict();

export default order_lobbiesUpsertWithoutOrder_lobby_itemsInputSchema;
