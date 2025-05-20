import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { taxi_ordersCreateNestedOneWithoutTransactionsInputSchema } from './taxi_ordersCreateNestedOneWithoutTransactionsInputSchema';
import { usersCreateNestedOneWithoutTransactionsInputSchema } from './usersCreateNestedOneWithoutTransactionsInputSchema';
import { documentsCreateNestedManyWithoutTransactionsInputSchema } from './documentsCreateNestedManyWithoutTransactionsInputSchema';
import { wallet_fundsCreateNestedOneWithoutTransactionsInputSchema } from './wallet_fundsCreateNestedOneWithoutTransactionsInputSchema';

export const transactionsCreateWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsCreateWithoutDelivery_orderInput> = z.object({
  transaction_id: z.string().uuid().optional(),
  amount: z.number(),
  type: z.lazy(() => TRANSACTION_TYPESchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  taxi_order: z.lazy(() => taxi_ordersCreateNestedOneWithoutTransactionsInputSchema).optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutTransactionsInputSchema),
  documents: z.lazy(() => documentsCreateNestedManyWithoutTransactionsInputSchema).optional(),
  wallet_funds: z.lazy(() => wallet_fundsCreateNestedOneWithoutTransactionsInputSchema).optional()
}).strict();

export default transactionsCreateWithoutDelivery_orderInputSchema;
