import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateManyReferralInputSchema } from './wallet_fundsCreateManyReferralInputSchema';

export const wallet_fundsCreateManyReferralInputEnvelopeSchema: z.ZodType<Prisma.wallet_fundsCreateManyReferralInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => wallet_fundsCreateManyReferralInputSchema),z.lazy(() => wallet_fundsCreateManyReferralInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default wallet_fundsCreateManyReferralInputEnvelopeSchema;
