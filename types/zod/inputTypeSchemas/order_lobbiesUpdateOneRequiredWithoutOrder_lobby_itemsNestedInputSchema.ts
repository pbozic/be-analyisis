import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUpsertWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUpsertWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema';

export const order_lobbiesUpdateOneRequiredWithoutOrder_lobby_itemsNestedInputSchema: z.ZodType<Prisma.order_lobbiesUpdateOneRequiredWithoutOrder_lobby_itemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema).optional(),
  upsert: z.lazy(() => order_lobbiesUpsertWithoutOrder_lobby_itemsInputSchema).optional(),
  connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_itemsInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_itemsInputSchema) ]).optional(),
}).strict();

export default order_lobbiesUpdateOneRequiredWithoutOrder_lobby_itemsNestedInputSchema;
