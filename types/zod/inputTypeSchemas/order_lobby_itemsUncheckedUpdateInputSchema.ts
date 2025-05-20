import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { order_lobby_itemsUpdatesidesInputSchema } from './order_lobby_itemsUpdatesidesInputSchema';
import { order_lobby_itemsUpdateextrasInputSchema } from './order_lobby_itemsUpdateextrasInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const order_lobby_itemsUncheckedUpdateInputSchema: z.ZodType<Prisma.order_lobby_itemsUncheckedUpdateInput> = z.object({
  order_lobby_items_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_lobbies_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menu_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sides: z.union([ z.lazy(() => order_lobby_itemsUpdatesidesInputSchema),z.string().array() ]).optional(),
  extras: z.union([ z.lazy(() => order_lobby_itemsUpdateextrasInputSchema),z.string().array() ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customer_note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default order_lobby_itemsUncheckedUpdateInputSchema;
