import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema } from './order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema';
import { order_lobby_itemsWhereUniqueInputSchema } from './order_lobby_itemsWhereUniqueInputSchema';

export const order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInput> = z.object({
  create: z.union([ z.lazy(() => order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema).array(),z.lazy(() => order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema),z.lazy(() => order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),z.lazy(() => order_lobby_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema;
