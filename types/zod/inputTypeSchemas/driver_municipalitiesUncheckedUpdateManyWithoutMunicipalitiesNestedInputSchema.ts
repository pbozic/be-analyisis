import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema } from './driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema } from './driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema } from './driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema';
import { driver_municipalitiesScalarWhereInputSchema } from './driver_municipalitiesScalarWhereInputSchema';

export const driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesNestedInputSchema: z.ZodType<Prisma.driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesCreateWithoutMunicipalitiesInputSchema).array(),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutMunicipalitiesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesCreateOrConnectWithoutMunicipalitiesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUpsertWithWhereUniqueWithoutMunicipalitiesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => driver_municipalitiesCreateManyMunicipalitiesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),z.lazy(() => driver_municipalitiesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUpdateWithWhereUniqueWithoutMunicipalitiesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema),z.lazy(() => driver_municipalitiesUpdateManyWithWhereWithoutMunicipalitiesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => driver_municipalitiesScalarWhereInputSchema),z.lazy(() => driver_municipalitiesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default driver_municipalitiesUncheckedUpdateManyWithoutMunicipalitiesNestedInputSchema;
