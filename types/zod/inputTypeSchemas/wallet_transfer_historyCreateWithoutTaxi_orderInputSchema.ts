import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateNestedOneWithoutWallet_transferInputSchema } from './delivery_ordersCreateNestedOneWithoutWallet_transferInputSchema';

export const wallet_transfer_historyCreateWithoutTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyCreateWithoutTaxi_orderInput> = z.object({
  wallet_transfer_history_id: z.string().uuid().optional(),
  amount: z.number(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  success: z.boolean(),
  delivery_order: z.lazy(() => delivery_ordersCreateNestedOneWithoutWallet_transferInputSchema).optional()
}).strict();

export default wallet_transfer_historyCreateWithoutTaxi_orderInputSchema;
