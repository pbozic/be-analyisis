import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateManyTranslatableInputSchema } from './promo_sectionsCreateManyTranslatableInputSchema';

export const promo_sectionsCreateManyTranslatableInputEnvelopeSchema: z.ZodType<Prisma.promo_sectionsCreateManyTranslatableInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => promo_sectionsCreateManyTranslatableInputSchema),z.lazy(() => promo_sectionsCreateManyTranslatableInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default promo_sectionsCreateManyTranslatableInputEnvelopeSchema;
