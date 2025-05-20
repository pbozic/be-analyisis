import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateManyMunicipalitiesInputSchema } from './driver_municipalitiesCreateManyMunicipalitiesInputSchema';

export const driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema: z.ZodType<Prisma.driver_municipalitiesCreateManyMunicipalitiesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => driver_municipalitiesCreateManyMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesCreateManyMunicipalitiesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema;
