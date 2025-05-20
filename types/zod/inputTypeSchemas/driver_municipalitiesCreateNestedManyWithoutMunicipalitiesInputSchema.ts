import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema } from './driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';

export const driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInput> = z.object({
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema).array(),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default driver_municipalitiesCreateNestedManyWithoutMunicipalitiesInputSchema;
