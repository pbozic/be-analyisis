import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsCreateManyMunicipalityInputSchema } from './settlementsCreateManyMunicipalityInputSchema';

export const settlementsCreateManyMunicipalityInputEnvelopeSchema: z.ZodType<Prisma.settlementsCreateManyMunicipalityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => settlementsCreateManyMunicipalityInputSchema),z.lazy(() => settlementsCreateManyMunicipalityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default settlementsCreateManyMunicipalityInputEnvelopeSchema;
