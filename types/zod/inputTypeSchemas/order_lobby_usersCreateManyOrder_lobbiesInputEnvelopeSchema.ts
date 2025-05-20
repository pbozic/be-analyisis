import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateManyOrder_lobbiesInputSchema } from './order_lobby_usersCreateManyOrder_lobbiesInputSchema';

export const order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema: z.ZodType<Prisma.order_lobby_usersCreateManyOrder_lobbiesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => order_lobby_usersCreateManyOrder_lobbiesInputSchema),z.lazy(() => order_lobby_usersCreateManyOrder_lobbiesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema;
