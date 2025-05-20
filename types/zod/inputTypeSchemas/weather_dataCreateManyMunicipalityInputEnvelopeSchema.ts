import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateManyMunicipalityInputSchema } from './weather_dataCreateManyMunicipalityInputSchema';

export const weather_dataCreateManyMunicipalityInputEnvelopeSchema: z.ZodType<Prisma.weather_dataCreateManyMunicipalityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => weather_dataCreateManyMunicipalityInputSchema),z.lazy(() => weather_dataCreateManyMunicipalityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default weather_dataCreateManyMunicipalityInputEnvelopeSchema;
