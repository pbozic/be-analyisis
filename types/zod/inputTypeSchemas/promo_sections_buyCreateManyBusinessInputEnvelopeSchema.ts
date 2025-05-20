import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateManyBusinessInputSchema } from './promo_sections_buyCreateManyBusinessInputSchema';

export const promo_sections_buyCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.promo_sections_buyCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => promo_sections_buyCreateManyBusinessInputSchema),z.lazy(() => promo_sections_buyCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default promo_sections_buyCreateManyBusinessInputEnvelopeSchema;
