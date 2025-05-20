import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema';

export const driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInput> = z.object({
  where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema) ]),
}).strict();

export default driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema;
