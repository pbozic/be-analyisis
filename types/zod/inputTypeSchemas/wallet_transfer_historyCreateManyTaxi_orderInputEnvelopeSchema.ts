import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateManyTaxi_orderInputSchema } from './wallet_transfer_historyCreateManyTaxi_orderInputSchema';

export const wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema: z.ZodType<Prisma.wallet_transfer_historyCreateManyTaxi_orderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => wallet_transfer_historyCreateManyTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateManyTaxi_orderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema;
