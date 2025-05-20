import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateManyWallet_fundsInputSchema } from './transactionsCreateManyWallet_fundsInputSchema';

export const transactionsCreateManyWallet_fundsInputEnvelopeSchema: z.ZodType<Prisma.transactionsCreateManyWallet_fundsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => transactionsCreateManyWallet_fundsInputSchema),z.lazy(() => transactionsCreateManyWallet_fundsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default transactionsCreateManyWallet_fundsInputEnvelopeSchema;
