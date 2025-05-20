import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema';

export const driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInput> = z.object({
  where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => driver_municipalitiesUpdateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUncheckedUpdateWithoutMunicipalitiesInputSchema) ]),
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema) ]),
}).strict();

export default driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema;
