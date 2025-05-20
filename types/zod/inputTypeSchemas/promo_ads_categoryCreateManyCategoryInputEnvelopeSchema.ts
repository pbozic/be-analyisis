import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateManyCategoryInputSchema } from './promo_ads_categoryCreateManyCategoryInputSchema';

export const promo_ads_categoryCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.promo_ads_categoryCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => promo_ads_categoryCreateManyCategoryInputSchema),z.lazy(() => promo_ads_categoryCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default promo_ads_categoryCreateManyCategoryInputEnvelopeSchema;
