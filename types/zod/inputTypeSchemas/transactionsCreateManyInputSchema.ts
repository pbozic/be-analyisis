import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';

export const transactionsCreateManyInputSchema: z.ZodType<Prisma.transactionsCreateManyInput> = z.object({
  transaction_id: z.string().uuid().optional(),
  user_id: z.string(),
  amount: z.number(),
  type: z.lazy(() => TRANSACTION_TYPESchema),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  delivery_order_id: z.string().optional().nullable(),
  taxi_order_id: z.string().optional().nullable(),
  wallet_fund_id: z.string().optional().nullable()
}).strict();

export default transactionsCreateManyInputSchema;
