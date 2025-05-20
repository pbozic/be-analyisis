import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema } from './order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema';

export const order_lobby_usersUpdateWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateWithoutUsersInput> = z.object({
  order_lobby_users_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_lobbies: z.lazy(() => order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema).optional()
}).strict();

export default order_lobby_usersUpdateWithoutUsersInputSchema;
