import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema';

export const order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInputSchema: z.ZodType<Prisma.order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInput> = z.object({
  where: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema) ]),
}).strict();

export default order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInputSchema;
