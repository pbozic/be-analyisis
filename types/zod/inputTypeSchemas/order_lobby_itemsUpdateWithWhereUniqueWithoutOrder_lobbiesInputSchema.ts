import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsWhereUniqueInputSchema } from './order_lobby_itemsWhereUniqueInputSchema';
import { order_lobby_itemsUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUpdateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedUpdateWithoutOrder_lobbiesInputSchema';

export const order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInput> = z.object({
  where: z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => order_lobby_itemsUpdateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_itemsUncheckedUpdateWithoutOrder_lobbiesInputSchema) ]),
}).strict();

export default order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema;
